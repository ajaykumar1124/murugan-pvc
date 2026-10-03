import {
  Sparkles,
  PanelTop,
  Layers,
  Ruler,
  Glasses,
  ArrowUpRight,
  Home,
  DoorOpen,
  Palette,
  ChefHat,
  AppWindow,
} from 'lucide-react';

export const BRAND = {
  name: 'Sri Murugan',
  subtitle: 'PVC Doors & uPVC Windows',
  headerSub: 'PVC & Doors · Since local',
  phonePrimary: '8220719474',
  phoneSecondary: '9003219474',
  whatsapp: '918220719474',
  email: 'srimuruganpvcdoorandupvcwindow@gmail.com',
  address: '175, GNT Rd, Sakthivel Nagar',
  city: 'Puzhal, Chennai',
  state: 'Tamil Nadu',
  pincode: '600066',
  fullAddress: '175, GNT Rd, Sakthivel Nagar, Puzhal, Chennai, Tamil Nadu 600066',
  mapsUrl: 'https://maps.google.com/?q=175+GNT+Road+Sakthivel+Nagar+Puzhal+Chennai+600066',
};

export const whatsappUrl = (message) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    message ??
      `Hello ${BRAND.name}, I would like to enquire about PVC doors and uPVC windows for my home.`,
  )}`;

export const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Our services', href: '#services' },
  { label: 'Our Works', href: '#work' },
  { label: 'Brands', href: '#brands' },
  { label: 'Contact', href: '#contact' },
];

export const VALUES = [
  { title: 'Right material', sub: 'Regular to super heavy' },
  { title: 'Clear advice', sub: 'No confusing packages' },
  { title: 'Close to home', sub: 'One local team, start to finish' },
];

export const CATEGORIES = ['All', 'Windows', 'Storage', 'Materials', 'Doors'];

export const PRODUCTS = [
  {
    id: 1,
    code: 'Window 01',
    title: 'French sliding window',
    desc: 'Wide, light-filled openings with an easy, quiet glide.',
    category: 'Windows',
    tone: 'green',
    span: 2,
    img: '/images/01-french-sliding-window.jpg',
    enquiry: 'French sliding window',
  },
  {
    id: 2,
    code: 'Window 02',
    title: 'French open window',
    desc: 'Classic opening proportions, tailored to your elevation.',
    category: 'Windows',
    tone: 'blue',
    img: '/images/02-french-open-window.jpg',
    enquiry: 'French open window',
  },
  {
    id: 3,
    code: 'Window 03',
    title: 'Fixed window',
    desc: 'A clean glass frame for light, outlook and less maintenance.',
    category: 'Windows',
    tone: 'cream',
    img: '/images/03-fixed-window.jpg',
    enquiry: 'Fixed window',
  },
  {
    id: 4,
    code: 'Window 04',
    title: 'Sliding 2 shutter',
    desc: 'A practical everyday choice for bedrooms and living rooms.',
    category: 'Windows',
    tone: 'beige',
    img: '/images/04-sliding-2-shutter.jpg',
    enquiry: 'French sliding window',
  },
  {
    id: 5,
    code: 'Window 05',
    title: 'Sliding 3 shutter',
    desc: 'More opening width for larger walls and brighter rooms.',
    category: 'Windows',
    tone: 'blue',
    img: '/images/05-sliding-3-shutter.jpg',
    enquiry: 'French sliding window',
  },
  {
    id: 6,
    code: 'Window 06',
    title: 'Sliding 2.5 mesh',
    desc: 'Ventilation and insect control, without giving up the view.',
    category: 'Windows',
    tone: 'cream',
    img: '/images/06-sliding-2-5-mesh.jpg',
    enquiry: 'French sliding window',
  },
  {
    id: 7,
    code: 'Interior 01',
    title: 'PVC cupboard',
    desc: 'Made-to-measure storage in a wipe-clean, water-resistant finish.',
    category: 'Storage',
    tone: 'beige',
    img: '/images/07-pvc-cupboard.jpg',
    enquiry: 'PVC cupboard',
  },
  {
    id: 8,
    code: 'Material 01',
    title: 'PVC 20mm materials',
    desc: 'Regular, heavy, and super heavy options for every use.',
    category: 'Materials',
    tone: 'green',
    img: '/images/08-pvc-20mm-materials.jpg',
    enquiry: 'PVC materials',
  },
  {
    id: 9,
    code: 'Door 01',
    title: 'PVC & uPVC doors',
    desc: 'Everyday doors with solid profiles and considered detailing.',
    category: 'Doors',
    tone: 'cream',
    img: '/images/09-pvc-upvc-doors.jpg',
    enquiry: 'PVC & uPVC doors',
  },
];

export const MATERIALS = [
  {
    code: 'A01',
    title: 'PVC 20 mm regular material',
    desc: 'A dependable choice for everyday cupboards and the 3 feet PVC door.',
    tag: 'Balanced',
  },
  {
    code: 'A02',
    title: 'PVC 20 mm heavy material',
    desc: 'Extra substance for storage, wardrobes and furniture that gets used.',
    tag: 'Strong',
  },
  {
    code: 'A03',
    title: 'uPVC 20 mm heavy material',
    desc: 'Low-maintenance performance for windows, doors and wet areas.',
    tag: 'Steady',
  },
  {
    code: 'A04',
    title: 'uPVC 20 mm super heavy material',
    desc: 'Our most robust option when a long service life is the brief.',
    tag: 'Maximum',
  },
];

export const SERVICES = [
  {
    icon: Sparkles,
    title: 'Pooja rooms',
    sub: 'Quiet, considered spaces',
    img: '/images/10-pooja-room.jpg',
    alt: 'Modern pooja room interior',
    imagePosition: 'center',
  },
  {
    icon: PanelTop,
    title: 'TV units & table stands',
    sub: 'Your choice or ours',
    img: '/images/11-tv-unit-table-stand.jpg',
    alt: 'Custom TV unit and storage',
    imagePosition: 'center',
  },
  {
    icon: Layers,
    title: 'Wardrobe',
    sub: 'Storage that fits the wall',
    img: '/images/12-wardrobe.jpg',
    alt: 'Built-in wardrobe',
    imagePosition: 'center center',
  },
  {
    icon: Ruler,
    title: 'Fluted panel work',
    sub: 'For every type of use',
    img: '/images/13-fluted-panel-work.jpg',
    alt: 'Fluted wall panel',
    imagePosition: 'center',
  },
  {
    icon: Glasses,
    title: 'Glass for balconies',
    sub: 'Safe, open outlooks',
    img: '/images/14-glass-balcony.jpg',
    alt: 'Glass balcony railing',
    imagePosition: 'center',
  },
  {
    icon: ArrowUpRight,
    title: 'Glass for stairs',
    sub: 'Clean architectural lines',
    img: '/images/15-glass-stairs.jpg',
    alt: 'Glass staircase railing',
    imagePosition: 'center',
  },
  {
    icon: Home,
    title: 'Front elevation designs',
    sub: 'A sharper first impression',
    img: '/images/16-front-elevation-design.jpg',
    alt: 'Modern house front elevation',
    imagePosition: 'center',
  },
  {
    icon: DoorOpen,
    title: 'Open 2/3 shutter',
    sub: 'Flexible everyday ventilation',
    img: '/images/17-open-2-3-shutter.jpg',
    alt: 'Open two-thirds shutter',
    imagePosition: 'center',
  },
  {
    icon: Palette,
    title: 'Interior design',
    sub: 'A connected room from start to finish',
    img: '/images/18-interior-design.jpg',
    alt: 'Contemporary interior design',
    imagePosition: 'center',
  },
  {
    icon: ChefHat,
    title: 'Modular kitchen',
    sub: 'Practical storage, made to measure',
    img: '/images/19-modular-kitchen.jpg',
    alt: 'Modern modular kitchen',
    imagePosition: 'center',
  },
];

export const GALLERY = [
  {
    icon: AppWindow,
    title: 'Window studies',
    sub: 'French sliding & open windows',
    img: '/images/gallery-windows.jpg',
    span: 'wide',
  },
  {
    icon: Layers,
    title: 'Storage details',
    sub: 'Custom PVC wardrobe and TV unit',
    img: '/images/gallery-storage.jpg',
    span: 'third',
  },
  {
    icon: Glasses,
    title: 'Glass work',
    sub: 'Glass balcony and stair railing',
    img: '/images/gallery-glass.jpg',
    span: 'third',
  },
  {
    icon: Palette,
    title: 'Interior design',
    sub: 'TV units, fluted panels & wardrobes',
    img: '/images/gallery-interior.jpg',
    span: 'half',
  },
  {
    icon: ChefHat,
    title: 'Modular kitchen',
    sub: 'Practical layouts & storage',
    img: '/images/gallery-kitchen.jpg',
    span: 'half',
  },
];

export const BRANDS = [
  { name: 'Venesta', sub: 'Selected systems' },
  { name: 'Vista', sub: 'Trusted profiles' },
  { name: '3 Diamond', sub: 'Built to last' },
];

export const INTEREST_OPTIONS = [
  'Fixed window',
  'French sliding window',
  'French open window',
  'uPVC Window',
  'PVC cupboard',
  'PVC door',
  'Glass work',
  'Modular kitchen',
  'Interior design',
  'Other',
];

export const PVC_INTERIOR_WORKS = [
  {
    id: 1,
    title: 'Living Room',
    desc: 'Premium fluted PVC wall panels and a modern TV wall create a warm, elegant living space.',
    img: '/images/pvc-interior-01-living-room.jpg',
    enquiry: 'Living Room',
  },
  {
    id: 2,
    title: 'Bedroom',
    desc: 'Wood-finish PVC ceiling and wall panels add lasting comfort and luxury to the bedroom.',
    img: '/images/pvc-interior-02-bedroom.jpg',
    enquiry: 'Bedroom',
  },
  {
    id: 3,
    title: 'TV Unit',
    desc: 'A sleek PVC TV backdrop with concealed lighting, display shelves, and practical storage.',
    img: '/images/pvc-interior-03-tv-unit.jpg',
    enquiry: 'TV Unit',
  },
  {
    id: 4,
    title: 'Pooja Room',
    desc: 'Elegant PVC lattice panels and warm lighting create a peaceful, easy-maintenance pooja space.',
    img: '/images/pvc-interior-04-pooja-room.jpg',
    enquiry: 'Pooja Room',
  },
  {
    id: 5,
    title: 'False Ceiling',
    desc: 'Layered PVC ceiling panels deliver a rich finish with bright, energy-efficient concealed lighting.',
    img: '/images/pvc-interior-05-false-ceiling.jpg',
    enquiry: 'False Ceiling',
  },
  {
    id: 6,
    title: 'Dining Partition',
    desc: 'A stylish PVC partition separates spaces while keeping the home open and welcoming.',
    img: '/images/pvc-interior-06-dining-partition.jpg',
    enquiry: 'Dining Partition',
  },
  {
    id: 7,
    title: 'Kitchen Interior',
    desc: 'Moisture-resistant PVC finishes give this modern kitchen a clean and durable appearance.',
    img: '/images/pvc-interior-07-kitchen-wall.jpg',
    enquiry: 'Kitchen Interior',
  },
  {
    id: 8,
    title: 'Office Cabin',
    desc: 'Fluted PVC panels and integrated lighting create a polished, professional workspace.',
    img: '/images/pvc-interior-08-office-cabin.jpg',
    enquiry: 'Office Cabin',
  },
  {
    id: 9,
    title: 'Study Room',
    desc: 'Custom PVC storage, shelving, and a built-in desk make study time comfortable and organized.',
    img: '/images/pvc-interior-09-study-room.jpg',
    enquiry: 'Study Room',
  },
  {
    id: 10,
    title: 'Entry Foyer',
    desc: 'A modern PVC feature wall and shoe unit make the entrance neat, stylish, and inviting.',
    img: '/images/pvc-interior-10-entry-foyer.jpg',
    enquiry: 'Entry Foyer',
  },
];

export const PVC_CUPBOARDS = [
  {
    id: 1,
    title: 'Sliding Wardrobe',
    desc: 'Space-saving sliding PVC shutters combine a premium look with convenient everyday storage.',
    features: ['Space-saving design', 'Sliding shutters', 'Premium finish', 'Easy-access storage'],
    img: '/images/pvc-cupboard-01-bedroom-sliding.jpg',
  },
  {
    id: 2,
    title: 'Hinged Wardrobe',
    desc: 'A full-height PVC cupboard offers generous storage with strong, easy-maintenance shutters.',
    features: ['Full-height storage', 'Strong shutters', 'Easy maintenance', 'Generous capacity'],
    img: '/images/pvc-cupboard-02-hinged-wardrobe.jpg',
  },
  {
    id: 3,
    title: 'Internal Storage',
    desc: 'Well-planned shelves, drawers, hanging space, saree storage, and loft space keep everything organized.',
    features: ['Multiple shelves', 'Hanging space', 'Drawer storage', 'Loft space'],
    img: '/images/pvc-cupboard-03-open-interior.jpg',
  },
  {
    id: 4,
    title: 'Kids Room Cupboard',
    desc: 'Durable PVC storage with an integrated study desk creates a bright, practical children\'s room.',
    features: ['Integrated desk', 'Durable material', 'Bright finish', 'Child-safe design'],
    img: '/images/pvc-cupboard-04-kids-room.jpg',
  },
  {
    id: 5,
    title: 'Kitchen Pantry',
    desc: 'A waterproof PVC pantry keeps groceries, spices, and cookware neatly arranged and easy to reach.',
    features: ['Waterproof finish', 'Organized shelving', 'Easy access', 'Durable storage'],
    img: '/images/pvc-cupboard-05-kitchen-pantry.jpg',
  },
  {
    id: 6,
    title: 'Under-Stair Cupboard',
    desc: 'Custom PVC cabinets turn unused staircase space into smart household storage.',
    features: ['Space optimization', 'Custom fit', 'Smart storage', 'Seamless design'],
    img: '/images/pvc-cupboard-06-under-stair.jpg',
  },
  {
    id: 7,
    title: 'Dressing Unit',
    desc: 'A coordinated PVC wardrobe and illuminated dressing table bring function and elegance together.',
    features: ['Integrated dressing table', 'LED lighting', 'Premium wardrobe', 'Elegant design'],
    img: '/images/pvc-cupboard-07-dressing-unit.jpg',
  },
  {
    id: 8,
    title: 'Utility Storage',
    desc: 'Water-resistant PVC cabinets organize laundry and cleaning essentials in a compact utility space.',
    features: ['Water-resistant', 'Organized compartments', 'Compact design', 'Easy cleaning'],
    img: '/images/pvc-cupboard-08-utility-storage.jpg',
  },
  {
    id: 9,
    title: 'Loft Storage',
    desc: 'Wall-to-wall PVC cupboards with overhead lofts maximize storage without cluttering the bedroom.',
    features: ['Wall-to-wall design', 'Overhead lofts', 'Maximum capacity', 'Space-efficient'],
    img: '/images/pvc-cupboard-09-loft-storage.jpg',
  },
  {
    id: 10,
    title: 'Compact Bedroom',
    desc: 'A mirrored sliding PVC wardrobe makes a smaller room feel brighter and more spacious.',
    features: ['Mirrored design', 'Sliding shutters', 'Space illusion', 'Bright appearance'],
    img: '/images/pvc-cupboard-10-compact-bedroom.jpg',
  },
];

export const PVC_GALLERY = [
  { img: '/images/pvc-interior-01-living-room.jpg', alt: 'Living room with fluted PVC wall panels' },
  { img: '/images/pvc-interior-02-bedroom.jpg', alt: 'Bedroom with PVC ceiling and wall panels' },
  { img: '/images/pvc-interior-03-tv-unit.jpg', alt: 'Sleek PVC TV backdrop with storage' },
  { img: '/images/pvc-interior-04-pooja-room.jpg', alt: 'Pooja room with PVC lattice panels' },
  { img: '/images/pvc-interior-05-false-ceiling.jpg', alt: 'Layered PVC ceiling panels' },
  { img: '/images/pvc-interior-06-dining-partition.jpg', alt: 'PVC dining partition' },
  { img: '/images/pvc-interior-07-kitchen-wall.jpg', alt: 'Moisture-resistant PVC kitchen' },
  { img: '/images/pvc-interior-08-office-cabin.jpg', alt: 'Office cabin with fluted PVC panels' },
  { img: '/images/pvc-interior-09-study-room.jpg', alt: 'Study room with custom PVC storage' },
  { img: '/images/pvc-interior-10-entry-foyer.jpg', alt: 'Entry foyer with PVC feature wall' },
  { img: '/images/pvc-cupboard-01-bedroom-sliding.jpg', alt: 'Sliding wardrobe in bedroom' },
  { img: '/images/pvc-cupboard-02-hinged-wardrobe.jpg', alt: 'Full-height hinged wardrobe' },
  { img: '/images/pvc-cupboard-03-open-interior.jpg', alt: 'Wardrobe internal storage organization' },
  { img: '/images/pvc-cupboard-04-kids-room.jpg', alt: 'Kids room cupboard with study desk' },
  { img: '/images/pvc-cupboard-05-kitchen-pantry.jpg', alt: 'Waterproof kitchen pantry' },
  { img: '/images/pvc-cupboard-06-under-stair.jpg', alt: 'Under-stair storage cupboard' },
  { img: '/images/pvc-cupboard-07-dressing-unit.jpg', alt: 'Dressing unit with illuminated table' },
  { img: '/images/pvc-cupboard-08-utility-storage.jpg', alt: 'Utility storage for laundry' },
  { img: '/images/pvc-cupboard-09-loft-storage.jpg', alt: 'Wall-to-wall cupboards with loft' },
  { img: '/images/pvc-cupboard-10-compact-bedroom.jpg', alt: 'Mirrored wardrobe for compact room' },
];

export const PVC_WHY = [
  {
    title: 'Water Resistant',
    desc: 'Suitable for everyday interior use and wet areas.',
  },
  {
    title: 'Termite Resistant',
    desc: 'Designed for long-lasting storage solutions.',
  },
  {
    title: 'Easy to Clean',
    desc: 'Simple maintenance for everyday homes.',
  },
  {
    title: 'Durable',
    desc: 'Strong material for regular household use.',
  },
  {
    title: 'Made to Measure',
    desc: 'Designed according to your available space.',
  },
  {
    title: 'Low Maintenance',
    desc: 'Easy-care surfaces and finishes.',
  },
];

export const PVC_PROCESS = [
  {
    step: '01',
    title: 'Discuss',
    desc: 'Understand your requirements and space.',
  },
  {
    step: '02',
    title: 'Measure',
    desc: 'Take accurate measurements.',
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Plan the PVC interior or cupboard.',
  },
  {
    step: '04',
    title: 'Install',
    desc: 'Complete the work with careful finishing.',
  },
];

export const BRAND_POSTERS = [
  {
    id: 1,
    name: 'Venesta',
    category: 'PVC Systems',
    img: '/images/01-french-sliding-window.jpg',
  },
  {
    id: 2,
    name: 'Vista',
    category: 'Profile Materials',
    img: '/images/08-pvc-20mm-materials.jpg',
  },
  {
    id: 3,
    name: '3 Diamond',
    category: 'Quality Hardware',
    img: '/images/12-wardrobe.jpg',
  },
];
