var selectElement = document.getElementById("mySelect");
selectElement.addEventListener("change", changeFunction);
function changeFunction(){
    var mySelect = document.getElementById("mySelect").value;
    alert(mySelect);
}