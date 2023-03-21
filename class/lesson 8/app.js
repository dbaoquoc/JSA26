var arrInput = [];
var arrQuantity = [];
var table = document.getElementById("table");

function saveItem(){
    var ip = document.getElementById('input').value;
    var quantity = document.getElementById('quantity').value;
    arrInput.push(ip);
    arrQuantity.push(quantity);
    localStorage.setItem("Input", arrInput);
    localStorage.setItem("Quantity", arrQuantity);
    console.log(ip);
    event.preventDefault();
}

function showAll(){
    var input = localStorage.getItem("Input").split(",");
                var quantity = localStorage.getItem("Quantity").split(",");
                var list = "<tr><th>Item</th><th>Value</th></tr> \n"
                for(var i=0; i< quantity.length; i++){
                    list += "<tr><th>"+input[i]+"</th><th>"+"</th><th>"+ quantity[i]+"</th></tr>"
    }
    table.innerHTML = list;
    // event.preventDefault();
}

window.load = showAll();


function UpdateItem(){
    var input = document.getElementById("input").value;
    var quantity = document.getElementById("quantity").value;
    var inputArr = localStorage.getItem("Input").split(",");
    var quantityArr = localStorage.getItem("Quantity").split(",");
    for(let i=0; i< inputArr.length; i++){
        if(inputArr[i] == input){
            quantityArr[i] = quantity;
        }
    }

}