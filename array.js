var emp=new Array("Jai","Vijay","Smith");
emp[3]="Steve";
emp[2]="Hello";
for(var i=0;i<emp.length;i++){
    console.log(emp[i]);
}  


var arr = [5,1,4,2,10,8,6];
var max=Number.MIN_VALUE,sec_max=Number.MIN_VALUE;
for(var i=0;i<arr.length;i++){
    if(max<arr[i]){
        sec_max=max;
        max=arr[i];
    }
    else if(sec_max<arr[i]){
        sec_max=arr[i];
    }
}

console.log("------------------------------------------");
console.log("Second maximum value is:"+sec_max);
console.log("Maximum value:"+max);