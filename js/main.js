const menuData = [
  {
    id: 1,
    name: "Dum Ka Murgh",
    desc: "Chicken slow cooked with onion and exotic spices.",
    price: 380,
    cat: "main",
    type: "nonveg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAG88xFMI2r_5RoXdabFdSs2_qVmadf6gTB1qGpONLUGFqnwp0NJk0kpeH&s=10",
  },
  {
    id: 2,
    name: "Butter Chicken",
    desc: "Tandoori roast chicken with rich tomato gravy.",
    price: 395,
    cat: "main",
    type: "nonveg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wsNK4fMMkQfI7b4k72F-Qr_4T5QCjSt0yfUSICbfwg&s=10",
  },
  {
    id: 3,
    name: "Greek Garden Salad",
    desc: "Fresh greens, feta, olives, cherry tomatoes & cucumber with sumac.",
    price: 260,
    cat: "starters",
    type: "veg",
    img: "images/img11.jpg",
  },
  {
    id: 4,
    name: "Murgh Tikka Masala",
    desc: "Tender marinated chicken in creamy rich gravy.",
    price: 395,
    cat: "main",
    type: "nonveg",
    img: "https://littlesunnykitchen.com/wp-content/uploads/Chicke-tikka-masala-2-7.jpg",
  },
  {
    id: 5,
    name: "Prawns Masala",
    desc: "Prawns cooked with onion, tomato masala & coriander.",
    price: 410,
    cat: "main",
    type: "nonveg",
    img: "https://www.seemology.com/wp-content/uploads/2016/09/IMG_3055.jpg.pixlr_.jpg",
  },
  {
    id: 6,
    name: "Goan Fish Curry",
    desc: "Fresh fish with aromatic paste and local spices.",
    price: 410,
    cat: "main",
    type: "nonveg",
    img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Goan-Fish-Curry.jpg",
  },
  {
    id: 7,
    name: "Kadai Chicken",
    desc: "Chicken braised with bell peppers & ground spices.",
    price: 390,
    cat: "main",
    type: "nonveg",
    img: "images/img5.jpg",
  },
  {
    id: 8,
    name: "Rajasthani Laal Maas",
    desc: "Mutton slow cooked in yoghurt and hot spices.",
    price: 410,
    cat: "main",
    type: "nonveg",
    img: "images/img5.jpg",
  },
  {
    id: 9,
    name: "Chicken Shawarma Wrap",
    desc: "Grilled chicken wrap with fresh salad & sauce.",
    price: 280,
    cat: "starters",
    type: "nonveg",
    img: "images/img7.jpg",
  },
  {
    id: 11,
    name: "Tandoori Naan Basket",
    desc: "Assorted naans — kalonji, garlic & plain.",
    price: 180,
    cat: "starters",
    type: "veg",
    img: "images/img5.jpg",
  },
  {
    id: 12,
    name: "Chocolate Brownie",
    desc: "Rich fudgy brownie with walnuts & chocolate sauce.",
    price: 220,
    cat: "desserts",
    type: "veg",
    img: "images/img2.jpg",
  },
  {
    id: 13,
    name: "Chocolate Layer Cake",
    desc: "Multi-layer cake with white chocolate drizzle.",
    price: 250,
    cat: "desserts",
    type: "veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIi9T_WczqL7hk5wsEyGHYvFwrQe98zq6Q42Gr2K0mQ&s=10",
  },
  {
    id: 14,
    name: "Kulfi Shulfi",
    desc: "Traditional kulfi with cakes and sweet treats.",
    price: 150,
    cat: "desserts",
    type: "veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbP0wshOy2M_jFRWnb1AqzxakM1apgxvfYRzxCPidhw&s=10",
  },
  {
    id: 15,
    name: "Paneer Tikka Masala",
    desc: "Soft paneer cubes in a creamy tomato-onion gravy.",
    price: 360,
    cat: "main",
    type: "veg",
    img: "images/img5.jpg",
  },
  {
    id: 16,
    name: "Dal Makhani",
    desc: "Slow-cooked black lentils in rich butter & cream.",
    price: 320,
    cat: "main",
    type: "veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfOZ88Ve23u80ZilkWglduJRcIuY2p1TzTejoDZKbNg&s=10",
  },
  {
    id: 17,
    name: "Palak Paneer",
    desc: "Fresh spinach puree with cottage cheese cubes.",
    price: 340,
    cat: "main",
    type: "veg",
    img: "https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-recipe-featured.jpg",
  },
  {
    id: 18,
    name: "Paneer Butter Masala",
    desc: "Paneer in smooth, buttery tomato cashew gravy.",
    price: 370,
    cat: "main",
    type: "veg",
    img: "https://cdn.bakedbree.com/uploads/2024/06/Paneer-Tikka-Masala-A_BB_Paneer_Tikka_Masala_Feature_5.jpg",
  },
  {
    id: 19,
    name: "Malai Kofta",
    desc: "Cottage cheese dumplings in mild creamy gravy.",
    price: 380,
    cat: "main",
    type: "veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6kOq18_bsrL3dOahot59RgjHETqXChyB9cMLnmxgaYXu88I3ZYISHHY&s=10",
  },
  {
    id: 20,
    name: "Vegetable Biryani",
    desc: "Fragrant basmati rice with mixed veggies & spices, served with raita.",
    price: 350,
    cat: "main",
    type: "veg",
    img: "images/img12.jpg",
  },
  {
    id: 21,
    name: "Veg Tikkis",
    desc: "Crispy pan-seared veg patties with mint chutney & salad.",
    price: 240,
    cat: "starters",
    type: "veg",
    img: "images/img8.jpg",
  },
  {
    id: 23,
    name: "Mushroom Tikka",
    desc: "Char-grilled mushrooms marinated in spices & herbs.",
    price: 290,
    cat: "starters",
    type: "veg",
    img: "images/img8.jpg",
  },
  {
    id: 24,
    name: "Veg Hakka Noodles",
    desc: "Stir-fried noodles with fresh vegetables & soy glaze.",
    price: 280,
    cat: "starters",
    type: "veg",
    img: "images/img7.jpg",
  },
  {
    id: 25,
    name: "Gulab Jamun",
    desc: "Soft khoya dumplings soaked in rose-cardamom sugar syrup.",
    price: 120,
    cat: "desserts",
    type: "veg",
    img: "https://rakskitchen.net/wp-content/uploads/2021/09/gulab-jamun.jpg",
  },
  {
    id: 26,
    name: "Rasmalai",
    desc: "Soft cottage cheese discs in chilled saffron milk.",
    price: 140,
    cat: "desserts",
    type: "veg",
    img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/rasmalai%20(1).webp?updatedAt=1727156174218",
  },
  {
    id: 27,
    name: "Rice Kheer",
    desc: "Creamy basmati rice pudding with nuts & cardamom.",
    price: 130,
    cat: "desserts",
    type: "veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaw3Jy5vBPsJzkdzkp8f_eP-RhJdsZX2pYSdllEDWkHoDxH6kPXzFpUgv&s=10",
  },
  {
    id: 28,
    name: "Jalebi with Rabri",
    desc: "Crispy saffron jalebis served with thick rabri.",
    price: 150,
    cat: "desserts",
    type: "veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTri_vWxrVBok2UVkYK1h_4KG47i2SZXPINPfC5NBJBzPsSdjHiZ6zyd4xQ&s=10",
  },
  {
    id: 29,
    name: "Rasgulla",
    desc: "Spongy cottage cheese balls in light sugar syrup.",
    price: 110,
    cat: "desserts",
    type: "veg",
    img: "https://palatesdesire.com/wp-content/uploads/2022/09/rasgulla-recipe@palates-desire-500x375.jpg",
  },
  {
    id: 30,
    name: "Gajar Ka Halwa",
    desc: "Slow-cooked carrot halwa with ghee, milk & dry fruits.",
    price: 160,
    cat: "desserts",
    type: "veg",
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Gajar-Ka-Halwa-2.jpg",
  },
  // { id: 31, name: 'Moong Dal Halwa', desc: 'Rich lentil halwa roasted in ghee with almonds.', price: 170, cat: 'desserts', type: 'veg', img: 'images/img2.jpg' },
  {
    id: 32,
    name: "Phirni",
    desc: "Chilled ground rice pudding with pistachio & rose.",
    price: 135,
    cat: "desserts",
    type: "veg",
    img: "https://weikfield.com/wp-content/uploads/2024/08/Phirni-Custard.jpg",
  },
  {
    id: 33,
    name: "Malai Kulfi",
    desc: "Traditional dense milk kulfi on stick, pistachio topped.",
    price: 90,
    cat: "desserts",
    type: "veg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xpZtE0toGrcQQX3eWILS8202NXUN8RmYGA&s",
  },
];

const reviewsData = [
  {
    name: "Amit Mehta",
    stars: 5,
    text: "Great service and polite staff. Walked in for lunch and the food was delicious. Plenty of options and relaxing ambience. Will visit again!",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    stars: 5,
    text: "Visited on my birthday — amazing experience! Staff surprised me with a complimentary cake. The live grill is a unique touch.",
    date: "1 month ago",
  },
  {
    name: "Rahul Verma",
    stars: 4,
    text: "Perfect for barbecue lovers! The unlimited buffet has great variety. Bangalore outlet stands out for quality and service.",
    date: "3 weeks ago",
  },
  {
    name: "Sakshi Sethi",
    stars: 5,
    text: "Unforgettable dining experience with delicious grilled food. The butter chicken and desserts are must-tries!",
    date: "1 week ago",
  },
];

let cart = [];
let selectedRating = 0;
let currentFilter = "all";
let currentUser = null;

/* ===== Auth System ===== */
function getUsers() {
  return JSON.parse(localStorage.getItem("salt_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("salt_users", JSON.stringify(users));
}

function isLoggedIn() {
  return currentUser !== null;
}

function openAuth(tab = "login") {
  document.getElementById("authOverlay").classList.add("open");
  document.getElementById("authModal").classList.add("open");
  switchAuthTab(tab);
}

function closeAuth() {
  document.getElementById("authOverlay").classList.remove("open");
  document.getElementById("authModal").classList.remove("open");
}

function switchAuthTab(tab) {
  document
    .getElementById("tabLogin")
    .classList.toggle("active", tab === "login");
  document
    .getElementById("tabSignup")
    .classList.toggle("active", tab === "signup");
  document
    .getElementById("loginForm")
    .classList.toggle("active", tab === "login");
  document
    .getElementById("signupForm")
    .classList.toggle("active", tab === "signup");
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document
    .getElementById("signupEmail")
    .value.trim()
    .toLowerCase();
  const phone = document.getElementById("signupPhone").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;

  if (password !== confirm) {
    showToast("Passwords do not match!", "error");
    return;
  }
  if (password.length < 6) {
    showToast("Password must be at least 6 characters.", "error");
    return;
  }

  const users = getUsers();
  if (users.find((u) => u.email === email)) {
    showToast("Email already registered. Please login.", "error");
    switchAuthTab("login");
    return;
  }

  users.push({ name, email, phone, password });
  saveUsers(users);
  loginUser({ name, email, phone });
  closeAuth();
  e.target.reset();
  showToast(`Welcome, ${name}! Account created successfully.`, "success");
}

function handleLogin(e) {
  e.preventDefault();
  const email = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("loginPassword").value;
  const users = getUsers();
  const user = users.find(
    (u) => u.email === email && u.password === password,
  );

  if (!user) {
    showToast("Invalid email or password!", "error");
    return;
  }

  loginUser(user);
  closeAuth();
  e.target.reset();
  showToast(`Welcome back, ${user.name}!`, "success");
}

function loginUser(user) {
  currentUser = { name: user.name, email: user.email, phone: user.phone };
  localStorage.setItem("salt_session", JSON.stringify(currentUser));
  updateAuthUI();
  renderMenu();
}

function logout() {
  currentUser = null;
  localStorage.removeItem("salt_session");
  cart = [];
  updateCart();
  updateAuthUI();
  renderMenu();
  document.getElementById("userMenu").classList.remove("open");
  showToast("You have been logged out.", "success");
}

function toggleUserMenu() {
  document.getElementById("userMenu").classList.toggle("open");
}

function updateAuthUI() {
  const authButtons = document.getElementById("authButtons");
  const userMenu = document.getElementById("userMenu");
  const loginNotice = document.getElementById("loginNotice");

  if (isLoggedIn()) {
    authButtons.style.display = "none";
    userMenu.style.display = "block";
    document.getElementById("userName").textContent =
      currentUser.name.split(" ")[0];
    document.getElementById("userAvatar").textContent = currentUser.name
      .charAt(0)
      .toUpperCase();
    loginNotice.classList.remove("show");
  } else {
    authButtons.style.display = "flex";
    userMenu.style.display = "none";
    loginNotice.classList.add("show");
  }
}

function requireLogin() {
  showToast("Please login to add items to cart.", "error");
  openAuth("login");
}

function loadSession() {
  const session = localStorage.getItem("salt_session");
  if (session) {
    currentUser = JSON.parse(session);
    updateAuthUI();
  } else {
    updateAuthUI();
  }
}

document.addEventListener("click", (e) => {
  const userMenu = document.getElementById("userMenu");
  if (userMenu && !userMenu.contains(e.target)) {
    userMenu.classList.remove("open");
  }
});

function getMenuItems() {
  if (currentFilter === "all") return menuData;
  if (currentFilter === "veg")
    return menuData.filter((m) => m.type === "veg");
  return menuData.filter((m) => m.cat === currentFilter);
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const filtered = getMenuItems();
  grid.innerHTML = filtered
    .map(
      (item, i) => `
  <div class="menu-item" data-cat="${item.cat}" data-type="${item.type}" style="animation-delay:${i * 0.06}s">
    <div class="img-wrap"><img src="${item.img}" alt="${item.name}" /></div>
    <div class="info">
      <div class="title-row">
        <h4>${item.name}</h4>
        <span class="type-badge ${item.type}">
          <i class="fa-solid fa-${item.type === "veg" ? "leaf" : "drumstick-bite"}"></i>
          ${item.type === "veg" ? "Veg" : "Non-Veg"}
        </span>
      </div>
      <p class="desc">${item.desc}</p>
      <div class="bottom">
        <span class="price">₹${item.price}</span>
        ${
          isLoggedIn()
            ? `<button class="add-btn" onclick="addToCart(${item.id})"><i class="fa-solid fa-plus"></i> Add to Cart</button>`
            : `<button class="add-btn add-btn-locked" onclick="requireLogin()"><i class="fa-solid fa-lock"></i> Login to Add</button>`
        }
      </div>
    </div>
  </div>
`,
    )
    .join("");
}

function filterMenu(cat, btn) {
  currentFilter = cat;
  document
    .querySelectorAll(".menu-tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  renderMenu();
}

function addToCart(id) {
  if (!isLoggedIn()) {
    requireLogin();
    return;
  }
  const item = menuData.find((m) => m.id === id);
  const existing = cart.find((c) => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCart();
  const countEl = document.getElementById("cartCount");
  countEl.classList.remove("pop");
  void countEl.offsetWidth;
  countEl.classList.add("pop");
  showToast(`${item.name} added to cart!`);
}

function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartCount").textContent = count;

  const container = document.getElementById("cartItems");
  if (!cart.length) {
    container.innerHTML =
      '<div class="cart-empty"><i class="fa-solid fa-bag-shopping" style="font-size:2rem;color:#ddd;display:block;margin-bottom:10px"></i>Your cart is empty</div>';
    document.getElementById("cartTotal").textContent = "₹0";
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
  <div class="cart-item">
    <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
    <div class="cart-item-info">
      <div class="name">${item.name}</div>
      <div class="unit-price">₹${item.price} each</div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>
    <div class="item-price">₹${item.price * item.qty}</div>
  </div>
`,
    )
    .join("");

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cartTotal").textContent = "₹" + total;
}

function changeQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((c) => c.id !== id);
  updateCart();
}

function toggleCart() {
  document.getElementById("cartOverlay").classList.toggle("open");
  document.getElementById("cartSidebar").classList.toggle("open");
}

let selectedPayment = "upi";

function getCartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function openPayment() {
  if (!isLoggedIn()) {
    requireLogin();
    return;
  }
  if (!cart.length) {
    showToast("Your cart is empty!", "error");
    return;
  }
  const total = getCartTotal();
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);

  document.getElementById("paymentSummary").innerHTML = `
  <div class="row"><span>Items (${itemCount})</span><span>₹${total}</span></div>
  <div class="row"><span>Delivery Fee</span><span>₹40</span></div>
  <div class="row"><span>GST (5%)</span><span>₹${Math.round(total * 0.05)}</span></div>
  <div class="row total"><span>Total Payable</span><span>₹${total + 40 + Math.round(total * 0.05)}</span></div>
`;
  document.getElementById("payAmount").textContent =
    "₹" + (total + 40 + Math.round(total * 0.05));
  document.getElementById("paymentOverlay").classList.add("open");
  document.getElementById("paymentModal").classList.add("open");
}

function closePayment() {
  document.getElementById("paymentOverlay").classList.remove("open");
  document.getElementById("paymentModal").classList.remove("open");
}

function selectPayment(el) {
  document
    .querySelectorAll(".pay-method")
    .forEach((m) => m.classList.remove("active"));
  el.classList.add("active");
  selectedPayment = el.dataset.method;
  document
    .querySelectorAll(".payment-form")
    .forEach((f) => f.classList.remove("show"));
  const form = document.getElementById("form-" + selectedPayment);
  if (form) form.classList.add("show");
  const walletMethods = ["gpay", "phonepe", "paytm"];
  if (walletMethods.includes(selectedPayment)) {
    document.getElementById("form-upi").classList.add("show");
  }
}

function processPayment() {
  const btn = document.getElementById("payNowBtn");
  const total = getCartTotal() + 40 + Math.round(getCartTotal() * 0.05);
  const methodNames = {
    upi: "UPI",
    card: "Card",
    gpay: "Google Pay",
    phonepe: "PhonePe",
    paytm: "Paytm",
    netbanking: "Net Banking",
    cod: "Cash on Delivery",
  };

  btn.disabled = true;
  btn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';

  setTimeout(() => {
    cart = [];
    updateCart();
    closePayment();
    if (document.getElementById("cartSidebar").classList.contains("open"))
      toggleCart();
    btn.disabled = false;
    btn.innerHTML =
      '<i class="fa-solid fa-lock"></i> Pay <span id="payAmount">₹0</span>';
    showToast(
      `Payment successful via ${methodNames[selectedPayment]}! Order ₹${total} confirmed.`,
      "success",
    );
  }, 2000);
}

function renderStars(n) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<i class="fa-${i <= n ? "solid" : "regular"} fa-star"></i>`;
  }
  return html;
}

function renderReviews() {
  document.getElementById("reviewsGrid").innerHTML = reviewsData
    .map(
      (r, i) => `
  <div class="review-card reveal" style="transition-delay:${i * 0.08}s">
    <div class="review-stars">${renderStars(r.stars)}</div>
    <p>"${r.text}"</p>
    <div class="author"><i class="fa-solid fa-user"></i>${r.name}</div>
    <div class="date"><i class="fa-regular fa-clock" style="margin-right:4px"></i>${r.date}</div>
  </div>
`,
    )
    .join("");
  updateRatingSummary();
}

function updateRatingSummary() {
  const total = reviewsData.length;
  const avg = (
    reviewsData.reduce((s, r) => s + r.stars, 0) / total
  ).toFixed(1);
  document.getElementById("avgRating").textContent = avg;
  document.getElementById("totalReviews").textContent = total;
  document.getElementById("summaryRating").textContent = avg;
  document.getElementById("summaryCount").textContent = total;
}

function setRating(n) {
  selectedRating = n;
  const buttons = document.querySelectorAll("#starInput button");
  buttons.forEach((btn, i) => btn.classList.toggle("active", i < n));
}

function submitReview() {
  const name = document.getElementById("reviewName").value.trim();
  const text = document.getElementById("reviewText").value.trim();
  if (!name || !text) {
    showToast("Please fill in your name and review.");
    return;
  }
  if (!selectedRating) {
    showToast("Please select a star rating.");
    return;
  }

  reviewsData.unshift({
    name,
    stars: selectedRating,
    text,
    date: "Just now",
  });
  renderReviews();
  const newCard = document.querySelector("#reviewsGrid .review-card");
  if (newCard) {
    newCard.classList.add("revealed");
    newCard.style.animation = "fadeInUp .5s ease both";
  }
  if (window.scrollRevealObserver) {
    document
      .querySelectorAll("#reviewsGrid .review-card:not(.revealed)")
      .forEach((el) => {
        window.scrollRevealObserver.observe(el);
      });
  }
  document.getElementById("reviewName").value = "";
  document.getElementById("reviewText").value = "";
  document.getElementById("reviewEmail").value = "";
  selectedRating = 0;
  document
    .querySelectorAll("#starInput button")
    .forEach((b) => b.classList.remove("active"));
  showToast("Thank you for your review!");
}

function submitReservation(e) {
  e.preventDefault();
  showToast("Reservation confirmed! We look forward to serving you.");
  e.target.reset();
}

function selectOccasion(el) {
  document
    .querySelectorAll(".occasion-card")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
  const icon = el.querySelector(".icon-wrap");
  icon.style.animation = "none";
  void icon.offsetWidth;
  icon.style.animation = "";
}

function showToast(msg, type = "success") {
  const toast = document.getElementById("toast");
  const icon = type === "error" ? "fa-circle-xmark" : "fa-circle-check";
  toast.className = "toast " + type;
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${msg}`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function initScrollReveal() {
  const selectors = [
    ".section-title",
    ".highlight-card",
    ".offering-card",
    ".takeaway-item",
    ".deal-card",
    ".story-img",
    ".story-text",
    ".timeline-item",
    ".gallery-grid img",
    ".reviews-summary",
    ".review-card",
    ".review-form",
    ".reserve-form",
    ".menu-banner",
    ".occasion-card",
  ];

  document.querySelectorAll(selectors.join(",")).forEach((el, i) => {
    if (
      !el.classList.contains("reveal") &&
      !el.classList.contains("reveal-left") &&
      !el.classList.contains("reveal-right")
    ) {
      el.classList.add("reveal");
    }
    if (!el.style.transitionDelay) {
      el.style.transitionDelay = `${(i % 6) * 0.08}s`;
    }
  });

  document.querySelectorAll(".story-grid.story-img").forEach((el) => {
    el.classList.remove("reveal");
    el.classList.add("reveal-left");
  });
  document.querySelectorAll(".story-grid .story-text").forEach((el) => {
    el.classList.remove("reveal");
    el.classList.add("reveal-right");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  window.scrollRevealObserver = observer;

  document
    .querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    )
    .forEach((el) => {
      observer.observe(el);
    });
}

loadSession();
renderMenu();
renderReviews();
initScrollReveal();
