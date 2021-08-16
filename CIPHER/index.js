import cipher from './cipher.js';


//console.log(cipher)

const btn1 =document.getElementById("boton1");
btn1.addEventListener("click", function(){
    let string = document.getElementById("mensaje1").value.toUpperCase();
    let offset = document.getElementById("desplazar").value;
    let mensaje  = cipher.encode(offset, string);


    document.getElementById('mensaje2').value = mensaje;

})

const btn2 =document.getElementById("boton2");
btn2.addEventListener("click",function(){

    let string = document.getElementById("mensaje1").value.toUpperCase();
    let offset = document.getElementById("desplazar").value;
    let mensaje  = cipher.decode(offset, string);
    document.getElementById('mensaje2').value = mensaje;

} )
 
