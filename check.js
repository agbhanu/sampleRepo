function unflatten(flatObject) {
    let unflatObj={};   //create an empty object
    for(let i in flatObject){
      let arr=i.split('.');   //get property names
      let l=arr.length;
      let temp=unflatObj;   //temp points to unflatObj
      for(let x=0; x<l-1; x++){
        if(!(arr[x] in temp)){   //check existance of property in temp 
          if(isNaN(arr[x+1])){   //check that object property will have an object/array  
            temp[arr[x]]={};
          }
          else {
            temp[arr[x]]=[];
          }
        }
        temp=temp[arr[x]]; //temp reference to property of object
      }
      temp[arr[l-1]]=flatObject[i];  
    }
    return unflatObj;
  }