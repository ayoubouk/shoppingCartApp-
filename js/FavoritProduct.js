  var newData=localStorage.getItem("FavoritItem") ? JSON.parse(localStorage.getItem("FavoritItem")):[];
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
        <button onclick="RemoveFromFavo(${e.id})" id="addToCart" style="width:150px">Remove From Favorit</button>
        
      </div>
    </div>      `
    });
    homeProducts.innerHTML=xx.join("")}};
    afficher_produits();
    

     function RemoveFromFavo(ElementId){
      noti_list.innerHTML="";
      newData=newData.filter(e=>e.id!==ElementId);
      localStorage.setItem("FavoritItem",JSON.stringify(newData));
      afficher_produits();    
   }
