var submit=document.getElementById("editPr");
var id=localStorage.getItem("IdEdit");
var element=dataBase.find(e=>e.id==id);
nom.value=element.nomB;
desc.value=element.desc;
price.value=element.prix+"$";


var productModifer={
	    id:dataBase.length,
	    nomB:'',
	    desc:'',
	    prix:'',
	    img:element.img,
	    qte:0,
	    itsme:"Y",
}
productimg=element.img;
function modifier(){

if(nom.value!=='' && desc.value!==''){

tab=JSON.parse(localStorage.getItem("produits"));
id=localStorage.getItem("IdEdit");
newNom=dataBase.find(e=>e.id==id).nomB;console.log(newNom);
newtab=tab.filter(e=>e!==newNom);console.log(newtab);
localStorage.setItem("produits",JSON.stringify(newtab));


productModifer.nomB=nom.value;
productModifer.desc=desc.value;
productModifer.prix=price.value.substr(0,price.value.length-1);
productModifer.img=productimg;

dataBase=dataBase.filter(e=>e.id!==Number(id));

dataBase=[...dataBase,productModifer];
localStorage.setItem("produitsDetails",JSON.stringify(dataBase));

window.location.assign("../index.html");
console.log("ok");

}
else window.location.assign("EditProduct.html");
}

submit.addEventListener("click",(e)=>{e.preventDefault();modifier()});



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
     window.location.assign("../EditProduct/EditProduct.html");
 }
 if(file.size>2*1024*1024)
    window.location.assign("../EditProduct/EditProduct.html");

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


 