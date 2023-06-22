// 1. WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], 
// without sorting, without using any built-in methods and without deleting duplicate elements. 
// What will be the time complexity?


let a = [12, 35, 1, 10, 33, 1, 35];

// let highNo = a[0];

function findSecondLargest(a){
    highNo = a[0]
    secondHeighest = -1
    for (let i = 0 ; i<=a.length; i++){
        if(highNo< a[i]){
            secondHeighest = highNo
            highNo= a[i]
        }
        if (a[i] != highNo && a[i]>secondHeighest){
            secondHeighest = a[i]
        }
    }
    return secondHeighest
}


const res = findSecondLargest(a)
console.log(res)
