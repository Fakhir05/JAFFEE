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
const checkoutToast = document.querySelector(".checkout-toast");
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
const historyIcon = document.querySelector(".history-icon");
const historyOverlay = document.querySelector(".history-overlay");
const closeHistory = document.querySelector(".close-history");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.querySelector(".clear-history-btn");
const policiesOverlay = document.querySelector(".policies-overlay");
const closePolicies = document.querySelector(".close-policies");
const openPoliciesBtns = document.querySelectorAll(".open-policies");
const termsBtn = document.getElementById("termsBtn");
const privacyBtn = document.getElementById("privacyBtn");
const termsContent = document.querySelector(".terms-content");
const privacyContent = document.querySelector(".privacy-content");
const footerTerms = document.querySelector(".footer-terms");
const footerPrivacy = document.querySelector(".footer-privacy");
let registeredUser = "";
let registeredPass = "";


// cart tab open and close 


cartIcon.addEventListener('click', () => cartTab.classList.add('cart-active'));
cartIcon.addEventListener('click', (e) => e.preventDefault());
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartTab.classList.remove('cart-active')
});


// prducts list 


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
            { id: 13, name: "FRENCH PRESS", price: 1100, image: "images/french-press-removebg-preview.png" },
            { id: 14, name: "HOT CHOCOLATE", price: 1200, image: "images/Hot_Chocolate-removebg-preview.png" },
            { id: 15, name: "GREEN TEA", price: 975, image: "images/Jasmine_Green_Tea-removebg-preview.png" }
        ]
    },

    {
        category: "Artisan Bakery",
        items: [
            { id: 16, name: "BUTTER CROISSANT", price: 1050, image: "images/Butter_Croissant-removebg-preview.png" },
            { id: 17, name: "ALMOND CROISSANT", price: 1250, image: "images/Almond_Croissant-removebg-preview.png" },
            { id: 18, name: "BLUEBERRY MUFFIN", price: 1100, image: "images/Blueberry_Muffin-removebg-preview.png" },
            { id: 19, name: "CINNAMON ROLL", price: 1250, image: "images/Cinnamon_Roll-removebg-preview.png" },
            { id: 20, name: "AVOCADO TOAST", price: 2360, image: "images/Sourdough_Avocado_Toast-removebg-preview.png" }
        ]
    }
];


// add menu in html 


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


// add items in cart 


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


// plus and minus


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


// mobile menu hamburger active and deactive


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

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
        mobileMenu.classList.remove("mobile-menu-active");

        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");

    }

});


// smooth scrolling


orderBtn.addEventListener("click", (e) => {
    e.preventDefault();

    menu.scrollIntoView({
        behavior: "smooth"
    });
});


// login & register open & close


function openPopup() {

    loginPopup.classList.add("active");
    document.body.style.overflow = "hidden";

}

function closePopup() {

    loginPopup.classList.remove("active");
    document.body.style.overflow = "";

}


// sign in to login & register 


openLoginBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        openPopup();

    });

});

closeLogin.addEventListener("click", closePopup);



loginPopup.addEventListener("click", function (e) {

    if (e.target === loginPopup) {

        closePopup();

    }

});


// escape key 


document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closePopup();
        closePoliciesPopup();
        closeHistory.click();
        closeCheckout.click();
        closeBtn.click();

    }

});


// login & register animation 


function showLogin() {

    loginForm.style.left = "50%";
    loginForm.style.opacity = "1";

    registerForm.style.left = "150%";
    registerForm.style.opacity = "0";

    document.querySelector(".login-wrapper").style.height = "520px";

    loginTitle.style.top = "50%";
    loginTitle.style.opacity = "1";

    registerTitle.style.top = "120%";
    registerTitle.style.opacity = "0";

}



function showRegister() {

    loginForm.style.left = "-50%";
    loginForm.style.opacity = "0";

    registerForm.style.left = "50%";
    registerForm.style.opacity = "1";

    document.querySelector(".login-wrapper").style.height = "610px";

    loginTitle.style.top = "-50%";
    loginTitle.style.opacity = "0";

    registerTitle.style.top = "50%";
    registerTitle.style.opacity = "1";

}


// login & and Register link 


registerLink.addEventListener("click", function (e) {

    e.preventDefault();

    showRegister();

});



loginLink.addEventListener("click", function (e) {

    e.preventDefault();

    showLogin();

});


// Notification 


function showToast(message) {

    toaster.textContent = message;

    toaster.classList.add("toggle");

    setTimeout(() => {

        toaster.classList.remove("toggle");

    }, 3000);

}


function showCheckoutToast(message) {

    checkoutToast.textContent = message;

    checkoutToast.classList.add("show");

    setTimeout(() => {

        checkoutToast.classList.remove("show");

    }, 3000);

}


// Form Sign in button 


signInBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const username = document.getElementById("user").value.trim();
    const password = document.getElementById("pass").value.trim();

    if (username === "" || password === "") {

        showToast("Please fill all fields.");
        return;

    }

    if (username === registeredUser && password === registeredPass) {

        showToast("Login Successful!");

        document.querySelector(".login-form").reset();

        setTimeout(() => {

            closePopup();

        }, 1200);

    }
    else {

        showToast("Account Not Found!");

    }

});


// Form Sign up button


signUpBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const username = document.getElementById("reg-user").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("reg-pass").value.trim();

    const agree = document.getElementById("remember");



    if (username === "" || email === "" || password === "") {

        showToast("Please fill all fields.");

        return;

    }



    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (!emailPattern.test(email)) {

        showToast("Enter valid email.");

        return;

    }



    if (password.length < 6) {

        showToast("Password must be at least 6 characters.");

        return;

    }



    if (!agree.checked) {

        showToast("Accept Terms & Conditions.");

        return;

    }

    registeredUser = username;
    registeredPass = password;

    showToast("Registration Successful!");



    document.querySelector(".register-form").reset();



    setTimeout(() => {

        showLogin();

    }, 1200);

});

showLogin();


// checkout system opener 


checkoutBtn.addEventListener("click", (e) => {

    e.preventDefault();

    if (cart.length === 0) {
        showCheckoutToast("Your cart is empty!");
        return;
    }
    renderCheckout();
    checkoutOverlay.classList.add("active");
});


// checkout system closer 


closeCheckout.addEventListener("click", (e) => {

    e.preventDefault();

    checkoutOverlay.classList.remove("active");

});

checkoutOverlay.addEventListener("click", (e) => {

    if (e.target === checkoutOverlay) {

        checkoutOverlay.classList.remove("active");

    }

});


// display total amount


function renderCheckout() {

    checkoutCartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {

        subtotal += item.price * item.qty;

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

                Rs.${item.price * item.qty}

            </strong>

        </div>

        `;

    });

    checkoutSubtotal.innerHTML = `Rs.${subtotal}`;

    checkoutTotal.innerHTML = `Rs.${subtotal + 250}`;

}


// History


function renderHistory() {

    const orders =
        JSON.parse(localStorage.getItem("orderHistory")) || [];

    historyList.innerHTML = "";

    if (orders.length === 0) {

        historyList.innerHTML = "<p>No orders yet.</p>";

        return;

    }

    orders.slice().reverse().forEach(order => {

        historyList.innerHTML += `

        <div class="history-order">

            <h3>Order #${order.orderNo}</h3>

            <p><strong>Date:</strong> ${order.date}</p>

            <p><strong>Time:</strong> ${order.time}</p>

            <p><strong>Payment:</strong> ${order.payment}</p>

            <hr>

            ${order.items.map(item => `

            <div class="history-item">

                <span>${item.name} × ${item.qty}</span>

                <span>Rs.${item.price * item.qty}</span>

            </div>

            `).join("")}

            <hr>

            <h4>Total : Rs.${order.total}</h4>

            <div style="margin-top:15px;display:flex;gap:10px;">

                <button class="btn repeat-order" data-order="${order.orderNo}">
                    Repeat Order
                </button>

            </div>

        </div>

        `;

    });

}


historyIcon.addEventListener("click", (e) => {

    e.preventDefault();

    renderHistory();

    historyOverlay.classList.add("active");

});

closeHistory.addEventListener("click", (e) => {

    e.preventDefault();

    historyOverlay.classList.remove("active");

});

historyOverlay.addEventListener("click", (e) => {

    if (e.target === historyOverlay) {

        historyOverlay.classList.remove("active");

    }

});


clearHistoryBtn.addEventListener("click", () => {

    const history = JSON.parse(localStorage.getItem("orderHistory")) || [];

    if (history.length === 0) {
        showCheckoutToast("History is empty!");
        return;
    }

    localStorage.removeItem("orderHistory");

    renderHistory();

    showCheckoutToast("History cleared!");

});


// zip code 


const zip = document.getElementById("zip");

zip.addEventListener("input", () => {
    zip.value = zip.value.replace(/\D/g, "");
});


// payment methods 


paymentMethods.forEach(method => {

    method.addEventListener("change", () => {

        if (method.value === "card" && method.checked) {

            creditCardInfo.classList.remove("hidden");

            codInfo.classList.add("hidden");

        }

        if (method.value === "cod" && method.checked) {

            creditCardInfo.classList.add("hidden");

            codInfo.classList.remove("hidden");

        }

    });

});


// card numbers 


const cardNumber = document.getElementById("card-number");

cardNumber.addEventListener("input", () => {
    let value = cardNumber.value.replace(/\D/g, "");
    value = value.substring(0, 16);
    value = value.match(/.{1,4}/g)?.join("-") || "";
    cardNumber.value = value;
});


// expiry date


const expiry = document.getElementById("card-expiry");

expiry.addEventListener("input", () => {
    let value = expiry.value.replace(/\D/g, "");
    value = value.substring(0, 4);
    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    }
    expiry.value = value;
});


// CVV


const cvv = document.getElementById("card-cvv");

cvv.addEventListener("input", () => {
    cvv.value = cvv.value.replace(/\D/g, "");
});


// submit form 


checkoutForm.addEventListener("submit", (e) => {

    e.preventDefault();
    if (cart.length === 0) {
        showCheckoutToast("Your cart is empty!");
        return;
    }

    const inputs = checkoutForm.querySelectorAll("input[required]");

    for (const input of inputs) {

        // When COD is selected

        if (input.offsetParent === null) {
            continue;
        }

        if (!input.checkValidity()) {
            showCheckoutToast("Please complete all required information.");
            input.focus();
            return;
        }

    }

    // When Credit Card is selected

    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

    if (selectedPayment === "card") {

        // Card Number

        if (cardNumber.value.length !== 19) {
            showCheckoutToast("Enter a valid card number.");
            cardNumber.focus();
            return;
        }

        // Expiry

        const exp = expiry.value.split("/");
        const month = Number(exp[0]);
        const year = Number(exp[1]);
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear() % 100;

        if (expiry.value.length !== 5) {
            showCheckoutToast("Enter expiry in MM/YY format.");
            expiry.focus();
            return;
        }

        if (month < 1 || month > 12) {
            showCheckoutToast("Expiry month must be between 01 and 12.");
            expiry.focus();
            return;
        }

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            showCheckoutToast("Your card has expired.");
            expiry.focus();
            return;
        }

        // CVV

        if (cvv.value.length !== 3) {
            showCheckoutToast("Enter a valid CVV.");
            cvv.focus();
            return;
        }

    }

    setTimeout(() => {
        showCheckoutToast("Thank you for ordering from JAFFEE!");
    }, 300);

    // SAVE ORDER

    const history =
        JSON.parse(localStorage.getItem("orderHistory")) || [];
    const now = new Date();

    const order = {
        orderNo: history.length + 1001,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        payment: selectedPayment === "card"
            ? "Credit Card"
            : "Cash On Delivery",

        items: [...cart],

        total: cart.reduce((sum, item) => sum + item.price * item.qty, 0) + 250

    };

    history.push(order);

    localStorage.setItem("orderHistory", JSON.stringify(history));

    cart = [];
    renderCart();
    cartTab.classList.remove("cart-active");
    checkoutOverlay.classList.remove("active");
    checkoutForm.reset();
    creditCardInfo.classList.remove("hidden");
    codInfo.classList.add("hidden");

});

document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("repeat-order")) return;
    const orderNo = Number(e.target.dataset.order);
    const history = JSON.parse(localStorage.getItem("orderHistory")) || [];
    const order = history.find(o => o.orderNo === orderNo);
    if (!order) return;
    cart = [];

    order.items.forEach(item => {

        cart.push({
            ...item
        });

    });

    renderCart();
    historyOverlay.classList.remove("active");
    cartTab.classList.add("cart-active");
    showCheckoutToast("Previous order added to cart!");

});


// Open Policies Popup


function openPolicies() {
    policiesOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}


// Close Policies Popup


function closePoliciesPopup() {
    policiesOverlay.classList.remove("active")
    document.body.style.overflow = "";
}

openPoliciesBtns.forEach(button => {

    button.addEventListener("click", (e) => {
        e.preventDefault();
        openPolicies();
        showTerms();
    });

});

closePolicies.addEventListener("click", (e) => {
    e.preventDefault();
    closePoliciesPopup();
});

policiesOverlay.addEventListener("click", (e) => {

    if (e.target === policiesOverlay) {
        closePoliciesPopup();
    }

});


// terms & conditions content


function showTerms() {
    termsContent.style.display = "block";
    privacyContent.style.display = "none";
    termsBtn.classList.add("active-policy");
    privacyBtn.classList.remove("active-policy");
}


// Privacy policy content


function showPrivacy() {
    privacyContent.style.display = "block";
    termsContent.style.display = "none";
    privacyBtn.classList.add("active-policy");
    termsBtn.classList.remove("active-policy");
}

termsBtn.addEventListener("click", showTerms);
privacyBtn.addEventListener("click", showPrivacy);


// Footer Buttons


footerTerms.addEventListener("click", (e) => {
    e.preventDefault();
    openPolicies();
    showTerms();
});

footerPrivacy.addEventListener("click", (e) => {
    e.preventDefault();
    openPolicies();
    showPrivacy();
});