$(document).ready(function() {
           if ($.cookie('janelac') == null) {
		  janela();  
           } 
        });
		
function janela() {
   setTimeout(function() { 
             $('#matr').trigger('click');
            var expires = new Date();
            expires.setMinutes( expires.getMinutes() + 300 );
            $.cookie('janelac', 'abret', { expires: expires });   }, 70000);
   
}		


