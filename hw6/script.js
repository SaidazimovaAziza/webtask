const boxes = document.querySelectorAll("#tasks button");
const spans = document.querySelectorAll("#tasks span");

for(var i = 0;i<boxes.length;i++){
	const d = i;
	boxes[i].onclick=function(){
		bebe(spans[d]);
	}
 }

function bebe(a){
	a.style.textDecoration = "line-through";
}