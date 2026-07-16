export const site = {
  name: "Light On The Mountain Campground",
  shortName: "Light On The Mountain",
  tagline: "Retreat. Gather. Be restored.",
  address: {
    street: "2284 S. Perkinsville Rd",
    city: "Williams, AZ 86046",
  },
  phone: "928-637-3845",
  phoneDisplay: "(928) 637-3845",
  email: "info@lotmcamp.com",
  copyrightYear: 2026,
  intro:
    "A faith-based facility nestled in the ponderosa pines of Kaibab National Forest — 3 miles south of Williams, AZ and 35 miles west of Flagstaff.",
  contactCta:
    "We look forward to helping you plan your next retreat, gathering, or celebration.",
} as const;

export const activities = [
  { title: "Retreats", description: "Quiet space for renewal and reflection" },
  { title: "Youth Groups", description: "Safe grounds for growing faith together" },
  { title: "Conferences", description: "Meeting space for up to 100 participants" },
  { title: "Weddings & Receptions", description: "Celebrate among the pines" },
  { title: "Live Music", description: "Open halls ready for worship and performance" },
  { title: "RV Parking", description: "Convenient parking for overnight guests" },
  { title: "Dry Camping", description: "Simple stays under the Arizona sky" },
] as const;

export const amenities = [
  "40-bed bunkhouse-style dormitory",
  "Meeting space for up to 100 participants",
  "Fully licensed commercial kitchen",
  "Starlink high-speed internet",
  "Ping-pong, cornhole, and basketball",
  "Horseshoes and volleyball",
] as const;

export const attractions = [
  "Grand Canyon National Park",
  "Grand Canyon Railway",
  "Bearizona Wild Animal Park",
  "Williams Deer Farm",
  "Hiking trails",
  "Lakes",
  "Elephant Rocks Golf Course",
  "Historic Williams on Route 66",
] as const;

export const galleryPhotos = [
  {
    src: "/gallery/photo-1.jpeg",
    alt: "Light On The Mountain Campground building exterior among ponderosa pines",
    caption: "Campground exterior",
  },
  {
    src: "/gallery/photo-2.jpeg",
    alt: "Meeting hall with rows of seating facing a podium",
    caption: "Conference & meeting space",
  },
  {
    src: "/gallery/photo-3.jpeg",
    alt: "Meeting hall with projection screen and stage",
    caption: "Space for up to 100",
  },
  {
    src: "/gallery/photo-4.jpeg",
    alt: "Open meeting hall with chairs stacked along the walls",
    caption: "Flexible gathering hall",
  },
  {
    src: "/gallery/photo-5.jpeg",
    alt: "Fully licensed commercial kitchen",
    caption: "Commercial kitchen",
  },
  {
    src: "/gallery/photo-6.jpeg",
    alt: "Bunkhouse-style dormitory with wooden bunk beds",
    caption: "40-bed dormitory",
  },
  {
    src: "/gallery/photo-7.jpeg",
    alt: "Grand Canyon National Park vista",
    caption: "Grand Canyon National Park",
  },
  {
    src: "/gallery/photo-8.jpeg",
    alt: "Bearizona Wild Animal Park entrance",
    caption: "Bearizona",
  },
  {
    src: "/gallery/photo-9.jpeg",
    alt: "Elephant Rocks Golf Course at Williams sign",
    caption: "Elephant Rocks Golf Course",
  },
  {
    src: "/gallery/photo-10.png",
    alt: "Outdoor dining area near Route 66 in Williams",
    caption: "Historic Williams, AZ",
  },
  {
    src: "/gallery/photo-12.jpeg",
    alt: "Hiking trail sign in Kaibab National Forest",
    caption: "Hiking trails",
  },
  {
    src: "/gallery/photo-13.jpeg",
    alt: "Open meadow surrounded by ponderosa pines",
    caption: "Local wildlife",
  },
] as const;

export const featuredGallery = galleryPhotos.slice(0, 4);

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gatherings", href: "/#gatherings" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
] as const;
