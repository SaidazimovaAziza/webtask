document.getElementById("carousel").onclick = function(event){
	document.getElementById("bigImage").getElementsByTagName("img")[0].src = (event.target.src) ;
}