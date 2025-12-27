export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'novedades' | 'peluches' | 'figuras' | 'tcg' | 'home' | 'ropa' | 'pukllay' | 'otros' | 'promos' | 'box' | 'combo' | 'mystery-box' | 'single';
  image: string;
  featured?: boolean;
  expansion?: string;
}

export const products: Product[] = [
  // TCG (Existing & New)
  {
    id: '1',
    name: 'Elite Trainer Box - Scarlet & Violet',
    description: 'La Elite Trainer Box de Scarlet & Violet incluye 9 paquetes de mejora, 1 carta promocional foil full-art, 65 fundas para cartas y más.',
    price: 229.90,
    category: 'tcg',
    image: 'https://www.pokeperustore.pe/wp-content/uploads/2025/04/Pokemon-TCG-Elite-Trainer-Box-Destined-Rivals-Espanol-1.jpg',
    featured: true,
    expansion: 'Scarlet & Violet Base'
  },
  {
    id: '2',
    name: 'Booster Box - Obsidian Flames',
    description: 'Contiene 36 paquetes de mejora de la expansión Obsidian Flames.',
    price: 549.90,
    category: 'tcg',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/501257_in_1000x1000.jpg',
    featured: true,
    expansion: 'Obsidian Flames'
  },
  
  // Figuras
  {
    id: 'fig-1',
    name: 'Figura Charizard Deluxe',
    description: 'Figura de acción detallada de Charizard con efectos de fuego.',
    price: 159.90,
    category: 'figuras',
    image: 'https://www.pokeperustore.pe/wp-content/uploads/2023/10/2501.jpg',
    featured: true,
    expansion: 'Figuras'
  },

  // Peluches
  {
    id: 'pl-1',
    name: 'Peluche Snorlax Gigante',
    description: 'Peluche suave y abrazable de Snorlax, 50cm.',
    price: 129.90,
    category: 'peluches',
    image: 'https://m.media-amazon.com/images/I/61pCvKLjenL._AC_SL1500_.jpg',
    featured: true,
    expansion: 'Peluches'
  },
  {
    id: 'pl-2',
    name: 'Peluche Eevee',
    description: 'Peluche de Eevee tamaño real.',
    price: 89.90,
    category: 'peluches',
    image: 'https://http2.mlstatic.com/D_NQ_NP_801431-MLU73409942026_122023-O.webp',
    expansion: 'Peluches'
  },

  // Ropa
  {
    id: 'cl-1',
    name: 'Polera Gengar',
    description: 'Polera negra con diseño de Gengar en la espalda.',
    price: 99.90,
    category: 'ropa',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gLDMl1wvCwVacIAcDDbmdhq0ZwiCmpjUm8bilxedMw&s=10', // Placeholder
    expansion: 'Ropa'
  },
  {
    id: 'cl-2',
    name: 'Gorra Ash Ketchum',
    description: 'La clásica gorra de entrenador de Ash.',
    price: 49.90,
    category: 'ropa',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gLDMl1wvCwVacIAcDDbmdhq0ZwiCmpjUm8bilxedMw&s=10', // Placeholder
    expansion: 'Ropa'
  },

  // Home
  {
    id: 'hm-1',
    name: 'Taza Pokébola',
    description: 'Taza de cerámica con forma de Pokébola.',
    price: 39.90,
    category: 'home',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzFymYtgLLQtgpBuuuGfrxaL_KYD2j91ueObgJscEJ2QKBzaE98d-kUI&s=10', // Placeholder
    expansion: 'Hogar'
  },

  // Pukllay (Juegos/Juguetes)
  {
    id: 'pk-1',
    name: 'Monopoly Pokémon Kanto Edition',
    description: 'El clásico juego de mesa con temática de Pokémon.',
    price: 189.90,
    category: 'pukllay',
    image: 'https://m.media-amazon.com/images/I/71Sb9l1Yv0L._AC_SL1000_.jpg', // Placeholder
    expansion: 'Juegos de Mesa'
  },

  // Novedades
  {
    id: 'nov-1',
    name: 'Nueva Colección Paldea',
    description: 'Set de figuras iniciales de Paldea.',
    price: 119.90,
    category: 'novedades',
    image: 'https://m.media-amazon.com/images/I/61w8-k-q-LL._AC_SL1500_.jpg', // Placeholder
    featured: true,
    expansion: 'Figuras'
  },

  // Promos
  {
    id: 'prm-1',
    name: 'Pack 3 Mazos Batalla',
    description: 'Oferta especial de 3 mazos listos para jugar.',
    price: 89.90,
    category: 'promos',
    image: 'https://www.pokeperustore.pe/wp-content/uploads/2023/08/1838-510x510.jpg', // Placeholder
    featured: true,
    expansion: 'TCG'
  },

  // Otros
  {
    id: 'ot-1',
    name: 'Llavero Pikachu',
    description: 'Llavero metálico de Pikachu.',
    price: 19.90,
    category: 'otros',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNsETB88DyVdBvYtH1NyfnaGyQ6mu1FPQofDylp8sp7Lm56PUUg0Doe8&s=10', // Placeholder
    expansion: 'Accesorios'
  },
  
  // Keeping some old ones mapped to new categories or just generic
  {
    id: '3',
    name: 'Pack Combo Inicial',
    description: '¡Perfecto para principiantes! Incluye 2 mazos temáticos y 5 paquetes de mejora.',
    price: 149.90,
    category: 'tcg',
    image: 'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/o/pokemon-tcg-sv05-temporal-force-booster-bundle-en-espanol-81177-default-1.jpg',
    featured: true,
    expansion: 'Varios'
  },
  {
    id: '9',
    name: 'Charizard ex - Special Illustration Rare',
    description: 'Carta individual de Charizard ex de la expansión 151. Estado Near Mint.',
    price: 450.00,
    category: 'tcg',
    image: 'https://images.pokemontcg.io/sv3pt5/199_hires.png',
    featured: true,
    expansion: '151'
  },
  {
    id: '10',
    name: 'Iono - Full Art Trainer',
    description: 'Carta de entrenador Iono Full Art. Un staple competitivo.',
    price: 120.00,
    category: 'tcg',
    image: 'https://images.pokemontcg.io/sv2/269_hires.png',
    expansion: 'Paldea Evolved'
  },
  {
    id: '11',
    name: 'Pikachu - Illustration Rare',
    description: 'Hermosa carta de arte completo de Pikachu de la colección 151.',
    price: 85.00,
    category: 'tcg',
    image: 'https://images.pokemontcg.io/sv3pt5/173_hires.png',
    expansion: '151'
  }
];
