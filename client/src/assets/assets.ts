import { TruckIcon, LeafIcon, ClockIcon, ShieldCheckIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";
import hero_bg from "./hero_bg.jpeg";
import delivery_truck from "./delivery_truck.svg";
import fruits_vegetables from "./fruits_vegetables.png";
import dairy_eggs from "./dairy_eggs.png";
import bakery from "./bakery.png";
import drinks from "./drinks.png";
import pantry_staples from "./pantry_staples.png";
import snacks from "./snacks.png";
import frozen_foods from "./frozen_foods.png";
import personal_care from "./personal_care.png";
import baby_care from "./baby_care.png";
import meat_seafood from "./meat_seafood.png";

export const assets = {
    delivery_truck,
    hero_bg,
};

export const categoriesData = [
    { slug: "fruits-vegetables", name: "Fruits & Vegetables", image: fruits_vegetables },
    { slug: "personal-care", name: "Personal Care", image: personal_care },
    { slug: "pantry-staples", name: "Pantry Staples", image: pantry_staples },
    { slug: "bakery", name: "Bakery", image: bakery },
    { slug: "beverages", name: "Beverages", image: drinks },
    { slug: "meat-seafood", name: "Meat & Seafood", image: meat_seafood },
    { slug: "snacks", name: "Snacks", image: snacks },
    { slug: "frozen-foods", name: "Frozen Foods", image: frozen_foods },
    { slug: "baby-care", name: "Baby Care", image: baby_care },
    { slug: "dairy-eggs", name: "Dairy & Eggs", image: dairy_eggs },
];

export const heroSectionData = {
    description: "Fresh, organic groceries delivered from local farms to your doorstep. Quality you can taste, convenience you deserve.",
    hero_image: hero_bg,
    hero_features: [
        { icon: TruckIcon, title: "Free Delivery", desc: "Orders over ₹20" },
        { icon: LeafIcon, title: "100% Organic", desc: "Certified products" },
        { icon: ClockIcon, title: "Same Day", desc: "Express delivery" },
        { icon: ShieldCheckIcon, title: "Secure Pay", desc: "Safe checkout" },
    ],
};

export const deliveryPartnerLoginImage = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200";

export const appPromoBannerData = {
    title: "Get fresh groceries in minutes",
    description: "Download the SwiftCart app for exclusive deals, real-time tracking, and the freshest selection delivered right to your door.",
};

export const footerData = {
    brand: {
        name: "SwiftCart",
        description: "Bringing fresh, organic groceries straight from local farms to your doorstep. Nourish your home with Earth's finest.",
        socials: [
            { icon: SiFacebook, link: "#" },
            { icon: SiX, link: "#" },
            { icon: SiInstagram, link: "#" },
        ],
    },

    sections: [
        {
            title: "Quick Links",
            links: [
                { label: "All Products", to: "/products" },
                { label: "Flash Deals", to: "/deals" },
                { label: "Track Order", to: "/orders" },
                { label: "Delivery Partner", to: "/delivery" },
            ],
        },
        {
            title: "Customer Service",
            links: [
                { label: "My Account", to: "/my-account" },
                { label: "Order History", to: "/orders" },
                { label: "Addresses", to: "/addresses" },
                { label: "Help Center", to: "/help" },
            ],
        },
    ],

    contact: [
        { icon: MapPinIcon, text: "123 Chapra main road, Saran" },
        { icon: PhoneIcon, text: "+91 7277959834" },
        { icon: MailIcon, text: "swiftcart@example.com" },
    ],

    bottom: {
        copyright: "© 2026 SwiftCart. All rights reserved.",
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "#" },
        ],
    },
};

export const statusColors: Record<string, string> = {
    Placed: "bg-blue-100 text-blue-700",
    Confirmed: "bg-indigo-100 text-indigo-700",
    Packed: "bg-purple-100 text-purple-700",
    "Out for Delivery": "bg-app-orange/10 text-app-orange",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
};

export const iconsForLeafpad = {
    truck: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png",
    destination: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
};