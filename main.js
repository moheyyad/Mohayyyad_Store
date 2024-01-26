let butn = document.getElementsByClassName("buy");
let cart = document.getElementById("cart")
let x = 0;

for (let i = 0; i < 16 ; i++){
    butn[i].onclick = function() {
        x++;
        cart.innerHTML = ` cart ${x}`;
    }
    
}
