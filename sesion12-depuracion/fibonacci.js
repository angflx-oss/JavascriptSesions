
function fibonacci(num){
    if(num === 0) return [1];
    if(num === 1) return [1];
    let arraySec = [1,1];

    for(let i = 2; i < num; i++ ){
        arraySec.push(arraySec[i-1] + arraySec[i-2])
    }

    return arraySec;
}

console.log(fibonacci(13));