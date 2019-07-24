//Declaring class  
class Employee  
  {  

    constructor(){
        this.id;
        this.name;
    }
    

    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
  }  
//passing object to a variable   

var e1=new Employee();  
var e2=new Employee();  
e1.setName("Bhanu");
console.log(e1.getName());