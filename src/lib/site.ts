export const site = {
  name: "Carmela Coffee",
  location: "Parkland",
  tagline: "Farm-to-cup coffee, crafted bites, and a spot to slow down.",
  description:
    "Relaxed, spacious café in Parkland serving specialty coffee and tea, plus beer, wine, sandwiches and panini. Beans grown on our own farm in Costa Rica, roasted right here in Florida.",
  address: "7967 N University Dr, Parkland, FL 33076",
  phone: "(954) 906-5155",
  phoneHref: "tel:+19549065155",
  website: "https://www.carmelacoffee.com",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Carmela+Coffee+Parkland+7967+N+University+Dr+Parkland+FL+33076",
  orderEmail: "orders@carmelacoffee.com",
  rating: 4.8,
  reviewCount: 1805,
  hours: [
    { days: "Monday – Friday", hours: "7:00 AM – 8:00 PM" },
    { days: "Saturday", hours: "8:00 AM – 8:00 PM" },
    { days: "Sunday", hours: "8:00 AM – 5:00 PM" },
  ],
  uberEatsHref:
    "https://www.ubereats.com/store/carmela-coffee-company-parkland/wJD4EhCVRFSdLjFLszsGTA",
  doorDashHref: "https://www.doordash.com/store/carmela-coffee-parkland-1321459/",
  colors: {
    cream: "#FBF3E6",
    espresso: "#3C2415",
    terracotta: "#C1622A",
    gold: "#C99A3C",
    sage: "#7C8A5B",
  },
} as const;

export const reviews = [
  {
    quote:
      "The staff is very kind and attentive, Monica is also very welcoming each time I come in! Coffee is great, I love their seasonal lattes.",
    context: "Parkland location",
  },
  {
    quote: "Great place for a coffee or small bite.",
    context: "Google review",
  },
  {
    quote:
      "People say this cafe offers delicious coffee and a wide variety of food, including pastries, sandwiches, and healthy bowls — a cozy and inviting atmosphere, great for studying or socializing.",
    context: "Summarized from 489+ reviews",
  },
] as const;
