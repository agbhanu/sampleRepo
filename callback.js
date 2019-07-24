    function add(a, b , fun){ 
    console.log("sum of %d and %d is %d",a,b,a+b); 
    fun();
    } 
        
    function disp(){ 
    console.log('This must be printed after addition'); 
    } 
      
    add(5,6,disp);