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
  phonePrimary: '9003219474',
  phoneSecondary: ['8220719474', '98400 72799'],
  whatsapp: '918220719474',
  whatsappDisplay: '8220719474',
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
    title: 'WPC 20mm material',
    desc: 'WPC board material in a 20 mm thickness.',
    category: 'Materials',
    tone: 'green',
    img: '/images/08-pvc-20mm-materials.jpg',
    enquiry: 'WPC 20mm material',
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
    title: 'Bedroom PVC Panels',
    desc: 'Blue PVC wall panels bring a fresh, coordinated finish to the bedroom.',
    img: '/images/pvc-bedroom-wall-blue.jpg',
    enquiry: 'Bedroom PVC Panels',
  },
  {
    id: 2,
    title: 'PVC Ceiling & TV Wall',
    desc: 'A bright PVC ceiling and matching TV wall create a clean, connected living space.',
    img: '/images/pvc-ceiling-white.jpg',
    enquiry: 'PVC Ceiling & TV Wall',
  },
  {
    id: 3,
    title: 'Pooja Room',
    desc: 'A white PVC pooja unit with decorative screens and warm integrated lighting.',
    img: '/images/pvc-pooja-white.jpg',
    enquiry: 'Pooja Room',
  },
  {
    id: 4,
    title: 'PVC Room Partition',
    desc: 'A blue PVC partition defines separate areas while keeping the room open and bright.',
    img: '/images/pvc-partition-blue.jpg',
    enquiry: 'PVC Room Partition',
  },
  {
    id: 5,
    title: 'Modular Kitchen',
    desc: 'Forest-green PVC cabinets add generous, low-maintenance storage to the kitchen.',
    img: '/images/pvc-kitchen-forest.jpg',
    enquiry: 'Modular Kitchen',
  },
  {
    id: 6,
    title: 'All-White Kitchen',
    desc: 'A crisp all-white PVC kitchen pairs practical cabinetry with a bright, simple finish.',
    img: '/images/pvc-kitchen-all-white.jpg',
    enquiry: 'All-White Kitchen',
  },
  {
    id: 7,
    title: 'Study Room',
    desc: 'Coordinated green PVC storage and a built-in desk make a comfortable study space.',
    img: '/images/pvc-study-green.jpg',
    enquiry: 'Study Room',
  },
  {
    id: 8,
    title: 'Entry Shoe Cabinet',
    desc: 'A green PVC shoe cabinet keeps everyday footwear organized near the entrance.',
    img: '/images/pvc-shoe-cabinet-green.jpg',
    enquiry: 'Entry Shoe Cabinet',
  },
  {
    id: 9,
    title: 'Laundry Storage',
    desc: 'Yellow PVC cabinetry brings useful, easy-clean storage to the laundry area.',
    img: '/images/pvc-laundry-yellow.jpg',
    enquiry: 'Laundry Storage',
  },
  {
    id: 10,
    title: 'Bathroom Vanity',
    desc: 'Blue PVC vanity storage adds a clean, water-resistant finish to the bathroom.',
    img: '/images/pvc-bathroom-blue.jpg',
    enquiry: 'Bathroom Vanity',
  },
];

export const PVC_CUPBOARDS = [
  {
    id: 1,
    title: 'Black & White Wardrobe',
    desc: 'A full-height PVC wardrobe combines contrasting shutters with practical bedroom storage.',
    features: ['Full-height storage', 'Two-tone shutters', 'Easy maintenance', 'Bedroom fit'],
    img: '/images/pvc-wardrobe-black-white.jpg',
  },
  {
    id: 2,
    title: 'Blush Wardrobe',
    desc: 'A soft blush-and-white PVC wardrobe brings generous storage and a lighter bedroom palette.',
    features: ['Full-height storage', 'Blush finish', 'Integrated drawers', 'Easy maintenance'],
    img: '/images/pvc-wardrobe-blush.jpg',
  },
  {
    id: 3,
    title: 'Shoe Cabinet',
    desc: 'A coordinated PVC entry unit keeps shoes and daily essentials neatly arranged.',
    features: ['Dedicated shoe shelves', 'Entryway storage', 'Coordinated finish', 'Easy-clean surfaces'],
    img: '/images/pvc-shoe-cabinet-green.jpg',
  },
  {
    id: 4,
    title: 'White Kitchen Storage',
    desc: 'White PVC cabinets provide a bright, easy-to-clean kitchen storage layout.',
    features: ['Bright cabinet finish', 'Kitchen storage', 'Easy-clean surfaces', 'Made-to-measure fit'],
    img: '/images/pvc-kitchen-all-white.jpg',
  },
  {
    id: 5,
    title: 'Charcoal & Yellow Kitchen',
    desc: 'Contrasting PVC cabinet colors give this kitchen a bold look and useful storage.',
    features: ['Two-tone finish', 'Kitchen cabinetry', 'Practical storage', 'Easy maintenance'],
    img: '/images/pvc-kitchen-charcoal-yellow.jpg',
  },
  {
    id: 6,
    title: 'Forest Green Kitchen',
    desc: 'Deep green PVC cabinets add a distinctive finish to a hardworking kitchen.',
    features: ['Forest-green finish', 'Kitchen cabinetry', 'Made-to-measure fit', 'Easy-clean surfaces'],
    img: '/images/pvc-kitchen-forest.jpg',
  },
  {
    id: 7,
    title: 'Mint Kitchen',
    desc: 'Soft mint PVC cabinetry keeps the kitchen feeling light while making room for essentials.',
    features: ['Mint cabinet finish', 'Kitchen storage', 'Made-to-measure fit', 'Easy maintenance'],
    img: '/images/pvc-kitchen-mint.jpg',
  },
  {
    id: 8,
    title: 'Navy Kitchen',
    desc: 'Navy PVC cabinets create a rich, modern kitchen with functional storage throughout.',
    features: ['Navy cabinet finish', 'Kitchen storage', 'Made-to-measure fit', 'Easy-clean surfaces'],
    img: '/images/pvc-kitchen-navy.jpg',
  },
  {
    id: 9,
    title: 'Peach Kitchen',
    desc: 'Warm peach PVC cabinetry adds color to a practical, easy-care kitchen.',
    features: ['Peach cabinet finish', 'Kitchen storage', 'Made-to-measure fit', 'Easy maintenance'],
    img: '/images/pvc-kitchen-peach.jpg',
  },
  {
    id: 10,
    title: 'Laundry Storage',
    desc: 'Yellow PVC cabinets organize laundry supplies with a bright, easy-clean finish.',
    features: ['Laundry-area storage', 'Bright cabinet finish', 'Easy-clean surfaces', 'Made-to-measure fit'],
    img: '/images/pvc-laundry-yellow.jpg',
  },
];

export const PVC_GALLERY = [
  { img: '/images/pvc-bathroom-blue.jpg', alt: 'Bathroom with blue PVC vanity storage' },
  { img: '/images/pvc-bedroom-wall-blue.jpg', alt: 'Bedroom with blue PVC wall panels' },
  { img: '/images/pvc-ceiling-white.jpg', alt: 'White PVC ceiling and TV wall in a living room' },
  { img: '/images/pvc-kitchen-all-white.jpg', alt: 'All-white PVC modular kitchen' },
  { img: '/images/pvc-kitchen-charcoal-yellow.jpg', alt: 'Charcoal and yellow PVC kitchen cabinets' },
  { img: '/images/pvc-kitchen-forest.jpg', alt: 'Forest-green PVC modular kitchen' },
  { img: '/images/pvc-kitchen-mint.jpg', alt: 'Mint-green PVC kitchen cabinets' },
  { img: '/images/pvc-kitchen-navy.jpg', alt: 'Navy PVC modular kitchen' },
  { img: '/images/pvc-kitchen-peach.jpg', alt: 'Peach PVC kitchen cabinets' },
  { img: '/images/pvc-laundry-yellow.jpg', alt: 'Laundry room with yellow PVC storage cabinets' },
  { img: '/images/pvc-partition-blue.jpg', alt: 'Blue PVC room partition' },
  { img: '/images/pvc-pooja-white.jpg', alt: 'White PVC pooja unit with decorative screens' },
  { img: '/images/pvc-shoe-cabinet-green.jpg', alt: 'Green PVC shoe cabinet and entry storage' },
  { img: '/images/pvc-study-green.jpg', alt: 'Study room with green PVC storage and built-in desk' },
  { img: '/images/pvc-wardrobe-black-white.jpg', alt: 'Black and white PVC bedroom wardrobe' },
  { img: '/images/pvc-wardrobe-blush.jpg', alt: 'Blush and white PVC bedroom wardrobe' },
  { img: '/images/pvc-ceiling-white (1).jpg', alt: 'White PVC false ceiling with recessed lighting' },
];

export const COMPLETED_PROJECTS = [
  {
    id: 1,
    images: [{ img: '/images/charcoal-overhead-cabinets.jpg', alt: 'Charcoal overhead kitchen cabinets' }],
  },
  {
    id: 2,
    images: [{ img: '/images/charcoal-wardrobe.jpg', alt: 'Charcoal bedroom wardrobe' }],
  },
  {
    id: 3,
    images: [{ img: '/images/cream-display-wardrobe.jpg', alt: 'Cream wardrobe with display storage' }],
  },
  {
    id: 4,
    images: [{ img: '/images/dark-wood-pooja-cabinet-detail.jpg', alt: 'Dark wood pooja cabinet detail' }],
  },
  {
    id: 5,
    images: [{ img: '/images/dark-wood-pooja-cabinet.jpg', alt: 'Dark wood pooja cabinet' }],
  },
  {
    id: 6,
    images: [{ img: '/images/grey-glass-kitchen-cabinet.jpg', alt: 'Grey kitchen cabinets with glass fronts' }],
  },
  {
    id: 7,
    images: [{ img: '/images/grey-turquoise-builtins.jpg', alt: 'Grey and turquoise built-in storage' }],
  },
  {
    id: 8,
    images: [{ img: '/images/open-casement-window-city-view.jpg', alt: 'Open casement window with a city view' }],
  },
  {
    id: 9,
    images: [{ img: '/images/open-charcoal-wardrobe.jpg', alt: 'Open charcoal wardrobe storage' }],
  },
  {
    id: 10,
    images: [{ img: '/images/real-work-frosted-sliding.jpg', alt: 'Installed frosted-glass sliding window' }],
  },
  {
    id: 11,
    images: [{ img: '/images/real-work-glass-doors.jpg', alt: 'Installed glazed double doors' }],
  },
  {
    id: 12,
    images: [{ img: '/images/real-work-house-charcoal.jpg', alt: 'Completed home exterior with charcoal finishes' }],
  },
  {
    id: 13,
    images: [{ img: '/images/real-work-house-grey.jpg', alt: 'Completed home exterior with grey finishes' }],
  },
  {
    id: 14,
    images: [{ img: '/images/real-work-house-sand.jpg', alt: 'Completed home exterior with sand-coloured finishes' }],
  },
  {
    id: 15,
    images: [{ img: '/images/real-work-patterned-window.jpg', alt: 'Installed sliding window with patterned glass' }],
  },
  {
    id: 16,
    images: [{ img: '/images/turquoise-kitchen-cabinetry.jpg', alt: 'Turquoise kitchen cabinetry' }],
  },
  {
    id: 17,
    images: [{ img: '/images/turquoise-pullout-storage.jpg', alt: 'Turquoise pull-out kitchen storage' }],
  },
  {
    id: 18,
    images: [{ img: '/images/white-marble-kitchen.jpg', alt: 'White kitchen with marble-look surfaces' }],
  },
  {
    id: 19,
    images: [{ img: '/images/white-upvc-double-door.jpg', alt: 'White uPVC double door installation' }],
  },
  {
    id: 20,
    images: [{ img: '/images/wood-display-cabinet.jpg', alt: 'Wood-finish display cabinet' }],
  },
];

export const TEAM_MEMBERS = [
  { name: 'Selvam', position: 'Supervisor', description: 'Coordinates day-to-day team and site activities.' },
  { name: 'Sindhar', position: 'Staff', description: 'Supports daily work as part of the site team.' },
  { name: 'Kannan', position: 'Staff', description: 'Supports daily work as part of the site team.' },
  { name: 'Navash', position: 'Technician', description: 'Carries out assigned technical work on projects.' },
  { name: 'Ganeshan', position: 'Technician', description: 'Carries out assigned technical work on projects.' },
  { name: 'Swaminathan', position: 'Helper', description: 'Provides practical support to the project team.' },
  { name: 'Venkatesan', position: 'Helper', description: 'Provides practical support to the project team.' },
  { name: 'Dinesh', position: 'Technician', description: 'Carries out assigned technical work on projects.' },
  { name: 'Nandhini', position: 'Administrative Officer', description: 'Supports the team with office administration.' },
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
    img: '/images/venesta-noise-reduction.jpeg',
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
