const light = document.getElementById("light");
light.addEventListener("click", function onclick (event){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

});
const dark = document.getElementById("dark");
dark.addEventListener("click", function onclick (event){
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
    document.body.div.style.backgroundColor = "red";
});