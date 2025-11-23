import { Metadata } from "next";

// --- Image URLs - Cloudinary Assets ---
// Production-ready Cloudinary image assets for RootHaus Leather
const IMAGE_URLS = {
  // MEN
  adeBelt: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859584/D538C981-A702-473D-83B1-AC76365880BD_myzfco.png', // belt_black_gold_buckle
  obaWallet: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859528/D19BC356-99D0-4164-B33C-7E48B43DC4EA_2_xuemvt.png', // wallet_bifold_black
  ajaniStrap: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859465/B90C6441-561D-4A13-A371-739A9A8690B8_ny7omx.png', // cardholder_brown_gold
  ifeDoppKit: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859252/F7181C8D-75DC-4BAD-9BDA-260669315512_dyirsg.png', // dopp_kit_brown

  // WOMEN
  ngoziHandbag: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859631/D76984C7-F9DE-48B4-8C74-773FB5B71805_hvampw.png', // tote_bag
  ezinneClutch: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859398/30BDCE46-2EF8-4E83-8A1D-D37853BDF85D_uabjza.png', // women_crossbody_set
  chikaCrossbody: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859398/30BDCE46-2EF8-4E83-8A1D-D37853BDF85D_uabjza.png', // women_crossbody_set

  // GIRLS
  adaBackpack: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859631/D76984C7-F9DE-48B4-8C74-773FB5B71805_hvampw.png', // tote_bag variant
  chiomaPurse: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859398/30BDCE46-2EF8-4E83-8A1D-D37853BDF85D_uabjza.png', // women_crossbody_set
  
  // BOYS
  emekaWallet: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859528/D19BC356-99D0-4164-B33C-7E48B43DC4EA_2_xuemvt.png', // wallet_bifold_black
  chukwuBelt: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859584/D538C981-A702-473D-83B1-AC76365880BD_myzfco.png', // belt_black_gold_buckle

  // PETS
  odogwuCollar: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859183/6DEFC432-FB86-41D4-912C-94ED93A737FF_dekn4z.png', // pet_collar_black_gold
  temiHarness: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859183/6DEFC432-FB86-41D4-912C-94ED93A737FF_dekn4z.png', // pet_collar_black_gold
  bisiWalkSet: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859183/6DEFC432-FB86-41D4-912C-94ED93A737FF_dekn4z.png', // pet_collar_black_gold
  ayoTwinningSet: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859183/6DEFC432-FB86-41D4-912C-94ED93A737FF_dekn4z.png', // pet_collar_black_gold

  // EXTRAS/GIFT SETS
  militaryTag: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859139/5B7B7B98-08B6-4799-BE3B-81D6AC547B43_cobjeh.png', // keyholder_brown
  gemstoneTag: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859139/5B7B7B98-08B6-4799-BE3B-81D6AC547B43_cobjeh.png', // keyholder_brown
  leahGiftSet: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859229/AC63DAF7-C010-43EC-9893-25B08801FB56_zxbg35.png', // duffel_bag_black (gift packaging)
  embossedLogoSet: 'https://res.cloudinary.com/dycotblov/image/upload/v1763859086/3C033763-A40C-4EEC-8492-7409BCE1E814_qsurdk.png', // logo_embossed_main
  
  // LOOKBOOK / HERO PLACEHOLDERS
  lookbookImage: 'https://res.cloudinary.com/dycotblov/image/upload/v1763858399/A_pair_of_digital_photographs_showcases_a_luxuriou_opvylo.png', // minimal_logo_bag
  heroImage: 'https://res.cloudinary.com/dycotblov/image/upload/v1763858338/A_digital_photograph_displays_two_black_leather_wa_njicrb.png' // wallet_double-angle
};
// ------------------------------------

export type Product = {
  id: string;
  name: string;
  slug: string;
  collection: 'Men' | 'Women' | 'Girls' | 'Boys' | 'Pets' | 'Gift Sets' | 'Extras';
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

  // GIRLS Collection
  { id: 'girls-ada-backpack', name: 'Ada Mini Backpack', slug: 'ada-mini-backpack', collection: 'Girls', category: 'Bags', price: 35000, 
    description: 'First daughter. A charming mini backpack perfect for young ladies with style and grace.', 
    imageUrl: IMAGE_URLS.adaBackpack, details: ['Soft pink leather finish', 'Adjustable padded straps', 'Multiple compartments'] },
  { id: 'girls-chioma-purse', name: 'Chioma Crossbody Purse', slug: 'chioma-crossbody-purse', collection: 'Girls', category: 'Purses', price: 22000, 
    description: 'Good God. An elegant crossbody purse designed for the young fashionista.', 
    imageUrl: IMAGE_URLS.chiomaPurse, details: ['Premium purple leather', 'Adjustable strap', 'Secure magnetic closure'] },

  // BOYS Collection
  { id: 'boys-emeka-wallet', name: 'Emeka Youth Wallet', slug: 'emeka-youth-wallet', collection: 'Boys', category: 'Wallets', price: 15000, 
    description: 'Great deeds. A durable youth wallet for the young gentleman learning responsibility.', 
    imageUrl: IMAGE_URLS.emekaWallet, details: ['Sturdy blue leather', '4 card slots', 'Coin pocket with zipper'] },
  { id: 'boys-chukwu-belt', name: 'Chukwu Junior Belt', slug: 'chukwu-junior-belt', collection: 'Boys', category: 'Belts', price: 18000, 
    description: 'Supreme God. A classic belt sized perfectly for young boys, built to last.', 
    imageUrl: IMAGE_URLS.chukwuBelt, details: ['Forest green vegetable-tanned leather', 'Brass buckle', 'Multiple size holes for growth'] },

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

export const collections = ['Men', 'Women', 'Girls', 'Boys', 'Pets', 'Gift Sets', 'Extras'];
export const allProductImageUrls = IMAGE_URLS;

// Alias for compatibility
export const PRODUCTS = products;
