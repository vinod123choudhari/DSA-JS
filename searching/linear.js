function linearsearch(arr,teg){
 
     let n =arr.length
     for(let i=0;i<n-1;i++){
        if( arr[i]=== teg){
            return arr[i]
        }
     }

    return -1
    }
    


let arr=[1,2,3,4,5,6,7,8,9]
let teg = 4

let result = linearsearch(arr,teg)

if(result !== -1){
    console.log("index is found",result)
}else{
    console.log("index not found")
}
