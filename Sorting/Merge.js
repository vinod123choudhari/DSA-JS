function Meragesort(arr){
    if(arr.length <= 1){
        return arr
    }

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    return Merge(Meragesort(left),Meragesort(right))

    function Merge(left,right){
        let result = []
        let i =0, j=0

        while(i< left.length && j < right.length){
            if(left[i]<right[j]){
                result.push(left[i])
                i++
            }else{
                result.push(right[j])
                j++
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j))
    }

}

let arr = [5, 6, 7, 1, 2, 4];
console.log('Sorted array:', Meragesort(arr));


