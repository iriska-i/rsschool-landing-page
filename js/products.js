const PRODUCTS = [
  // ---- Coffee ----
  { id: 1, category: 'coffee', name: 'Irish coffee', price: 7.0,
    description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    image: 'img/coffee-1.png' },
  { id: 2, category: 'coffee', name: 'Kahlua coffee', price: 7.0,
    description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    image: 'img/coffee-2.png' },
  { id: 3, category: 'coffee', name: 'Honey raf', price: 5.5,
    description: 'Espresso with frothed milk, cream and aromatic honey',
    image: 'img/coffee-3.png' },
  { id: 4, category: 'coffee', name: 'Ice cappuccino', price: 5.0,
    description: 'Cappuccino with soft thick foam in summer version with ice',
    image: 'img/coffee-4.png' },
  { id: 5, category: 'coffee', name: 'Espresso', price: 4.5,
    description: 'Classic black coffee',
    image: 'img/coffee-5.png' },
  { id: 6, category: 'coffee', name: 'Latte', price: 5.5,
    description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
    image: 'img/coffee-6.png' },
  { id: 7, category: 'coffee', name: 'Latte macchiato', price: 5.5,
    description: 'Espresso with frothed milk and chocolate',
    image: 'img/coffee-7.png' },
  { id: 8, category: 'coffee', name: 'Coffee with cognac', price: 6.5,
    description: 'Fragrant black coffee with cognac and whipped cream',
    image: 'img/coffee-8.png' },

  // ---- Tea ----
  { id: 9, category: 'tea', name: 'Moroccan', price: 4.5,
    description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    image: 'img/tea-1.png' },
  { id: 10, category: 'tea', name: 'Ginger', price: 5.0,
    description: 'Original black tea with fresh ginger, lemon and honey',
    image: 'img/tea-2.png' },
  { id: 11, category: 'tea', name: 'Cranberry', price: 5.0,
    description: 'Invigorating black tea with cranberry and honey',
    image: 'img/tea-3.png' },
  { id: 12, category: 'tea', name: 'Sea buckthorn', price: 5.5,
    description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    image: 'img/tea-4.png' },

  // ---- Dessert ----
  { id: 13, category: 'dessert', name: 'Marble cheesecake', price: 3.5,
    description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    image: 'img/dessert-1.png' },
  { id: 14, category: 'dessert', name: 'Red velvet', price: 4.0,
    description: 'Layer cake with cream cheese frosting',
    image: 'img/dessert-2.png' },
  { id: 15, category: 'dessert', name: 'Cheesecakes', price: 4.5,
    description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    image: 'img/dessert-3.png' },
  { id: 16, category: 'dessert', name: 'Creme brulee', price: 4.0,
    description: 'Delicate creamy dessert in a caramel basket with wild berries',
    image: 'img/dessert-4.png' },
  { id: 17, category: 'dessert', name: 'Pancakes', price: 4.5,
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    image: 'img/dessert-5.png' },
  { id: 18, category: 'dessert', name: 'Honey cake', price: 4.5,
    description: 'Classic honey cake with delicate custard',
    image: 'img/dessert-6.png' },
  { id: 19, category: 'dessert', name: 'Chocolate cake', price: 5.5,
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    image: 'img/dessert-7.png' },
  { id: 20, category: 'dessert', name: 'Black forest', price: 6.5,
    description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    image: 'img/dessert-8.png' },
];

// Modal options. Final price = product.price + size.extra + sum(additives.extra)
// Sizes (200/300/400 ml) and additive names for coffee and tea come from the Figma modals.
// The "extra" prices are NOT visible in the mockup (it only shows the base price in "Total").
// Dessert options are my own (the Dessert modal was not read from Figma).
const OPTIONS = {
  coffee: {
    sizes: [
      { id: 's', label: 'S', note: '200 ml', extra: 0 },
      { id: 'm', label: 'M', note: '300 ml', extra: 0.5 },
      { id: 'l', label: 'L', note: '400 ml', extra: 1.0 },
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', extra: 0.5 },
      { id: 'cinnamon', label: 'Cinnamon', extra: 0.5 },
      { id: 'syrup', label: 'Syrup', extra: 0.5 },
    ],
  },
  tea: {
    sizes: [
      { id: 's', label: 'S', note: '200 ml', extra: 0 },
      { id: 'm', label: 'M', note: '300 ml', extra: 0.5 },
      { id: 'l', label: 'L', note: '400 ml', extra: 1.0 },
    ],
    additives: [
      { id: 'sugar', label: 'Sugar', extra: 0.5 },
      { id: 'lemon', label: 'Lemon', extra: 0.5 },
      { id: 'syrup', label: 'Syrup', extra: 0.5 },
    ],
  },
  dessert: {
    sizes: [
      { id: 's', label: 'S', note: '100 g', extra: 0 },
      { id: 'm', label: 'M', note: '150 g', extra: 0.5 },
      { id: 'l', label: 'L', note: '200 g', extra: 1.0 },
    ],
    additives: [
      { id: 'berries', label: 'Berries', extra: 0.5 },
      { id: 'cream', label: 'Whipped cream', extra: 0.5 },
      { id: 'chocolate', label: 'Chocolate sauce', extra: 0.5 },
    ],
  },
};