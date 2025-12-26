export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'box' | 'combo' | 'mystery-box' | 'single';
  image: string;
  featured?: boolean;
  expansion?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Elite Trainer Box - Scarlet & Violet',
    description: 'La Elite Trainer Box de Scarlet & Violet incluye 9 paquetes de mejora, 1 carta promocional foil full-art, 65 fundas para cartas y más.',
    price: 229.90,
    category: 'box',
    image: 'https://www.pokeperustore.pe/wp-content/uploads/2025/04/Pokemon-TCG-Elite-Trainer-Box-Destined-Rivals-Espanol-1.jpg',
    featured: true,
    expansion: 'Scarlet & Violet Base'
  },
  {
    id: '2',
    name: 'Booster Box - Obsidian Flames',
    description: 'Contiene 36 paquetes de mejora de la expansión Obsidian Flames.',
    price: 549.90,
    category: 'box',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/501257_in_1000x1000.jpg',
    featured: true,
    expansion: 'Obsidian Flames'
  },
  {
    id: '3',
    name: 'Pack Combo Inicial',
    description: '¡Perfecto para principiantes! Incluye 2 mazos temáticos y 5 paquetes de mejora.',
    price: 149.90,
    category: 'combo',
    image: 'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/o/pokemon-tcg-sv05-temporal-force-booster-bundle-en-espanol-81177-default-1.jpg',
    featured: true,
    expansion: 'Varios'
  },
  {
    id: '4',
    name: 'Mystery Box - Edición Oro',
    description: 'Una caja misteriosa que contiene al menos una carta graduada y 5 paquetes vintage.',
    price: 399.90,
    category: 'mystery-box',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/516576_in_1000x1000.jpg',
    featured: true,
    expansion: 'Varios'
  },
  {
    id: '5',
    name: 'Colección Premium Charizard ex',
    description: 'Incluye una carta promocional foil grabada de Charizard ex, 2 cartas foil de Charmander y Charmeleon, y 6 paquetes de mejora.',
    price: 189.90,
    category: 'box',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/516576_in_1000x1000.jpg',
    expansion: 'Obsidian Flames'
  },
  {
    id: '6',
    name: 'Combo Coleccionista Definitivo',
    description: 'Incluye 1 Booster Box, 1 ETB y un playmat especial.',
    price: 699.90,
    category: 'combo',
    image: 'https://www.pokeperustore.pe/wp-content/uploads/2025/04/Pokemon-TCG-Destined-Rivals-Booster-Bundle-Espanol-1.jpg',
    expansion: 'Varios'
  },
  {
    id: '7',
    name: 'Mystery Box - Edición Plata',
    description: 'Contiene 10 paquetes modernos y la posibilidad de obtener un holo vintage.',
    price: 199.90,
    category: 'mystery-box',
    image: 'https://www.pokeperustore.pe/wp-content/uploads/2023/08/1838.jpg',
    expansion: 'Varios'
  },
  {
    id: '8',
    name: 'Colección Figura Pikachu VMAX',
    description: 'Presenta una figura masiva de Pikachu VMAX y una carta promocional.',
    price: 249.90,
    category: 'box',
    image: 'https://www.pokeperustore.pe/wp-content/uploads/2023/10/2501.jpg',
    expansion: 'Crown Zenith'
  },
  {
    id: '9',
    name: 'Charizard ex - Special Illustration Rare',
    description: 'Carta individual de Charizard ex de la expansión 151. Estado Near Mint.',
    price: 450.00,
    category: 'single',
    image: 'https://images.pokemontcg.io/sv3pt5/199_hires.png',
    featured: true,
    expansion: '151'
  },
  {
    id: '10',
    name: 'Iono - Full Art Trainer',
    description: 'Carta de entrenador Iono Full Art. Un staple competitivo.',
    price: 120.00,
    category: 'single',
    image: 'https://images.pokemontcg.io/sv2/269_hires.png',
    expansion: 'Paldea Evolved'
  },
  {
    id: '11',
    name: 'Pikachu - Illustration Rare',
    description: 'Hermosa carta de arte completo de Pikachu de la colección 151.',
    price: 85.00,
    category: 'single',
    image: 'https://images.pokemontcg.io/sv3pt5/173_hires.png',
    expansion: '151'
  }
];
