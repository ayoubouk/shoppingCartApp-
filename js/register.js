var nom=document.getElementById("name");
var email=document.getElementById("email");
var password=document.getElementById("password");
var submit=document.getElementById("submit");
console.log(email,password,nom);
       
submit.addEventListener("click",function(e){
	var a=nom.value.trim();
	var b=email.value.trim();
	var c=password.value;
	e.preventDefault();
	if(a!=='' && b!=='' && c!==''){
	localStorage.setItem("name",a);
	localStorage.setItem("email",b);
	localStorage.setItem("password",c);   
    setTimeout(()=>window.location.assign("../login/login.html"),1500)
     }
})

