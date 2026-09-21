(() => {
  const modalEl = document.getElementById('modal');
  const catalogEl = document.getElementById('catalog');
  const imgEl = document.getElementById('modal-img');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');
  const sizesEl = document.getElementById('modal-sizes');
  const additivesEl = document.getElementById('modal-additives');
  const totalEl = document.getElementById('modal-total');
  const breakdownEl = document.getElementById('modal-breakdown');
  const closeBtn = modalEl.querySelector('.modal__close');

  let currentProduct = null;
  let currentOptions = null;
  let lastTrigger = null;

  const money = (n) => `$${n.toFixed(2)}`;

  function optionHtml(type, name, o, checked) {
    return `
      <label class="option">
        <input type="${type}" name="${name}" value="${o.id}" ${checked ? 'checked' : ''}>
        <span class="option__label">${o.label}</span>
        ${o.note ? `<span class="option__note">${o.note}</span>` : ''}
        ${type === 'checkbox' ? `<span class="option__note">+${money(o.extra)}</span>` : ''}
      </label>
    `;
  }

  function updatePrice() {
    const sizeId = modalEl.querySelector('input[name="size"]:checked').value;
    const size = currentOptions.sizes.find((s) => s.id === sizeId);

    const checked = [...modalEl.querySelectorAll('input[name="additive"]:checked')];
    const additivesSum = checked.reduce((sum, input) => {
      const a = currentOptions.additives.find((x) => x.id === input.value);
      return sum + a.extra;
    }, 0);

    const total = currentProduct.price + size.extra + additivesSum;

    totalEl.textContent = money(total);
    breakdownEl.textContent =
      `${money(currentProduct.price)} base + ${money(size.extra)} size + ${money(additivesSum)} additives`;
  }

  function openModal(product, trigger) {
    currentProduct = product;
    currentOptions = OPTIONS[product.category];
    lastTrigger = trigger;

    imgEl.src = product.image;
    imgEl.alt = product.name;
    titleEl.textContent = product.name;
    descEl.textContent = product.description;

    sizesEl.innerHTML = currentOptions.sizes
      .map((s, i) => optionHtml('radio', 'size', s, i === 0))
      .join('');
    additivesEl.innerHTML = currentOptions.additives
      .map((a) => optionHtml('checkbox', 'additive', a, false))
      .join('');

    updatePrice();

    modalEl.hidden = false;
    document.body.classList.add('no-scroll');
    closeBtn.focus();
  }

  function closeModal() {
    modalEl.hidden = true;
    document.body.classList.remove('no-scroll');
    if (lastTrigger) lastTrigger.focus();
  }

  function handleCardActivate(e) {
    const card = e.target.closest('.product');
    if (!card) return;
    const product = PRODUCTS.find((p) => p.id === Number(card.dataset.id));
    if (product) openModal(product, card);
  }

  // open: click or Enter/Space on a card (cards are re-rendered, so delegate)
  catalogEl.addEventListener('click', handleCardActivate);
  catalogEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardActivate(e);
    }
  });

  // live price update
  modalEl.addEventListener('change', updatePrice);

  // close: overlay, X button, Escape
  modalEl.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalEl.hidden) closeModal();
  });
})();