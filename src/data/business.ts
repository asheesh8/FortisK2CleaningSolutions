/**
 * Fortis K² Cleaning Solutions: the single source of truth for every factual
 * claim on the site.
 *
 * 1. If a fact is not in this file, it does not go on the website.
 * 2. Change it here and it changes everywhere. Never hard-code a phone number,
 *    service name or claim into a page.
 * 3. Anything marked TODO(fortis) is unconfirmed. Confirm with the owners before
 *    launch. Do not invent replacements.
 *
 * Sources: the Fortis K² Facebook page (scraped 2026-09-28, see
 * raw-assets/facebook/SCRAPE-NOTES.md) and the owners' message to ArkiTech.
 */
import type { ImageMetadata } from 'astro';

import imgRecurring from '@/assets/gen/svc-recurring.jpg';
import imgDeep from '@/assets/gen/svc-deep.jpg';
import imgMove from '@/assets/gen/svc-move.jpg';
import imgAirbnb from '@/assets/gen/svc-airbnb.jpg';
import imgOrganizing from '@/assets/gen/svc-organizing.jpg';
import imgBusiness from '@/assets/gen/svc-business.jpg';

export const company = {
  name: 'Fortis K² Cleaning Solutions',
  shortName: 'Fortis K²',
  tagline: 'Done carefully. Done completely. Done K².',
  // Their own flyer headline.
  promise: 'A cleaner home. More time for you.',
  shortDescription:
    'Family-owned, fully insured house cleaning in Brattleboro, Windham County and Southern Vermont. Recurring, deep, move-in/move-out, Airbnb turnover and small-business cleaning.',
  url: 'https://www.fortisk2cleaning.com', // TODO(fortis): confirm domain
  phone: '(802) 380-5128',
  phoneRaw: '+18023805128',
  email: 'fortisk2cleaningsolutions@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61594050569154',
  city: 'Brattleboro',
  county: 'Windham County',
  region: 'Southern Vermont',
  state: 'VT',
  // Brattleboro town centre. Used for schema only; no street address is published.
  geo: { lat: 42.8509, lng: -72.5579 },
  insured: true,
  bookingOpened: '2026-09-03',
  // TODO(fortis): confirm the towns you will travel to. Facebook lists
  // "Brattleboro, VT" as the service area and "Windham County and Southern
  // Vermont" in the bio. Nothing more specific has been published.
  serviceAreaSummary: 'Brattleboro, Windham County and Southern Vermont',
  frequencies: ['Weekly', 'Biweekly', 'Monthly'] as const,
};

export const cta = {
  primary: 'Request a quote',
  call: `Call ${company.phone}`,
};

export const owners = [
  {
    name: 'Kaleigh Dagg',
    role: 'Co-owner',
    initials: 'KD',
    short: 'Wife and mom of three, building this with her family.',
    bio: 'Wife and mom of three. Kaleigh wanted to build something meaningful for her family while helping others, and started Fortis K² with her sister-in-law and her mother.',
  },
  {
    name: 'McKayla Donovan',
    role: 'Co-owner',
    initials: 'MD',
    short: 'Mom of two who brings patience and attention to detail.',
    bio: 'Mom of two who dreamed of running her own cleaning company for years. Working with autistic children taught her patience, compassion and attention to detail.',
  },
  {
    name: 'Sarah Dagg',
    role: 'Co-owner',
    initials: 'SD',
    short: 'Mother, grandmother of nine, and co-owner of Fortis Property Solutions.',
    bio: 'Mother, grandmother of nine, and co-owner of Fortis Property Solutions with her husband Jason. When the chance came to build this with her daughter and McKayla, she jumped in.',
  },
];

export const story =
  'Fortis K² is a family-built business founded on trust, dedication and a shared passion for helping others. We know that welcoming someone into your home or business takes trust, so we treat every space with the same care and respect we would give our own.';

export interface Service {
  slug: string;
  name: string;
  /** Short name for cards and the form. */
  short: string;
  /** One line for cards. Keep under ~14 words. */
  line: string;
  intro: string;
  includes: string[];
  goodFor: string[];
  image: ImageMetadata;
  imageAlt: string;
  /** Services page SEO */
  metaTitle: string;
  metaDescription: string;
}

// Scope notes come from the owners' own posts. Anything we could not confirm
// (appliance interiors, linen laundering, supplies) is left out on purpose.
export const services: Service[] = [
  {
    slug: 'recurring-house-cleaning',
    name: 'Recurring house cleaning',
    short: 'Recurring cleaning',
    line: 'Weekly, biweekly or monthly visits that keep your home steady.',
    intro:
      'Pick a rhythm that fits your week and we keep your home on it. Recurring visits cover the rooms you live in every day, so you come home to a clean house instead of a to-do list.',
    includes: [
      'Dusting throughout the home',
      'Wiping down frequently touched surfaces',
      'Kitchens and bathrooms cleaned',
      'Vacuuming and mopping floors',
      'Polishing furniture',
    ],
    goodFor: ['Busy families', 'Homes and apartments', 'Anyone who wants their weekends back'],
    image: imgRecurring,
    imageAlt: 'Bright farmhouse living room with pine floors, a navy throw on the sofa and autumn maples outside',
    metaTitle: 'Recurring House Cleaning in Brattleboro, VT',
    metaDescription:
      'Weekly, biweekly and monthly house cleaning in Brattleboro and Windham County from a family-owned, fully insured team. Request a quote.',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep and premium cleaning',
    short: 'Deep cleaning',
    line: 'Top-to-bottom detail for the spots a regular clean skips.',
    intro:
      'A deep clean is for the tub you dread scrubbing, the cabinets nobody has wiped in a while, and the corners that need more than a once-over. It is also a good way to start a recurring schedule.',
    includes: [
      'Tubs and showers scrubbed back to their shine',
      'Kitchen cabinets wiped down',
      'Detailed dusting, top to bottom',
      'Surfaces sanitized',
      'Floors vacuumed and mopped',
    ],
    goodFor: ['A seasonal reset', 'Before guests or holidays', 'The first visit of a recurring plan'],
    image: imgDeep,
    imageAlt: 'Spotless butcher-block counter with a folded pink cloth and a glass spray bottle in morning light',
    metaTitle: 'Deep Cleaning in Brattleboro & Southern Vermont',
    metaDescription:
      'Detailed top-to-bottom deep cleaning for homes in Brattleboro, Windham County and Southern Vermont. Family-owned and fully insured.',
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-in and move-out cleaning',
    short: 'Move-in / move-out',
    line: 'An empty home cleaned so the next chapter starts fresh.',
    intro:
      'Moving is enough work without scrubbing an empty house. We clean it room by room so you can hand over the keys, or move your things in, without a second thought.',
    includes: [
      'Every room cleaned while it is empty',
      'Kitchen cabinets and counters wiped out and down',
      'Bathrooms cleaned and sanitized',
      'Floors vacuumed and mopped',
      // TODO(fortis): confirm whether oven, fridge and window interiors are included.
    ],
    goodFor: ['Renters handing back keys', 'Buyers before move-in day', 'Landlords between tenants'],
    image: imgMove,
    imageAlt: 'Empty sunlit bedroom with polished hardwood floors and moving boxes stacked by the door',
    metaTitle: 'Move-In / Move-Out Cleaning in Brattleboro, VT',
    metaDescription:
      'Move-in and move-out cleaning across Brattleboro and Windham County. Family-owned, fully insured, detailed. Request a quote.',
  },
  {
    slug: 'airbnb-vacation-rental-cleaning',
    name: 'Airbnb and vacation rental turnovers',
    short: 'Airbnb turnovers',
    line: 'Guest-ready resets between stays, done the same way every time.',
    intro:
      'Southern Vermont rentals live and die by their reviews. We reset your place between stays so every guest walks into the same clean, cared-for space the listing promised.',
    includes: [
      'Full clean between guests',
      'Kitchens and bathrooms reset',
      'Floors vacuumed and mopped',
      'Surfaces dusted and wiped down',
      // TODO(fortis): confirm linen changes, laundry and restocking.
    ],
    goodFor: ['Airbnb and VRBO hosts', 'Second-home owners', 'Short-term rental managers'],
    image: imgAirbnb,
    imageAlt: 'Cabin rental bedroom with a freshly made bed, towels tied with a pink ribbon and a mountain view',
    metaTitle: 'Airbnb & Vacation Rental Cleaning in Southern Vermont',
    metaDescription:
      'Airbnb and vacation rental turnover cleaning in Brattleboro, Windham County and Southern Vermont. Reliable, detailed, fully insured.',
  },
  {
    slug: 'organizing-home-resets',
    name: 'Organizing and whole-home resets',
    short: 'Organizing and resets',
    line: 'Decluttered, organized and cleaned, one room at a time.',
    intro:
      'Some homes need more than a clean. We declutter, organize and deep clean room by room, and keep coming back until the whole house feels comfortable again. We have reset homes that sat empty for a year.',
    includes: [
      'Decluttering and organizing',
      'Deep cleaning and sanitizing each room',
      'Putting each space back together',
      'Kitchens, including cabinets',
      'A plan that makes upkeep easier afterwards',
    ],
    goodFor: ['Homes that have sat empty', 'Overwhelming spaces', 'A fresh start before regular cleanings'],
    image: imgOrganizing,
    imageAlt: 'Organized farmhouse mudroom with woven baskets, hooks and boots lined up on a tray',
    metaTitle: 'Home Organizing & Whole-Home Resets, Brattleboro VT',
    metaDescription:
      'Decluttering, organizing and whole-home reset cleaning in Windham County, Vermont. Room by room, done carefully and completely.',
  },
  {
    slug: 'small-business-cleaning',
    name: 'Small business cleaning',
    short: 'Small business',
    line: 'Offices and shops kept clean for your customers and your team.',
    intro:
      'Your space is part of your first impression. We keep small offices and shops around Windham County clean, so you can focus on running the business.',
    includes: [
      'Floors vacuumed and mopped',
      'Counters, desks and high-touch surfaces wiped down',
      'Restrooms cleaned',
      'Dusting throughout',
      // TODO(fortis): confirm after-hours availability and visit frequency options.
    ],
    goodFor: ['Small offices', 'Shops and studios', 'Waiting rooms'],
    image: imgBusiness,
    imageAlt: 'Clean small shop in a brick downtown building with polished wood floors at dusk',
    metaTitle: 'Small Business Cleaning in Brattleboro, VT',
    metaDescription:
      'Office and small business cleaning in Brattleboro and Windham County from a family-owned, fully insured local team.',
  },
];

export const process = [
  {
    title: 'Message or call',
    body: 'Tell us about your space and what you need. Facebook, phone, email or the form all work.',
  },
  {
    title: 'Walk-through',
    body: 'We come see the space in person, so nothing about the job is a guess.',
  },
  {
    title: 'Your personal quote',
    body: 'A clear, fair price built around your home.',
  },
  {
    title: 'Cleaning on your schedule',
    body: 'One time, or weekly, biweekly or monthly. You pick.',
  },
];

export const whyUs = [
  { icon: 'users-three', title: 'Family-owned', body: 'Three women, one family, and our name on every clean.' },
  { icon: 'shield-check', title: 'Fully insured', body: 'Covered, so you never have to wonder.' },
  { icon: 'clipboard-text', title: 'Walk-through first', body: 'Every quote starts with seeing your space.' },
  { icon: 'calendar-check', title: 'Recurring spots open', body: 'Weekly, biweekly and monthly schedules.' },
];

/** Real job notes, paraphrased from the owners' Facebook posts. */
export const jobNotes = [
  {
    title: 'A 5-bedroom home, top to bottom',
    body: 'Five bedrooms, two and a half baths, two sitting rooms, a kitchen and a dining room. Dusted throughout, high-touch surfaces wiped, floors vacuumed and mopped, furniture polished. We go back every few months to keep it that way.',
  },
  {
    title: 'A home that sat empty for a year',
    body: 'Mice had left their mark while the owner was away. We decluttered, organized and cleaned room by room over a week until the house felt comfortable again.',
  },
  {
    title: 'A whole-home reset, room by room',
    body: 'Living room, mudroom and bathroom first, then the kitchen, cabinets and all. Deep cleaned, sanitized, organized and put back together.',
  },
];

export const faqs = [
  {
    q: 'What areas do you serve?',
    a: `We are based in Windham County and clean homes and businesses in ${company.serviceAreaSummary}. Not sure if we reach you? Send a message and ask.`,
  },
  {
    q: 'How does pricing work?',
    a: 'Every home is different, so we start with a walk-through and then give you a personal quote. We keep pricing fair and straightforward.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes. Fortis K² Cleaning Solutions is fully insured.',
  },
  {
    q: 'How often can you come?',
    a: 'As often as you like. We offer one-time cleans and recurring weekly, biweekly and monthly schedules.',
  },
  {
    q: 'Do you clean Airbnbs and vacation rentals?',
    a: 'Yes. We handle turnovers between guests for short-term rentals and second homes across Southern Vermont.',
  },
  {
    q: 'Who will be cleaning my home?',
    a: 'Fortis K² is owned and run by Kaleigh, McKayla and Sarah, three women from one family. Family-owned means the people reading your message care how the job turns out.',
  },
  // TODO(fortis): add answers for "Do I need to be home?", "Do you bring your
  // own supplies?" and pets once the owners confirm them.
];
