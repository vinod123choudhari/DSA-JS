
    function largestElement(arr) {
      let n = arr.length
      let lar = arr[0]
      let seclargest = -1

      for(let i =1;i<n;i++){
         if(arr[i]>lar){
            lar = arr[i]
         }
      }
     for(let i=0;i<n;i++){
         if(arr[i]>seclargest && arr[i] !=lar){
             seclargest = arr[i]
         }
     }
     return seclargest
    }
    
     function smalestelemnt(arr) {
      let n = arr.length
      let small=arr[0]
      let secsmalest =Infinity

      for(let i =1;i<n;i++){
         if(arr[i]<small){
            small = arr[i]
         }
      }
     for(let i=0;i<n;i++){
         if(arr[i]<secsmalest && arr[i] !=small){
             secsmalest = arr[i]
             
             
         }
     }
     return secsmalest
    }

let arr = [1,2,3,5,5,4]
console.log("The largest elemnt in array is",largestElement(arr))


console.log("The smallest elemnt in array is",smalestelemnt(arr))


