const products = [
    {
        id: 1,
        name: "Sushi Platter",
        price: 599,
        desc: "Fresh cuts served with soy and wasabi.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8bb1c1d9a2d1f8e2b1c3f5a7b9e6c0d6",
        type: "non-veg"
    },
    {
        id: 2,
        name: "Truffle Pasta",
        price: 449,
        desc: "Creamy truffle sauce & parmesan.",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8",
        type: "veg"
    },
    {
        id: 3,
        name: "Green Bowl",
        price: 199,
        desc: "Quinoa, avocado, seasonal greens.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d",
        type: "veg"
    },
    {
        id: 4,
        name: "Chocolate Lava",
        price: 149,
        desc: "Warm cake with molten center.",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7",
        type: "veg"
    },
    {
        id: 5,
        name: "Classic Burger",
        price: 299,
        desc: "Juicy patty with fresh lettuce & fries.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 6,
        name: "Margherita Pizza",
        price: 349,
        desc: "Tomato, mozzarella, and fresh basil.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 7,
        name: "Caesar Salad",
        price: 249,
        desc: "Crisp romaine with parmesan & croutons.",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 8,
        name: "Grilled Salmon",
        price: 699,
        desc: "Served with asparagus and lemon butter.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 9,
        name: "Berry Smoothie",
        price: 129,
        desc: "Mixed berries, yogurt, and honey.",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 10,
        name: "Spicy Tacos",
        price: 229,
        desc: "Three soft tacos with spicy salsa.",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 11,
        name: "Chicken Ramen",
        price: 399,
        desc: "Rich broth with noodles & egg.",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 12,
        name: "Ribeye Steak",
        price: 899,
        desc: "Premium cut with garlic herb butter.",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 13,
        name: "Pancakes",
        price: 199,
        desc: "Fluffy stack with maple syrup.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 14,
        name: "Chicken Biryani",
        price: 349,
        desc: "Aromatic basmati rice with spices.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },

    {
        id: 16,
        name: "Cheese Cake",
        price: 219,
        desc: "New York style creamy cheesecake.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 17,
        name: "Fish & Chips",
        price: 399,
        desc: "Crispy battered fish with thick fries.",
        image: "https://images.unsplash.com/photo-1534938665420-4193effeacc4?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 18,
        name: "Veggie Wrap",
        price: 179,
        desc: "Grilled veggies in a whole wheat wrap.",
        image: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 19,
        name: "Butter Chicken",
        price: 449,
        desc: "Classic creamy tomato curry.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 20,
        name: "Iced Coffee",
        price: 149,
        desc: "Cold brew with a splash of milk.",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 21,
        name: "BBQ Ribs",
        price: 799,
        desc: "Tender pork ribs with smokey sauce.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 22,
        name: "Greek Salad",
        price: 229,
        desc: "Feta, olives, cucumber, and oregano.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 23,
        name: "Shrimp Scampi",
        price: 549,
        desc: "Garlic butter shrimp with linguine.",
        image: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 24,
        name: "Club Sandwich",
        price: 269,
        desc: "Triple decker with chicken and bacon.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 25,
        name: "Fruit Tart",
        price: 189,
        desc: "Custard filled pastry with fresh fruit.",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },
    {
        id: 26,
        name: "Dim Sum",
        price: 299,
        desc: "Steamed dumplings with chili oil.",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop",
        type: "non-veg"
    },
    {
        id: 27,
        name: "Onion Rings",
        price: 129,
        desc: "Golden fried crispy onion rings.",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    },


    {
        id: 30,
        name: "Tiramisu",
        price: 249,
        desc: "Coffee flavored Italian dessert.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
        type: "veg"
    }
];

let cart = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentUser = null; // null or { name: "User" }

const productsGrid = document.getElementById('products-grid');
const itemsCountLabel = document.getElementById('items-count');
const cartCountLabel = document.getElementById('cart-count');
const cartTotalLabel = document.getElementById('cart-total');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartBadge = document.getElementById('cart-badge');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.outline-btn[data-filter]');
const toastContainer = document.getElementById('toast-container');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const checkoutBtn = document.getElementById('checkout-btn');

// Initial Render
renderProducts(products);
updateCartUI(); // Validate UI state on load

// Functions
function renderProducts(items) {
    productsGrid.innerHTML = '';
    itemsCountLabel.textContent = `Showing ${items.length} items`;

    if (items.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;">No items found.</div>';
        return;
    }

    items.forEach(product => {
        const isFav = favorites.includes(product.id);
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
      <div class="img" style="position:relative;">
        <img src="${product.image}" alt="${product.name}">
        <button class="fav-btn" data-id="${product.id}" style="position:absolute;top:10px;right:10px;background:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.2);display:grid;place-items:center;">
            <i class="fa ${isFav ? 'fa-heart' : 'fa-heart-o'}" style="color:${isFav ? 'red' : '#ccc'}"></i>
        </button>
      </div>
      <div class="meta">
        <h3>${product.name}</h3>
        <div class="price">₹${product.price}</div>
      </div>
      <div style="font-size:13px;color:#666">${product.desc}</div>
      <div class="actions">
        <button class="btn add-to-cart-btn" data-id="${product.id}">Add</button>
        <button class="outline-btn view-details-btn" data-id="${product.id}">Details</button>
      </div>
    `;
        productsGrid.appendChild(card);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === Number(id));
    if (product) {
        cart.push(product);
        updateCartUI();
        showToast(`Added ${product.name} to cart!`);
    }
}

function updateCartUI() {
    cartCountLabel.textContent = `${cart.length} items`;
    cartBadge.textContent = cart.length;
    cartBadge.style.display = cart.length > 0 ? 'inline-block' : 'none';

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalLabel.textContent = `₹${total}`;

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color:#888; text-align:center;">Your cart is empty</p>';
    } else {
        cart.forEach((item, index) => {
            const itemRow = document.createElement('div');
            itemRow.style.cssText = "display:flex; justify-content:space-between; margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid #eee;";
            itemRow.innerHTML = `
        <span>${item.name}</span>
        <div style="display:flex; gap:8px;">
            <span>₹${item.price}</span>
            <span style="color:red; cursor:pointer;" class="remove-item-btn" data-index="${index}">&times;</span>
        </div>
      `;
            cartItemsContainer.appendChild(itemRow);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Sidebar Close Logic
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.remove('active');
    });
}


function toggleFavorite(id) {
    id = Number(id);
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
        showToast("Added to favorites");
    } else {
        favorites.splice(index, 1);
        showToast("Removed from favorites");
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Re-render current view to update icons
    // For simplicity, we just re-render with current products, 
    // but we could be smarter if preserving search/filter state was widely required.
    // Here we'll just re-render all products or filtered ones if we had global filter state.
    // A quick hack is to re-trigger the current filter button click or just renderProducts(products).
    // Let's just update the specific button icon to avoid scroll jumps, 
    // OR just re-render. Re-render is safer for syncing.
    const activeFilterBtn = document.querySelector('.outline-btn[style*="background: rgb(238, 238, 238)"]');
    // This is relying on inline style set in event listener. 
    // If we are in "Favorites" view (header button), we should refresh that list.

    // Simplest approach: Just render whatever is currently appropriate.
    // If we are in "Favorites Only" mode, re-render favorites.
    // If we are in "All" mode, re-render all.
    // For now, let's just re-render products which resets view to all, 
    // UNLESS we implement state tracking for 'currentView'.
    renderProducts(products);
}

function openDetails(id) {
    const product = products.find(p => p.id === Number(id));
    if (product) {
        const isFav = favorites.includes(product.id);
        modalContent.innerHTML = `
            <div style="text-align:center;">
                <div style="position:relative;">
                    <img src="${product.image}" style="width:100%;max-height:200px;object-fit:cover;border-radius:8px;margin-bottom:12px;">
                     <button class="modal-fav-btn" data-id="${product.id}" style="position:absolute;top:10px;right:10px;background:white;border:none;border-radius:50%;width:35px;height:35px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.2);display:grid;place-items:center;">
                        <i class="fa ${isFav ? 'fa-heart' : 'fa-heart-o'}" style="color:${isFav ? 'red' : '#ccc'}"></i>
                    </button>
                </div>
                <h2>${product.name}</h2>
                <div style="color:#ff6b81;font-weight:700;font-size:18px;margin:8px 0;">₹${product.price}</div>
                <p style="color:#666;">${product.desc}</p>
                <div style="margin-top:20px;">
                    <span style="background:#eee;padding:4px 8px;border-radius:4px;font-size:12px;">${product.type.toUpperCase()}</span>
                </div>
                <button class="btn modal-add-btn" style="margin-top:20px;width:100%;" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productModal.style.display = 'flex';
    }
}

function closeModal() {
    productModal.style.display = 'none';
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = "background: #333; color: white; padding: 12px 24px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-size: 14px; animation: fadeIn 0.3s forwards;";
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function handleAccountClick() {
    if (currentUser) {
        // Show Profile
        modalContent.innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <div style="width:80px;height:80px;background:#eee;border-radius:50%;margin:0 auto 15px;display:grid;place-items:center;font-size:30px;">
                    👤
                </div>
                <button class="outline-btn" onclick="logout()" style="width:100%;border-color:red;color:red;">Logout</button>
            </div>
        `;
    } else {
        // Show Login
        modalContent.innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <h2>Welcome Back</h2>
                <p style="color:#666;margin-bottom:20px;">Login to manage your orders</p>
                <input type="text" placeholder="Email" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-bottom:10px;outline:none;">
                <input type="password" placeholder="Password" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-bottom:20px;outline:none;">
                <button class="btn" onclick="login()" style="width:100%;">Login</button>
            </div>
        `;
    }
    productModal.style.display = 'flex';
}

function login() {
    currentUser = { name: "Demo User" };
    showToast("Logged in successfully!");
    closeModal();
}

function logout() {
    currentUser = null;
    showToast("Logged out.");
    closeModal();
}

// --- Event Delegation ---

// 1. Products Grid Delegation (Add, Details, Favorite)
productsGrid.addEventListener('click', (e) => {
    // Handle Heart click (check button or icon)
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
        const id = favBtn.getAttribute('data-id');
        toggleFavorite(id);
        return;
    }

    if (e.target.classList.contains('add-to-cart-btn')) {
        const id = e.target.getAttribute('data-id');
        addToCart(id);
    } else if (e.target.classList.contains('view-details-btn')) {
        const id = e.target.getAttribute('data-id');
        openDetails(id);
    }
});

// 2. Cart Items Delegation (Remove)
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item-btn')) {
        const index = e.target.getAttribute('data-index');
        removeFromCart(index);
    }
});

// 3. Modal Delegation
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeModal();
    }
    if (e.target.classList.contains('modal-add-btn')) {
        const id = e.target.getAttribute('data-id');
        addToCart(id);
        closeModal();
    }
    // Handle heart in modal
    const favBtn = e.target.closest('.modal-fav-btn');
    if (favBtn) {
        const id = favBtn.getAttribute('data-id');
        toggleFavorite(id);
        closeModal(); // Easier to close and re-open or just close to see list update
    }
});

// Event Listeners for Filters
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterButtons.forEach(b => b.style.background = 'transparent');
        filterButtons.forEach(b => b.style.color = '#333');
        btn.style.background = '#eee';

        let filtered = products;
        if (filter === 'veg') {
            filtered = products.filter(p => p.type === 'veg');
        } else if (filter === 'non-veg') {
            filtered = products.filter(p => p.type === 'non-veg');
        } else if (filter === 'under-300') {
            filtered = products.filter(p => p.price < 300);
        }

        const term = searchInput.value.toLowerCase();
        if (term) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(term));
        }

        renderProducts(filtered);
    });
});

// Event Listener for Search
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term));
    renderProducts(filtered);
});

// Listener for Header Buttons
// Home (Reset)
document.getElementById('home-btn').addEventListener('click', () => {
    // Reset visual filter state
    filterButtons.forEach(b => b.style.background = 'transparent');
    filterButtons.forEach(b => b.style.color = '#333');
    // Clear search
    searchInput.value = '';

    // Render all products
    renderProducts(products);
    showToast("Home View");
});

// Favorites
document.querySelector('button[title="favorites"]').addEventListener('click', () => {
    // Show only favorites
    const favs = products.filter(p => favorites.includes(p.id));
    renderProducts(favs);
    showToast(`Showing ${favs.length} favorites`);
});

// Account Header Btn
document.querySelector('button[title="account"]').addEventListener('click', () => {
    handleAccountClick();
});

// Cart Header Btn
document.getElementById('cart-btn').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    // On mobile, open sidebar logic
    if (window.innerWidth <= 768) {
        sidebar.classList.add('active');
    }
    sidebar.scrollIntoView({ behavior: 'smooth' });
    sidebar.style.border = "2px solid #ff7aa2";
    setTimeout(() => sidebar.style.border = "none", 2000);
});

// Hamburger Menu Toggle
const menuBtn = document.getElementById('menu-btn');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.getElementById('menu-btn');
    if (window.innerWidth <= 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Checkout Button
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            showToast("Your cart is empty!");
            return;
        }

        // Success Logic
        showToast("Order Confirmed! 🎉");
        cart = [];
        updateCartUI();
        // Optional: Confetti or sound
    });
}

// Global scope helpers for potential inline usage (though we tried to remove them)
window.login = login;
window.logout = logout;
window.closeModal = closeModal;

