    var x=document.getElementById("logout");

	function click(a,link){
	if(a!==null){
    a.addEventListener("click",(e)=>{
	e.preventDefault();
	setTimeout(()=>window.location.assign(link),1000)})
    }
	}

    click(x,"../index.html");

    (function ComptProduct(){
    var listItemTaill=JSON.parse(localStorage.getItem("produits"));
	var icon_notification=document.querySelector(".icons-noti");
    icon_notification.innerHTML=listItemTaill.length;
    icon_notification.style.display='block'})();


    var newData=[];
    homeProducts=document.querySelector(".home-item-product");

    function afficher_produits(){
  	if(homeProducts){
     let xx=newData.map(e=>{
      let image=e.img; if(image.indexOf("base64")==-1){image="../"+e.img;console.log(image)};
    	return `<div class="product">
  		<img src=${image}>
  		<div>
  			<h2> <a onclick="ProductDetails(${e.id})">${e.desc}</a></h2>
  			<span><label>${e.prix}</label> <i class="fa fa-dollar fa-1x"></i></span>
  			<button onclick="setTimeout(()=>RemoveToCart(${e.id}),1000)" id="addToCart" style="width:150px">Remove From Cart</button>
  			
  		</div>
  	</div>      `
    });
    homeProducts.innerHTML=xx.join("")}};
    
    //afficher juste les produits selectiones
    (function ProduitSelected(){
    for(let i=0;i<list_products.length;i++){dataBase.forEach(e=>{if(e.nomB===list_products[i]) newData.push(e)});}
   afficher_produits();})();
    

   function RemoveToCart(ElementId){
   	  
      // qte revient a zero
      tab=JSON.parse(localStorage.getItem("produitsDetails"));
      for(let i=0;i<tab.length;i++){
        if(tab[i].id==ElementId)
          tab[i].qte=0;         
       }
      localStorage.setItem("produitsDetails",JSON.stringify(tab));

      noti_list.innerHTML="";
      newData=newData.filter(e=>e.id!==ElementId);     
      let ProductName=dataBase.find(e=>e.id==ElementId);
       list_products=list_products.filter(e=>e!==ProductName.nomB);
       localStorage.setItem("produits",JSON.stringify(list_products));
      afficher_produits();
      icon_notification.innerHTML=list_products.length;
      // window.location.assign("cart.html")
      if(newData.length!==0){
      for(let i=0;i<newData.length;i++){
       noti_list.innerHTML+=`<p>${newData[i].nomB+" "} 
       <label style="background-color:#FEECE9;font-size:x-large;">${newData[i].qte}</label> </p>`;
     }
     }
      window.location.assign("cart.html");
     if(JSON.parse(localStorage.getItem("produits")).length==0){
      window.location.assign("../index.html");
     }
    

   }



    function ProductDetails(ID){
    localStorage.setItem("id",ID);
    setTimeout(()=>window.location.assign("../ProductDetails/ProductDetails.html"),1500)
     
    }
    
    