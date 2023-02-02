
export function reverseGet(arr) {
    return arr.map(elem => {
        return elem.reverse();
    })
}

export function glubina(arr) {
    if (arr.filter(i => i.constructor.name === "Array").length != 0) {
        return 1 + glubina([].concat(...arr.filter(i => i.constructor.name === "Array")));
    } else {
        return 0;
    }
}