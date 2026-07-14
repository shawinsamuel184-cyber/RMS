/** R.M.S Saloon — edit business details here */
export const siteConfig = {
  name: "R. M. S Saloon",
  shortName: "RMS Saloon",
  tagline: "Hair salon in Wattala",
  googleRating: 4.5,
  googleReviewCount: 24,
  owner: {
    /** Shown in hero — change to the owner's first name when you want */
    greetingName: "R.M.S",
    title: "Owner & stylist",
    bio: "A budget-friendly hair salon on Hendala Road, Wattala — sharp cuts, friendly service, A/C, and parking. Walk in anytime we're open.",
  },
  location: {
    title: "Find us",
    address: "199/1, Nayakanda Road, Hendala",
    city: "Wattala, Sri Lanka",
    fullAddress: "199/1, Nayakanda Road, Hendala, Wattala, Sri Lanka",
    plusCode: "XVWJ+3P Wattala",
    phone: "076 646 4662",
    phoneTel: "+94766464662",
    mapsUrl: "https://www.google.com/maps/place/R.+M.+S+Saloon/@6.9952159,79.8815193,17z/data=!4m15!1m8!3m7!1s0x3ae2f7ce3dfaeeff:0x1b8a077b19dc761a!2s175+Hendala+Rd,+Wattala!3b1!8m2!3d6.9952159!4d79.8815193!16s%2Fg%2F11n053j3c5!3m5!1s0x3ae2f79582e4fb93:0xa0f2c9e486de5e54!8m2!3d6.9952384!4d79.8818722!16s%2Fg%2F11svk5nm9t?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.655440019967!2d79.8793253!3d6.9952384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f79582e4fb93%3A0xa0f2c9e486de5e54!2sR.%20M.%20S%20Saloon!5e0!3m2!1sen!2slk!4v1720961600000!5m2!1sen!2slk",
    hours: [
      { days: "Every day", time: "Open until 10:00 PM" },
    ],
    amenities: ["A/C available", "Parking available", "Budget friendly"],
  },
};

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  timeAgo?: string;
  badge?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Steeban Charles",
    quote: "Great customer service. Budget friendly too.",
    rating: 5,
    timeAgo: "6 months ago",
    badge: "Local Guide",
  },
  {
    name: "Isuru Fernando",
    quote: "Budget friendly place. I have been cutting my hair for 2 years now. Looking sharp as always..",
    rating: 5,
    timeAgo: "11 months ago",
    badge: "Local Guide",
  },
  {
    name: "kevin baptist",
    quote: "I'm really delighted to make a haircut on here , it was so amazing hingly recommended guys ❤️",
    rating: 5,
    timeAgo: "2 years ago",
  },
  {
    name: "Loki",
    quote: "Great saloon and great owner. A/C available Parking available Not expensive",
    rating: 5,
    timeAgo: "2 years ago",
    badge: "Local Guide",
  },
  {
    name: "Prana Van",
    quote: "Great customer service and friendly environment",
    rating: 5,
    timeAgo: "a year ago",
  },
  {
    name: "Nagaraja nigilesh",
    quote: "👍👏♥️",
    rating: 5,
    timeAgo: "2 years ago",
  },
];

export const faqs = [
  {
    q: "Do I need an appointment?",
    a: "No booking needed — just walk in during opening hours. We're open every day until 10:00 PM.",
  },
  {
    q: "Where are you located?",
    a: "175 Hendala Rd, Wattala — easy to find on Google Maps. Plus code: XVWJ+3P Wattala.",
  },
  {
    q: "What services do you offer?",
    a: "Men's haircuts, beard trims, hair wash & styling, kids cuts, and full grooming — budget-friendly prices.",
  },
  {
    q: "Is parking available?",
    a: "Yes — parking is available, and the salon has A/C for a comfortable visit.",
  },
];
