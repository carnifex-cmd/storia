export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  sections: { title: string; subtitle: string }[];
}

export const product: Product = {
  id: "coconut",
  name: "Pure Coconut Water",
  subName: "Hydration, perfected.",
  price: "₹110",
  description: "100% Natural - No Sugar Added - Electrolyte Rich",
  folderPath: "/images/coconut",

  themeColor: "#E0F7FA",
  gradient: "linear-gradient(135deg, #E0F7FA 0%, #80DEEA 100%)",

  features: [
    "Natural Electrolytes",
    "No Added Sugar",
    "100% Coconut Water"
  ],

  stats: [
    { label: "Sugar", val: "0g added" },
    { label: "Hydration", val: "100%" },
    { label: "Purity", val: "100%" }
  ],

  sections: [
    {
      title: "Pure Coconut Water.",
      subtitle: "Hydration, perfected."
    },
    {
      title: "Straight from the source.",
      subtitle: "Fresh tender coconuts, cracked and bottled instantly."
    },
    {
      title: "Naturally refreshing.",
      subtitle: "Packed with electrolytes your body actually needs."
    },
    {
      title: "Nothing added. Nothing lost.",
      subtitle: ""
    }
  ]
};
