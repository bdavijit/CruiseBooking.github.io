// var fistClass = document.getElementById("First");
// var economy = document.getElementById("economy");
var vat = document.getElementById("vat");
var sub = document.getElementById("sub");
var total= document.getElementById("total");


var f_price = 150;


var e_price = 100;

var subtotal = 0, ftotal = 0, fvat;





function total_value(){
    
    ftotal= subtotal+fvat;
    
     

    total.innerHTML = ftotal.toString();
   
}

function vat_value(){
    
    fvat = subtotal*0.1;
    vat.innerHTML = fvat.toString();
    total_value();
   
}

var f = document.getElementById("First").value;
     var f_num = parseInt(f);
     var e = document.getElementById("economy").value;
    
     var e_num = parseInt(e);


function sub_value(){

    // alert(1);
    var f = document.getElementById("First").value;
    var f_num = parseInt(f);
    var e = document.getElementById("economy").value;
   var e_num = parseInt(e);


     console.log( f_num);
     console.log( f_price);
     console.log( e_num);
     console.log( e_price);


     console.log(f_num);
    if(f_num >= 1){
        subtotal =(e_num*e_price) +( f_num*f_price);
     
    // console.log( typeof subtotal);
    // console.log(subtotal);

    sub.innerHTML = subtotal.toString();
    vat_value();
    }
    
  
   
}

function sub_value2(){
    // alert('12');
    var f = document.getElementById("First").value;
    var f_num = parseInt(f);
    var e = document.getElementById("economy").value;
   
    var e_num = parseInt(e);

    console.log( f_num);
     console.log( f_price);
     console.log( e_num);
     console.log( e_price);


    // console.log( typeof e_price);
    //  console.log(e_num);
    if(e_num  >= 1){
        subtotal = subtotal + (e_num*e_price);
    
        // console.log( typeof subtotal);
        // console.log(subtotal);
     
       sub.innerHTML = subtotal.toString();
        vat_value();   
         subtotal =(e_num*e_price) +( f_num*f_price);;
    
//    console.log( typeof subtotal);
//    console.log(subtotal);

  sub.innerHTML = subtotal.toString();
   vat_value();
    }
   


 
}



