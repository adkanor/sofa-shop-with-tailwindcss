import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigitem1,
  bigitem2,
  bigitem3,
  customer1,
  customer2,
  item4,
  item5,
  item6,
  item7,
} from "../assets/images";

import {
  thumbnailitem1,
  thumbnailitem2,
  thumbnailitem3,
} from "../assets/images";
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const items = [
  {
    thumbnail: thumbnailitem1,
    bigitem: bigitem1,
  },
  {
    thumbnail: thumbnailitem2,
    bigitem: bigitem2,
  },
  {
    thumbnail: thumbnailitem3,
    bigitem: bigitem3,
  },
];

export const statistics = [
  { value: "50+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: item4,
    name: "Chair Primteks Plus ISO ",
    price: "$200.20",
  },
  {
    imgURL: item5,
    name: "Chair RZTK Scandi White",
    price: "$210.20",
  },
  {
    imgURL: item6,
    name: "Chair GT RACER X-D10",
    price: "$220.20",
  },
  {
    imgURL: item7,
    name: "Chair GT RACER X-D15",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Daccota Frill",
    rating: 5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Mike Jordan",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Chair GT RACER X-D10", link: "/" },
      { name: "Chair GT RACER X-D15", link: "/" },
      { name: "Chair RZTK Scandi White", link: "/" },
      { name: "Table RZTK Scandi White", link: "/" },
      { name: "Sofa RZTK Scandi White", link: "/" },
      { name: "Sofa GT RACER X-D10", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@ysof.com", link: "mailto:customer@mysofa.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
