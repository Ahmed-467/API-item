const div = document.querySelector("div");
axios('https://fakestoreapi.com/products')
.then((res)=>{
   console.log(res.data);
   res.data.map((item)=>{
    div.innerHTML +=`
    <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="..." width="200">
  <div class="card-body">
    <h5 class="card-title">Category:${item.category}</h5>
    <p class="card-text">price :${item.price}</p>
    <a href="#" class="btn btn-danger">Add to card</a>
  </div>
</div>`
   })
})
.catch((err)=>{
   console.log(err);
})