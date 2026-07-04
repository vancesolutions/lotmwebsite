export const site = {
  name: "Light On The Mountain Campground",
  tagline: "A Faith-Based Retreat & Conference Center",
  location: "Williams, Arizona · Kaibab National Forest",
  address: {
    street: "2284 S. Perkinsville Rd",
    city: "Williams, AZ 86046",
  },
  phone: "(928) 637-3845",
  email: "info@lotmcamp.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.9!2d-112.19!3d35.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE0JzI0LjAiTiAxMTLCsDExJzI0LjAiVw!5e0!3m2!1sen!2sus!4v1",
} as const;

export const facilities = [
  {
    id: "conference",
    stat: "100",
    statLabel: "Guest Capacity",
    title: "Conference & Meeting Space",
    description:
      "A versatile gathering hall with comfortable seating for up to 100 attendees. Equipped with a sound system and projection screen — ideal for retreats, conferences, worship services, and group sessions.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Conference and meeting space with rows of seating",
  },
  {
    id: "dining",
    stat: null,
    statLabel: null,
    title: "Full-Service Dining Hall & Commercial Kitchen",
    description:
      "Our spacious dining hall is anchored by a fully equipped commercial kitchen, ready to serve your group three meals a day. Bring your own cook or cater — every tool you need is here.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Commercial kitchen with stainless steel equipment",
  },
  {
    id: "dormitory",
    stat: "40",
    statLabel: "Beds",
    title: "Bunkhouse-Style Dormitory",
    description:
      "Sleep comfortably in our 40-bed dormitory featuring sturdy wooden bunk beds, a common living area, restrooms, and showers. Clean, well-maintained, and designed for group stays.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Bunkhouse-style dormitory with wooden bunk beds",
  },
] as const;

export const outdoors = [
  {
    title: "Multipurpose Building",
    description:
      "Additional flexible gathering space for workshops, crafts, and small group activities.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Multipurpose building interior",
  },
  {
    title: "Volleyball Court & Open Meadow",
    description:
      "Wide-open spaces for recreation, sports, and team-building exercises under the Arizona sky.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Open meadow with pine trees and mountain views",
  },
  {
    title: "RV Parking",
    description:
      "Spacious on-site RV parking for individual travelers and groups who prefer their own accommodations.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "RV parking area among pine trees",
  },
] as const;

export const attractions = [
  {
    title: "Grand Canyon National Park",
    distance: "60 mi north",
    image:
      "https://images.unsplash.com/photo-1474040983956-379ce4a8b322?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Grand Canyon National Park vista",
  },
  {
    title: "Grand Canyon Railway",
    distance: "5 mi · departs from Williams",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Historic train at Grand Canyon Railway",
  },
  {
    title: "Bearizona Wildlife Park",
    distance: "5 mi",
    image:
      "https://images.unsplash.com/photo-1474511320728-7a7510f4b34a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Wildlife in natural forest setting",
  },
  {
    title: "Williams Deer Farm",
    distance: "6 mi",
    image:
      "https://images.unsplash.com/photo-1484406566174-9cb585b62d7d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Deer in a farm setting",
  },
  {
    title: "Lakes & Hiking Trails",
    distance: "Nearby in Kaibab National Forest",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Forest lake surrounded by pine trees",
  },
  {
    title: "Historic Route 66 · Williams",
    distance: "5 mi · shops, restaurants & hotels",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Historic downtown street",
  },
] as const;

export const navLinks = [
  { label: "Facilities", href: "#facilities" },
  { label: "Outdoors", href: "#outdoors" },
  { label: "Attractions", href: "#attractions" },
  { label: "Contact", href: "#contact" },
] as const;
