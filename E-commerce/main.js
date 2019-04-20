//FIREBASE    
var config = {
    apiKey: "AIzaSyBMdfrkvDUVh7ojv98Mt4GCxbxfHi2Btnk",
    authDomain: "walltersystems-efed4.firebaseapp.com",
    databaseURL: "https://walltersystems-efed4.firebaseio.com",
    projectId: "walltersystems-efed4",
    storageBucket: "walltersystems-efed4.appspot.com",
    messagingSenderId: "162054149059"
};
firebase.initializeApp(config);

var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');
//DIVS
var fruitDIV = document.getElementById("fruitDIV");
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");
//INFORMTION
var FRUIT = [{
        name: 'Apple',
        price: 1
    },
    {
        name: 'Table',
        price: 1
    }
];

var JUICE = [{
        name: 'Juice#1',
        price: 1
    },
    {
        name: 'Table',
        price: 1
    },
    {
        name: 'Table',
        price: 1
    }
];

var SALAD = [{
        name: 'StorageTable #1',
        price: 1
    },
    {
        name: 'Table #2',
        price: 1
    },
    {
        name: 'Table #3',
        price: 1
    }
];
//HTML
function HTMLfruitProduct(con) {
    let URL = `./img/foldable_table/fruit${con}.jpg`;
    let btn = `btnFruit${con}`;
    return `<div class= "col-md-4">
        <div class="card mb-4 shadow-sm"> 
            <img class="card-img-top" style="height:16rem;" src="${URL}"
            alt="Card image cap">
            <div class = "card-body">
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <p class="card-text">${FRUIT[con-1].name}</p>
            <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>
            <div class="d-flex justify-content-between 
            align-items-center">
            <div class="btn-group">
                <button type="button" onclick="cart2('${FRUIT[con-1].name}'
                ','${FRUIT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">BUY</button>
                <button id = "${btn}" type="button" onclick="cart('${FRUIT[con-1].name}'
                ','${FRUIT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                </div>
                <small class="text-muted">Free Shipping</small>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

function HTMLjuiceProduct(con) {
    let URL = `./img/dining_table/pic${con}.jpg`;
    let btn = `btnJuice${con}`;
    return `<div class= "col-md-4">
        <div class="card mb-4 shadow-sm"> 
            <img class="card-img-top" style="height:16rem;" src="${URL}"
            alt="Card image cap">
            <div class = "card-body">
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <p class="card-text">${JUICE[con-1].name}</p>
            <p class="card-text">Price: ${JUICE[con-1].price}.00</p>
            <div class="d-flex justify-content-between 
            align-items-center">
            <div class="btn-group">
                <button type="button" onclick="cart2('${JUICE[con-1].name}'
                ','${JUICE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">BUY</button>
                <button id = "${btn}" type="button" onclick="cart('${JUICE[con-1].name}'
                ','${JUICE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                </div>
                <small class="text-muted">Free Shipping</small>
                </div>
            </div>
        </div>
    </div>
    `
}

function HTMLsaladProduct(con) {
    let URL = `./img/wall_mounted_bed/salad${con}.jpeg`;
    let btn = `btnSalad${con}`;
    return `<div class= "col-md-4">
        <div class="card mb-4 shadow-sm"> 
            <img class="card-img-top" style="height:16rem;" src="${URL}"
            alt="Card image cap">
            <div class = "card-body">
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <i style="color:orange;" class="fa fa-star"></i>
            <p class="card-text">${SALAD[con-1].name}</p>
            <p class="card-text">Price: ${SALAD[con-1].price}.00</p>
            <div class="d-flex justify-content-between 
            align-items-center">
            <div class="btn-group">
                <button type="button" onclick="cart2('${SALAD[con-1].name}'
                ','${SALAD[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">BUY</button>
                <button id = "${btn}" type="button" onclick="cart('${SALAD[con-1].name}'
                ','${SALAD[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                </div>
                <small class="text-muted">Free Shipping</small>
                </div>
            </div>
        </div>
    </div>
    `
}
//Render
function render() {
    for (let index = 1; index <= 6; index++) {
        fruitDIV.innerHTML += `${HTMLfruitProduct(index)}`;
    }
    for (let index = 1; index <= 3; index++) {
        juiceDIV.innerHTML += `${HTMLjuiceProduct(index)}`;
        saladDIV.innerHTML += `${HTMLsaladProduct(index)}`;
    }
}