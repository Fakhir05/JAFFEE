const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart');
const closeBtn = document.querySelector('.close-btn');
const loginPopup = document.querySelector(".login-overlay");
const openLoginBtns = document.querySelectorAll(".open-login");
const closeLogin = document.querySelector(".close-login");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginTitle = document.querySelector(".title-login");
const registerTitle = document.querySelector(".title-register");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const signInBtn = document.getElementById("SignInBtn");
const signUpBtn = document.getElementById("SignUpBtn");
const toaster = document.querySelector(".toaster");
const menuContainer = document.getElementById("menu-container");
const cartList = document.querySelector(".cart-list");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerIcon = hamburger.querySelector("i");
const orderBtn = document.querySelector(".order-btn");
const menu = document.querySelector("#menu12");
const checkoutBtn = document.querySelector(".checkout-btn");
const checkoutOverlay = document.querySelector(".checkout-overlay");
const closeCheckout = document.querySelector(".close-checkout");
const checkoutCartItems = document.getElementById("checkout-cart-items");
const checkoutSubtotal = document.getElementById("checkout-subtotal");
const checkoutTotal = document.getElementById("checkout-total");
const paymentMethods = document.querySelectorAll('input[name="payment"]');
const creditCardInfo = document.getElementById("credit-card-info");
const codInfo = document.getElementById("cod-info");
const checkoutForm = document.getElementById("checkout-form");

cartIcon.addEventListener('click', () => cartTab.classList.add('cart-active'));
closeBtn.addEventListener('click', () => cartTab.classList.remove('cart-active'));



const products = [
    {
        category: "High Volume",
        items: [
            { id: 1, name: "ESPRESSO", price: 765, image: "images/espresso-removebg-preview.png" },
            { id: 2, name: "AMERICANO", price: 1050, image: "images/Americano-removebg-preview.png" },
            { id: 3, name: "CAPPUCCINO", price: 1250, image: "images/Cappuccino-removebg-preview.png" },
            { id: 4, name: "CORTADO", price: 1100, image: "images/Cortado-removebg-preview.png" },
            { id: 5, name: "CAFE MOCHA", price: 1460, image: "images/Café_Mocha-removebg-preview.png" }
        ]
    },

    {
        category: "Summer Favourites",
        items: [
            { id: 6, name: "ICED AMERICANO", price: 1100, image: "images/Iced_Americano-removebg-preview.png" },
            { id: 7, name: "ICED LATTE", price: 1320, image: "images/Iced_Latte-removebg-preview.png" },
            { id: 8, name: "AFFOGATO", price: 1550, image: "images/Affogato-removebg-preview.png" },
            { id: 9, name: "CARAMEL FRAPPE", price: 1600, image: "images/Caramel_Frappé-removebg-preview.png" },
            { id: 10, name: "MATCHA FRAPPE", price: 1460, image: "images/Matcha_Frappé-removebg-preview.png" }
        ]
    },

    {
        category: "Brews & Teas",
        items: [
            { id: 11, name: "MATCHA LATTE", price: 1400, image: "images/Matcha_Latte-removebg-preview.png" },
            { id: 12, name: "CHAI TEA LATTE", price: 1400, image: "images/Chai_Tea_Latte-removebg-preview.png" },
            { id: 13, name: "HOT CHOCOLATE", price: 1200, image: "images/Hot_Chocolate-removebg-preview.png" },
            { id: 14, name: "GREEN TEA", price: 975, image: "images/Jasmine_Green_Tea-removebg-preview.png" }
        ]
    },

    {
        category: "Artisan Bakery",
        items: [
            { id: 15, name: "BUTTER CROISSANT", price: 1050, image: "images/Butter_Croissant-removebg-preview.png" },
            { id: 16, name: "ALMOND CROISSANT", price: 1250, image: "images/Almond_Croissant-removebg-preview.png" },
            { id: 17, name: "BLUEBERRY MUFFIN", price: 1100, image: "images/Blueberry_Muffin-removebg-preview.png" },
            { id: 18, name: "CINNAMON ROLL", price: 1250, image: "images/Cinnamon_Roll-removebg-preview.png" },
            { id: 19, name: "AVOCADO TOAST", price: 2360, image: "images/Sourdough_Avocado_Toast-removebg-preview.png" }
        ]
    }
];


products.forEach(section => {

    menuContainer.innerHTML += `
        <p class="menu1-head" id="${section.category.toLowerCase().replace(/\s+/g, '-')}">
    ${section.category}
</p>
&nbsp;
        <div class="menu1 text-center gap-2">

        ${section.items.map(item => `

                <div class="item11">

                    <div class="item11-image">
                        <img src="${item.image}">
                    </div>

                    <p>${item.name}</p>

                    <p>Rs.${item.price}</p>

                    <a class="btn add-cart" data-id="${item.id}">
                        Add to cart
                    </a>

                </div>

            `).join("")
        }

        </div>

        <br>
    `;
});

let cart = [];

document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("add-cart")) return;

    const id = Number(e.target.dataset.id);

    const exist = cart.find(x => x.id === id);

    if (exist) {

        exist.qty++;

    } else {

        const product = products
            .flatMap(x => x.items)
            .find(x => x.id === id);

        cart.push({ ...product, qty: 1 });

    }

    renderCart();

});

function renderCart() {



    cartList.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.qty;

        count += item.qty;

        cartList.innerHTML += `

        <div class="item">

            <div class="img-cont">
                <img src="${item.image}">
            </div>

            <div>

                <p>${item.name}</p>

                <h4>Rs.${item.price * item.qty}</h4>

            </div>

            <div class="flex">

                <a class="quantity-btn minus" data-id="${item.id}">
                    <i class="fa-solid fa-minus"></i>
                </a>

                <h4 class="quantity-value">${item.qty}</h4>

                <a class="quantity-btn plus" data-id="${item.id}">
                    <i class="fa-solid fa-plus"></i>
                </a>

            </div>

        </div>

        `;

    });

    document.querySelector(".cart-total").innerHTML = `Rs. ${total}`;

    document.querySelector(".cart-value").innerHTML = count;

}

document.addEventListener("click", (e) => {

    if (e.target.closest(".plus")) {

        const id = Number(e.target.closest(".plus").dataset.id);

        cart.find(x => x.id === id).qty++;

        renderCart();

    }

    if (e.target.closest(".minus")) {

        const id = Number(e.target.closest(".minus").dataset.id);

        const item = cart.find(x => x.id === id);

        item.qty--;

        if (item.qty <= 0) {

            cart = cart.filter(x => x.id !== id);

        }

        renderCart();

    }

});

hamburger.addEventListener("click", (e) => {
    e.preventDefault();

    mobileMenu.classList.toggle("mobile-menu-active");

    if (mobileMenu.classList.contains("mobile-menu-active")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-xmark");
    } else {
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("mobile-menu-active");

        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
    });
});




orderBtn.addEventListener("click", (e) => {
    e.preventDefault();

    menu.scrollIntoView({
        behavior: "smooth"
    });
});



function openPopup(){

    loginPopup.classList.add("active");
    document.body.style.overflow = "hidden";

}

function closePopup(){

    loginPopup.classList.remove("active");
    document.body.style.overflow = "";

}

openLoginBtns.forEach(btn=>{

    btn.addEventListener("click",function(e){

        e.preventDefault();

        openPopup();

    });

});

closeLogin.addEventListener("click",closePopup);



loginPopup.addEventListener("click",function(e){

    if(e.target===loginPopup){

        closePopup();

    }

});



document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closePopup();

    }

});



function showLogin(){

    loginForm.style.left="50%";
    loginForm.style.opacity="1";

    registerForm.style.left="150%";
    registerForm.style.opacity="0";

    document.querySelector(".login-wrapper").style.height="520px";

    loginTitle.style.top="50%";
    loginTitle.style.opacity="1";

    registerTitle.style.top="120%";
    registerTitle.style.opacity="0";

}



function showRegister(){

    loginForm.style.left="-50%";
    loginForm.style.opacity="0";

    registerForm.style.left="50%";
    registerForm.style.opacity="1";

    document.querySelector(".login-wrapper").style.height="610px";

    loginTitle.style.top="-50%";
    loginTitle.style.opacity="0";

    registerTitle.style.top="50%";
    registerTitle.style.opacity="1";

}



registerLink.addEventListener("click",function(e){

    e.preventDefault();

    showRegister();

});



loginLink.addEventListener("click",function(e){

    e.preventDefault();

    showLogin();

});



function showToast(message){

    toaster.textContent=message;

    toaster.classList.add("toggle");

    setTimeout(()=>{

        toaster.classList.remove("toggle");

    },3000);

}



signInBtn.addEventListener("click",function(e){

    e.preventDefault();

    const username=document.getElementById("user").value.trim();

    const password=document.getElementById("pass").value.trim();

    if(username===""||password===""){

        showToast("Please fill all fields.");

        return;

    }

    showToast("Login Successful!");

    document.querySelector(".login-form").reset();

    setTimeout(()=>{

        closePopup();

    },1200);

});



signUpBtn.addEventListener("click",function(e){

    e.preventDefault();

    const username=document.getElementById("reg-user").value.trim();

    const email=document.getElementById("email").value.trim();

    const password=document.getElementById("reg-pass").value.trim();

    const agree=document.getElementById("remember");



    if(username===""||email===""||password===""){

        showToast("Please fill all fields.");

        return;

    }



    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!emailPattern.test(email)){

        showToast("Enter valid email.");

        return;

    }



    if(password.length<6){

        showToast("Password must be at least 6 characters.");

        return;

    }



    if(!agree.checked){

        showToast("Accept Terms & Conditions.");

        return;

    }



    showToast("Registration Successful!");



    document.querySelector(".register-form").reset();



    setTimeout(()=>{

        showLogin();

    },1200);

});



showLogin();

checkoutBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    renderCheckout();

    checkoutOverlay.classList.add("active");

});

closeCheckout.addEventListener("click",(e)=>{

    e.preventDefault();

    checkoutOverlay.classList.remove("active");

});

checkoutOverlay.addEventListener("click",(e)=>{

    if(e.target===checkoutOverlay){

        checkoutOverlay.classList.remove("active");

    }

});

function renderCheckout(){

    checkoutCartItems.innerHTML="";

    let subtotal=0;

    cart.forEach(item=>{

        subtotal += item.price*item.qty;

        checkoutCartItems.innerHTML += `

        <div class="checkout-cart-item">

            <div class="flex gap-2">

                <img src="${item.image}">

                <div>

                    <p>${item.name}</p>

                    <small>Qty : ${item.qty}</small>

                </div>

            </div>

            <strong>

                Rs.${item.price*item.qty}

            </strong>

        </div>

        `;

    });

    checkoutSubtotal.innerHTML=`Rs.${subtotal}`;

    checkoutTotal.innerHTML=`Rs.${subtotal+250}`;

}

paymentMethods.forEach(method=>{

    method.addEventListener("change",()=>{

        if(method.value==="card" && method.checked){

            creditCardInfo.classList.remove("hidden");

            codInfo.classList.add("hidden");

        }

        if(method.value==="cod" && method.checked){

            creditCardInfo.classList.add("hidden");

            codInfo.classList.remove("hidden");

        }

    });

});

checkoutForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

       showToast("Order Placed Successfully!");

    setTimeout(() => {

        alert("Thank you for ordering from JAFFEE!");

    },300);

    
    cart = [];
    renderCart();

    
    checkoutForm.reset();

    
    checkoutModal.classList.remove("checkout-active");

   

    cart=[];

    renderCart();

    checkoutOverlay.classList.remove("active");

    checkoutForm.reset();

    creditCardInfo.classList.remove("hidden");

    codInfo.classList.add("hidden");

});