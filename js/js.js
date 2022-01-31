var x=document.getElementById("connecter");
var y=document.querySelector("#register");
var z=document.getElementById("connecter1");
var w=document.getElementById("register1");
var logo=document.getElementById("E-shopping");




	function click(a,link){
	if(a!==null){
    a.addEventListener("click",(e)=>{
	e.preventDefault();
	setTimeout(()=>window.location.assign(link),1000)})
    }
	}

	click(x,"login/login.html");
	click(y,"register/register.html");
	click(z,"../login/login.html");
	click(w,"../register/register.html");
	click(logo,"../index.html");


                                    // logout     
 var rr=document.getElementById("LogoutAdd");
  var ff=document.getElementById("logoutFavorite");
  var ss=document.getElementById("logoutCart");
  var gg=document.getElementById("logoutProfil");
  var dd=document.getElementById("logoutDetails");
  var tab=[rr,ff,ss,gg,dd];
  function click1(element,lien){
  if(element){
  	element.addEventListener("click",(e)=>{e.preventDefault();
  	setTimeout(()=>window.location.assign(lien),1500);
  	;localStorage.clear()})

  }}
   
  tab.forEach(e=>click1(e,"../index.html"));


  //

var home=document.querySelector("#home");
var user=document.querySelector("#user");
console.log(home,user);
var getNom=localStorage.getItem("name");
var userName=document.getElementById("userName");

var logOut=document.getElementById("logout");

if(getNom){
	home.remove();
	user.style.display='flex';
	userName.innerHTML=getNom;
};

  if(logOut){
  logOut.addEventListener("click",e=>{
  	localStorage.clear();
  	user.remove();
	home.style.display='flex';

	})
};


//                                                      day2

var data=[
{
    id:1,nomB:"The Brain Book",
    desc:"The Brain Book: An Illustrated Guide to its Structure, Functions, and Disorders (Dk) (English Edition)",
    prix:100,img:"images/product/book2.jpg",qte:0,itsme:"N"
},
{
    id:2,nomB:"Plant Growth and Developmen",
    desc:"Plant Growth and Development: Hormones and Environment",prix:80,
    img:"images/product/book3.jpg",qte:0,itsme:"N"
},
{
    id:3,nomB:"Hacking: Beginner's Guide to Expert",
    desc:"Hacking: Beginner's Guide to Expert Hacking (English Edition)",prix:40,
    img:"images/product/hacking1.jpg",qte:0,itsme:"N"
},{
	id:4,nomB:"Hacking linux",
	desc:"HACKING LINUX: The Complete Beginners Programming System Guide With Practical Hacking Tools And Essentials Basics Of...",
	prix:90,
	img:"images/product/hacking2.jpg",qte:0,itsme:"N"
},{
	id:5,nomB:"Javascript",
	desc:"Javascript: The Definitive Guide: Master the World's Most-used Programming Language",prix:60,
	img:"images/product/js.jpg",qte:0,itsme:"N"
},{
	id:6,nomB:"nodejs",
	desc:"Apprendre la programmation d'applications Web avec Node.js: Etape par etape pour apprendre les bases de la programmation",
	prix:85,
	img:"images/product/nodjs.jpg",qte:0,itsme:"N"
}
];

var homeProducts=document.querySelector(".home-item-product");

   dataBase=JSON.parse(localStorage.getItem("produitsDetails"));
  function afficher_produits(liste=dataBase){
  	if(!localStorage.getItem("name")) liste=data;
  	if(homeProducts){
    let xx=liste.map(e=>{

    	return `<div class="product" style="border:${e.itsme=='Y' ? '3px solid #FEECE9':'' }">
  	<img src=${e.img}>
  	<div>
  		<h2><a onclick="ProductDetails(${e.id})">${e.desc}</a></h2>
  		<span><label>${e.prix}</label> <i class="fa fa-dollar fa-1x"></i></span>
  		<button onclick="setTimeout(()=>addToCart(${e.id}),500)" id="addToCart">Add To Cart</button><br>
        ${e.itsme==="Y"?"<button onclick='setTimeout(()=>RemoveProduct("+e.id+"),1000)' id='RemoveProduct'>Remove Product</button><button onclick='setTimeout(()=>EditProduct("+e.id+"),1000)' id='EditProduct'>Edit Product</button>":""}
        <i class="fa fa-heart fa-1x coeur" id="coeur${e.id}" style="color: black" onclick="addFavorite(${e.id})"> </i>
  	</div>
  	</div>      `
    });

   
    homeProducts.innerHTML=xx.join("")}};

    afficher_produits();
	
	var icon_notification=document.querySelector(".icons-noti");
	var addProducts=document.getElementById("addToCart");
	var noti_list=document.querySelector(".notification-list");
    var btn_shopping=document.querySelector(".icon_sho");
    var list_products=localStorage.getItem("produits") ? JSON.parse(localStorage.getItem("produits")) : [];   
    var coeur=document.querySelectorAll(".coeur");

    var listItemProductDetails=localStorage.getItem("produitsDetails") ?'' :localStorage.setItem("produitsDetails",JSON.stringify(data));
	
	function addToCart(a){
		if(!localStorage.getItem("name"))
			setTimeout(()=>window.location.assign("login/login.html"),1000);
         else{
            let n=dataBase.find(e=> e.id===a); 
             // stocker la quantité des produits choisis dans local storage produitsDetails
            let getListItemProductDetails=JSON.parse(localStorage.getItem("produitsDetails"));
            getListItemProductDetails.map(e=>{if(e.id===a && e.qte<5)e.qte++});
            localStorage.setItem("produitsDetails",JSON.stringify(getListItemProductDetails));
            //  recuperer la qte           
            var q=getListItemProductDetails.find(e=>e.id==a).qte;
             // partie verification des elements dupliqués
            if(list_products.find(e=>e===n.nomB)===undefined)  
            {list_products.push(n.nomB);           	
            if(list_products.length<4){	
            noti_list.innerHTML+=`<p>${n.nomB+" "} <label id="QteItem${a}" style="background-color:#FEECE9;font-size:x-large;"></label> </p>`;}
             }  
             //afficher la quantité des produits dane les deux pages hme et carte
              let QteItem=document.getElementById("QteItem"+a);
              let QteItem1=document.getElementById(a);
              if(QteItem)QteItem.innerHTML=q;  
               if(QteItem1)QteItem1.innerHTML=q;  
               // notification de nombre de produits selectionnes
               icon_notification.style.display='block';  
               icon_notification.innerHTML=list_products.length; 
             }              
			 var listItemProduct=localStorage.setItem("produits",JSON.stringify(list_products));
	}
  

   // afficher la liste des products dans le cas d'un retour a la page home ou quand je passe a la page carte
      (function carteProductlist(){
	  var listItemTaill=JSON.parse(localStorage.getItem("produitsDetails"));
	  if(localStorage.getItem("produits")){
      icon_notification.style.display='block';	
      icon_notification.innerHTML=list_products.length; 
      let NewData=[];
      list_products.forEach(e=>{   
       listItemTaill.forEach(f=>{
       	if(e==f.nomB)
       		NewData=[...NewData,f]
       })

      }) 
  	  NewData.forEach((e)=>{if(e.qte!==0) {noti_list.innerHTML+=`<p>${e.nomB} <span id="${e.id}"  style="background-color:#FEECE9;font-size:x-large;">${e.qte}</span></p>`} });
      
	   } })();

    //   affiche liste product

	function afficheListeProducts(){
		let x=localStorage.getItem("produits");
		if(x){
		var listItemTaill=JSON.parse(x);
		if(listItemTaill.length>0){
		if(noti_list.style.display==="block")
			noti_list.style.display="none";
		else
			noti_list.style.display="block"
	}}
	}

     btn_shopping.addEventListener("click",e=>{
     	afficheListeProducts();
     });     
      
      
      
      (function effect_coeur(){
      coeur.forEach(e=>{ e.addEventListener("click",()=>
      { if(e.style.color!=="red")
      	e.style.color="red"
      	else
      	e.style.color="black"	
      }
      ) })})();

  
    //  day5   details de la produit
     var PD=document.getElementById("ProductDetails");

    function ProductDetails(ID){
    localStorage.setItem("id",ID);
     setTimeout(()=>window.location.assign("ProductDetails/ProductDetails.html"),1500);
    }
    
    (function ShowProductDetails(){
     var NewData=dataBase.find(e=>e.id==localStorage.getItem("id"));
     if(PD){
     let image=NewData.img; if(image.indexOf("base64")==-1){image="../"+NewData.img;console.log(image)};
     PD.innerHTML=`
            <img id="imgProductDetails" src="${image}">   	
     		<h1>${NewData.nomB}</h1>
     		<h3>${NewData.desc}</h3>
     		<h2 >${NewData.prix+"$"}</h2> 
     `}
    })();



     
   /////////////////////  partie de la recherche d un produit
     var se=document.getElementById("search");
    if(se)   // pour eviter les erreur de cannot read properties of null
    se.addEventListener("keyup",e=>SearchVerification(e))


      function SearchVerification(e){
    if(e.target.value.trim()!==''){
     let n=dataBase.filter(s=>s.nomB.toLowerCase().indexOf(e.target.value.trim().toLowerCase())!==-1);
     console.log(e.target.value,n);
     if(n.length!==0) afficher_produits(n);
     else  afficher_produits()
    }
     else if(e.target.value.trim()=='') afficher_produits() 
     }
  

  // add Favorite
  function addFavorite(a){
   let TabFav=localStorage.getItem("FavoritItem") ? JSON.parse(localStorage.getItem("FavoritItem")):[];
   let data=JSON.parse(localStorage.getItem("produitsDetails"));  
   TabFav=[...TabFav,data.find(e=>e.id==a)];
   localStorage.setItem("FavoritItem",JSON.stringify(TabFav));
   	tab=[];
   
 // supprimer le produit dans la liste des produits favorables quand je click sur le coeur pour la dexieme fois
    for (let i = 0; i < TabFav.length; i++) {
   	if(TabFav.filter((e)=>e.id==TabFav[i].id).length>1){
   		let tab=TabFav.filter((f)=>f.id!==TabFav[i].id);
   		TabFav=tab;
   	}
   }
  
  
   localStorage.setItem("FavoritItem",JSON.stringify(TabFav));

  }

  //  affiche coeur effect quand j'actualise la page 

  var FavoriteProduct=JSON.parse(localStorage.getItem("FavoritItem"));
  if(FavoriteProduct ){
  FavoriteProduct.forEach(e=> {var i=document.getElementById("coeur"+e.id);if(i){i.style.color="red"}});
}


  // favorites product
  

  if(!localStorage.getItem("name")){
        document.querySelector(".ajout-product").style.display="none";
        document.getElementById("search").style.display="none";
       
  }



//partie  add product   && remove product  && edit product 
  var price=document.getElementById("price");
  if(price){
  for (var i = 1; i <= 100; i++) {
  	price.innerHTML+=`<option>${i + " $"}</option>`;
  }}
  
 
  function EditProduct(id){
  	localStorage.setItem("IdEdit",id);
  	window.location.assign("EditProduct/EditProduct.html")
  }

   
  function RemoveProduct(id){
  	console.log("id",id);
  	let d=dataBase.filter(e=>e.id!==id);
  	console.log(d);
  	localStorage.setItem("produitsDetails",JSON.stringify(d));
  	afficher_produits(d);

  	//  modifier les donnes de local storage
  	let nomProduct=dataBase.find(e=>e.id==id).nomB;
    if(localStorage.getItem("produits")){
  	let newTabCart=JSON.parse(localStorage.getItem("produits")).filter(e=>e!==nomProduct);
     localStorage.setItem("produits",JSON.stringify(newTabCart));}
     if(localStorage.getItem("FavoritItem")){
  	let newTabFavorit=JSON.parse(localStorage.getItem("FavoritItem")).filter(e=>e.nomB!==nomProduct);
  	localStorage.setItem("FavoritItem",JSON.stringify(newTabFavorit));}
  	window.location.assign("index.html")
  }



  /// profil
  var containerProfilName=document.getElementById("containerProfilName");
  var containerProfilEmail=document.getElementById("containerProfilEmail");
  var getEmail=localStorage.getItem("email");
  if(containerProfilName) {containerProfilName.innerHTML=getNom;containerProfilEmail.innerHTML=getEmail;}
  var productimg;
  var imageProfil=document.querySelector(".containerProfil img");
  var BtnProfil=document.querySelector(".containerProfil input");
  if(BtnProfil)
  BtnProfil.addEventListener("change",uploadImg);




  function uploadImg(){
 let file=this.files[0];
 
 let tab=["image/jpeg","image/jpg","image/png"];
 let indice=0;
 tab.forEach(e=>{ if(e.indexOf(file.type)!==-1)indice=1;})

 if(indice==0){
     alert("impossible");
     window.location.assign("../profil/profil.html");
 }
 if(file.size>2*1024*1024)
    window.location.assign("../profil/profil.html");

  getImage64(file);

 }


 function getImage64(file){
 	let reader= new FileReader();
 	reader.readAsDataURL(file);
 	reader.onload=function(){
 		productimg=reader.result;
 		console.log(productimg)
 		imageProfil.setAttribute("src",productimg);
 		localStorage.setItem("imgProfil",productimg);
 		setTimeout(()=>window.location.assign("profil.html"),1500);
 	}
 	reader.onerror=function(){
      alert("error upload image")
 	}
 }

//                     image of user
var imgProfil=document.querySelector("#user_img");
var imgProfil1=document.querySelector("#user");
var imgProfil2=document.querySelector(".img_profil");

function addImgProfil(img){
	let imageProfil=localStorage.getItem("imgProfil");
 if(img && imageProfil) img.setAttribute("src",imageProfil);
  if(imgProfil2 && imageProfil)  imgProfil2.setAttribute("src",imageProfil)
}
addImgProfil(imgProfil);
addImgProfil(imgProfil1);

if(getNom){
	imgProfil.style.display="block"
}


//  afficher pprix dans cart
var prix=document.querySelector(".prixTotal div span");
var prixPhone=document.querySelector(".prixTotalphone div span");
var prixTotal=0;
if(prix || prixPhone){
for(let i=0;i<list_products.length;i++){
  item=dataBase.find(e=>list_products[i]==e.nomB);
  itemTotal=item.prix*item.qte;
  // console.log(itemTotal,"d");
  prixTotal+=itemTotal;
}
if(prix)
prix.innerHTML=prixTotal;
if(prixPhone)
prixPhone.innerHTML=prixTotal}