/*function hscroll(){
    setTimeout(function(){ 
        window.scrollBy(0,-100); }, 50);
    */
}

 function hscroll(){
     var pos=0;
     var id =setInterval(anime,10);
     function anime(){
         if(pos==-100)
         {
             clearInterval(id);
         }
         else{
             pos--;
             window.scrollBy(0,pos);
         }
     }
 }