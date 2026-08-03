# ☕ JAFFEE

A modern, fully responsive front-end coffee shop website built using **HTML5**, **CSS3**, and **Vanilla JavaScript**. JAFFEE provides an interactive online ordering experience with a dynamic menu, shopping cart, authentication system, checkout process, order history management, and responsive design.

---

# ✨ Features

### 🏠 Home Page
- Responsive navigation bar
- Hero section with background image
- Smooth scrolling to menu
- Mobile-friendly hamburger menu

### ☕ Dynamic Coffee Menu
- Menu generated dynamically using JavaScript
- Four product categories:
  - High Volume
  - Summer Favourites
  - Brews & Teas
  - Artisan Bakery
- Product images, names, prices, and Add to Cart buttons

### 🛒 Shopping Cart
- Slide-in cart panel
- Add products dynamically
- Increase/decrease quantity
- Automatic item removal when quantity reaches zero
- Live cart counter
- Real-time total price calculation

### 📜 Order History
- Responsive order history popup
- Automatically saves every successful order
- Displays order number
- Displays complete order summary
- Displays order date & time
- Repeat Order button
- Clear History button
- Empty history validation
- Stores history using Local Storage
- Preserves history after browser refresh

### 🔐 Login & Registration
- Animated popup modal
- Login form
- Registration form
- Form switching animation
- Floating input labels
- Client-side validation
- Toast notifications

### 💳 Checkout System
- Customer information form
- Shipping address form
- Payment method selection
- Credit Card payment
- Cash on Delivery option
- Dynamic order summary
- Delivery charges calculation
- Place Order functionality
- Automatic order history saving
- Success toast notification
- Thank You confirmation message

### 🔔 Toast Notifications
- Login success
- Registration success
- Validation messages
- Empty cart notification
- Successful order notification
- History cleared notification
- History empty notification

### 💾 Local Storage
- Saves order history automatically
- Loads previous orders after page refresh
- Persistent browser storage

### 📱 Responsive Design
- Mobile navigation
- Responsive menu cards
- Responsive shopping cart
- Responsive checkout page
- Responsive order history popup
- Responsive footer
- Optimized layouts for desktop, tablet, and mobile devices

### ✨ User Experience
- Smooth scrolling
- Sliding animations
- Popup overlays
- Toast notifications
- Interactive buttons
- Modern UI design
- One-click Repeat Order functionality

---

# 📂 Project Structure

```text
JAFFEE/
│
├── index.html
├── jaffee.css
├── jaffee.js
├── images/
│   ├── Coffee Images
│   ├── Logo
│   ├── Banner
│   ├── Video
│   ├── Icons
│   └── Screenshots
│
└── README.md
```

---

# 📄 HTML Structure

## 1. Document Setup
- HTML5 Boilerplate
- Meta Tags
- CSS Linking
- JavaScript Linking
- Fonts
- Icons

## 2. Header
- Logo
- Navigation Menu
- Cart Icon
- History Icon
- Sign In Button
- Hamburger Menu

## 3. Hero Section
- Coffee Branding
- Description
- Order Now Button

## 4. Menu Section
- Dynamic Product Categories
- Product Cards
- Add to Cart Buttons

## 5. Shopping Cart
- Cart Items
- Quantity Controls
- Total Price
- Checkout Button

## 6. Coffee Information
- Coffee Video
- Delivery Banner

## 7. Footer
- Site Links
- Menu Links
- Contact Details
- Opening Hours

## 8. Login Popup
- Login Form
- Register Form
- Toast Notification

## 9. Checkout Popup
- Customer Information
- Shipping Address
- Payment Method
- Order Summary
- Place Order Button

## 10. Order History Popup
- Order Cards
- Order Number
- Order Summary
- Order Date & Time
- Repeat Order Button
- Clear History Button

---

# 🎨 CSS Organization

## Global Styling
- CSS Reset
- Variables
- Typography
- Utility Classes

## Layout Styling
- Header
- Hero Section
- Menu Layout
- Shopping Cart
- Login Modal
- Checkout Modal
- Order History Modal
- Footer

## Components
- Buttons
- Forms
- Cards
- Cart Items
- Order History Cards
- Repeat Order Button
- Clear History Button
- Toast Notifications

## Responsive Design
- Desktop Layout
- Tablet Layout
- Mobile Layout

---

# ⚙️ JavaScript Functionality

## DOM Element Selection
- Select required HTML elements

## Product Database
- Store products using JavaScript objects
- Product categories
- Images
- Prices
- IDs

## Dynamic Menu Rendering
- Generate menu automatically
- Create product cards
- Insert into HTML

## Shopping Cart
- Add products
- Update quantity
- Remove products
- Calculate totals
- Update cart badge

## Mobile Navigation
- Toggle hamburger menu
- Change menu icon
- Auto-close after selection

## Smooth Scrolling
- Scroll to menu section

## Login System
- Open popup
- Close popup
- Escape key support
- Click outside to close

## Login/Register Switching
- Switch forms
- Animate titles
- Dynamic popup height

## Toast Notifications
- Login success
- Registration success
- Validation messages
- Empty cart notification
- Order success notification
- History cleared notification
- History empty notification

## Login Validation
- Username validation
- Password validation
- Form reset

## Registration Validation
- Username validation
- Email validation
- Password validation
- Terms & Conditions validation

## Checkout System
- Open checkout
- Close checkout
- Render order summary
- Payment method switching
- Form validation
- Order placement
- Save order history
- Clear cart
- Reset form

## Order History
- Save completed orders
- Generate order numbers
- Store date & time
- Display previous orders
- Repeat previous orders
- Clear all order history
- Load history from Local Storage

---

# 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Local Storage API
- Flexbox
- CSS Grid
- CSS Variables
- Media Queries
- Font Awesome
- Boxicons
- Google Fonts (Syne)

---

# 📚 JavaScript Concepts Used

- DOM Manipulation
- Event Listeners
- Event Delegation
- Arrays
- Objects
- Template Literals
- Arrow Functions
- Functions
- Loops
- forEach()
- map()
- find()
- flatMap()
- filter()
- JSON.stringify()
- JSON.parse()
- Local Storage
- Date Object
- Conditional Statements
- Form Validation
- Class Manipulation
- Dynamic Rendering

---

# 🚀 How to Run

Clone the repository:

```bash
git clone https://github.com/Fakhir05/JAFFEE.git
```

Open the project folder:

```bash
cd JAFFEE
```

Finally, open **index.html** in your browser.

No installation or build process is required.

---

# 📸 Screenshots

### 🏠 Home Page

<p align="center">
<img width="945" height="451" alt="image" src="https://github.com/user-attachments/assets/fc58bc0d-f742-4303-92b3-5d93f120b5db" />
</p>

### ☕ Menu

<p align="center">
<img width="946" height="451" alt="image" src="https://github.com/user-attachments/assets/4d7f285e-db39-49aa-bf71-affce9e86bb4" />
</p>

### 🛒 Shopping Cart

<p align="center">
<img width="945" height="449" alt="image" src="https://github.com/user-attachments/assets/b15dbe0d-ff09-4122-801c-0dce5b434e49" />
</p>

### 🔐 Login Popup

<p align="center">
<img width="950" height="450" alt="image" src="https://github.com/user-attachments/assets/03d3c342-af22-4828-b2ab-d8726b5748b5" />
</p>

### 📝 Registration Popup

<p align="center">
<img width="953" height="450" alt="image" src="https://github.com/user-attachments/assets/e23fb046-b9b9-4227-bcb2-cf32e2fb1fd8" />
</p>

### 💳 Checkout Page

<p align="center">
<img width="943" height="449" alt="image" src="https://github.com/user-attachments/assets/396e414b-dc93-421e-8bbe-ada47173da48" />
</p>

### 📜 Order History

<p align="center">
  <img width="944" height="452" alt="image" src="https://github.com/user-attachments/assets/48f2fda0-e738-4031-8eb2-b4bf390980bd" />
</p>

### 📱 Mobile View

<p align="center">
<img width="299" height="450" alt="image" src="https://github.com/user-attachments/assets/4bae906b-bd8a-4802-af80-fea988459a48" />
<img width="296" height="449" alt="image" src="https://github.com/user-attachments/assets/2ee930ee-887d-42fe-9c8b-25e50188cd42" />
<img width="296" height="451" alt="image" src="https://github.com/user-attachments/assets/78e5f401-6143-4260-8f26-6dc94a90b8cc" />
<img width="298" height="449" alt="image" src="https://github.com/user-attachments/assets/2538522b-7d47-4250-a6d4-15e19468902a" />
<img width="298" height="452" alt="image" src="https://github.com/user-attachments/assets/69873d78-11d3-4901-9481-e722a4d7de1b" />
<img width="297" height="446" alt="image" src="https://github.com/user-attachments/assets/b9aabc45-3d52-4a33-b5c5-21c2a871ff47" />
</p>

---

# ⭐ Future Improvements

- User authentication with backend
- Online payment gateway integration
- Order tracking
- Customer profile
- Wishlist
- Product search & filtering
- Dark mode
- Admin dashboard
- Backend database integration

---

# 👨‍💻 Author

**Fakhir Asghar**

GitHub: https://github.com/Fakhir05

