//sets

const array = [1,2,3,4,5];

const miSet = new Set(array);
console.log(array);

//no permiten almcaenar valores que ya existen

miSet.add(10);
console.log(miSet);

miSet.delete(10)
console.log(miSet);

console.log(miSet.has(5))

console.log(miSet.size)

miSet.forEach(valor => {
    console.log(valor);
})

miSet.clear();
console.log(miSet);

