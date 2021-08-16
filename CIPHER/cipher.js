   
const cipher = {

  encode:function(offset, string)  {
    
    let mensaje ="";
    let formula= "";
    let codigo = "";
    
  for (let i = 0; i < string.length; i++) {
         
     codigo=string.charCodeAt(i);
  
        if(codigo>=65 && codigo<=90){
          formula = (codigo-65 + parseInt(offset))%26+65
      
        } 
        else if (codigo === 32) {//Respetar espacios
          formula = 32
            //Aplica la formula y sustituye el string vacio
      }else{
        throw TypeError(alert('Caracter invalido'));
      }
    mensaje += String.fromCharCode(formula);
    } 
    if( typeof string!="string"){
      throw TypeError('Valores incorrectos');
    }
  
        return mensaje;
  
    },
  
    decode:function(offset, string) {
  
      let mensaje ="";
      let formula= "";
      let codigo = "";
      
      for (let i = 0; i < string.length; i++) {
  
        codigo = string.charCodeAt(i);
  
        if (codigo>=65 && codigo<=90) {
  
          formula = (codigo+65 - parseInt(offset))%26+65
        
        } else if(codigo === 32) {
          formula = 32
        }else{
          throw TypeError(alert('Caracter invalido'));
        }
      
    mensaje +=String.fromCharCode(formula);
    }
      if( typeof string!="string"){
        throw TypeError('Valores incorrectos');
      }
    return mensaje;
  }
  
  
  };
  
  export default cipher;
  
  
  
     