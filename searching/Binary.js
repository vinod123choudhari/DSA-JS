function binarysearch(arr,teg){
 
    let st= 0,end=arr.length-1

    while (arr[st]<=arr[end]){
        let mid = Math.floor((st+end)/2)
        if(arr[mid]<teg){
            end = mid-1
        }else if(arr[mid]>teg){
            st=mid+1
        }else{
            return arr[mid]
        }
    }
    return -1
}

let arr=[1,2,3,4,5,6,7,8,9]
let teg = 5

let result = binarysearch(arr,teg)

if(result !== -1){
    console.log("target is found",result)
}else{
    console.log("targe not found")
}
