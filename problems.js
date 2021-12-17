//https://www.codewars.com/kata/569df0bc5565b243d500002b
function findUs(n1, n2, k, factors, digits) {
    const [min, max] = [n1, n1 + k * n2], result = [];
    const inout = function(num, arr) {
        for(let key of arr) {
            if( !new RegExp(`${key}`).test(String(num)) ) {
                return false;
            }
        }
        return true;
    }
    next:
        for(let i = min; i <= max; i++) {
            for(let j = 0; j < factors.length; j++) {
                if(i % factors[j] || !inout(i, digits)) continue next;
            }
            result.push(i);
        }
    return result;
}

//https://www.codewars.com/kata/5a5cdb07fd56cbdd3c00005b
function findDupsMiss(arr) {
    let notRepeat = new Set(arr);
    let sum = (Math.min(...notRepeat) + Math.max(...notRepeat)) * (notRepeat.size + 1) / 2;
    let misNum = sum - [...notRepeat].reduce((a, b) => a + b);
    let allRepeat = arr.sort((a, b) => a - b).filter((el, i, list) => list[i] === list[i + 1]);
    return [misNum, allRepeat];
}