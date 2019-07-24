var string="shali is running fast";
var charFrequency={};

for(let i=0;i<string.length;i++){

    let key=string.charAt(i);
    if(key>='a' && key<='z'){
        if(charFrequency.hasOwnProperty(key)){
            charFrequency[key]++;
        }
        else{
            charFrequency[key]=1;
        }
    }
}
console.log(charFrequency);