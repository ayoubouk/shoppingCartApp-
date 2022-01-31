var Newproduct={
	  id:'',
	  img:'images/product/failed.webp',
    nomB:'',
    desc:'',
    prix:'',
    qte:0,
    itsme:"Y"
}

var nom=document.getElementById("nom");
var desc=document.getElementById("desc");
var prix=document.getElementById("price");
var BtnSubmit=document.getElementById("addPr");
var img=document.getElementById("img");

var TAB=JSON.parse(localStorage.getItem("produitsDetails"));
var lastId=TAB[TAB.length-1].id;
var productimg;

function add(){
if(nom.value!='' && desc.value!='' && prix.value!='' ){
Newproduct.id=lastId+1;
if(productimg )
Newproduct.img=productimg;
Newproduct.nomB=nom.value;
Newproduct.desc=nom.value+":"+desc.value;
Newproduct.prix=prix.value.substr(0,prix.value.length-1);
TAB=[...TAB,Newproduct]; 
localStorage.setItem('produitsDetails',JSON.stringify(TAB));
window.location.assign("../index.html")}
else window.location.assign("AddProduct.html")
}

BtnSubmit.addEventListener("click",e=>{e.preventDefault();add();});


img.addEventListener("change",uploadImg);
//this.files[0]
function uploadImg(){
 let file=this.files[0];
 
 console.log(file.type);
 let tab=["image/jpeg","image/jpg","image/png"];
 let indice=0;
 tab.forEach(e=>{ if(e.indexOf(file.type)!==-1)indice=1;})

 if(indice==0){
     alert("impossible");
     window.location.assign("../AddProduct/addproduct.html");
 }
 if(file.size>2*1024*1024)
    window.location.assign("../AddProduct/addproduct.html");

  getImage64(file);
 }


 function getImage64(file){
 	let reader= new FileReader();
 	reader.readAsDataURL(file);
 	reader.onload=function(){
 		productimg=reader.result
 	}
 	reader.onerror=function(){
      alert("error upload image")
 	}
 }
