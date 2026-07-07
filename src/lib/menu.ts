export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  popular?: boolean;
  catering?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

// Prices are estimates for demo purposes — replace with real menu pricing.
export const menu: MenuCategory[] = [
  {
    id: "coffee",
    name: "Coffee & Drinks",
    items: [
      { id: "espresso", name: "Espresso", description: "Double shot, farm-grown beans", price: 3.5 },
      { id: "cortado", name: "Cortado", description: "Espresso cut with steamed milk", price: 4.5, popular: true },
      { id: "cappuccino", name: "Cappuccino", description: "Espresso, steamed milk, deep foam", price: 5, popular: true },
      { id: "mocha", name: "Mocha", description: "Espresso, chocolate, steamed milk", price: 5.75, popular: true },
      {
        id: "iced-caramel-macchiato",
        name: "Iced Caramel Macchiato",
        description: "Vanilla, milk, espresso, caramel drizzle",
        price: 6.25,
        popular: true,
      },
      { id: "juice", name: "Juice", description: "Fresh-pressed, rotating selection", price: 6 },
    ],
  },
  {
    id: "toast-bowls",
    name: "Toast & Bowls",
    items: [
      {
        id: "breakfast-avocado-toast",
        name: "Breakfast Avocado Toast",
        description: "Smashed avocado, soft egg, chili flake",
        price: 11,
        popular: true,
      },
      {
        id: "salmon-avocado-toast",
        name: "Salmon Avocado Toast",
        description: "Avocado, smoked salmon, pickled onion",
        price: 14,
      },
      {
        id: "smoked-salmon-egg-toast",
        name: "Smoked Salmon & Egg Toast",
        description: "Smoked salmon, soft egg, herb cream cheese",
        price: 13,
        popular: true,
      },
      {
        id: "nutella-strawberry-toast",
        name: "Nutella & Strawberry Toast",
        description: "Nutella, fresh strawberry, toasted brioche",
        price: 10,
      },
      {
        id: "burrata-prosciutto-avocado-toast",
        name: "Burrata & Prosciutto Avocado Toast",
        description: "Burrata, prosciutto, avocado, olive oil",
        price: 15,
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches & Flatbreads",
    items: [
      { id: "breakfast-sandwich", name: "Breakfast Sandwich", description: "Egg, cheese, choice of protein on a roll", price: 10 },
      { id: "rustic-grilled-cheese", name: "Rustic Grilled Cheese", description: "Melted cheese blend, rustic bread", price: 11 },
      {
        id: "arugula-prosciutto-flatbread",
        name: "Arugula Prosciutto Flatbread",
        description: "Prosciutto, arugula, shaved parmesan",
        price: 13,
      },
      { id: "traditional-shakshuka", name: "Traditional Shakshuka", description: "Eggs poached in spiced tomato sauce", price: 14 },
    ],
  },
  {
    id: "bakery",
    name: "Bakery",
    items: [
      { id: "nutella-croissant", name: "Nutella Croissant", description: "Buttery croissant, Nutella filling", price: 5.5, popular: true },
    ],
  },
  {
    id: "catering",
    name: "Catering",
    items: [
      {
        id: "catering-avo-egg-toast-bar",
        name: "Catering Avo & Egg Toast Bar",
        description: "Build-your-own toast bar for groups",
        price: null,
        popular: true,
        catering: true,
      },
      {
        id: "catering-muffins",
        name: "Catering Muffins",
        description: "Assorted muffins by the dozen",
        price: null,
        catering: true,
      },
    ],
  },
];

export function formatPrice(price: number | null) {
  if (price === null) return "Call for pricing";
  return `$${price.toFixed(2)}`;
}
