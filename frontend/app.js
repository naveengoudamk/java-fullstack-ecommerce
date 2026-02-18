const PRODUCTS = [
    { id: 1, name: "Ultrabook Pro 14", category: "electronics", price: 64999, rating: 4.8, tag: "Top Seller" },
    { id: 2, name: "Pulse Smartphone X", category: "electronics", price: 28999, rating: 4.7, tag: "New Arrival" },
    { id: 3, name: "Noise-Cancel Headphones", category: "accessories", price: 6999, rating: 4.6, tag: "Best Value" },
    { id: 4, name: "Smart Fitness Watch", category: "accessories", price: 8499, rating: 4.5, tag: "Trending" },
    { id: 5, name: "Ergo Office Chair", category: "home", price: 12999, rating: 4.4, tag: "Comfort" },
    { id: 6, name: "Air Purifier Max", category: "home", price: 10999, rating: 4.6, tag: "Healthy Home" }
];

const CART_KEY = "novacart.cart";
const USER_KEY = "novacart.user";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
});

function getCart() {
    try {
        const value = localStorage.getItem(CART_KEY);
        const parsed = value ? JSON.parse(value) : {};
        return typeof parsed === "object" && parsed !== null ? parsed : {};
    } catch (error) {
        return {};
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    refreshCartCount();
}

function refreshCartCount() {
    const cart = getCart();
    const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    document.querySelectorAll("[data-cart-count]").forEach((node) => {
        node.textContent = String(count);
    });
}

function getProductById(id) {
    return PRODUCTS.find((product) => product.id === id);
}

function addToCart(productId) {
    const cart = getCart();
    const key = String(productId);
    cart[key] = (cart[key] || 0) + 1;
    saveCart(cart);
    renderCartPanel();
}

function removeFromCart(productId) {
    const cart = getCart();
    const key = String(productId);
    if (!cart[key]) {
        return;
    }

    cart[key] -= 1;
    if (cart[key] <= 0) {
        delete cart[key];
    }

    saveCart(cart);
    renderCartPanel();
}

function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card fade-in";
    card.innerHTML = `
        <span class="tag">${product.tag}</span>
        <h3>${product.name}</h3>
        <p class="rating">Category: ${product.category} | Rating: ${product.rating}</p>
        <div class="product-meta">
            <span class="price">${currencyFormatter.format(product.price)}</span>
            <button class="btn-primary" type="button" data-product-id="${product.id}">Add to Cart</button>
        </div>
    `;
    return card;
}

function renderFeaturedProducts() {
    const container = document.getElementById("featured-products");
    if (!container) {
        return;
    }

    const featured = [...PRODUCTS]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    container.innerHTML = "";
    featured.forEach((product) => {
        container.appendChild(createProductCard(product));
    });
}

function getFilteredProducts() {
    const searchValue = document.getElementById("search-input")?.value.trim().toLowerCase() || "";
    const category = document.getElementById("category-filter")?.value || "all";
    const sortOrder = document.getElementById("sort-filter")?.value || "featured";

    const filtered = PRODUCTS.filter((product) => {
        const searchable = `${product.name} ${product.tag} ${product.category}`.toLowerCase();
        const matchesSearch = searchable.includes(searchValue);
        const matchesCategory = category === "all" || product.category === category;
        return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
        if (sortOrder === "price-low") {
            return a.price - b.price;
        }
        if (sortOrder === "price-high") {
            return b.price - a.price;
        }
        if (sortOrder === "rating-high") {
            return b.rating - a.rating;
        }
        return a.id - b.id;
    });

    return filtered;
}

function renderProductGrid() {
    const grid = document.getElementById("product-grid");
    if (!grid) {
        return;
    }

    const products = getFilteredProducts();
    grid.innerHTML = "";

    if (products.length === 0) {
        const emptyState = document.createElement("article");
        emptyState.className = "product-card";
        emptyState.innerHTML = `
            <h3>No products found</h3>
            <p class="rating">Try a different keyword or reset your filters.</p>
        `;
        grid.appendChild(emptyState);
    }

    products.forEach((product) => {
        grid.appendChild(createProductCard(product));
    });

    const count = document.getElementById("results-count");
    if (count) {
        const label = products.length === 1 ? "product" : "products";
        count.textContent = `${products.length} ${label}`;
    }
}

function renderCartPanel() {
    const cartList = document.getElementById("cart-items");
    const totalNode = document.getElementById("cart-total-value");
    if (!cartList || !totalNode) {
        return;
    }

    const cart = getCart();
    const itemIds = Object.keys(cart);

    if (itemIds.length === 0) {
        cartList.innerHTML = '<li class="cart-item"><small>Your cart is empty.</small></li>';
        totalNode.textContent = currencyFormatter.format(0);
        return;
    }

    let total = 0;
    cartList.innerHTML = "";

    itemIds.forEach((id) => {
        const product = getProductById(Number(id));
        if (!product) {
            delete cart[id];
            return;
        }

        const quantity = cart[id];
        total += product.price * quantity;

        const item = document.createElement("li");
        item.className = "cart-item";
        item.innerHTML = `
            <div>
                <strong>${product.name}</strong>
                <small>${quantity} x ${currencyFormatter.format(product.price)}</small>
            </div>
            <button class="btn-secondary" type="button" data-remove-id="${product.id}">Remove</button>
        `;
        cartList.appendChild(item);
    });

    if (cartList.children.length === 0) {
        saveCart({});
        cartList.innerHTML = '<li class="cart-item"><small>Your cart is empty.</small></li>';
    }

    totalNode.textContent = currencyFormatter.format(total);
}

function setupCatalogInteractions() {
    if (!document.getElementById("product-grid")) {
        return;
    }

    ["search-input", "category-filter", "sort-filter"].forEach((id) => {
        const field = document.getElementById(id);
        field?.addEventListener("input", renderProductGrid);
        field?.addEventListener("change", renderProductGrid);
    });

    document.getElementById("clear-filters")?.addEventListener("click", () => {
        const search = document.getElementById("search-input");
        const category = document.getElementById("category-filter");
        const sort = document.getElementById("sort-filter");

        if (search) {
            search.value = "";
        }
        if (category) {
            category.value = "all";
        }
        if (sort) {
            sort.value = "featured";
        }

        renderProductGrid();
    });

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }

        const addProductId = target.getAttribute("data-product-id");
        if (addProductId) {
            addToCart(Number(addProductId));
            return;
        }

        const removeProductId = target.getAttribute("data-remove-id");
        if (removeProductId) {
            removeFromCart(Number(removeProductId));
        }
    });

    document.getElementById("checkout-button")?.addEventListener("click", () => {
        const cart = getCart();
        if (Object.keys(cart).length === 0) {
            alert("Your cart is empty. Add items before checkout.");
            return;
        }
        alert("Checkout initiated. This demo currently uses client-side cart only.");
    });

    renderProductGrid();
    renderCartPanel();
}

function setupHomepageInteractions() {
    if (!document.getElementById("featured-products")) {
        return;
    }

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }

        const addProductId = target.getAttribute("data-product-id");
        if (!addProductId) {
            return;
        }

        addToCart(Number(addProductId));
    });

    renderFeaturedProducts();
}

function setupLoginForm() {
    const form = document.getElementById("login-form");
    if (!form) {
        return;
    }

    const message = document.getElementById("login-message");
    const passwordInput = document.getElementById("password-input");
    const emailInput = document.getElementById("email-input");

    document.getElementById("toggle-password")?.addEventListener("click", () => {
        if (!(passwordInput instanceof HTMLInputElement)) {
            return;
        }

        const isHidden = passwordInput.type === "password";
        passwordInput.type = isHidden ? "text" : "password";
        const toggleButton = document.getElementById("toggle-password");
        if (toggleButton) {
            toggleButton.textContent = isHidden ? "Hide" : "Show";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const currentEmail = emailInput instanceof HTMLInputElement ? emailInput.value.trim() : "";
        const currentPassword = passwordInput instanceof HTMLInputElement ? passwordInput.value : "";

        if (!currentEmail || currentPassword.length < 8) {
            if (message) {
                message.className = "form-message error";
                message.textContent = "Enter a valid email and password with at least 8 characters.";
            }
            return;
        }

        localStorage.setItem(USER_KEY, currentEmail);
        if (message) {
            message.className = "form-message success";
            message.textContent = "Login successful. Redirecting to products...";
        }
        setTimeout(() => {
            window.location.href = "products.html";
        }, 900);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    refreshCartCount();
    setupHomepageInteractions();
    setupCatalogInteractions();
    setupLoginForm();
});
