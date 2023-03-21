fetch("https://fakestoreapi.com/products").then((data) =>{
    // console.log(data.json);
    return data.json;
}).then((complementData) => {
    console.log(complementData[2]);
    // document.getElementById("root").innerHTML = complementData[2].title
    let data1 = ""
    complementData.map((value) => {
        data1 = `<div class="card">
        <h1 class ="title">Title<h1>
        <img src="${value.image}" alt="">
        <p>${value.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
}).catch(err =>
    console.log(err)
    
);