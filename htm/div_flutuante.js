// JavaScript Document

/**********
Floating Top Bar script- © Dynamic Drive (www.dynamicdrive.com)
Sliding routine by Roy Whittle (http://www.javascript-fx.com/)
This notice must stay intact for legal use.
Visit http://www.dynamicdrive.com/ for full source code
***********/
var persistclose=0 // 0 zero faz com que a div apareça ao atualizar e 1 faz com que a div fechada não apareça novamente pro mesmo visitante na mesma página ou session, nem sempre funciona em alguns navegadores
var startX = 670 //set x offset of bar in pixels
var startY = 22 // regule distancia vertical em pixels e escolha a base logo abaixo, Se você usar na base 'frombottom', recomendo usar mínimo de 22 porque se o visitante estiver com a janela reduzida a barra de rolagem de baixo ficará sobre a base 
var verticalpos="frombottom" // use "fromtop" para alinhar ao topo ou "frombottom" para alinhar na base
function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
function get_cookie(Name) {
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) {
offset += search.length
end = document.cookie.indexOf(";", offset);
if (end == -1) end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}
function closebar(){
if (persistclose)
document.cookie="remainclosed=1"
document.getElementById("fixamove").style.visibility="hidden"
}
function staticbar(){
barheight=document.getElementById("fixamove").offsetHeight
var ns = (navigator.appName.indexOf("Netscape") != -1) || window.opera;
var d = document;
/*_posição a direita em offsetadditionx _*/
var offsetadditionx=500
var offsetadditiony=0
function ml(id){
var el=d.getElementById(id);
if (!persistclose || persistclose && get_cookie("remainclosed")=="")
el.style.visibility="visible"
if(d.layers)el.style=el;
el.sP=function(x,y){
this.style.left=x+offsetadditionx+"px";
this.style.top=y+offsetadditiony+"px";};
el.x = startX;
if (verticalpos=="fromtop")
el.y = startY;
else{
el.y = ns ? pageYOffset + innerHeight : iecompattest().scrollTop + iecompattest().clientHeight;
el.y -= startY;
}
return el;
}
window.stayTopLeft=function(){
if (verticalpos=="fromtop"){
var pY = ns ? pageYOffset : iecompattest().scrollTop;
ftlObj.y += (pY + startY - ftlObj.y)/8;
}
else{
var pY = ns ? pageYOffset + innerHeight - barheight: iecompattest().scrollTop + iecompattest().clientHeight - barheight;
ftlObj.y += (pY - startY - ftlObj.y)/8;
}
ftlObj.sP(ftlObj.x, ftlObj.y);
/*_Velocidade com que mexe. numero alto é mais lento_*/
setTimeout("stayTopLeft()", 10);
}
ftlObj = ml("fixamove");
stayTopLeft();
}
if (window.addEventListener)
window.addEventListener("load", staticbar, false)
else if (window.attachEvent)
window.attachEvent("onload", staticbar)
else if (document.getElementById)
window.onload=staticbar
