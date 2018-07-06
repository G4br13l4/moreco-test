fetch("http://demo6292426.mockable.io/more-store")
  .then((resp) => resp.json()) 
  .then(function(data) {
    var info= ``
    for(var item of data){
        info += `
        <div class="md-12">
            <p>${item.nameOfProduct}</p>
            <p>${item.price}</p>
            <p>${item.description}</p>
        </div> 
        `;
    }
    document.getElementById("info").innerHTML = info;
})