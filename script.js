let API_URL = "https://rickandmortyapi.com/api/character";
let row = document.querySelector(".row");

fetch(API_URL)
.then((Response)=> Response.json())
.then((data) =>{
    for (let i = 0; i < data.length; i++) {
        row.innerHTML +=
        `<div class="col-3">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${data[i].image} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick</p>
                    <p class="card-text">Some quick</p>
                    <p class="card-text">Some quick</p>
                </div>
            </div>
        </div>`
        
    }
})
