/* ==========================================================================
   PHANORA BAGS - INTERACTIVE E-COMMERCE JAVASCRIPT
   Features: Product Filter, Search, Cart Drawer, WhatsApp Checkout,
             Quick View Modal, Wishlist, FAQ Accordion, Toast Feedback
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Phanora Lightning Streetpack",
    category: "backpack",
    categoryLabel: "Backpack",
    price: 489000,
    originalPrice: 599000,
    image: "ptr.jpg",
    badge: "Bestseller",
    badgeClass: "bestseller",
    rating: "4.9",
    reviews: 142,
    desc: "Backpack kanvas tebal tahan cipratan air dengan motif petir lightning artistik. Kompartemen utama luas dengan laptop sleeve hingga 15.6 inci dan bantalan tali bahu ergonomis.",
    features: [
      "Bahan: High-grade Polyester Canvas Water-Resistant",
      "Laptop Sleeve terpisah dengan busa pelindung",
      "Resleting YKK Original dengan jahitan bar-tack",
      "Dimensi: 42cm x 31cm x 14cm"
    ]
  },
  {
    id: 2,
    name: "Phanora Aurelia Leather Tote",
    category: "tote",
    categoryLabel: "Tote Bag",
    price: 890000,
    originalPrice: 1150000,
    image: "tote_bag.jpg",
    badge: "Luxury",
    badgeClass: "bestseller",
    rating: "5.0",
    reviews: 98,
    desc: "Tote bag premium kulit tan brown dengan siluet klasik timeless. Dilengkapi gold-tone hardware dan ritsleting penutup utama yang aman untuk aktivitas kerja & bepergian.",
    features: [
      "Bahan: Premium Vegan Calfskin Leather",
      "Kompartemen luas muat tablet & binder A4",
      "Dilengkapi saku dalam beresleting & slot kartu",
      "Dimensi: 38cm x 28cm x 12cm"
    ]
  },
  {
    id: 3,
    name: "Phanora Luna Ivory Saddle Bag",
    category: "crossbody",
    categoryLabel: "Crossbody",
    price: 750000,
    originalPrice: 920000,
    image: "crossbody_bag.jpg",
    badge: "New Arrival",
    badgeClass: "new",
    rating: "4.9",
    reviews: 86,
    desc: "Tas selempang elegan warna ivory cream dengan aksen pengunci gold buckle. Desain rounded saddle yang chic dan strap yang fleksibel dapat disesuaikan.",
    features: [
      "Bahan: Textured Ivory Vegan Leather",
      "Tali selempang kulit dapat disesuaikan panjangnya",
      "Pengunci putar logam emas anti-karat",
      "Dimensi: 23cm x 18cm x 7cm"
    ]
  },
  {
    id: 4,
    name: "Phanora Star Edition Backpack",
    category: "backpack",
    categoryLabel: "Backpack",
    price: 479000,
    originalPrice: 550000,
    image: "bntng.jpg",
    badge: "Popular",
    badgeClass: "bestseller",
    rating: "4.8",
    reviews: 119,
    desc: "Tas ransel kasual motif bintang hitam putih dengan siluet modern. Cocok untuk kuliah, traveling santai, dan hangout harian dengan kapasitas optimal.",
    features: [
      "Bahan: Durable Canvas 600D tebal & awet",
      "Saku botol minum di kedua sisi",
      "Bantalan punggung breathable mesh",
      "Dimensi: 43cm x 30cm x 15cm"
    ]
  },
  {
    id: 5,
    name: "Phanora Royale Chain Shoulder Bag",
    category: "shoulder",
    categoryLabel: "Shoulder Bag",
    price: 980000,
    originalPrice: 1250000,
    image: "shoulder_bag.jpg",
    badge: "Exclusive",
    badgeClass: "limited",
    rating: "5.0",
    reviews: 74,
    desc: "Tas bahu mewah bertekstur kulit hitam dengan rantai tebal berwarna emas polished. Statement piece sempurna untuk acara formal dan malam hari.",
    features: [
      "Bahan: Embossed Black Lambskin Texture",
      "Rantai kuningan lapis emas tahan oksidasi",
      "Penutup flap magnetik ganda",
      "Dimensi: 26cm x 16cm x 8cm"
    ]
  },
  {
    id: 6,
    name: "Phanora Monochrome Splash",
    category: "backpack",
    categoryLabel: "Backpack",
    price: 469000,
    originalPrice: 540000,
    image: "abst.jpg",
    badge: "Limited Edition",
    badgeClass: "limited",
    rating: "4.9",
    reviews: 104,
    desc: "Edisi terbatas ransel motif splash monokrom artistik. Memberikan aksen ekspresif pada gaya kasual harian Anda dengan kenyamanan maksimal.",
    features: [
      "Bahan: Premium Splash-Resistant Canvas",
      "Organized front pocket dengan gantungan kunci",
      "Tali bahu berlapis bantalan busa tebal",
      "Dimensi: 42cm x 31cm x 14cm"
    ]
  },
  {
    id: 7,
    name: "Phanora Midnight Storm Edition",
    category: "backpack",
    categoryLabel: "Backpack",
    price: 520000,
    originalPrice: 620000,
    image: "ptr.jpg",
    badge: "Trending",
    badgeClass: "new",
    rating: "4.8",
    reviews: 63,
    desc: "Varian gelap pekat dari seri petir ikonik Phanora. Menawarkan karakter bold dan tangguh untuk gaya hidup urban yang aktif.",
    features: [
      "Bahan: Heavy-duty Canvas dengan Rain Cover tersembunyi",
      "Slot rahasia di bagian belakang (Anti-Theft Pocket)",
      "Dimensi: 44cm x 32cm x 15cm"
    ]
  },
  {
    id: 8,
    name: "Phanora Stellar Chic Edition",
    category: "backpack",
    categoryLabel: "Backpack",
    price: 495000,
    originalPrice: 580000,
    image: "bntng.jpg",
    badge: "Best Value",
    badgeClass: "sale",
    rating: "4.9",
    reviews: 91,
    desc: "Kombinasi fungsionalitas dan gaya kekinian. Menampilkan motif bintang kontras yang estetik dengan kompartemen lengkap multifungsi.",
    features: [
      "Bahan: Water-repellent Premium Canvas",
      "Dual heavy-duty pullers",
      "Dimensi: 43cm x 30cm x 15cm"
    ]
  }
];

// App State
let cart = JSON.parse(localStorage.getItem("phanora_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("phanora_wishlist") || "[]");
let currentCategory = "all";
let currentSearchQuery = "";

// Format Currency
function formatRupiah(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

// Show Toast
function showToast(message, icon = "fa-check-circle") {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  const iconEl = toast.querySelector("i");
  
  if (iconEl) iconEl.className = `fa ${icon}`;
  if (msgEl) msgEl.textContent = message;
  
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Update Cart Count
function updateCartCount() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEl = document.getElementById("cartCount");
  if (countEl) {
    countEl.textContent = totalCount;
    countEl.style.display = totalCount > 0 ? "flex" : "none";
  }
}

// Update Wishlist Count
function updateWishlistCount() {
  const countEl = document.getElementById("wishlistCount");
  if (countEl) {
    countEl.textContent = wishlist.length;
    countEl.style.display = wishlist.length > 0 ? "flex" : "none";
  }
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem("phanora_cart", JSON.stringify(cart));
  updateCartCount();
  renderCartDrawer();
}

// Save Wishlist
function saveWishlist() {
  localStorage.setItem("phanora_wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter((product) => {
    const matchCategory =
      currentCategory === "all" || product.category === currentCategory;
    const matchSearch =
      product.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(currentSearchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <i class="fa fa-search" style="font-size: 2.5rem; margin-bottom: 15px; opacity: 0.5;"></i>
        <h3 style="font-size: 1.2rem; color: var(--color-primary); margin-bottom: 8px;">Koleksi Tidak Ditemukan</h3>
        <p>Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((product) => {
      const isWishlisted = wishlist.includes(product.id);
      return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          <span class="badge-tag ${product.badgeClass}">${product.badge}</span>
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          
          <div class="product-actions-floating">
            <button class="card-action-btn ${isWishlisted ? "active" : ""}" 
                    title="Tambah ke Favorit" 
                    onclick="toggleWishlist(${product.id}, event)">
              <i class="${isWishlisted ? "fa fa-heart" : "far fa-heart"}"></i>
            </button>
            <button class="card-action-btn" 
                    title="Lihat Detail Produk" 
                    onclick="openQuickView(${product.id}, event)">
              <i class="fa fa-eye"></i>
            </button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-meta">
            <span class="product-category-name">${product.categoryLabel}</span>
            <span class="product-rating">
              <i class="fa fa-star"></i> ${product.rating} (${product.reviews})
            </span>
          </div>

          <h3 class="product-title" onclick="openQuickView(${product.id}, event)" style="cursor: pointer;">
            ${product.name}
          </h3>

          <div class="product-price-row">
            <span class="current-price">${formatRupiah(product.price)}</span>
            ${product.originalPrice ? `<span class="original-price">${formatRupiah(product.originalPrice)}</span>` : ""}
          </div>

          <button class="btn-add-cart" onclick="addToCart(${product.id})">
            <i class="fa fa-shopping-bag"></i> Tambah ke Keranjang
          </button>
        </div>
      </div>
    `;
    })
    .join("");
}

// Add Item to Cart
function addToCart(productId, qty = 1) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex((item) => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: qty
    });
  }

  saveCart();
  showToast(`"${product.name}" berhasil ditambahkan ke keranjang!`);
  openCartDrawer();
}

// Change Quantity in Cart
function changeCartQty(productId, delta) {
  const itemIndex = cart.findIndex((item) => item.id === productId);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;
  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCart();
}

// Remove from Cart
function removeCartItem(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  showToast("Item dihapus dari keranjang.", "fa-trash");
}

// Render Cart Drawer
function renderCartDrawer() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("cartCheckoutBtn");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa fa-shopping-bag"></i>
        <p>Keranjang belanja Anda masih kosong</p>
        <button class="btn btn-primary" onclick="closeCartDrawer()" style="font-size: 0.88rem; padding: 10px 20px;">
          Mulai Belanja Sekarang
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatRupiah(0);
    if (totalEl) totalEl.textContent = formatRupiah(0);
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = "0.5";
      checkoutBtn.style.pointerEvents = "none";
    }
    return;
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = "1";
    checkoutBtn.style.pointerEvents = "auto";
  }

  let subtotal = 0;

  container.innerHTML = cart
    .map((item) => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-price">${formatRupiah(item.price)}</div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="changeCartQty(${item.id}, -1)">-</button>
            <span style="font-weight: 600; font-size: 0.88rem; min-width: 18px; text-align: center;">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${item.id})" title="Hapus">
          <i class="fa fa-trash-alt"></i>
        </button>
      </div>
    `;
    })
    .join("");

  if (subtotalEl) subtotalEl.textContent = formatRupiah(subtotal);
  if (totalEl) totalEl.textContent = formatRupiah(subtotal);
}

// Drawer Controls
function openCartDrawer() {
  document.getElementById("cartDrawerOverlay")?.classList.add("active");
  document.getElementById("cartDrawer")?.classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cartDrawerOverlay")?.classList.remove("active");
  document.getElementById("cartDrawer")?.classList.remove("active");
}

// Toggle Wishlist
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`"${product.name}" dihapus dari favorit`, "fa-heart-broken");
  } else {
    wishlist.push(productId);
    showToast(`"${product.name}" disimpan ke favorit!`, "fa-heart");
  }

  saveWishlist();
  renderProducts();
}

// Quick View Modal
function openQuickView(productId, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const modalEl = document.getElementById("quickViewModal");
  if (!modalEl) return;

  modalEl.querySelector("#modalImg").src = product.image;
  modalEl.querySelector("#modalCat").textContent = product.categoryLabel;
  modalEl.querySelector("#modalTitle").textContent = product.name;
  modalEl.querySelector("#modalPrice").textContent = formatRupiah(product.price);
  modalEl.querySelector("#modalDesc").textContent = product.desc;

  const featuresList = modalEl.querySelector("#modalFeatures");
  if (featuresList && product.features) {
    featuresList.innerHTML = product.features
      .map((f) => `<li><i class="fa fa-check"></i> ${f}</li>`)
      .join("");
  }

  const addBtn = modalEl.querySelector("#modalAddToCartBtn");
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(product.id, 1);
      closeQuickView();
    };
  }

  modalEl.classList.add("active");
}

function closeQuickView() {
  document.getElementById("quickViewModal")?.classList.remove("active");
}

// WhatsApp Checkout Builder
function checkoutViaWhatsApp() {
  if (cart.length === 0) return;

  const phoneNumber = "6281234567890"; // WhatsApp customer service number
  let message = "Halo Admin Phanora Bags, saya ingin memesan produk berikut:\n\n";

  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    message += `${index + 1}. ${item.name} (${item.qty}x) - ${formatRupiah(itemTotal)}\n`;
  });

  message += `\n*Total Belanja:* ${formatRupiah(total)}\n`;
  message += `\nMohon informasi ongkir dan konfirmasi ketersediaan stok ya. Terima kasih! ✨`;

  const encodedUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
}

// Setup Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initial renders
  renderProducts();
  updateCartCount();
  updateWishlistCount();
  renderCartDrawer();

  // Scroll effect for navbar
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    // Close on link click
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.querySelector("i")?.classList.replace("fa-times", "fa-bars");
      });
    });
  }

  // Filter tabs
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category") || "all";
      renderProducts();
    });
  });

  // Catalog search input
  const catalogSearch = document.getElementById("catalogSearchInput");
  if (catalogSearch) {
    catalogSearch.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Cart Drawer open & close buttons
  document.getElementById("openCartBtn")?.addEventListener("click", openCartDrawer);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cartDrawerOverlay")?.addEventListener("click", closeCartDrawer);

  // Quick View Modal close
  document.getElementById("closeQuickViewBtn")?.addEventListener("click", closeQuickView);
  document.getElementById("quickViewModal")?.addEventListener("click", (e) => {
    if (e.target.id === "quickViewModal") closeQuickView();
  });

  // Checkout Button
  document.getElementById("cartCheckoutBtn")?.addEventListener("click", checkoutViaWhatsApp);

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    header?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((i) => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Newsletter Form
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector("input")?.value;
      if (email) {
        showToast("Terima kasih! Voucher diskon 10% dikirim ke email Anda.");
        newsletterForm.reset();
      }
    });
  }

  // Wishlist Icon in Nav Bar click
  document.getElementById("navWishlistBtn")?.addEventListener("click", () => {
    if (wishlist.length === 0) {
      showToast("Daftar favorit Anda masih kosong. Simpan tas impian Anda!", "fa-info-circle");
    } else {
      showToast(`Anda memiliki ${wishlist.length} tas dalam daftar favorit!`, "fa-heart");
      // Scroll to products
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }
  });
});
