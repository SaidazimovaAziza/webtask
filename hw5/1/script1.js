function clickMe(){
	const s11Field = parseInt(document.querySelector("#s11").value);
	const s12Field = parseInt(document.querySelector("#s12").value);
	
	
	const s13Field = parseInt(document.querySelector("#s13").value);
	const s21Field = parseInt(document.querySelector("#s21").value);
	const s22Field = parseInt(document.querySelector("#s22").value);
	const s23Field = parseInt(document.querySelector("#s23").value);
	const s31Field = parseInt(document.querySelector("#s31").value);
	const s32Field =parseInt(document.querySelector("#s32").value);
	const s33Field =parseInt(document.querySelector("#s33").value);
	document.getElementById("result").innerHTML  = s11Field*(s22Field*s33Field-s23Field*s32Field)-s12Field*(s21Field*s33Field-s23Field*s31Field)+s13Field*(s21Field*s33Field-s22Field*s31Field);

	
}
document.querySelector("#determinant").addEventListener('click',clickMe);