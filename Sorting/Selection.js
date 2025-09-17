function selectionsort(arr){
    let n = arr.length
    
    for(let i=0;i< n-1 ;i++){
        let swapped = false
         let SI = i
         for(let j=i+1 ;j<n;j++){
            if(arr[j]>arr[SI]){
                SI = j
            }

    }
    if(SI !==1){
            let temp = arr[i]
            arr[i] = arr[SI]
            arr[SI] = temp

    }
    
}
return arr
}

let arr = [5, 6, 7, 1, 2, 4];
console.log('Sorted array:', selectionsort(arr));