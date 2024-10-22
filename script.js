// Objective: The objective of this assignment is to create JavaScript functions that receive  an array as argument and perform various operations on it, including finding the maximum number, calculating the sum of all elements, and counting the number of odd numbers.




let array=[4, 8, 2, 11, 6, 7, 10];

function maxNumber(arr){
   console.log (`Maximum number:  ${Math.max(...arr)}`);
}

const SumOfAllElements=(arr)=>{
    let sum=0
    for(let i=0;i<=arr.length-1;i++){
        sum+=arr[i];

    }
    console.log(`Sum of all Elements: ${sum}`);
}

const countOfOddNumbers = function (arr){
    let count =0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]%2!==0){
            count++;

        }
      
    }
    console.log(`Count of odd numbers: ${count}`)
}

maxNumber(array);
SumOfAllElements(array);
countOfOddNumbers(array);