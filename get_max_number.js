//find max number from an array
const numbers = [23,34,56,78,34,54,63,2,94,34,35,26,76,34,5];

function getMax(number){
    let max = number[0];
    for(const num of number){
        if(num > max){
            max = num
        }
    }
    return max;
}

const maxNumber = getMax(numbers);
// console.log('This is maximum number of this array:', maxNumber)

//find minimum nuber from an array

const numbers2 = [...numbers];
function getMin(number){
    let min = number[0];
    for(const num of number){
       if(num < min ){
        min = num;
       }
    }
    return min;
}


console.log(getMin(numbers2))
