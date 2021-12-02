
function trivia() {
    var nombre = document.getElementById("nombre").value;
    window.location = 'trivia1.html?nombre='+nombre;
  }
  
  function evaluar(){
    var correctas = ["c","a","a"];
    var usuario =new Array();
    var respuestasPreguntas = new Array();
    var aciertos =0;
    var erradas = 0;  
    for (var i=0; i<4;i++){
      respuestasPreguntas = document.getElementsByName("p"+(i+1));
      for (var j = 0; j <= 2; j++){      
         if (respuestasPreguntas[j] && respuestasPreguntas[j].checked==true){         
           usuario[i] = respuestasPreguntas[j].value;
           if(respuestasPreguntas[j].value==correctas[i]){           
             aciertos++;
           }else{           
             erradas++;
           }
         }
      }
    }
  
    window.alert("¡Felicidades! Tuviste "+aciertos+" Respuesta(s) correcta(s) y "+erradas+" Respuesta(s) incorrecta(s)");
  
  }