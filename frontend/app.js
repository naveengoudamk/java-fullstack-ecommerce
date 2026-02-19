const PRODUCTS = [
    {
        id: 1,
        name: "Ultrabook Pro 14",
        category: "electronics",
        price: 64999,
        mrp: 74999,
        rating: 4.8,
        reviews: 1860,
        tag: "Top Seller",
        stock: 6,
        etaDays: 1
    },
    {
        id: 2,
        name: "Pulse Smartphone X",
        category: "electronics",
        price: 28999,
        mrp: 33999,
        rating: 4.7,
        reviews: 2410,
        tag: "New Arrival",
        stock: 11,
        etaDays: 1
    },
    {
        id: 3,
        name: "Noise-Cancel Headphones",
        category: "accessories",
        price: 6999,
        mrp: 9999,
        rating: 4.6,
        reviews: 3912,
        tag: "Best Value",
        stock: 0,
        etaDays: 2
    },
    {
        id: 4,
        name: "Smart Fitness Watch",
        category: "accessories",
        price: 8499,
        mrp: 11999,
        rating: 4.5,
        reviews: 1640,
        tag: "Trending",
        stock: 4,
        etaDays: 2
    },
    {
        id: 5,
        name: "Ergo Office Chair",
        category: "home",
        price: 12999,
        mrp: 16999,
        rating: 4.4,
        reviews: 1320,
        tag: "Comfort",
        stock: 8,
        etaDays: 3
    },
    {
        id: 6,
        name: "Air Purifier Max",
        category: "home",
        price: 10999,
        mrp: 14999,
        rating: 4.6,
        reviews: 1575,
        tag: "Healthy Home",
        stock: 3,
        etaDays: 1
    },
    {
        id: 7,
        name: "MegaView 55 4K Smart TV",
        category: "electronics",
        price: 45999,
        mrp: 59999,
        rating: 4.7,
        reviews: 975,
        tag: "Festival Deal",
        stock: 5,
        etaDays: 2,
        bulky: true
    },
    {
        id: 8,
        name: "FrostMax Double-Door Refrigerator",
        category: "home",
        price: 52999,
        mrp: 62999,
        rating: 4.6,
        reviews: 742,
        tag: "Large Item",
        stock: 2,
        etaDays: 3,
        bulky: true
    },
    {
        id: 9,
        name: "WashPro Front-Load Washing Machine",
        category: "home",
        price: 33999,
        mrp: 42999,
        rating: 4.5,
        reviews: 658,
        tag: "Home Upgrade",
        stock: 4,
        etaDays: 3,
        bulky: true
    },
    {
        id: 10,
        name: "FamilyLounge 3-Seater Sofa",
        category: "home",
        price: 27999,
        mrp: 35999,
        rating: 4.4,
        reviews: 430,
        tag: "Space Saver",
        stock: 3,
        etaDays: 4,
        bulky: true
    },
    {
        id: 11,
        name: "CoolBreeze 1.5T Inverter AC",
        category: "home",
        price: 38999,
        mrp: 46999,
        rating: 4.6,
        reviews: 890,
        tag: "Summer Pick",
        stock: 6,
        etaDays: 2,
        bulky: true
    },
    {
        id: 12,
        name: "CineSound Home Theatre",
        category: "electronics",
        price: 18999,
        mrp: 24999,
        rating: 4.5,
        reviews: 566,
        tag: "Movie Night",
        stock: 9,
        etaDays: 2
    }
];

const CART_KEY = "novacart.cart";
const USER_KEY = "novacart.user";
const PROMO_KEY = "novacart.promo";

const FREE_SHIPPING_THRESHOLD = 50000;
const SHIPPING_FEE = 149;
const TAX_RATE = 0.05;

const PROMO_CODES = {
    NOVA10: {
        label: "10% OFF",
        rate: 0.1
    },
    WELCOME5: {
        label: "5% OFF",
        rate: 0.05
    }
};

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

function getActivePromoCode() {
    return (localStorage.getItem(PROMO_KEY) || "").trim().toUpperCase();
}

function setActivePromoCode(code) {
    const normalized = (code || "").trim().toUpperCase();
    if (!normalized) {
        localStorage.removeItem(PROMO_KEY);
        return;
    }
    localStorage.setItem(PROMO_KEY, normalized);
}

function getPromoConfig(code) {
    const normalized = (code || "").trim().toUpperCase();
    return PROMO_CODES[normalized] || null;
}

function refreshCartCount() {
    const cart = getCart();
    let count = 0;
    let changed = false;

    Object.keys(cart).forEach((id) => {
        const product = getProductById(Number(id));
        const quantity = Math.floor(Number(cart[id]) || 0);

        if (!product || quantity <= 0 || product.stock <= 0) {
            delete cart[id];
            changed = true;
            return;
        }

        const safeQuantity = Math.min(quantity, product.stock);
        if (safeQuantity !== quantity) {
            cart[id] = safeQuantity;
            changed = true;
        }

        count += safeQuantity;
    });

    if (changed) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    document.querySelectorAll("[data-cart-count]").forEach((node) => {
        node.textContent = String(count);
    });
}

function getProductById(id) {
    return PRODUCTS.find((product) => product.id === id);
}

function formatLabel(value) {
    return String(value)
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getInitials(name) {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

function getDiscountPercent(product) {
    if (!product.mrp || product.mrp <= product.price) {
        return 0;
    }
    return Math.round(((product.mrp - product.price) / product.mrp) * 100);
}

function getStockMeta(stock) {
    if (stock <= 0) {
        return {
            className: "out",
            label: "Out of stock"
        };
    }

    if (stock <= 3) {
        return {
            className: "low",
            label: `Only ${stock} left`
        };
    }

    return {
        className: "in",
        label: "In stock"
    };
}

function getDeliveryLabel(etaDays, bulky = false) {
    if (bulky) {
        return `Large-item delivery in ${etaDays} days`;
    }

    if (etaDays <= 1) {
        return "Delivery by tomorrow";
    }

    return `Delivery in ${etaDays} days`;
}

function showToast(message, tone = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${tone}`;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 250);
    }, 2200);
}

function getCartLineItems(cart) {
    const lineItems = [];
    let changed = false;

    Object.keys(cart).forEach((id) => {
        const product = getProductById(Number(id));
        const currentQty = Number(cart[id]);

        if (!product || !Number.isFinite(currentQty) || currentQty <= 0 || product.stock <= 0) {
            delete cart[id];
            changed = true;
            return;
        }

        const safeQuantity = Math.min(Math.floor(currentQty), product.stock);
        if (safeQuantity !== currentQty) {
            cart[id] = safeQuantity;
            changed = true;
        }

        lineItems.push({
            product,
            quantity: safeQuantity
        });
    });

    return {
        lineItems,
        changed
    };
}

function calculateCartSummary(lineItems, promoCode) {
    const subtotal = lineItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const itemCount = lineItems.reduce((sum, item) => sum + item.quantity, 0);
    const promo = getPromoConfig(promoCode);
    const discount = promo ? Math.round(subtotal * promo.rate) : 0;
    const discountedSubtotal = Math.max(subtotal - discount, 0);
    const shipping = itemCount === 0 ? 0 : discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    const tax = Math.round(discountedSubtotal * TAX_RATE);
    const total = discountedSubtotal + shipping + tax;

    return {
        itemCount,
        subtotal,
        discount,
        shipping,
        tax,
        total,
        shippingGap: Math.max(FREE_SHIPPING_THRESHOLD - discountedSubtotal, 0)
    };
}

function updateCartSummaryUI(summary) {
    const subtotalNode = document.getElementById("cart-subtotal-value");
    const discountNode = document.getElementById("cart-discount-value");
    const shippingNode = document.getElementById("cart-shipping-value");
    const taxNode = document.getElementById("cart-tax-value");
    const totalNode = document.getElementById("cart-total-value");
    const shippingNote = document.getElementById("shipping-note");

    if (subtotalNode) {
        subtotalNode.textContent = currencyFormatter.format(summary.subtotal);
    }

    if (discountNode) {
        discountNode.textContent = summary.discount ? `- ${currencyFormatter.format(summary.discount)}` : currencyFormatter.format(0);
    }

    if (shippingNode) {
        shippingNode.textContent = summary.shipping === 0 ? "Free" : currencyFormatter.format(summary.shipping);
    }

    if (taxNode) {
        taxNode.textContent = currencyFormatter.format(summary.tax);
    }

    if (totalNode) {
        totalNode.textContent = currencyFormatter.format(summary.total);
    }

    if (shippingNote) {
        if (summary.itemCount === 0) {
            shippingNote.textContent = `Add items to unlock free shipping above ${currencyFormatter.format(FREE_SHIPPING_THRESHOLD)}.`;
        } else if (summary.shipping === 0) {
            shippingNote.textContent = "You unlocked free shipping on this order.";
        } else {
            shippingNote.textContent = `Add ${currencyFormatter.format(summary.shippingGap)} more for free shipping.`;
        }
    }
}

function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) {
        return;
    }

    if (product.stock <= 0) {
        showToast("This item is currently out of stock.", "error");
        return;
    }

    const cart = getCart();
    const key = String(productId);
    const nextQty = (cart[key] || 0) + 1;

    if (nextQty > product.stock) {
        showToast(`Only ${product.stock} units available for ${product.name}.`, "error");
        return;
    }

    cart[key] = nextQty;
    saveCart(cart);
    renderCartPanel();
    showToast(`${product.name} added to cart.`, "success");
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
    const initials = getInitials(product.name);
    const categoryLabel = formatLabel(product.category);
    const discountPercent = getDiscountPercent(product);
    const stockMeta = getStockMeta(product.stock);

    const card = document.createElement("article");
    card.className = "product-card fade-in";
    card.innerHTML = `
        <div class="product-visual ${product.category}">
            <span class="tag">${product.tag}</span>
            <span class="visual-initial">${initials}</span>
        </div>
        <div class="product-head">
            <h3>${product.name}</h3>
            <span class="rating-pill">&#9733; ${product.rating} (${product.reviews})</span>
        </div>
        <p class="rating">${categoryLabel}</p>
        <div class="product-extra">
            <span class="stock-status ${stockMeta.className}">${stockMeta.label}</span>
            <span class="delivery-note">${getDeliveryLabel(product.etaDays, Boolean(product.bulky))}</span>
            ${product.bulky ? '<span class="bulky-badge">Large Delivery</span>' : ""}
        </div>
        <div class="product-meta">
            <div class="price-stack">
                <span class="price">${currencyFormatter.format(product.price)}</span>
                ${discountPercent > 0 ? `<span class="mrp">${currencyFormatter.format(product.mrp)}</span>` : ""}
                ${discountPercent > 0 ? `<span class="deal-offer">${discountPercent}% OFF</span>` : ""}
            </div>
            <button class="btn-primary" type="button" data-product-id="${product.id}" ${product.stock > 0 ? "" : "disabled"}>${product.stock > 0 ? "Add to Cart" : "Out of Stock"}</button>
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
        .filter((product) => product.stock > 0)
        .sort((a, b) => {
            const scoreA = a.rating + getDiscountPercent(a) / 100;
            const scoreB = b.rating + getDiscountPercent(b) / 100;
            return scoreB - scoreA;
        })
        .slice(0, 4);

    container.innerHTML = "";
    featured.forEach((product) => {
        container.appendChild(createProductCard(product));
    });
}

function getFilteredProducts() {
    const searchValue = document.getElementById("search-input")?.value.trim().toLowerCase() || "";
    const category = document.getElementById("category-filter")?.value || "all";
    const sortOrder = document.getElementById("sort-filter")?.value || "featured";
    const maxPrice = Number(document.getElementById("price-filter")?.value || 0);
    const stockOnly = Boolean(document.getElementById("stock-filter")?.checked);

    const filtered = PRODUCTS.filter((product) => {
        const searchable = `${product.name} ${product.tag} ${product.category}`.toLowerCase();
        const matchesSearch = searchable.includes(searchValue);
        const matchesCategory = category === "all" || product.category === category;
        const matchesPrice = maxPrice === 0 || product.price <= maxPrice;
        const matchesStock = !stockOnly || product.stock > 0;
        return matchesSearch && matchesCategory && matchesPrice && matchesStock;
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

        if (sortOrder === "discount-high") {
            return getDiscountPercent(b) - getDiscountPercent(a);
        }

        return b.rating - a.rating || b.reviews - a.reviews;
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
            <p class="rating">Try another filter combination or clear all filters.</p>
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
    const { lineItems, changed } = getCartLineItems(cart);
    if (changed) {
        saveCart(cart);
    }

    cartList.innerHTML = "";

    if (lineItems.length === 0) {
        cartList.innerHTML = '<li class="cart-item"><small>Your cart is empty.</small></li>';
    } else {
        lineItems.forEach((item) => {
            const row = document.createElement("li");
            row.className = "cart-item";
            row.innerHTML = `
                <div>
                    <strong>${item.product.name}</strong>
                    <small>${item.quantity} x ${currencyFormatter.format(item.product.price)}</small>
                </div>
                <button class="btn-secondary" type="button" data-remove-id="${item.product.id}">Remove</button>
            `;
            cartList.appendChild(row);
        });
    }

    const summary = calculateCartSummary(lineItems, getActivePromoCode());
    updateCartSummaryUI(summary);
}

function setupPromoInteractions() {
    const input = document.getElementById("promo-input");
    const applyButton = document.getElementById("apply-promo");
    const message = document.getElementById("promo-message");

    if (!(input instanceof HTMLInputElement) || !applyButton || !message) {
        return;
    }

    const setMessage = (text, tone) => {
        message.className = `promo-message ${tone}`;
        message.textContent = text;
    };

    const activeCode = getActivePromoCode();
    if (activeCode) {
        input.value = activeCode;
        const promo = getPromoConfig(activeCode);
        if (promo) {
            setMessage(`${activeCode} applied (${promo.label}).`, "success");
        }
    }

    const applyPromo = () => {
        const code = input.value.trim().toUpperCase();

        if (!code) {
            setActivePromoCode("");
            setMessage("Promo removed.", "info");
            renderCartPanel();
            return;
        }

        const promo = getPromoConfig(code);
        if (!promo) {
            setMessage("Invalid code. Try NOVA10 or WELCOME5.", "error");
            showToast("Invalid promo code.", "error");
            return;
        }

        setActivePromoCode(code);
        setMessage(`${code} applied (${promo.label}).`, "success");
        showToast(`Promo ${code} applied.`, "success");
        renderCartPanel();
    };

    applyButton.addEventListener("click", applyPromo);
    input.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") {
            return;
        }
        event.preventDefault();
        applyPromo();
    });
}

function setupCatalogInteractions() {
    if (!document.getElementById("product-grid")) {
        return;
    }

    ["search-input", "category-filter", "sort-filter", "price-filter", "stock-filter"].forEach((id) => {
        const field = document.getElementById(id);
        field?.addEventListener("input", renderProductGrid);
        field?.addEventListener("change", renderProductGrid);
    });

    document.getElementById("clear-filters")?.addEventListener("click", () => {
        const search = document.getElementById("search-input");
        const category = document.getElementById("category-filter");
        const sort = document.getElementById("sort-filter");
        const price = document.getElementById("price-filter");
        const stockOnly = document.getElementById("stock-filter");

        if (search instanceof HTMLInputElement) {
            search.value = "";
        }

        if (category instanceof HTMLSelectElement) {
            category.value = "all";
        }

        if (sort instanceof HTMLSelectElement) {
            sort.value = "featured";
        }

        if (price instanceof HTMLSelectElement) {
            price.value = "0";
        }

        if (stockOnly instanceof HTMLInputElement) {
            stockOnly.checked = false;
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
        const { lineItems, changed } = getCartLineItems(cart);
        if (changed) {
            saveCart(cart);
        }

        if (lineItems.length === 0) {
            alert("Your cart is empty. Add items before checkout.");
            return;
        }

        const summary = calculateCartSummary(lineItems, getActivePromoCode());
        alert(`Checkout initiated. Pay ${currencyFormatter.format(summary.total)} to place your order.`);
    });

    setupPromoInteractions();
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

function setupDealCountdown() {
    const countdown = document.getElementById("deal-countdown");
    if (!countdown) {
        return;
    }

    const updateCountdown = () => {
        const now = new Date();
        const end = new Date(now);
        end.setHours(23, 59, 59, 999);

        const diff = Math.max(end.getTime() - now.getTime(), 0);
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);

        countdown.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    updateCountdown();
    window.setInterval(updateCountdown, 1000);
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
    setupDealCountdown();
    setupLoginForm();
});
