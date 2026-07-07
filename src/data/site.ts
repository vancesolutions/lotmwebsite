export const site = {
  name: "Light On The Mountain Campground",
  address: {
    street: "2284 S. Perkinsville Rd",
    city: "Williams, AZ 86046",
  },
  phone: "928-637-3845",
  phoneDisplay: "(928) 637-3845",
  email: "info@lotmcamp.com",
  copyrightYear: 2026,
  intro:
    "Light On The Mountain Campground is a faith-based facility nestled in the ponderosa pines of Kaibab National Forest, 3 miles south of Williams, AZ and 35 miles west of Flagstaff. We host a wide variety of events, including:",
  contactCta:
    "For more information, please contact us by phone or email. We look forward to working with you to plan your next event!",
} as const;

export const activities = [
  "Retreats",
  "Youth Groups",
  "Conferences",
  "Weddings/Receptions",
  "Live Music",
  "RV Parking",
  "Dry Camping",
] as const;

export const amenities = [
  "40-Bed Bunkhouse-Style Dormitory",
  "Meeting Space for Up to 100 Participants",
  "Fully Licensed Commercial Kitchen",
  "Starlink High-Speed Internet",
  "Ping-Pong · Cornhole · Basketball",
  "Horseshoes · Volleyball",
] as const;

export const attractions = [
  "Grand Canyon National Park",
  "Grand Canyon Railway",
  "Bearizona Wild Animal Park",
  "Williams Deer Farm",
  "Hiking Trails",
  "Lakes",
  "Elephant Rocks Golf Course",
  "Historic Williams, AZ on the Iconic Route 66",
] as const;

export const galleryPhotos = [
  {
    src: "/gallery/photo-1.jpeg",
    alt: "Light On The Mountain Campground building exterior among ponderosa pines",
    caption: "Campground Exterior",
  },
  {
    src: "/gallery/photo-2.jpeg",
    alt: "Meeting hall with rows of seating facing a podium",
    caption: "Conference & Meeting Space",
  },
  {
    src: "/gallery/photo-3.jpeg",
    alt: "Meeting hall with projection screen and stage",
    caption: "Meeting Space for Up to 100 Attendees",
  },
  {
    src: "/gallery/photo-4.jpeg",
    alt: "Open meeting hall with chairs stacked along the walls",
    caption: "Flexible Meeting Space",
  },
  {
    src: "/gallery/photo-5.jpeg",
    alt: "Fully licensed commercial kitchen",
    caption: "Commercial Kitchen",
  },
  {
    src: "/gallery/photo-6.jpeg",
    alt: "Bunkhouse-style dormitory with wooden bunk beds",
    caption: "40-Bed Dormitory",
  },
  {
    src: "/gallery/photo-7.jpeg",
    alt: "Grand Canyon National Park vista",
    caption: "Grand Canyon National Park",
  },
  {
    src: "/gallery/photo-8.jpeg",
    alt: "Bearizona Wild Animal Park entrance",
    caption: "Bearizona Wild Animal Park",
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
    caption: "Hiking Trails",
  },
  {
    src: "/gallery/photo-13.jpeg",
    alt: "Open meadow surrounded by ponderosa pines",
    caption: "Kaibab National Forest",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
] as const;
