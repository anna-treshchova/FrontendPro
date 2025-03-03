function removeElement(array, item) {
    const index = array.indexOf(item);

    index !== -1 ?  array.splice(index, 1) : console.log(`The element ${item} is already missing from the list`);
}

const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array,4);

console.log(array);

