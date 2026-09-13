const products = [
  {
    id: 1,
    name: "PlayStation 5 Slim",
    category: "Consoles",
    price: 499.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhelios-i.mashable.com%2Fimagery%2Farticles%2F05Uv3oG3o5kh6djZHmwyhOT%2Fimages-5.fill.size_2000x1125.v1697141760.png&f=1&nofb=1&ipt=48f24fa94f7f6cae449f17e61b78c06009e68663277a10519662b2251081c2d9",
    description:
      "The PlayStation 5 Slim delivers next-generation gaming with ultra-fast SSD loading and stunning 4K graphics.",
    rating: 4.8,
    stock: 12,
  },
  {
    id: 2,
    name: "Xbox Series X",
    category: "Consoles",
    price: 499.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpress-start.com.au%2Fwp-content%2Fuploads%2F2019%2F12%2Fxbox-series-xxx.jpg&f=1&nofb=1&ipt=df7ec77c499b0d64f332fa630b00c0fe8304109afd2237c8299a08f1a5ae0a95",
    description:
      "Experience powerful next-generation gaming with 4K resolution and high frame rates.",
    rating: 4.7,
    stock: 8,
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    category: "Consoles",
    price: 349.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nintendo.com%2Fph%2Fhardware%2Fdetail%2Fswitch-oled%2Fimg%2F01-bgdark%2FmodalPhoto%2FmodalPhoto-slideitem5.jpg&f=1&nofb=1&ipt=8b3de36d4cfe85d3ae2376ab3753607900c54c2615d67a2632a4ed0663a3ecb3",
    description:
      "Enjoy handheld and docked gaming with a vibrant 7-inch OLED display.",
    rating: 4.6,
    stock: 15,
  },
  {
    id: 4,
    name: "DualSense Wireless Controller",
    category: "Accessories",
    price: 69.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTzAS_g9OuWs%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=04a5db84fa61f4eb19f732788a404dcf8cd42644559446dc84622ba877fcf959",
    description:
      "Feel immersive haptic feedback and adaptive triggers with the PlayStation 5 DualSense controller.",
    rating: 4.8,
    stock: 25,
  },
  {
    id: 5,
    name: "Xbox Wireless Controller",
    category: "Accessories",
    price: 59.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FvCjVzVgxdWqvTygsr5JjvS-970-80.jpg&f=1&nofb=1&ipt=b40fac580a18a1642c67dcffabbf015afc6741c462fcf22f0d20d129bf195e5a",
    description:
      "Comfortable wireless controller compatible with Xbox consoles and PC.",
    rating: 4.5,
    stock: 20,
  },
  {
    id: 6,
    name: "Logitech G502 HERO",
    category: "Gaming Mice",
    price: 49.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresource.logitechg.com%2Fw_1206%2Cc_limit%2Cq_auto%2Cf_auto%2Cdpr_1.0%2Fd_transparent.gif%2Fcontent%2Fdam%2Fgaming%2Fen%2Fproducts%2Fg502x-lightspeed%2Fg502x-lightspeed-07-media-tile.png%3Fv%3D1&f=1&nofb=1&ipt=5b9280b42203cb0d4440e9b081772740952b78c63417956252bfd264ef65b21a",
    description:
      "High-performance gaming mouse featuring the HERO sensor and customizable buttons.",
    rating: 4.7,
    stock: 18,
  },
  {
    id: 7,
    name: "VXE Dragonfly R1 SE+",
    category: "Gaming Mice",
    price: 69.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.OuAnRQSVfBFwTuWnEPxSRwHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=dae0a8ed2603d48f53e109224f1659b6098ececd9f3dff69bd7f2f6054161fd1",
    description:
      "Lightweight ergonomic gaming mouse designed for competitive gaming.",
    rating: 4.8,
    stock: 10,
  },
  {
    id: 8,
    name: "Ajazz AK820 Pro",
    category: "Gaming Keyboards",
    price: 179.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FerjqG9tvdZiYGBzCmyLgE4.jpg&f=1&nofb=1&ipt=c72106ff3e6091473794287e0438d20d84cc896127ffacebbb8a65840057142d",
    description:
      "Premium mechanical gaming keyboard with adjustable actuation switches and RGB lighting.",
    rating: 4.7,
    stock: 7,
  },
  {
    id: 9,
    name: "HyperX Cloud III",
    category: "Gaming Headsets",
    price: 99.99,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gizmochina.com%2Fwp-content%2Fuploads%2F2023%2F05%2FHyperX-Cloud-3.jpg&f=1&nofb=1&ipt=7497fb5c837c46cf3e804ba8dbbc35c6a8d6f0a6555b88deead072c6bb47eb14",
    description:
      "Comfortable wired gaming headset with detailed audio and a noise-cancelling microphone.",
    rating: 4.8,
    stock: 16,
  },
];

export function getProducts() {
  return products;
}
export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
