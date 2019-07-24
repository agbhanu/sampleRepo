function assign (final, path, value) {
    let lastKeyIndex = path.length - 1;
    for (var i = 0; i < lastKeyIndex; i++) {
      let key = path[i];
      if (!(key in final)) {
        final[key] = /^\d+$/.test(path[i + 1]) ? [] : {};
      }
      final = final[key];
    }
    final[path[lastKeyIndex]] = value;
}

/*function unflatten(flatObject){
    let finalObj={};
    let tempObj={};
    for(let props in flatObject){
        let propsArray = props.split('.');
        tempObj=finalObj;
        for(let index=0;index<propsArray.length-1;++index){
            if(!tempObj.hasOwnProperty(propsArray[index])){
                if(isNaN(propsArray[index+1]))
                    tempObj[propsArray[index]] = {};
                else
                    tempObj[propsArray[index]] = [];
            }
            tempObj=tempObj[propsArray[index]];
        }
        tempObj[propsArray[propsArray.length-1]]=flatObject[props];
        //assign(finalObj,props.split('.'),flatObject[props]);
    }
    console.log(finalObj);
}*/

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
    console.log(unflatObj);
    return unflatObj;
}

/*function unflatten(flatObject) {

    let finalObj = {};
    for(let key in flatObject){
        let keyArray = key.split('.');
        if(keyArray.length>1){
            for(let index in keyArray){
                //if(finalObj.hasOwnProperty(keyArray[index]))

            }
        }
        else{
            finalObj[key]=flatObject[key];
        }
    }
    console.log(finalObj);
}*/


let testObject = { "flatJSON": false, 
"i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree",
"dates.0.day": 1, "dates.1.day": 8947 };
//unflatten(testObject);

let testObj = {"a.b.c.d.e": false, "a.b.c.d.f":true, 
              "ob2":true};
unflatten(testObj);
//console.log(unflatten(testObj));