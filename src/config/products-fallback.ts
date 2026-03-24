import { Product } from "@/types"

export const VAPERS_FALLBACK: Product[] = [
  { id: 1, name: "Lost Mary 5000 Mexican Mango", flavor: "Fruity", price: 15000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777389/lost_mary_mexican_mango_iagyxb.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764777/IMG_0319_wzi3qw.jpg"], stock: 2 },
  { id: 2, name: "Mtrx 25000 Miami Mint", flavor: "Ice", price: 35000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777452/mtrx_25_miami_mint_u6gbrh.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764774/IMG_0315_cukpoa.jpg"], stock: 3 },
  { id: 3, name: "Mtrx 12000 Grape Lemon", flavor: "Fruity", price: 24000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777413/mtrx_12_grape_lemon_vzbreb.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764767/IMG_0304_al8txf.jpg"], stock: 5 },
  { id: 4, name: "Lost Mary 5000 Blackberry Cherry Lemon", flavor: "Fruity", price: 15000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777376/lost_mary_blackberry_cherry_lemon_rfhxaj.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764761/IMG_0294_fk7dbw.jpg"], stock: 10 },
  { id: 5, name: "Lost Mary 5000 Forest Mint", flavor: "Ice", price: 15000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777389/lost_mary_forest_mint_hd4ylz.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764776/IMG_0316_d0pexs.jpg"], stock: 10 },
]

export const DESTILADOS_FALLBACK: Product[] = [
  { id: 1, name: "Destilado Nacional", type: "Hibrida", price: 40000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777494/destilado_nacional_fh1npx.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777503/destilados_nacionales_nixlbr.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764878/IMG_0339_or7mxu.jpg", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764878/IMG_0338_mffpqs.jpg"], stock: 6 },
  { id: 2, name: "KRT Berry Frosted", type: "Indica", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777498/krt_berry_froasted_indica_o7kizq.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764875/IMG_0333_ssexzf.jpg"], stock: 2 },
  { id: 3, name: "Lemon Skunk", type: "Hibrida", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777508/lemon_skunk_hibrida_k6xwjs.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764876/IMG_0334_md0gz7.jpg"], stock: 1 },
  { id: 4, name: "Mad Labs", type: "Sativa", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777503/mad_labs_sativa_uexu4r.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764877/IMG_0336_eyr1wq.jpg"], stock: 1 },
  { id: 5, name: "Muha Meds Gelato", type: "Sativa", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777506/muha_meds_gelato_n9h10f.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764853/IMG_0331_gdn9af.jpg"], stock: 1 },
  { id: 6, name: "Rove Haze", type: "Sativa", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777501/rove_haze_sativa_nfejwj.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764877/IMG_0337_zdkxof.jpg"], stock: 1 },
]

export const BATERIAS_FALLBACK: Product[] = [
  { id: 1, name: "Nexus", type: "510 Thread", price: 115000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777513/nexus_destilado_nacional_shgdsq.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764919/IMG_0342_gmzs45.jpg"], stock: 1 },
  { id: 2, name: "Mini", type: "510 Thread", price: 75000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777512/mini_destilado_nacional_ttqmuy.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764918/IMG_0341_g5mxkj.jpg"], stock: 1 },
  { id: 3, name: "Nova", type: "510 Thread", price: 115000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777511/nova_destilado_nacional_qtih8v.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764916/IMG_0340_lf9ykw.jpg"], stock: 1 },
  { id: 4, name: "All In Vape", type: "510 Thread", price: 70000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777508/combo_destilado_all_in_vape_nyzxum.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764920/IMG_0344_h3m6z2.jpg"], stock: 1 },
]

export const COMBOS_FALLBACK: Product[] = [
  { id: 1, name: "Nexus + Destilado Nacional", category: "Kits Iniciales", price: 115000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777513/nexus_destilado_nacional_shgdsq.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764919/IMG_0342_gmzs45.jpg"], stock: 1 },
  { id: 2, name: "Mini + Destilado Nacional", category: "Kits Iniciales", price: 75000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777512/mini_destilado_nacional_ttqmuy.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764918/IMG_0341_g5mxkj.jpg"], stock: 1 },
  { id: 3, name: "Nova + Destilado Nacional", category: "Kits Iniciales", price: 115000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777511/nova_destilado_nacional_qtih8v.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764916/IMG_0340_lf9ykw.jpg"], stock: 1 },
  { id: 4, name: "All In Vape + Destilado Nacional", category: "Kits Iniciales", price: 70000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777508/combo_destilado_all_in_vape_nyzxum.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764920/IMG_0344_h3m6z2.jpg"], stock: 1 },
]
