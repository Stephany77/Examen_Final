/* Evento Scroll*/
window.addEventListener('scroll',function(){
    let altoPantalla = window.innerHeight;
    let anchoPantalla = window.innerWidth;
    console.log ('el tamaño de pantalla es:'+ altoPantalla);
  
    let scrollRecorido = document.documentElement.scrollTop;
    console.log ('cantidad de scroll' + scrollRecorido);
  
    let listaDep = document.querySelectorAll('#principal article');
    // Aplicar la funcionalidad a cada Detalle, usando el forEach
    listaDep.forEach (function(item, index, listado){
        let alturaArticle = listado[index].offsetTop;
        console.log ('Posicion Superior' + index + '::' + alturaArticle);
        if ((alturaArticle*0.5) < scrollRecorido){
            listado[index].style.display = 'block';
        }
        
    });
    
  });


  

//fecha
document.write(Date());

   