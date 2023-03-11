import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    occupancyInstitutes: [[], [], [], [], [], []],
    occupancyCols: [],
    institutionsRegions: [],
    maxKnowledgeInstitutions: [],
    maxFreeInstitutions: []
}

function maxInstitution(institutions) {
    let arr = [];
    institutions.forEach(elem => {
        if (+elem.actual_quantity === 0 || +elem.total_capacity === 0) {
            return;
        }
        arr.push(+elem.fullness);
    })
    let max = Math.max.apply(null, arr);
    console.log(max)
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
        if (+elem.total_capacity !== 0 && +elem.actual_quantity !== 0 && +elem.actual_quantity < +elem.total_capacity) {
            arr.push(+elem.total_capacity - +elem.actual_quantity)
        }
    })
    console.log(arr)
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
            console.log(newMaxFree)
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
            console.log(maxElems)
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
                        let inst = el.regions.find(region_id => region_id.id === elem.area_id)
                        if (inst) {
                            return elem;
                        }
                    })
                })
                newRegions.forEach(el => {
                    let empoyment = 0;
                    el.items.forEach((elem) => {
                        if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
                            return;
                        }
                        empoyment += +elem.fullness;
                    })
                    el.empoyment = empoyment / el.items.length
                })
            }
            if (variant === 'area_id') {
                areas2.forEach(elem => {
                    newRegions.push({ id: elem.id, name: elem.name, regions: county.filter(el => el.parent_id === elem.id) })
                })
                newRegions.forEach(el => {
                    el.items = institutions.filter(elem => {
                        if (el.regions.length < 2 && elem.area_id === el.id) {
                            return elem;
                        }
                        let inst = el.regions.find(region_id => region_id.id === elem.area_aimak_id)
                        if (inst) {
                            return elem;
                        }
                    })
                })
                newRegions.forEach(el => {
                    let empoyment = 0;
                    el.items.forEach(elem => {
                        if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
                            return;
                        }
                        empoyment += +elem.fullness;
                    })
                    el.empoyment = empoyment / el.items.length
                })
                console.log(newRegions)
            }
            if (variant === 'county') {
                county2.forEach(elem => {
                    newRegions.push({ id: elem.id, name: elem.name, regions: elem })
                })
                console.log(newRegions)
                newRegions.forEach(el => {
                    el.items = institutions.filter(elem => {
                        if (el.regions.length < 2 && elem.area_id === el.id) {
                            return elem;
                        }
                        if (el.regions.id === elem.area_aimak_id) {
                            return elem;
                        }
                    })
                })
                newRegions.forEach(el => {
                    let empoyment = 0;
                    el.items.forEach(elem => {
                        if (+elem.total_capacity === 0 || +elem.actual_quantity === 0) {
                            return;
                        }
                        empoyment += +elem.fullness;
                    })
                    el.empoyment = +empoyment / +el.items.length
                })
            }
            state.institutionsRegions = newRegions
        },
        setOccupancyInstitutes(state, action) {
            let newArr = [[], [], [], [], [], []]
            const { institutions } = action.payload;
            institutions.forEach((elem, index) => {
                if (elem.institution_type_id === '1' || elem.institution_type_id === '2') {
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
            state.occupancyInstitutes = newArr;
            state.occupancyCols = [newArr[0].length, newArr[1].length, newArr[2].length, newArr[3].length, newArr[4].length]
        }
    }
})

export const analizeSlicesActions = analizeSlices.actions;
export default analizeSlices;