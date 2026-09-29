<div align="center">

  <img src="images/jaffeelogo1.png" alt="JAFFEE Logo" width="120" />

  # ☕ JAFFEE — Coffee Shop POS & Ordering System

  <p>
    <strong>A modern, responsive Point of Sale (POS) and online ordering web application built for artisan coffee shops & bakeries.</strong>
  </p>

  <p>
    <a href="https://github.com/Fakhir05/JAFFEE"><img src="https://img.shields.io/badge/Status-Active-success.svg?style=for-the-badge" alt="Status"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
    <a href="#-local-storage"><img src="https://img.shields.io/badge/Storage-LocalStorage-blueviolet?style=for-the-badge" alt="LocalStorage"></a>
    <a href="#-responsive-design"><img src="https://img.shields.io/badge/Mobile-Responsive-brightgreen?style=for-the-badge" alt="Responsive"></a>
  </p>

  <p>
    <a href="#-overview">Overview</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-screenshots">Screenshots</a> •
    <a href="#-future-roadmap">Roadmap</a> •
    <a href="#-author">Author</a>
  </p>

</div>

---

## 📖 Overview

**JAFFEE** is a front-end Point of Sale (POS) and customer ordering platform designed with modern UI/UX principles. It streamlines coffee and bakery ordering through an intuitive, single-page interface powered entirely by standard web technologies with **zero external runtime dependencies** or build setups.

Whether operated by a cashier on a desktop/tablet or browsed directly by customers on their smartphones, JAFFEE offers instant category switching, a real-time shopping cart drawer, smart checkout form validation with masked card inputs, persistent order history with one-click reordering, and integrated policy popups.

---

## ✨ Key Features

### ☕ Dynamic Menu & Category Filtering
- **Dynamic JavaScript Catalog**: Products are structured by category with high-resolution imagery, titles, and localized pricing in Pakistani Rupees (`Rs.`).
- **Interactive Categories**:
  - ☕ **High Volume**: Espresso, Americano, Cappuccino, Cortado, Café Mocha
  - 🧊 **Summer Favourites**: Iced Americano, Iced Latte, Affogato, Caramel Frappé, Matcha Frappé
  - 🍵 **Brews & Teas**: Matcha Latte, Chai Tea Latte, French Press, Hot Chocolate, Jasmine Green Tea
  - 🥐 **Artisan Bakery**: Butter Croissant, Almond Croissant, Blueberry Muffin, Cinnamon Roll, Sourdough Avocado Toast
- **Fluid Animation System**: Seamless category switching using custom CSS keyframe transitions (`fadeOut` and `fadeCategory`).
- **Footer Category Shortcuts**: One-click navigation links in the footer that automatically scroll to the menu, activate the corresponding filter button, and render the target category.

### 🛒 Slide-In POS Shopping Cart
- **Dynamic Cart Drawer**: Smooth slide-in cart tab accessible from the header badge.
- **Live Quantity Controls**: Increment (`+`) or decrement (`-`) item quantities with automatic item removal when count reaches zero.
- **Real-Time Total Calculations**: Real-time counter updates on the bag badge icon and accurate running subtotal.
- **Animated Toast Feedback**: Non-intrusive notifications confirming item addition or alerts when cart operations occur.

### 💳 Complete Checkout & Payment Validation
- **Customer & Shipping Information**: Multi-field collection including full name, validated email, street address, city, and 5-digit postal code.
- **Payment Method Switching**:
  - 💳 **Credit Card**: Dynamic card details panel with smart input formatting:
    - Automatic card number grouping in chunks of 4 (`0000-0000-0000-0000`)
    - Expiration date auto-formatting (`MM/YY`) with validation against past expiration months/years
    - Strict 3-digit CVV security code verification
  - 💵 **Cash On Delivery (COD)**: Seamlessly toggles card fields off and applies delivery payment instructions.
- **Itemized Order Summary**: Displays checkout item breakdown, itemized subtotal, fixed flat delivery fee (`Rs. 250`), and final order total.

### 📜 Order History & Reorder System
- **Browser LocalStorage Persistence**: Finished orders are saved client-side and survive page refreshes and browser restarts.
- **Sequential Order Identification**: Automatic order number generation starting from `#1001`.
- **Timestamped Ledger**: Captures exact date, local time, payment method, itemized list, and total amount.
- **🔁 One-Click Repeat Order**: Easily reload any previous order directly into the active cart for quick reordering.
- **History Management**: Ability to view all past receipts or clear the entire order history with confirmation toasts.

### 🔐 Authentication Modal (Login & Register)
- **Sliding Dual-Card Modal**: Smooth transitions between Login and Registration views.
- **Input Validation**:
  - Email format verification via RegEx pattern
  - Password minimum length enforcement (minimum 6 characters)
  - Mandatory Terms & Conditions acceptance checkbox
- **Interactive Feedback**: Custom toaster notification popups alerting user of successful sign-in, account creation, or missing inputs.

### 📑 Integrated Policies Modal
- Accessible directly from Desktop navigation, Mobile drawer, and Footer links.
- Interactive tab switching between:
  - 📄 **Terms & Conditions**: Orders, pricing, payment terms, delivery expectations, cancellation, and refund policies.
  - 🔒 **Privacy Policy**: Data collection practices, payment security, cookies, and user rights.

### 📱 Responsive Design & Accessibility
- **Mobile Hamburger Drawer**: Collapsible mobile menu with animated open/close state transitions.
- **Universal Modal Dismissal**: Close any open popup (Cart, Login, Checkout, History, Policies) via the overlay backdrop or by pressing the <kbd>Escape</kbd> key.
- **Smooth Navigation**: One-click smooth scrolling to the menu catalog or footer contact details.
- **Engaging Media**: Embedded responsive coffee video showcase and free delivery promotional banner.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, modal overlays, audio/video elements, and form input controls |
| **CSS3** | Modern flexbox & grid layouts, custom variables, keyframe animations, and media queries |
| **JavaScript (ES6+)** | Dynamic DOM rendering, cart state management, input masking, and form validation |
| **LocalStorage API** | Client-side persistence for order histories and user session simulation |
| **Font Awesome 6 & Boxicons** | Modern vector iconography for navigation, cart badges, and form controls |
| **Syne (Google Fonts)** | Modern typographic styling and branding |

---

## 📂 Project Structure

```text
POS/
├── images/                                # Project graphics, assets & photography
│   ├── jaffeelogo1.png                    # Brand logo
│   ├── jaffee-title-removebg-preview.png  # Favicon icon
│   ├── coffee-video.mp4                   # Hero showcase media
│   ├── Free-delivery.png                  # Promotional offer banner
│   └── *-removebg-preview.png             # Transparent coffee and bakery product images
├── jaffee.html                            # Main application markup & modal templates
├── jaffee.css                             # Application styling, responsive breakpoints & animations
├── jaffee.js                              # Business logic, catalog data, cart & history state
└── README.md                              # Project documentation & GitHub showcase
```

---

## 🚀 Quick Start

No compilers, package managers, or server installations are required!

### 1. Clone the Repository
```bash
git clone https://github.com/Fakhir05/JAFFEE.git
```

### 2. Navigate to Project Folder
```bash
cd JAFFEE
```

### 3. Open in Browser
Double-click `jaffee.html` or launch it via your preferred browser:
```bash
# Windows
start jaffee.html

# macOS
open jaffee.html

# Linux
xdg-open jaffee.html
```

> **Tip**: You can also open the project folder in [Visual Studio Code](https://code.visualstudio.com/) and run it using the **Live Server** extension.

---

## 📸 Screenshots

### 🏠 Home Page & Hero Section
<img width="941" height="447" alt="JAFFEE Home Page" src="https://github.com/user-attachments/assets/b7bfebd0-b132-468b-863c-7a958af5ed09" />

---

### ☕ Menu & Category Selection
<img width="941" height="449" alt="JAFFEE Menu Section" src="https://github.com/user-attachments/assets/c9a29fdc-d555-47d7-b522-65a42d596795" />

---

### 🛒 Slide-In POS Shopping Cart
<img width="941" height="449" alt="JAFFEE Shopping Cart" src="https://github.com/user-attachments/assets/7555f930-8c06-4090-abd1-15e31a245c55" />

---

### 🔐 Login & Registration System
<div align="center">
  <img width="460" alt="Login Modal" src="https://github.com/user-attachments/assets/958f1595-b075-4101-9c2e-f4e4b239f816" />
  &nbsp;
  <img width="460" alt="Registration Modal" src="https://github.com/user-attachments/assets/a51279bc-d14c-4145-86d4-9513a43321ff" />
</div>

---

### 💳 Checkout & Payment Validation
<img width="941" height="450" alt="Checkout Modal" src="https://github.com/user-attachments/assets/eb1a8a3c-9f84-4e27-8387-985723fcc460" />

---

### 📜 Order History with Repeat Order
<img width="943" height="449" alt="Order History Modal" src="https://github.com/user-attachments/assets/fcf857b4-755e-42ad-b3fa-75010eaf6a4e" />

---

### 📑 Policies & Legal Modal
<img width="943" height="449" alt="Policies Modal" src="https://github.com/user-attachments/assets/0355cbd4-1a8b-46fd-8349-18e5bc788305" />

---

### 📱 Responsive Mobile Views
<div align="center">
  <img width="280" alt="Mobile View 1" src="https://github.com/user-attachments/assets/7da21562-1513-4daf-8779-a8f22fe70d63" />
  <img width="280" alt="Mobile View 2" src="https://github.com/user-attachments/assets/8f42f415-ee00-4d82-afdf-88d400379ead" />
  <img width="280" alt="Mobile View 3" src="https://github.com/user-attachments/assets/c9726b77-863c-4a6a-a8c3-ec486f553b84" />
  <br/><br/>
  <img width="280" alt="Mobile View 4" src="https://github.com/user-attachments/assets/0773ddc1-3060-439e-b3f2-9dd98e761f4a" />
  <img width="280" alt="Mobile View 5" src="https://github.com/user-attachments/assets/5fb3b135-0f2c-4aa0-bafe-88c4a65a2446" />
  <img width="280" alt="Mobile View 6" src="https://github.com/user-attachments/assets/a81d7904-ac3b-4d5b-bd73-bb9d2777ad32" />
</div>

---

## 🔮 Future Roadmap

- [ ] **Backend Integration**: Node.js/Express API with MongoDB or PostgreSQL for persistent cloud storage.
- [ ] **Real Payment Gateway**: Integration with Stripe, PayPal, JazzCash, or EasyPaisa.
- [ ] **Receipt Printing & Export**: PDF receipt generation and thermal printer output for physical POS counters.
- [ ] **Admin & Kitchen Display System (KDS)**: Real-time order fulfillment screen for baristas and kitchen staff.
- [ ] **Inventory & Stock Tracking**: Real-time ingredient count reduction and out-of-stock badges.
- [ ] **Dark Mode / Custom Themes**: High-contrast theme options for counter display environments.
- [ ] **Progressive Web App (PWA)**: Offline caching and mobile app installation support.

---

## 👨‍💻 Author

**Fakhir Asghar**
- GitHub: [@Fakhir05](https://github.com/Fakhir05)
- Repository: [Fakhir05/JAFFEE](https://github.com/Fakhir05/JAFFEE)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
