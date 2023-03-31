import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    occupancyInstitutes: [[], [], [], [], [], []],
    occupancyCols: [],
    institutionsRegions: [],
    maxKnowledgeInstitutions: [],
    maxFreeInstitutions: [],
    generalEducationalQuantity: [],
    preschoolQuantity: [],
    generalEducational: [],
    preschool: []
}

function maxInstitution(institutions) {
    let arr = [];
    institutions.forEach(elem => {
        if (+elem.actual_quantity === 0 || +elem.total_capacity === 0) {
            return;
        }
        if (elem.institution_type_id === '2') {
            arr.push(+elem.fullness);
        }
    })
    let max = Math.max.apply(null, arr);
    let maxInsti = max ? institutions.filter(elem => +elem.fullness === +max) : []
    let newArr = max ? institutions.filter(elem => +elem.fullness !== +max) : []
    return {
        institution: maxInsti.length !== 0 ? maxInsti[0] : undefined,
        newArr
    }
}

function maxFreeInstitution(institutions) {
    let arr = [];
    institutions.forEach(elem => {
        if (+elem.total_capacity !== 0 && +elem.actual_quantity !== 0 && +elem.actual_quantity < +elem.total_capacity && elem.institution_type_id === '2') {
            arr.push(+elem.total_capacity - +elem.actual_quantity)
        }
    })
    let max = Math.max.apply(null, arr);
    let minInsti = max ? institutions.filter(elem => +elem.total_capacity - +elem.actual_quantity === max) : []
    let newArr = max ? institutions.filter(elem => +elem.total_capacity - +elem.actual_quantity !== max) : []
    return {
        institution: minInsti.length !== 0 ? minInsti[0] : undefined,
        newArr
    }
}

function examinationArr(arr) {
    let k = false;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            k = true;
            break;
        }
    }
    if (k) {
        return false;
    } else {
        return true;
    }
}

const analizeSlices = createSlice({
    name: 'analizeSlices',
    initialState,
    reducers: {
        setMaxFreeInstitutions(state, action) {
            const { institutions } = action.payload;
            let maxFree = [];
            let arr = institutions;
            if (arr.length > 5) {
                for (let i = 0; i < 5; i++) {
                    let { institution, newArr } = maxFreeInstitution(arr)
                    if (institution) {
                        maxFree.push(institution);
                    }
                    arr = newArr;
                }
            } else {
                for (let i = 0; i < arr.length; i++) {
                    let { institution, newArr } = maxFreeInstitution(arr)
                    if (institution) {
                        maxFree.push(institution);
                    }
                    arr = newArr;
                }
            }
            let newMaxFree = maxFree.length !== 0 ? maxFree.map(elem => {
                if (elem) {
                    return { ...elem, total_free: +elem.total_capacity - +elem.actual_quantity }
                }
            }) : []
            state.maxFreeInstitutions = newMaxFree
        },
        setMaxKnowledgeInstitutions(state, action) {
            const { institutions } = action.payload;
            let maxElems = [];
            let arr = institutions;
            if (arr.length > 5) {
                for (let i = 0; i < 5; i++) {
                    let { institution, newArr } = maxInstitution(arr)
                    if (institution) {
                        maxElems.push(institution);
                    }
                    arr = newArr;
                }
            } else {
                for (let i = 0; i < arr.length; i++) {
                    let { institution, newArr } = maxInstitution(arr)
                    if (institution) {
                        maxElems.push(institution);
                    }
                    arr = newArr;
                }
            }
            state.maxKnowledgeInstitutions = maxElems;
        },
        setInstitutionsRegions(state, action) {
            const { institutions, areas2, variant, areas, county, regions, county2 } = action.payload
            let newRegions = []
            let ids = [];
            if (variant === 'area_administrative_id') {
                regions.forEach(elem => {
                    newRegions.push({ id: elem.id, name: elem.name, regions: areas.filter(el => el.parent_id === elem.id) })
                })
                newRegions.forEach(el => {
                    el.items = institutions.filter(elem => {
                        let inst = el.regions.find(region_id => region_id.id === elem.area_id && elem.institution_type_id === '2')
                        if (inst) {
                            return elem;
                        }
                    })
                })
                newRegions.forEach(el => {
                    let empoyment = 0;
                    let s = 0;
                    let first_capacity = 0;
                    el.items.forEach((elem) => {
                        if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
                            return;
                        }
                        if (elem.first_class_capacity) {
                            first_capacity += +elem.first_class_capacity
                        }
                        s++;
                        empoyment += +elem.fullness;
                    })
                    el.empoyment = empoyment / s
                    el.first_capacity = first_capacity
                })
            }
            if (variant === 'area_id') {
                areas2.forEach(elem => {
                    newRegions.push({ id: elem.id, name: elem.name, regions: county.filter(el => el.parent_id === elem.id) })
                })
                newRegions.forEach(el => {
                    el.items = institutions.filter(elem => {
                        if (el.regions.length < 2 && elem.area_id === el.id && elem.institution_type_id === '2') {
                            return elem;
                        }
                        let inst = el.regions.find(region_id => region_id.id === elem.area_aimak_id && elem.institution_type_id === '2')
                        if (inst) {
                            return elem;
                        }
                    })
                })
                newRegions.forEach(el => {
                    let empoyment = 0;
                    let s = 0;
                    let first_capacity = 0;
                    el.items.forEach(elem => {
                        if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
                            return;
                        }
                        if (elem.institution_type_id === '2') {
                            if (elem.first_class_capacity) {
                                first_capacity += +elem.first_class_capacity
                            }
                            s++;
                            empoyment += +elem.fullness;
                        }
                    })
                    el.empoyment = empoyment / s
                    el.first_capacity = first_capacity
                })
            }
            if (variant === 'county') {
                county2.forEach(elem => {
                    newRegions.push({ id: elem.id, name: elem.name, regions: elem })
                })
                newRegions.forEach(el => {
                    el.items = institutions.filter(elem => {
                        if (el.regions.length < 2 && elem.area_id === el.id && elem.institution_type_id === '2') {
                            return elem;
                        }
                        if (el.regions.id === elem.area_aimak_id && elem.institution_type_id === '2') {
                            return elem;
                        }
                    })
                })
                newRegions.forEach(el => {
                    let empoyment = 0;
                    let s = 0;
                    let first_capacity = 0;
                    el.items.forEach(elem => {
                        if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
                            return;
                        }
                        if (elem.institution_type_id === '2') {
                            if (elem.first_class_capacity) {
                                first_capacity += +elem.first_class_capacity
                            }
                            s++;
                            empoyment += +elem.fullness;
                        }
                    })
                    el.empoyment = +empoyment / s
                    el.first_capacity = first_capacity
                })
            }
            state.institutionsRegions = newRegions
        },
        setOccupancyInstitutes(state, action) {
            let newArr = [[], [], [], [], [], []]
            const { institutions } = action.payload;
            institutions.forEach((elem, index) => {
                if (elem.institution_type_id === '1' || elem.institution_type_id === '2' || elem.institution_type_id === '23') {
                    if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
                        newArr[5].push({ ...elem })
                        return;
                    }
                    if (elem.fullness >= 0 && elem.fullness <= 62) {
                        newArr[0].push({ ...elem });
                        return;
                    } else if (elem.fullness >= 63 && elem.fullness <= 87) {
                        newArr[1].push({ ...elem });
                        return;
                    } else if (elem.fullness >= 88 && elem.fullness <= 112) {
                        newArr[2].push({ ...elem });
                        return;
                    } else if (elem.fullness >= 113 && elem.fullness <= 137) {
                        newArr[3].push({ ...elem });
                        return;
                    } else if (elem.fullness >= 138) {
                        newArr[4].push({ ...elem });
                        return;
                    }
                }
                return newArr[5].push({ ...elem })
            })
            let generalEducational = newArr.map(elem => {
                return elem.filter(el => {
                    if (el.institution_type_id === '2') {
                        return el;
                    }
                })
            })
            let preschool = newArr.map(elem => {
                return elem.filter(el => {
                    if (el.institution_type_id === '1' || el.institution_type_id === '23') {
                        return el;
                    }
                })
            })
            state.occupancyInstitutes = newArr;
            state.generalEducational = generalEducational
            state.preschool = preschool
            state.generalEducationalQuantity = [generalEducational[0].length, generalEducational[1].length, generalEducational[2].length, generalEducational[3].length, generalEducational[4].length]
            state.preschoolQuantity = [preschool[0].length, preschool[1].length, preschool[2].length, preschool[3].length, preschool[4].length,]
            state.occupancyCols = [newArr[0].length, newArr[1].length, newArr[2].length, newArr[3].length, newArr[4].length]
        }
    }
})

export const analizeSlicesActions = analizeSlices.actions;
export default analizeSlices;