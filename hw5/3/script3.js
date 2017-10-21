document.getElementById("addStudent").onclick = function(event){
	var table = document.getElementById("students");
		document.getElementById("name").className="";
		document.getElementById("surname").className="";
		document.getElementById("faculty").className="";
	if(document.getElementById("name").value!="" && document.getElementById("surname").value!="" &&document.getElementById("faculty").value!="-1"){
		
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = document.getElementById("faculty").value;
		cell2.innerHTML = document.getElementById("name").value;
		cell3.innerHTML = document.getElementById("surname").value;
	}
	else{
		if(document.getElementById("name").value==""){
			document.getElementById("name").className="error";
		}
		if(document.getElementById("surname").value==""){
			document.getElementById("surname").className="error";
		}
		if(document.getElementById("faculty").value=="-1"){
			document.getElementById("faculty").className="error";
		}
		
	}
}