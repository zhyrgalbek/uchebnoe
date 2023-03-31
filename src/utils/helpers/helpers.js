import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// &institution_type_id=5&institution_type_id=7&institution_type_id=8&institution_type_id=9&institution_type_id=18&institution_type_id=19&institution_type_id=20&institution_type_id=21&institution_type_id=23
export function getRequestFilter(requestFilter, areas, activeFilterType) {
    let obj = { typeId: '', type: '', view: '', sector: '', fullness: { from: '', to: '' } };
    // console.log(activeFilterType)
    requestFilter.forEach((elem) => {
        if (elem.type === 'fullness') {
            obj[elem.type].from = elem.fromValue;
            obj[elem.type].to = elem.toValue;
            return;
        }
        obj[elem.type] = elem.value;
    })
    let { typeId, type, view, sector, fullness } = obj;
    let institution_types = `&institution_type_id=${typeId}`;
    let other = `&noneTypes=%5B1,2%5D`
    if (typeId === 'other' && activeFilterType === 'typeId') {
        institution_types = other;
    }
    if (typeId === 'all' && activeFilterType === 'typeId') {
        institution_types = ``;
    }
    if (activeFilterType === 'type') {
        institution_types = `&institution_type_id=${type}`;
    }
    if (activeFilterType === 'view') {
        institution_types = `&institution_view_id=${view}`;
    }
    let requestOblast = ``
    if (requestFilter[0].value !== '') {
        let arr = areas.map(elem => {
            return elem.id;
        })
        requestOblast = `area_ids=[${arr}]`;
    }
    if (requestFilter[1].value !== '') {
        requestOblast = `area_id=${requestFilter[1].value}`;
    }
    if (requestFilter[2].value !== '') {
        requestOblast = `area_aimak_id=${requestFilter[2].value}`;
    }
    return {
        requestOblast,
        institution_types,
        sector,
        fullness
    }
}

export function getToastify({ text, variant }) {
    <ToastContainer />
}