document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('mobileMenu');
  const openBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('close-btn');

  if (openBtn && menu) {
    openBtn.addEventListener('click', () => {
      menu.style.display = 'flex';
      openBtn.classList.add('hidden');
      closeBtn.classList.remove('hidden');
    });
  }

  if (closeBtn && menu) {
    closeBtn.addEventListener('click', () => {
      menu.style.display = 'none';
      closeBtn.classList.add('hidden');
      openBtn.classList.remove('hidden');
    });
  }


  const cartIcon = document.querySelector('.fa-basket-shopping');
  if (cartIcon) {
    const wrapper = document.createElement('div');
    wrapper.id = 'cart-icon-wrapper';
    wrapper.style.cssText = 'position:relative; display:inline-block; cursor:pointer;';
    cartIcon.parentNode.insertBefore(wrapper, cartIcon);
    wrapper.appendChild(cartIcon);

    const badge = document.createElement('span');
    badge.id = 'cart-badge';
    badge.style.cssText = `
      display: none;
      position: absolute;
      top: -8px;
      right: -8px;
      background: white;
      color: #b91c1c;
      font-size: 0.65rem;
      font-weight: 700;
      border-radius: 999px;
      width: 18px;
      height: 18px;
      align-items: center;
      justify-content: center;
      font-family: 'DM Sans', sans-serif;
      box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    `;
    wrapper.appendChild(badge);

    wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = document.getElementById('cart-dropdown');
      if (!dropdown) return;
      const isOpen = dropdown.style.display === 'block';
      dropdown.style.display = isOpen ? 'none' : 'block';
      if (!isOpen) renderCart();
    });
  }

  const cartDropdown = document.createElement('div');
  cartDropdown.id = 'cart-dropdown';
  cartDropdown.style.cssText = `
    display: none;
    position: fixed;
    top: 52px;
    right: 16px;
    width: 320px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    z-index: 100;
    padding: 1.25rem;
    font-family: 'DM Sans', sans-serif;
  `;
  document.body.appendChild(cartDropdown);
cartDropdown.addEventListener('click', (e) => {
  e.stopPropagation();
});
  document.addEventListener('click', (e) => {
    const wrapper = document.getElementById('cart-icon-wrapper');
    if (!cartDropdown.contains(e.target) && (!wrapper || !wrapper.contains(e.target))) {
      cartDropdown.style.display = 'none';
    }
  });

  updateCartBadge();
});


function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const cart = getCart();
  if (cart.length === 0) {
    badge.style.display = 'none';
  } else {
    badge.style.display = 'flex';
    badge.textContent = cart.length;
  }
}


function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(course) {
  const cart = getCart();
  if (cart.find(c => c.id === course.id)) return false;
  cart.push({ id: course.id, title: course.title, price: course.price });
  saveCart(cart);
  updateCartBadge();
  renderCart();
  const dropdown = document.getElementById('cart-dropdown');
  if (dropdown) dropdown.style.display = 'block';
  return true;
}

function removeFromCart(id) {
  const cart = getCart().filter(c => c.id !== id);
  saveCart(cart);
  updateCartBadge();
  renderCart();
}


function renderCart() {
  const dropdown = document.getElementById('cart-dropdown');
  if (!dropdown) return;

  const cart = getCart();

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
      <p style="font-weight:600; font-size:0.95rem; color:#1a1a1a;">Your cart</p>
      <span id="cart-close-btn" style="cursor:pointer; color:#6b7280; font-size:1.1rem;">✕</span>
    </div>
  `;

  if (cart.length === 0) {
    html += `<p style="color:#9ca3af; font-size:0.85rem; text-align:center; padding:1rem 0;">Your cart is empty.</p>`;
  } else {
    html += `<div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom:1rem;">`;
    cart.forEach(item => {
      html += `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
          <span style="font-size:0.82rem; color:#1a1a1a; flex:1;">${item.title}</span>
          <span style="font-size:0.82rem; font-weight:600; color:#1a1a1a; white-space:nowrap;">
            MGA ${item.price.toLocaleString('fr-MG')}
          </span>
          <i class="fa-solid fa-trash cart-remove" data-id="${item.id}"
            style="color:#9ca3af; cursor:pointer; font-size:0.8rem; transition:color 0.2s;"
            onmouseover="this.style.color='#b91c1c'"
            onmouseout="this.style.color='#9ca3af'">
          </i>
        </div>
      `;
    });
    html += `</div>`;

    const total = cart.reduce((sum, c) => sum + c.price, 0);
    html += `
      <div style="border-top:1px solid #e5e7eb; padding-top:0.75rem; display:flex; justify-content:space-between; margin-bottom:1rem;">
        <span style="font-size:0.8rem; font-weight:500; color:grey;">TOTAL</span>
        <span style="font-size:0.85rem; font-weight:600; color:#1a1a1a;">MGA ${total.toLocaleString('fr-MG')}</span>
      </div>
      <button id="confirm-order-btn" style="
        width:100%; background:#b91c1c; color:white; border:none; border-radius:6px;
        padding:0.75rem; font-size:0.75rem; font-weight:600; letter-spacing:0.08em;
        text-transform:uppercase; cursor:pointer; font-family:'DM Sans',sans-serif;
      ">Confirm order</button>
    `;
  }

  dropdown.innerHTML = html;

  const closeCartBtn = document.getElementById('cart-close-btn');
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      dropdown.style.display = 'none';
    });
  }

  dropdown.querySelectorAll('.cart-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id));
    });
  });

  const confirmBtn = document.getElementById('confirm-order-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      saveCart([]);
      updateCartBadge();
      renderCart();
      showToast('🎉 Thank you so much for buying our course! We\'ll be in touch shortly with all the details. Welcome aboard!');
    });
  }
}


function showToast(message, type = 'success') {
  const toast = document.createElement('div');

  if (type === 'error') {
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      background: #b91c1c;
      color: white;
      padding: 0.875rem 2rem;
      border-radius: 8px;
      font-size: 0.875rem;
      font-family: 'DM Sans', sans-serif;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      z-index: 200;
      max-width: 90vw;
      text-align: center;
      transition: opacity 0.4s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
    return;
  }

  const icon = document.createElement('span');
  icon.textContent = '🎉';
  icon.style.cssText = 'font-size:1.4rem; flex-shrink:0;';

  const textWrap = document.createElement('div');
  textWrap.style.cssText = 'display:flex; flex-direction:column; gap:2px;';

  const lines = message.replace('🎉 ', '').split('!');
  const title = document.createElement('span');
  title.textContent = lines[0] + '!';
  title.style.cssText = 'font-weight:500; font-size:0.9rem; ';

  const sub = document.createElement('span');
  sub.textContent = lines.slice(1).join('!').trim();
  sub.style.cssText = 'font-size:0.8rem; opacity:0.9;';

  textWrap.append(title, sub);

  const closeBtn = document.createElement('span');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = 'cursor:pointer; opacity:0.7; font-size:0.9rem; flex-shrink:0; align-self:flex-start;';
  closeBtn.addEventListener('click', () => toast.remove());

  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to right, #22c55e, #16a34a);
    color: white;
    padding: 1rem 1.25rem;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    z-index: 200;
    max-width: 420px;
    width: 90vw;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: opacity 0.4s ease;
  `;

  toast.append(icon, textWrap, closeBtn);
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}