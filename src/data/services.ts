export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  category: string;
}

export const services: Service[] = [
  {
    id: "facial-1",
    name: "Classic Refresh Facial",
    description: "Deep cleansing and hydration to bring back your natural glow. Perfect for all skin types.",
    price: "₹1,200+",
    category: "Facial & Cleanup",
  },
  {
    id: "hair-1",
    name: "Premium Hair Spa",
    description: "Nourishing treatment for damaged hair with aromatic oils and deep conditioning.",
    price: "₹1,500+",
    category: "Hair Styling & Hair Spa",
  },
  {
    id: "bridal-1",
    name: "Royal Bridal Makeup",
    description: "Exquisite bridal transformation including hair, HD makeup, and drape styling.",
    price: "₹15,000+",
    category: "Bridal Makeup",
  },
  {
    id: "waxing-1",
    name: "Full Body Smooth Waxing",
    description: "Using premium honey/chocolate wax for sensitive skin and hair-free silkiness.",
    price: "₹800+",
    category: "Waxing & Threading",
  },
  {
    id: "pedi-1",
    name: "Deluxe Mani-Pedi Duo",
    description: "Pampering soak, exfoliation, massage, and nail grooming for your hands and feet.",
    price: "₹2,000+",
    category: "Manicure & Pedicure",
  },
];
