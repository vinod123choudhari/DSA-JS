function QuickSort(arr){
    if(arr.length<=1){
       return arr
    }

    let pivot = arr[Math.floor(arr.length/2)]


    let left = []
    let right = []
    let equal = []

    for (let i =0 ;i< arr.length;i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]); 
        }
    }
return QuickSort(left).concat(equal, QuickSort(right));
}

let arr = [5, 6, 7, 1, 2, 4];
console.log('Sorted array:', QuickSort(arr));