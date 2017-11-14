let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

var my_country  = document.getElementById("countries");
var my_city = document.getElementById("cities");
for (var i = 0; i < countries.length; i++) {
    var option = document.createElement("option");
    option.value = countries[i];
    option.text = countries[i];
    my_country.appendChild(option);

}
function myFunction() {
    var x = document.getElementById("Kazakhstan").selectedIndex;
    alert(x);
}
myFunction();