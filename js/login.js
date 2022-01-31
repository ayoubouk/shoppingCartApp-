var getNom=localStorage.getItem("name");
var getPassword=localStorage.getItem("password");

var nom=document.getElementById("nom");
var password=document.getElementById("password");
var submit=document.getElementById("submit");



if(submit!=null){
submit.addEventListener("click",e=>{
	e.preventDefault();
	var a=nom.value.trim();
	var b=password.value.trim();	
	if(a===getNom && b===getPassword){
	setTimeout(()=>{window.location.assign("../index.html");},1500);
    }
    else
    setTimeout(()=>window.location.assign("login.html"),1500);
})
}