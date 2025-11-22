export type Product = {
id: string;
name: string;
slug: string;
category: 'accessories-homeware'|'boys'|'girls'|'men'|'women'|'pets';
price_ngn: number; // base currency NGN
description: string;
images: string[];
options?: { color?: string[]; size?: string[] };
tags?: string[];
};

export const PRODUCTS: Product[] = [
// --- Accessories & Homeware (Extras) ---
{
id: 'ah-ekotray',
name: 'Eko Entry Tray',
slug: 'eko-entry-tray',
category: 'accessories-homeware',
price_ngn: 24500,
description: 'Hand-molded valet tray in full-grain leather; snap corners, suede back. Inspired by Lagos skylines.',
images: [
'https://placehold.co/800x600/png?text=Eko+Entry+Tray+1',
'https://placehold.co/800x600/png?text=Eko+Entry+Tray+2'
],
tags: ['home', 'valet', 'gift']
},
{
id: 'ah-ogan-candle',
name: 'Ogun Candle Sleeve',
slug: 'ogun-candle-sleeve',
category: 'accessories-homeware',
price_ngn: 18500,
description: 'Vegetable-tanned leather sleeve for 8oz candles with heat-safe lining; debossed Roothaus crest.',
images: ['https://placehold.co/800x600/png?text=Ogun+Candle+Sleeve'],
tags: ['home', 'candle']
},
{
id: 'ah-aso-mat',
name: 'Aso-Òkè Desk Mat',
slug: 'aso-oke-desk-mat',
category: 'accessories-homeware',
price_ngn: 49500,
description: 'Desk mat backed with woven Aso-Òkè trim; cable passthrough, stitched edge, anti-slip base.',
images: ['https://placehold.co/1200x700/png?text=Aso+Oke+Desk+Mat'],
tags: ['workspace']
},
{
id: 'ah-calabash-coasters',
name: 'Calabash Coaster Set (4)',
slug: 'calabash-coaster-set',
category: 'accessories-homeware',
price_ngn: 16500,
description: 'Set of 4 round coasters, burnished edges, water-resistant finish, nest neatly in matching holder.',
images: ['https://placehold.co/800x600/png?text=Calabash+Coasters'],
tags: ['home', 'entertaining']
},

// --- Boys (4) ---
{
id: 'boy-mini-satchel',
name: 'Kano Kickabout Mini Satchel',
slug: 'kano-kickabout-mini-satchel',
category: 'boys',
price_ngn: 35500,
description: 'Rugged cross-body for school and play; magnetic flap, adjustable strap, name card window.',
images: ['https://placehold.co/800x600/png?text=Boys+Mini+Satchel'],
tags: ['boys','school']
},
{
id: 'boy-passport-folio',
name: 'Explorer Passport Folio',
slug: 'explorer-passport-folio',
category: 'boys',
price_ngn: 19500,
description: 'Compact folio for passport, tickets, SIM pin and stickers. Contrast stitch, snap closure.',
images: ['https://placehold.co/800x600/png?text=Boys+Passport+Folio'],
tags: ['travel']
},
{
id: 'boy-safari-belt',
name: 'Junior Safari Belt',
slug: 'junior-safari-belt',
category: 'boys',
price_ngn: 12500,
description: 'Vegetable-tanned belt with matte buckle and playful keeper colors.',
images: ['https://placehold.co/800x600/png?text=Junior+Safari+Belt']
},
{
id: 'boy-tool-roll',
name: 'Young Artisan Tool Roll',
slug: 'young-artisan-tool-roll',
category: 'boys',
price_ngn: 22500,
description: 'Canvas-lined leather roll for pencils and tinkering tools. Encourages craft safely.',
images: ['https://placehold.co/800x600/png?text=Young+Artisan+Tool+Roll']
},

// --- Girls (4) ---
{
id: 'girl-charm-pouch',
name: 'Adire Charm Pouch',
slug: 'adire-charm-pouch',
category: 'girls',
price_ngn: 14500,
description: 'Mini zip pouch with Adire-print tab; holds hair ties, trinkets, and first lip balm.',
images: ['https://placehold.co/800x600/png?text=Adire+Charm+Pouch']
},
{
id: 'girl-market-tote',
name: 'Mini Market Tote',
slug: 'mini-market-tote',
category: 'girls',
price_ngn: 36500,
description: 'Scaled-down open tote with reinforced base; fits sketchbook and snacks.',
images: ['https://placehold.co/800x600/png?text=Mini+Market+Tote']
},
{
id: 'girl-clip-case',
name: 'Afrobeats Hair-Clip Case',
slug: 'afrobeats-hair-clip-case',
category: 'girls',
price_ngn: 13500,
description: 'Snap case with felt insert to organize clips and bands; key-ring loop.',
images: ['https://placehold.co/800x600/png?text=Hair+Clip+Case']
},
{
id: 'girl-sketch-sleeve',
name: 'Sketchbook Sleeve',
slug: 'sketchbook-sleeve',
category: 'girls',
price_ngn: 21500,
description: 'Padded sleeve for A5/A4 sketchbooks with pencil pocket and charm anchor.',
images: ['https://placehold.co/800x600/png?text=Sketchbook+Sleeve']
},

// --- Pets: Dogs & Cats (4) ---
{
id: 'pet-dog-collar',
name: 'Lagos Trail Dog Collar',
slug: 'lagos-trail-dog-collar',
category: 'pets',
price_ngn: 18500,
description: 'Full-grain leather collar with padded lining and brass hardware. Sizes XS–L for puppies to large breeds.',
images: ['https://placehold.co/800x600/png?text=Dog+Collar'],
options: { size: ['XS','S','M','L'] },
tags: ['dog', 'collar']
},
{
id: 'pet-dog-leash',
name: 'Lekki Hands-Free Leash',
slug: 'lekki-hands-free-leash',
category: 'pets',
price_ngn: 29500,
description: 'Adjustable cross-body leash with swivel clip; quick ring for café tie-downs. Matches the Trail Collar.',
images: ['https://placehold.co/800x600/png?text=Dog+Leash'],
tags: ['dog', 'leash']
},
{
id: 'pet-cat-collar',
name: 'Whisker Breakaway Cat Collar',
slug: 'whisker-breakaway-cat-collar',
category: 'pets',
price_ngn: 13500,
description: 'Lightweight leather cat collar with **breakaway safety buckle** and tiny bell—safe for indoor/outdoor cats.',
images: ['https://placehold.co/800x600/png?text=Cat+Collar'],
tags: ['cat', 'collar', 'breakaway']
},
{
id: 'pet-treat-pouch',
name: 'Oniru Treat Pouch & Waste Bag Holder',
slug: 'oniru-treat-pouch',
category: 'pets',
price_ngn: 17500,
description: 'Belt-clip pouch for training treats plus hidden waste-bag dispenser. Works for both dogs and cats (training/rewards).',
images: ['https://placehold.co/800x600/png?text=Treat+Pouch'],
tags: ['dog', 'cat', 'accessory']
},
];
