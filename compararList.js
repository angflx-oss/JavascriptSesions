//.every() comparar listas

const array = [4,6,7,8,3,6,2,1,-4,-7,12,5,-40];

array.every(valor => {
    if(valor > 0){
        return true
    }
    else {
        return false
    }
})

const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]

//las listas se pueden comparar solo con every

const compararArrays = (array_1, array_2) => {
    if(array_1.lenght !== array_2.lenght) return false
    const res = array_1.every((valor, i) => {
        if(valor === array2[i]) return true
        return false
    })
}