const GLOBAL_STYLES = String.raw`
:root {
    --bg-base: #f8f9ff;
    --bg-warm: #fff8f1;
    --surface: rgba(255, 255, 255, 0.8);
    --surface-solid: #ffffff;
    --surface-soft: #f4f8ff;
    --text-strong: #10213f;
    --text: #233964;
    --muted: #5f6f96;
    --primary: #1f7cff;
    --primary-strong: #0053cd;
    --primary-soft: #eaf2ff;
    --accent: #ff8f3f;
    --accent-soft: #fff1e5;
    --mint: #1cb999;
    --border: rgba(79, 108, 162, 0.24);
    --danger: #c73b3b;
    --success: #15895f;
    --radius-xl: 26px;
    --radius-lg: 20px;
    --radius-md: 14px;
    --shadow-soft: 0 18px 42px rgba(16, 33, 63, 0.12);
    --shadow-card: 0 12px 26px rgba(20, 43, 86, 0.08);
    --focus-ring: 0 0 0 3px rgba(31, 124, 255, 0.22);
}

* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    min-height: 100%;
}

body {
    position: relative;
    overflow-x: hidden;
    font-family: "Outfit", sans-serif;
    color: var(--text);
    line-height: 1.5;
    background: linear-gradient(160deg, var(--bg-base) 0%, var(--bg-warm) 52%, #eefbf7 100%);
}

body::before,
body::after {
    content: "";
    position: fixed;
    z-index: -2;
    pointer-events: none;
    border-radius: 50%;
}

body::before {
    width: 560px;
    height: 560px;
    top: -230px;
    left: -170px;
    background: radial-gradient(circle, rgba(31, 124, 255, 0.3) 0%, transparent 68%);
}

body::after {
    width: 540px;
    height: 540px;
    right: -190px;
    bottom: -250px;
    background: radial-gradient(circle, rgba(255, 143, 63, 0.25) 0%, transparent 72%);
}

.site-header {
    position: sticky;
    top: 12px;
    z-index: 40;
    width: min(1220px, calc(100% - 22px));
    margin: 14px auto 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 16px;
    padding: 13px 16px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(96, 126, 186, 0.18);
    backdrop-filter: blur(14px);
    box-shadow: 0 10px 24px rgba(15, 32, 64, 0.08);
}

.brand {
    font-family: "Sora", sans-serif;
    font-size: 1.36rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--text-strong);
    text-decoration: none;
    white-space: nowrap;
}

.nav-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
}

.nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 999px;
    transition: background-color 0.24s ease, color 0.24s ease, transform 0.24s ease;
}

.nav-links a:hover {
    color: var(--text-strong);
    background: var(--primary-soft);
    transform: translateY(-1px);
}

.active-link {
    background: var(--primary-soft);
    color: var(--primary-strong) !important;
}

.cart-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--primary-strong);
    background: var(--primary-soft);
    border: 1px solid rgba(96, 138, 213, 0.3);
    border-radius: 999px;
    padding: 8px 12px;
    font-weight: 700;
    white-space: nowrap;
}

.cart-pill span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--primary), var(--primary-strong));
    color: #ffffff;
    font-size: 0.82rem;
}

.main-layout {
    max-width: 1220px;
    margin: 0 auto;
    padding: clamp(24px, 4vw, 48px) 16px 34px;
}

.promo-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 16px;
}

.promo-strip p {
    margin: 0;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid rgba(88, 126, 195, 0.24);
    background: linear-gradient(135deg, rgba(239, 246, 255, 0.84), rgba(248, 255, 252, 0.84));
    color: #355892;
    font-size: 0.86rem;
    font-weight: 600;
    text-align: center;
}

.hero {
    display: grid;
    grid-template-columns: 1.35fr 0.95fr;
    gap: 18px;
    align-items: stretch;
}

.hero-copy,
.hero-panel,
.section-block,
.auth-card,
.cart-panel,
.product-card,
.feature-card {
    background: var(--surface);
    border: 1px solid rgba(95, 124, 182, 0.22);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(10px);
}

.hero-copy,
.hero-panel,
.section-block {
    padding: clamp(20px, 2.8vw, 30px);
    box-shadow: var(--shadow-soft);
}

.hero-copy {
    position: relative;
    overflow: hidden;
}

.hero-copy::after {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;
    right: -80px;
    top: -70px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(31, 124, 255, 0.2) 0%, transparent 72%);
    pointer-events: none;
}

h1,
h2,
h3 {
    margin: 0;
    color: var(--text-strong);
}

h1 {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.9rem, 4vw, 3.15rem);
    line-height: 1.06;
    letter-spacing: -0.025em;
}

h2 {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.35rem, 2.1vw, 1.85rem);
    letter-spacing: -0.015em;
}

h3 {
    font-size: 1.06rem;
}

.hero-copy p {
    margin: 14px 0 0;
    color: var(--muted);
    max-width: 58ch;
}

.eyebrow {
    margin: 0 0 10px;
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    background: linear-gradient(130deg, var(--primary-soft), #dff8f2);
    color: var(--primary-strong);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.72rem;
    padding: 6px 10px;
}

.hero-actions {
    margin-top: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.hero-panel {
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.84), rgba(244, 249, 255, 0.9));
}

.metric-grid {
    margin-top: 18px;
    display: grid;
    gap: 10px;
}

.metric-card {
    padding: 14px;
    border-radius: var(--radius-md);
    background: linear-gradient(140deg, #f1f7ff, #fff8f2);
    border: 1px solid rgba(108, 138, 191, 0.26);
}

.metric-card h3 {
    font-family: "Sora", sans-serif;
    font-size: 1.42rem;
}

.metric-card p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 0.9rem;
}

.section-block {
    margin-top: 20px;
}

.section-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 14px;
}

.inline-link {
    color: var(--primary-strong);
    font-weight: 700;
    text-decoration: none;
}

.inline-link:hover {
    text-decoration: underline;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
}

.feature-card {
    position: relative;
    overflow: hidden;
    padding: 18px;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
}

.feature-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(145deg, rgba(31, 124, 255, 0.1), transparent 45%, rgba(28, 185, 153, 0.12));
}

.feature-card p {
    margin: 8px 0 0;
    color: var(--muted);
}

.idea-grid,
.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
}

.idea-card,
.testimonial-card {
    border: 1px solid rgba(95, 124, 182, 0.22);
    border-radius: var(--radius-lg);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.88), rgba(240, 247, 255, 0.86));
    padding: 16px;
}

.idea-card h3,
.testimonial-card strong {
    font-family: "Sora", sans-serif;
    color: var(--text-strong);
}

.idea-card p,
.testimonial-card p {
    margin: 8px 0 0;
    color: var(--muted);
}

.testimonial-card strong {
    display: block;
    margin-top: 10px;
    font-size: 0.88rem;
    color: #2f4f87;
}

.catalog-layout h1 {
    font-size: clamp(1.7rem, 3.2vw, 2.3rem);
}

.deal-banner {
    margin-bottom: 14px;
    border-radius: 18px;
    border: 1px solid rgba(112, 142, 195, 0.32);
    background: linear-gradient(130deg, rgba(231, 242, 255, 0.92), rgba(255, 243, 231, 0.92));
    padding: 14px 18px;
    box-shadow: var(--shadow-card);
}

.deal-title {
    margin: 0;
    font-family: "Sora", sans-serif;
    color: #1d4ea6;
}

.deal-banner p {
    margin: 6px 0 0;
    color: #37578f;
}

.catalog-tools {
    padding: 22px;
}

.controls-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 12px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-weight: 600;
    color: #324f82;
    font-size: 0.92rem;
}

.checkbox-field {
    justify-content: center;
}

.checkbox-wrap {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.88);
    padding: 0 12px;
    color: #3f5a89;
    font-weight: 600;
}

.checkbox-wrap input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: var(--primary);
}

input,
select {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid var(--border);
    border-radius: 12px;
    font: inherit;
    color: var(--text-strong);
    background: rgba(255, 255, 255, 0.88);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

input:focus,
select:focus {
    outline: none;
    border-color: rgba(61, 125, 231, 0.62);
    box-shadow: var(--focus-ring);
    background: #ffffff;
}

.results-row {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
}

.results-row p {
    margin: 0;
    color: var(--muted);
    font-weight: 700;
}

.catalog-content {
    margin-top: 16px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 16px;
    align-items: start;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 14px;
}

.compact-grid {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}

.product-card {
    position: relative;
    overflow: hidden;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    box-shadow: var(--shadow-card);
    transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
}

.product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 34px rgba(16, 40, 84, 0.15);
    border-color: rgba(54, 110, 216, 0.34);
}

.product-card h3 {
    font-family: "Sora", sans-serif;
    font-size: 1.05rem;
    line-height: 1.25;
}

.product-visual {
    min-height: 160px;
    border-radius: 14px;
    padding: 8px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(91, 124, 187, 0.22);
    background: linear-gradient(135deg, #edf5ff, #f7fcff);
}

.product-visual.electronics {
    background: linear-gradient(140deg, #e7efff, #edf8ff);
}

.product-visual.accessories {
    background: linear-gradient(140deg, #fff2e6, #fff8ee);
}

.product-visual.home {
    background: linear-gradient(140deg, #e9f9f5, #f3fff8);
}

.product-visual.fashion {
    background: linear-gradient(140deg, #fff1f8, #fff9fc);
}

.product-visual.beauty {
    background: linear-gradient(140deg, #ffeef2, #fff9fb);
}

.product-visual.grocery {
    background: linear-gradient(140deg, #edf8e9, #f8fff4);
}

.product-visual.toys {
    background: linear-gradient(140deg, #fff7de, #fffef5);
}

.product-visual.sports {
    background: linear-gradient(140deg, #eaf4ff, #f4f9ff);
}

.product-visual.books {
    background: linear-gradient(140deg, #f0ecff, #f8f6ff);
}

.product-visual.automotive {
    background: linear-gradient(140deg, #edf0f7, #f8f9ff);
}

.product-photo {
    width: 100%;
    height: 142px;
    border-radius: 10px;
    object-fit: cover;
    display: block;
    border: 1px solid rgba(90, 121, 182, 0.22);
}

.visual-initial {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 142px;
    border-radius: 11px;
    font-family: "Sora", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.8);
    color: var(--text-strong);
    border: 1px solid rgba(97, 127, 185, 0.3);
}

.product-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
}

.tag {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
    display: inline-flex;
    border-radius: 999px;
    background: rgba(12, 37, 83, 0.86);
    color: #ffffff;
    padding: 4px 10px;
    font-size: 0.74rem;
    font-weight: 700;
}

.rating-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-radius: 999px;
    background: #f0f6ff;
    border: 1px solid rgba(92, 131, 205, 0.28);
    color: #2e5faa;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 3px 8px;
    white-space: nowrap;
}

.product-meta {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.price {
    font-family: "Sora", sans-serif;
    font-size: 1.18rem;
    font-weight: 700;
    color: #173d7a;
}

.rating {
    margin: 0;
    color: var(--muted);
    font-size: 0.84rem;
}

.product-extra {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.stock-status {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 3px 9px;
    font-size: 0.76rem;
    font-weight: 700;
}

.stock-status.in {
    color: #0d845a;
    background: rgba(20, 180, 122, 0.14);
}

.stock-status.low {
    color: #b95f14;
    background: rgba(255, 149, 48, 0.2);
}

.stock-status.out {
    color: #af2f3f;
    background: rgba(231, 102, 121, 0.2);
}

.delivery-note {
    font-size: 0.78rem;
    color: #4f6799;
    font-weight: 600;
}

.bulky-badge {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 3px 9px;
    font-size: 0.72rem;
    font-weight: 700;
    color: #5f4a16;
    background: rgba(245, 201, 80, 0.28);
}

.price-stack {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.mrp {
    font-size: 0.84rem;
    color: #8795b3;
    text-decoration: line-through;
}

.deal-offer {
    display: inline-flex;
    width: fit-content;
    border-radius: 999px;
    background: rgba(255, 143, 63, 0.16);
    color: #b75a1e;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 8px;
}

.cart-panel {
    position: sticky;
    top: 112px;
    padding: 18px;
    box-shadow: var(--shadow-soft);
}

.cart-items {
    list-style: none;
    margin: 14px 0;
    padding: 0;
    display: grid;
    gap: 10px;
}

.cart-item {
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--surface-soft);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.cart-item strong {
    display: block;
    font-size: 0.92rem;
    color: var(--text-strong);
}

.cart-item small {
    color: var(--muted);
}

.cart-total {
    margin: 8px 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.02rem;
}

.cart-note {
    margin: 0;
    font-size: 0.82rem;
    color: #4e6798;
    background: #edf3ff;
    border: 1px solid rgba(103, 133, 186, 0.28);
    border-radius: 10px;
    padding: 8px 10px;
}

.promo-box {
    margin-top: 12px;
}

.promo-field {
    gap: 6px;
}

.promo-group {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
}

.promo-message {
    margin: 7px 0 0;
    min-height: 20px;
    font-size: 0.78rem;
    font-weight: 700;
}

.promo-message.success {
    color: var(--success);
}

.promo-message.error {
    color: var(--danger);
}

.promo-message.info {
    color: #345991;
}

.bill-breakdown {
    margin: 12px 0 14px;
    border: 1px solid rgba(103, 132, 185, 0.2);
    border-radius: 12px;
    background: rgba(238, 245, 255, 0.62);
    padding: 10px;
    display: grid;
    gap: 8px;
}

.bill-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.88rem;
    color: #3e5a8b;
}

.bill-row strong {
    color: var(--text-strong);
}

.bill-row.total {
    margin-top: 3px;
    padding-top: 8px;
    border-top: 1px dashed rgba(96, 127, 181, 0.34);
    font-size: 0.98rem;
    font-weight: 700;
}

.auth-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 122px);
}

.auth-card {
    width: min(100%, 500px);
    padding: 24px;
    box-shadow: var(--shadow-soft);
}

.auth-subtitle {
    margin-top: 10px;
    color: var(--muted);
}

.auth-points {
    margin-top: 14px;
    display: grid;
    gap: 8px;
}

.auth-points p {
    margin: 0;
    font-size: 0.85rem;
    color: #3e5e93;
    background: rgba(237, 244, 255, 0.7);
    border: 1px solid rgba(102, 134, 190, 0.24);
    border-radius: 10px;
    padding: 8px 10px;
}

.password-group {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
}

.form-message {
    min-height: 24px;
    margin: 10px 0 0;
    font-weight: 700;
}

.form-message.success {
    color: var(--success);
}

.form-message.error {
    color: var(--danger);
}

button,
.btn-primary,
.btn-secondary {
    border: none;
    border-radius: 11px;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary {
    background: linear-gradient(140deg, var(--primary), var(--primary-strong));
    color: #ffffff;
    padding: 11px 16px;
    box-shadow: 0 10px 20px rgba(24, 95, 219, 0.28);
}

.btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 24px rgba(24, 95, 219, 0.32);
}

.btn-primary:disabled {
    cursor: not-allowed;
    opacity: 0.72;
    transform: none;
    box-shadow: none;
}

.btn-secondary {
    background: #eef3ff;
    color: #3c5282;
    border: 1px solid rgba(103, 132, 185, 0.28);
    padding: 10px 15px;
}

.btn-secondary:hover {
    transform: translateY(-1px);
    background: #e8f0ff;
}

.full-width {
    width: 100%;
    margin-top: 12px;
}

.site-footer {
    text-align: center;
    color: var(--muted);
    font-size: 0.88rem;
    padding: 10px 20px 24px;
}

/* Notifications removed */


@media (max-width: 1080px) {
    .promo-strip,
    .hero {
        grid-template-columns: 1fr;
    }

    .idea-grid,
    .testimonial-grid,
    .feature-grid {
        grid-template-columns: 1fr;
    }

    .controls-grid {
        grid-template-columns: 1fr;
    }

    .catalog-content {
        grid-template-columns: 1fr;
    }

    .cart-panel {
        position: static;
    }
}

@media (max-width: 760px) {
    .site-header {
        top: 8px;
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
        gap: 10px;
    }

    .main-layout {
        padding-top: 20px;
    }

    .product-meta {
        flex-direction: column;
        align-items: stretch;
    }

    .promo-group {
        grid-template-columns: 1fr;
    }

    .product-meta .btn-primary {
        width: 100%;
    }
}

@media (max-width: 640px) {
    .nav-links {
        justify-content: center;
    }

    .results-row {
        flex-direction: column;
        align-items: flex-start;
    }

    .auth-card {
        padding: 20px;
    }

    .password-group {
        grid-template-columns: 1fr;
    }
}

/* Marketplace-style header and navigation */
.site-header {
    width: min(1280px, calc(100% - 20px));
    margin: 10px auto 0;
    padding: 0;
    display: block;
    border-radius: 16px;
    background: linear-gradient(130deg, rgba(13, 44, 96, 0.96), rgba(21, 61, 122, 0.94));
    border: 1px solid rgba(88, 128, 196, 0.48);
    box-shadow: 0 16px 34px rgba(7, 25, 52, 0.38);
    backdrop-filter: blur(10px);
    overflow: hidden;
}

.header-top {
    display: grid;
    grid-template-columns: auto auto minmax(320px, 1fr) auto auto;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
}

.brand {
    font-size: 1.34rem;
    color: #ffffff;
    letter-spacing: 0.03em;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid rgba(140, 173, 226, 0.3);
    background: rgba(255, 255, 255, 0.08);
}

.location-pill {
    display: inline-flex;
    flex-direction: column;
    gap: 2px;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid rgba(134, 170, 226, 0.28);
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 10px;
    min-width: 168px;
}

.location-label {
    color: #c5dafd;
    font-size: 0.72rem;
    line-height: 1;
}

.location-pill strong {
    color: #ffffff;
    font-size: 0.86rem;
    line-height: 1.2;
}

.global-search {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0;
    width: 100%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    overflow: hidden;
    background: #ffffff;
}

.search-scope {
    width: 118px;
    border: none;
    border-right: 1px solid #d9e4ff;
    border-radius: 0;
    background: #f2f6ff;
    font-size: 0.84rem;
    font-weight: 700;
    color: #294a85;
    padding: 10px 8px;
}

.global-search input {
    border: none;
    border-radius: 0;
    padding: 11px 12px;
    background: #ffffff;
}

.global-search input:focus,
.search-scope:focus {
    box-shadow: none;
    border-color: transparent;
    outline: none;
}

.search-btn {
    border: none;
    border-radius: 0;
    background: #ffcb4f;
    color: #412d00;
    font-weight: 800;
    padding: 0 16px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.search-btn:hover {
    background: #ffbe1e;
}

.nav-links {
    justify-content: flex-end;
    gap: 6px;
}

.nav-links a {
    color: #d2e3ff;
    font-size: 0.84rem;
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    line-height: 1.1;
}

.nav-links a:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.11);
    border-color: rgba(142, 177, 230, 0.34);
}

.nav-links .active-link {
    color: #ffffff !important;
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(154, 186, 235, 0.5);
}

.cart-pill {
    background: #ffd35b;
    color: #3f2b00;
    border: 1px solid rgba(255, 255, 255, 0.22);
    font-weight: 800;
}

.cart-pill span {
    background: #12294f;
    color: #ffffff;
}

.category-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid rgba(130, 166, 225, 0.35);
    background: linear-gradient(120deg, #1c4b98, #114381);
    overflow-x: auto;
}

.category-bar a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #d9e8ff;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    border-radius: 999px;
    border: 1px solid rgba(141, 176, 230, 0.36);
    background: rgba(255, 255, 255, 0.07);
    padding: 7px 12px;
    white-space: nowrap;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.category-bar a:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.17);
    border-color: rgba(170, 198, 239, 0.58);
}

.category-bar .active-link {
    color: #0f2f65 !important;
    background: #ffcf57;
    border-color: #ffcf57;
}

.main-layout {
    padding-top: clamp(22px, 3vw, 38px);
}

.deal-banner {
    border-color: rgba(55, 100, 178, 0.32);
    background: linear-gradient(100deg, rgba(255, 245, 221, 0.94), rgba(232, 244, 255, 0.92));
}

.product-card {
    border-radius: 18px;
}

.product-meta .btn-primary {
    min-width: 112px;
}

@media (max-width: 1180px) {
    .header-top {
        grid-template-columns: auto 1fr auto;
    }

    .location-pill {
        display: none;
    }

    .global-search {
        grid-column: 1 / -1;
        order: 4;
    }

    .nav-links {
        justify-content: flex-start;
    }
}

@media (max-width: 760px) {
    .site-header {
        width: 100%;
        top: 0;
        margin: 0;
        border-radius: 0;
        border-left: none;
        border-right: none;
    }

    .header-top {
        grid-template-columns: 1fr auto;
        padding: 10px;
        gap: 8px;
    }

    .brand {
        padding: 0;
        border: none;
        background: transparent;
        font-size: 1.2rem;
    }

    .global-search {
        grid-column: 1 / -1;
        order: 3;
    }

    .search-scope {
        width: 88px;
        font-size: 0.78rem;
    }

    .nav-links {
        grid-column: 1 / -1;
        width: 100%;
        order: 4;
        justify-content: space-between;
    }

    .nav-links a {
        flex: 1;
        justify-content: center;
        text-align: center;
    }

    .cart-pill {
        padding: 8px 10px;
    }

    .category-bar {
        padding: 8px 10px;
        gap: 6px;
    }

    .category-bar a {
        font-size: 0.78rem;
        padding: 6px 10px;
    }
}

`;

function injectGlobalStyles() {
    // Disabled to allow external style.css
    return;
}

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
        etaDays: 1,
        image: "https://loremflickr.com/640/480/laptop?lock=101"
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
        etaDays: 1,
        image: "https://loremflickr.com/640/480/smartphone?lock=102"
    },
    {
        id: 3,
        name: "Quantum Gaming Console",
        category: "electronics",
        price: 42999,
        mrp: 48999,
        rating: 4.6,
        reviews: 834,
        tag: "Gamer Pick",
        stock: 7,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/gaming?lock=103"
    },
    {
        id: 4,
        name: "PixelTab 11",
        category: "electronics",
        price: 22999,
        mrp: 27999,
        rating: 4.4,
        reviews: 690,
        tag: "Productive",
        stock: 10,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/tablet?lock=104"
    },
    {
        id: 5,
        name: "MegaView 55 4K Smart TV",
        category: "electronics",
        price: 45999,
        mrp: 59999,
        rating: 4.7,
        reviews: 975,
        tag: "Festival Deal",
        stock: 5,
        etaDays: 2,
        bulky: true,
        image: "https://loremflickr.com/640/480/television?lock=105"
    },
    {
        id: 6,
        name: "CineSound Home Theatre",
        category: "electronics",
        price: 18999,
        mrp: 24999,
        rating: 4.5,
        reviews: 566,
        tag: "Movie Night",
        stock: 9,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/speaker?lock=106"
    },
    {
        id: 7,
        name: "Noise-Cancel Headphones",
        category: "accessories",
        price: 6999,
        mrp: 9999,
        rating: 4.6,
        reviews: 3912,
        tag: "Best Value",
        stock: 12,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/headphones?lock=107"
    },
    {
        id: 8,
        name: "Smart Fitness Watch",
        category: "accessories",
        price: 8499,
        mrp: 11999,
        rating: 4.5,
        reviews: 1640,
        tag: "Trending",
        stock: 4,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/smartwatch?lock=108"
    },
    {
        id: 9,
        name: "AeroBuds Wireless Earbuds",
        category: "accessories",
        price: 3499,
        mrp: 4999,
        rating: 4.4,
        reviews: 2150,
        tag: "Pocket Audio",
        stock: 15,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/earbuds?lock=109"
    },
    {
        id: 10,
        name: "Laptop Backpack Pro",
        category: "accessories",
        price: 2499,
        mrp: 3499,
        rating: 4.5,
        reviews: 920,
        tag: "Daily Carry",
        stock: 18,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/backpack?lock=110"
    },
    {
        id: 11,
        name: "Ergo Office Chair",
        category: "home",
        price: 12999,
        mrp: 16999,
        rating: 4.4,
        reviews: 1320,
        tag: "Comfort",
        stock: 8,
        etaDays: 3,
        image: "https://loremflickr.com/640/480/office?lock=111"
    },
    {
        id: 12,
        name: "Air Purifier Max",
        category: "home",
        price: 10999,
        mrp: 14999,
        rating: 4.6,
        reviews: 1575,
        tag: "Healthy Home",
        stock: 3,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/purifier?lock=112"
    },
    {
        id: 13,
        name: "FrostMax Double-Door Refrigerator",
        category: "home",
        price: 52999,
        mrp: 62999,
        rating: 4.6,
        reviews: 742,
        tag: "Large Item",
        stock: 2,
        etaDays: 3,
        bulky: true,
        image: "https://loremflickr.com/640/480/refrigerator?lock=113"
    },
    {
        id: 14,
        name: "WashPro Front-Load Washing Machine",
        category: "home",
        price: 33999,
        mrp: 42999,
        rating: 4.5,
        reviews: 658,
        tag: "Home Upgrade",
        stock: 4,
        etaDays: 3,
        bulky: true,
        image: "https://loremflickr.com/640/480/laundry?lock=114"
    },
    {
        id: 15,
        name: "FamilyLounge 3-Seater Sofa",
        category: "home",
        price: 27999,
        mrp: 35999,
        rating: 4.4,
        reviews: 430,
        tag: "Space Saver",
        stock: 3,
        etaDays: 4,
        bulky: true,
        image: "https://loremflickr.com/640/480/sofa?lock=115"
    },
    {
        id: 16,
        name: "CoolBreeze 1.5T Inverter AC",
        category: "home",
        price: 38999,
        mrp: 46999,
        rating: 4.6,
        reviews: 890,
        tag: "Summer Pick",
        stock: 6,
        etaDays: 2,
        bulky: true,
        image: "https://loremflickr.com/640/480/ac?lock=116"
    },
    {
        id: 17,
        name: "Urban Sprint Sneakers",
        category: "fashion",
        price: 2999,
        mrp: 4499,
        rating: 4.5,
        reviews: 1420,
        tag: "Daily Wear",
        stock: 22,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/sneakers?lock=117"
    },
    {
        id: 18,
        name: "Classic Denim Jacket",
        category: "fashion",
        price: 3599,
        mrp: 4999,
        rating: 4.3,
        reviews: 780,
        tag: "Street Style",
        stock: 14,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/denim?lock=118"
    },
    {
        id: 19,
        name: "Womens Ethnic Kurti Set",
        category: "fashion",
        price: 1799,
        mrp: 2699,
        rating: 4.5,
        reviews: 1230,
        tag: "Festive Pick",
        stock: 18,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/dress?lock=119"
    },
    {
        id: 20,
        name: "Premium Cotton T-Shirts Pack",
        category: "fashion",
        price: 1499,
        mrp: 2199,
        rating: 4.4,
        reviews: 960,
        tag: "Best Combo",
        stock: 26,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/tshirt?lock=120"
    },
    {
        id: 21,
        name: "Vitamin C Face Serum",
        category: "beauty",
        price: 799,
        mrp: 1299,
        rating: 4.5,
        reviews: 2120,
        tag: "Skin Care",
        stock: 35,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/serum?lock=121"
    },
    {
        id: 22,
        name: "Matte Lipstick Combo",
        category: "beauty",
        price: 999,
        mrp: 1499,
        rating: 4.4,
        reviews: 1740,
        tag: "Makeup Deal",
        stock: 28,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/lipstick?lock=122"
    },
    {
        id: 23,
        name: "Ionic Hair Dryer",
        category: "beauty",
        price: 1899,
        mrp: 2699,
        rating: 4.3,
        reviews: 640,
        tag: "Salon At Home",
        stock: 12,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/hairdryer?lock=123"
    },
    {
        id: 24,
        name: "Organic Basmati Rice 5kg",
        category: "grocery",
        price: 649,
        mrp: 899,
        rating: 4.6,
        reviews: 3200,
        tag: "Daily Essential",
        stock: 50,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/rice?lock=124"
    },
    {
        id: 25,
        name: "Cold Pressed Olive Oil 1L",
        category: "grocery",
        price: 799,
        mrp: 1099,
        rating: 4.5,
        reviews: 1450,
        tag: "Healthy Choice",
        stock: 30,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/oliveoil?lock=125"
    },
    {
        id: 26,
        name: "Premium Almonds 1kg",
        category: "grocery",
        price: 999,
        mrp: 1399,
        rating: 4.6,
        reviews: 1680,
        tag: "High Protein",
        stock: 21,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/almonds?lock=126"
    },
    {
        id: 27,
        name: "Instant Coffee Gold Blend",
        category: "grocery",
        price: 449,
        mrp: 649,
        rating: 4.4,
        reviews: 2100,
        tag: "Morning Boost",
        stock: 40,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/coffee?lock=127"
    },
    {
        id: 28,
        name: "STEM Robotics Kit",
        category: "toys",
        price: 2499,
        mrp: 3499,
        rating: 4.4,
        reviews: 520,
        tag: "Learning Toy",
        stock: 0,
        etaDays: 3,
        image: "https://loremflickr.com/640/480/robot?lock=128"
    },
    {
        id: 29,
        name: "Remote Control Monster Truck",
        category: "toys",
        price: 1899,
        mrp: 2799,
        rating: 4.5,
        reviews: 730,
        tag: "Kids Favorite",
        stock: 9,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/truck?lock=129"
    },
    {
        id: 30,
        name: "Creative Building Blocks 500",
        category: "toys",
        price: 1399,
        mrp: 1999,
        rating: 4.6,
        reviews: 910,
        tag: "Creative Play",
        stock: 16,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/blocks?lock=130"
    },
    {
        id: 31,
        name: "Pro Yoga Mat",
        category: "sports",
        price: 1299,
        mrp: 1799,
        rating: 4.5,
        reviews: 1190,
        tag: "Fitness Pick",
        stock: 24,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/yoga?lock=131"
    },
    {
        id: 32,
        name: "Kashmir Willow Cricket Bat",
        category: "sports",
        price: 2299,
        mrp: 3199,
        rating: 4.4,
        reviews: 840,
        tag: "Match Ready",
        stock: 13,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/cricket?lock=132"
    },
    {
        id: 33,
        name: "Adjustable Dumbbell Set 20kg",
        category: "sports",
        price: 4999,
        mrp: 6999,
        rating: 4.5,
        reviews: 650,
        tag: "Gym At Home",
        stock: 6,
        etaDays: 3,
        image: "https://loremflickr.com/640/480/dumbbell?lock=133"
    },
    {
        id: 34,
        name: "Atomic Habits Paperback",
        category: "books",
        price: 399,
        mrp: 599,
        rating: 4.8,
        reviews: 5800,
        tag: "Best Seller",
        stock: 34,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/books?lock=134"
    },
    {
        id: 35,
        name: "The Psychology of Money",
        category: "books",
        price: 449,
        mrp: 699,
        rating: 4.7,
        reviews: 4900,
        tag: "Reader Choice",
        stock: 27,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/money?lock=135"
    },
    {
        id: 36,
        name: "Rich Dad Poor Dad",
        category: "books",
        price: 349,
        mrp: 549,
        rating: 4.6,
        reviews: 5100,
        tag: "Classic Read",
        stock: 31,
        etaDays: 1,
        image: "https://loremflickr.com/640/480/reading?lock=136"
    },
    {
        id: 37,
        name: "Car Vacuum Cleaner",
        category: "automotive",
        price: 1699,
        mrp: 2499,
        rating: 4.3,
        reviews: 780,
        tag: "Car Care",
        stock: 17,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/car?lock=137"
    },
    {
        id: 38,
        name: "ISI Full Face Helmet",
        category: "automotive",
        price: 2199,
        mrp: 3099,
        rating: 4.5,
        reviews: 1120,
        tag: "Rider Safety",
        stock: 19,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/helmet?lock=138"
    },
    {
        id: 39,
        name: "Bike Phone Holder",
        category: "automotive",
        price: 699,
        mrp: 999,
        rating: 4.2,
        reviews: 640,
        tag: "Travel Utility",
        stock: 29,
        etaDays: 2,
        image: "https://loremflickr.com/640/480/motorcycle?lock=139"
    }
];

const CATEGORY_OPTIONS = ["electronics", "accessories", "home", "fashion", "beauty", "grocery", "toys", "sports", "books", "automotive"];

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

// Notifications removed — showToast is intentionally a no-op
function showToast(message, tone = "info") {
    // Notifications disabled
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
    const imageMarkup = product.image
        ? `<img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer">`
        : `<span class="visual-initial">${initials}</span>`;

    const card = document.createElement("article");
    card.className = "product-card fade-in";
    card.innerHTML = `
        <div class="product-visual ${product.category}">
            ${imageMarkup}
            <span class="tag">${product.tag}</span>
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

function setupGlobalSearch() {
    document.querySelectorAll("form[data-global-search]").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const queryInput = form.querySelector('input[name="q"]');
            const scopeInput = form.querySelector('select[name="scope"]');
            const query = queryInput instanceof HTMLInputElement ? queryInput.value.trim() : "";
            const scope = scopeInput instanceof HTMLSelectElement ? scopeInput.value : "all";

            const params = new URLSearchParams();
            if (query) {
                params.set("q", query);
            }
            if (scope && scope !== "all") {
                params.set("category", scope);
            }

            const queryString = params.toString();
            const nextUrl = queryString ? `products.html?${queryString}#catalog` : "products.html#catalog";
            window.location.href = nextUrl;
        });
    });
}

function applyCatalogParamsFromQuery() {
    const searchInput = document.getElementById("search-input");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");
    const stockFilter = document.getElementById("stock-filter");

    if (!searchInput || !categoryFilter || !sortFilter || !stockFilter) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const query = (params.get("q") || "").trim();
    const category = (params.get("category") || "").trim().toLowerCase();
    const sort = (params.get("sort") || "").trim();
    const stock = (params.get("stock") || "").trim().toLowerCase();

    if (searchInput instanceof HTMLInputElement && query) {
        searchInput.value = query;
    }

    if (categoryFilter instanceof HTMLSelectElement) {
        const allowedCategories = ["all", ...CATEGORY_OPTIONS];
        if (allowedCategories.includes(category)) {
            categoryFilter.value = category;
        }
    }

    if (sortFilter instanceof HTMLSelectElement) {
        const allowedSorts = ["featured", "price-low", "price-high", "rating-high", "discount-high"];
        if (allowedSorts.includes(sort)) {
            sortFilter.value = sort;
        }
    }

    if (stockFilter instanceof HTMLInputElement) {
        stockFilter.checked = stock === "1" || stock === "true" || stock === "yes";
    }

    document.querySelectorAll("form[data-global-search]").forEach((form) => {
        const queryField = form.querySelector('input[name="q"]');
        const scopeField = form.querySelector('select[name="scope"]');

        if (queryField instanceof HTMLInputElement) {
            queryField.value = query;
        }

        if (scopeField instanceof HTMLSelectElement) {
            const allowedCategories = ["all", ...CATEGORY_OPTIONS];
            if (allowedCategories.includes(category)) {
                scopeField.value = category;
            }
        }
    });
}

function syncCatalogQueryState() {
    const searchInput = document.getElementById("search-input");
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");
    const stockFilter = document.getElementById("stock-filter");

    if (!(searchInput instanceof HTMLInputElement) || !(categoryFilter instanceof HTMLSelectElement) || !(sortFilter instanceof HTMLSelectElement) || !(stockFilter instanceof HTMLInputElement)) {
        return;
    }

    const params = new URLSearchParams();
    const query = searchInput.value.trim();
    const category = categoryFilter.value;
    const sort = sortFilter.value;
    const inStockOnly = stockFilter.checked;

    if (query) {
        params.set("q", query);
    }

    if (category !== "all") {
        params.set("category", category);
    }

    if (sort !== "featured") {
        params.set("sort", sort);
    }

    if (inStockOnly) {
        params.set("stock", "1");
    }

    const queryString = params.toString();
    const nextUrl = queryString ? `${window.location.pathname}?${queryString}${window.location.hash}` : `${window.location.pathname}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
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

    syncCatalogQueryState();
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

    applyCatalogParamsFromQuery();

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

(function initTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        const link = document.createElement('link');
        link.id = 'dark-theme-style';
        link.rel = 'stylesheet';
        link.href = 'dark-theme.css';
        document.head.appendChild(link);
    }
})();

function setupThemeToggle() {
    const toggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    if (!toggleBtn || !themeIcon) return;

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        themeIcon.textContent = '☀️';
        toggleBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
        themeIcon.textContent = '🌙';
        toggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }

    toggleBtn.addEventListener('click', () => {
        const theme = localStorage.getItem('theme') || 'light';
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            if (!document.getElementById('dark-theme-style')) {
                const link = document.createElement('link');
                link.id = 'dark-theme-style';
                link.rel = 'stylesheet';
                link.href = 'dark-theme.css';
                document.head.appendChild(link);
            }
            themeIcon.textContent = '☀️';
            toggleBtn.setAttribute('title', 'Switch to Light Mode');
        } else {
            const darkStyle = document.getElementById('dark-theme-style');
            if (darkStyle) {
                darkStyle.remove();
            }
            themeIcon.textContent = '🌙';
            toggleBtn.setAttribute('title', 'Switch to Dark Mode');
        }
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
    injectGlobalStyles();
    setupGlobalSearch();
    refreshCartCount();
    setupHomepageInteractions();
    setupCatalogInteractions();
    setupDealCountdown();
    setupLoginForm();
    setupThemeToggle();
    setupScrollAnimations();
});
