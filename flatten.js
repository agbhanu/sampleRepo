var obj={};
var arr=[];
console.log(obj instanceof Object);
console.log(arr instanceof Array);

var ob = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }


var ob1 = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }

var ob2 = {
    "p1": {"p4":"value4","p5":"value5"},
    "p2": {"b":{"c":1}},
    "p3": [{"a":1},{"b":2}]
};

function flattenObject(ob){

    var flattenObj = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((ob[i] instanceof Object)) {
            let flatObject = flattenObject(ob[i]);
            for (let x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                flattenObj[i + '.' + x] = flatObject[x];
            }
        }

        else if(ob[i] instanceof Array){
            for(var index=0;i<ob[i].length;i++){
                if(ob[i][index] instanceof Object){
                    let flatObject = flattenObject(ob[i][index]);
                    for (let x in flatObject) {
                        if (!flatObject.hasOwnProperty(x)) continue;

                        flattenObj[i + '.' + x] = flatObject[x];
                    }
                }
                else{
                    flattenObj[i + '.' + index] = ob[i][index];
                }
            }
        }

        else {
            flattenObj[i] = ob[i];
        }
    }
    return flattenObj;
}

console.log(flattenObject(ob));