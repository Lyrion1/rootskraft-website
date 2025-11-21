import { Metadata } from "next";

// --- AI Image Placeholder URLs ---
// All images are hyper-realistic leather mockups, using placehold.co as requested.
const IMAGE_URLS = {
  // MEN
  adeBelt: 'https://placehold.co/800x600/1e1e1e/ffffff?text=Ade+Belt+Black+Saffiano+Leather',
  obaWallet: 'https://placehold.co/800x600/2f2f2f/ffffff?text=Oba+Wallet+Bifold+Crocodile+Embossed',
  ajaniStrap: 'https://placehold.co/800x600/3c3c3c/ffffff?text=Ajani+Watch+Strap+Brown+Vegetable+Tanned',
  ifeDoppKit: 'https://placehold.co/800x600/4a4a4a/ffffff?text=If%E1%BA%BD+Dopp+Kit+Travel+Bag+Vintage+Leather',

  // WOMEN
  ngoziHandbag: 'https://placehold.co/800x600/5e5e5e/ffffff?text=Ngozi+Luxury+Tote+Handbag+Taupe+Pebbled',
  ezinneClutch: 'https://placehold.co/800x600/6f6f6f/ffffff?text=Ezinne+Evening+Clutch+Ostrich+Pattern',
  chikaCrossbody: 'https://placehold.co/800x600/7c7c7c/ffffff?text=Chika+Crossbody+Saddle+Bag+Deep+Red',

  // PETS
  odogwuCollar: 'https://placehold.co/800x600/8d8d8d/ffffff?text=Odogwu+Dog+Collar+with+Brass+Hardware',
  temiHarness: 'https://placehold.co/800x600/9e9e9e/ffffff?text=Temi+Dog+Harness+Padded+for+Comfort',
  bisiWalkSet: 'https://placehold.co/800x600/afafaf/ffffff?text=Bisi+Leash+and+Collar+Set+Tan+Leather',
  ayoTwinningSet: 'https://placehold.co/800x600/bdbdbd/ffffff?text=Ayo+Human+and+Pet+Twinning+Set',

  // EXTRAS/GIFT SETS
  militaryTag: 'https://placehold.co/800x600/cfcfcf/ffffff?text=Military+Dog+Tag+Leather+Sheath+Custom',
  gemstoneTag: 'https://placehold.co/800x600/dfdfdf/ffffff?text=Gemstone+Dog+Tag+with+Leather+Accent',
  leahGiftSet: 'https://placehold.co/800x600/efefef/ffffff?text=Leah+Gift+Set+Wallet+and+Belt+Bundle',
  embossedLogoSet: 'https://placehold.co/800x600/0a0a0a/ffffff?text=RootHaus+Embossed+Logo+Accessories+Kit',
  
  // LOOKBOOK / HERO PLACEHOLDERS
  lookbookImage: 'https://placehold.co/1200x800/1e1e1e/ffffff?text=AI+Generated+Luxury+Leather+Lookbook',
  heroImage: 'https://placehold.co/1920x800/24160b/fff?text=RootHaus+Leather+Hero+Craftsmanship'
};
// ------------------------------------

export type Product = {
  id: string;
  name: string;
  slug: string;
  collection: 'Men' | 'Women' | 'Pets' | 'Gift Sets' | 'Extras';
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  details: string[];
};

export const products: Product[] = [
  // MEN Collection
  { id: 'men-ade-belt', name: 'Ade Belt', slug: 'ade-belt', collection: 'Men', category: 'Belts', price: 25000, 
    description: 'A masterpiece of balance, the Ade Belt features a celestial alignment buckle and rich Saffiano leather.', 
    imageUrl: IMAGE_URLS.adeBelt, details: ['Hand-stitched in Lagos', 'Solid brass custom buckle', 'Ethically sourced Saffiano leather'] },
  { id: 'men-oba-wallet', name: 'Oba Wallet', slug: 'oba-wallet', collection: 'Men', category: 'Wallets', price: 18000, 
    description: 'The King’s choice. A compact bifold wallet with subtle crocodile embossing, symbolizing root strength.', 
    imageUrl: IMAGE_URLS.obaWallet, details: ['8 card slots', 'Hidden money compartment', 'Crocodile-embossed fine Italian leather'] },
  { id: 'men-ajani-strap', name: 'Ajani Strap', slug: 'ajani-strap', collection: 'Men', category: 'Accessories', price: 12500, 
    description: 'A perfect fit. Vegetable-tanned leather watch strap designed for timeless elegance.', 
    imageUrl: IMAGE_URLS.ajaniStrap, details: ['Quick-release spring bars', 'Vegetable-tanned leather', 'Brass pin buckle'] },
  { id: 'men-ife-dopp', name: 'Ifẹ́ Dopp Kit', slug: 'ife-dopp-kit', collection: 'Men', category: 'Travel', price: 35000, 
    description: 'Love carried. A rugged yet refined travel bag that ages beautifully with every journey.', 
    imageUrl: IMAGE_URLS.ifeDoppKit, details: ['Water-resistant interior lining', 'Heavy-duty zipper', 'Vintage full-grain leather'] },

  // WOMEN Collection
  { id: 'women-ngozi-bag', name: 'Ngozi Handbag', slug: 'ngozi-handbag', collection: 'Women', category: 'Handbags', price: 85000, 
    description: 'A blessing of a bag. The structured Ngozi Tote features our signature RootHaus lining.', 
    imageUrl: IMAGE_URLS.ngoziHandbag, details: ['Pebbled calfskin leather', 'Suede interior', 'Custom-cast gold hardware'] },
  { id: 'women-ezinne-clutch', name: 'Ezinne Clutch', slug: 'ezinne-clutch', collection: 'Women', category: 'Clutches', price: 45000, 
    description: 'Good Mother. An elegant evening clutch with a subtle ostrich pattern for celestial celebrations.', 
    imageUrl: IMAGE_URLS.ezinneClutch, details: ['Detachable chain strap', 'Magnetic closure', 'Full-grain embossed leather'] },
  { id: 'women-chika-crossbody', name: 'Chika Crossbody', slug: 'chika-crossbody', collection: 'Women', category: 'Bags', price: 55000, 
    description: 'God is greater. A compact saddle bag with adjustable strap for everyday elegance.', 
    imageUrl: IMAGE_URLS.chikaCrossbody, details: ['Deep red vegetable-tanned leather', 'Secure turn-lock closure', 'Lightweight design'] },

  // PETS Collection
  { id: 'pets-odogwu-collar', name: 'Odogwu Collar', slug: 'odogwu-collar', collection: 'Pets', category: 'Collars', price: 15000, 
    description: 'For the \'Boss\' of the house. Durable, comfortable, and styled with our Root & Hide aesthetic.', 
    imageUrl: IMAGE_URLS.odogwuCollar, details: ['Soft sheepskin lining', 'Heavy-duty solid brass fittings', 'Available in all sizes'] },
  { id: 'pets-temi-harness', name: 'Temi Harness', slug: 'temi-harness', collection: 'Pets', category: 'Harnesses', price: 28000, 
    description: 'Temi (Mine). A padded ergonomic harness ensuring comfort and control for your cherished companion.', 
    imageUrl: IMAGE_URLS.temiHarness, details: ['Ergonomic padding', 'Adjustable chest straps', 'Weather-resistant leather'] },
  { id: 'pets-bisi-set', name: 'Bisi Walk Set', slug: 'bisi-walk-set', collection: 'Pets', category: 'Sets', price: 38000, 
    description: 'Born on Saturday. A beautiful set including a matching leash and collar in tan leather.', 
    imageUrl: IMAGE_URLS.bisiWalkSet, details: ['Matching leash and collar', 'Reinforced stitching', 'Ideal for medium to large breeds'] },
  { id: 'pets-ayo-twinning', name: 'Ayo Twinning Set', slug: 'ayo-twinning-set', collection: 'Pets', category: 'Sets', price: 60000, 
    description: 'Joy. Matching accessories for you and your pet to share the RootHaus luxury.', 
    imageUrl: IMAGE_URLS.ayoTwinningSet, details: ['Matching bracelet/keychain for owner', 'Premium leather', 'Symbol of companionship'] },

  // EXTRAS / GIFT SETS
  { id: 'extras-military-tag', name: 'Military Dog Tag', slug: 'military-dog-tag', collection: 'Extras', category: 'Tags', price: 8000, 
    description: 'A rugged leather sheath for a classic military dog tag, built for longevity.', 
    imageUrl: IMAGE_URLS.militaryTag, details: ['Personal engraving available', 'Thick saddle leather', 'Secure loop attachment'] },
  { id: 'extras-gemstone-tag', name: 'Gemstone Dog Tag', slug: 'gemstone-dog-tag', collection: 'Extras', category: 'Tags', price: 10000, 
    description: 'A celestial accent. Genuine gemstone inlay with leather backing.', 
    imageUrl: IMAGE_URLS.gemstoneTag, details: ['Choice of gemstone (e.g., Tiger Eye, Lapis)', 'Hand-polished finish', 'Luxury pet identification'] },
  { id: 'extras-leah-gift', name: 'Leah Gift Set', slug: 'leah-gift-set', collection: 'Gift Sets', category: 'Sets', price: 40000, 
    description: 'The perfect introduction to RootHaus quality. Includes an Oba Wallet and Ajani Strap.', 
    imageUrl: IMAGE_URLS.leahGiftSet, details: ['Hand-packed in an engraved wooden box', 'Curated Men\'s selection', 'Personalisation available'] },
  { id: 'extras-logo-kit', name: 'RootHaus Embossed Logo Set', slug: 'embossed-logo-set', collection: 'Gift Sets', category: 'Sets', price: 15000, 
    description: 'Small accessories showcasing the iconic RootHaus embossed logo.', 
    imageUrl: IMAGE_URLS.embossedLogoSet, details: ['Key fob, cable tie, and coaster set', 'Perfect corporate gift', 'Vegetable-tanned leather'] },
];

export const collections = ['Men', 'Women', 'Pets', 'Gift Sets', 'Extras'];
export const allProductImageUrls = IMAGE_URLS;
