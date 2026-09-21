const grid = document.getElementById('catalog');
const tabs = document.querySelectorAll('.tab');
const loadMoreBtn = document.getElementById('load-more');

const mobileMq = window.matchMedia('(max-width: 768px)');
const MOBILE_LIMIT = 4;
const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80';

let activeCategory = 'coffee';
let expanded = false;

function createCard(product) {
  const card = document.createElement('article');
  card.className = 'product';
  card.dataset.id = product.id;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${product.name}, open details`);

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product__body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="product__price">$${product.price.toFixed(2)}</span>
    </div>
  `;

  card.querySelector('img').addEventListener('error', (e) => {
    e.target.src = FALLBACK_IMG;
  }, { once: true });

  return card;
}

function render() {
  const items = PRODUCTS.filter((p) => p.category === activeCategory);
  const limited = mobileMq.matches && !expanded;
  const visible = limited ? items.slice(0, MOBILE_LIMIT) : items;

  grid.innerHTML = '';
  visible.forEach((p) => grid.appendChild(createCard(p)));

  // "Load more" only on small screens and only if there is something hidden
  loadMoreBtn.hidden = !(limited && items.length > MOBILE_LIMIT);
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activeCategory = tab.dataset.category;
    expanded = false;

    tabs.forEach((t) => {
      const isActive = t === tab;
      t.classList.toggle('tab--active', isActive);
      t.setAttribute('aria-pressed', String(isActive));
    });

    render();
  });
});

loadMoreBtn.addEventListener('click', () => {
  expanded = true;
  render();
});

mobileMq.addEventListener('change', render);

render();