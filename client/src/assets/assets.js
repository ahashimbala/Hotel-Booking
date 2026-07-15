import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

// Target districts within Abuja
export const cities = [
    "Maitama",
    "Wuse II",
    "Asokoro",
    "Gwarinpa",
];

// Localized Abuja Packages (Prices updated to standard luxury Naira ranges)
export const exclusiveOffers = [
    { _id: 1, title: "Maitama Executive Stay", description: "Complimentary private lounge access and buffet breakfast", priceOff: 20, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Wuse II Weekend Getaway", description: "Special couples retreat package with premium spa treatment", priceOff: 15, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Asokoro Diplomatic Retreat", description: "Book 30 days in advance for exclusive villa savings", priceOff: 25, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials localized to visitors of Abuja
export const testimonials = [{
        id: 1,
        name: "Chidi Nwosu",
        address: "Enugu, Nigeria",
        image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&h=200&auto=format&fit=crop",
        rating: 5,
        review: "Whenever I come to Abuja for business, this platform is my go-to. Finding secure apartments in Wuse II has never been this easy."
    },
    {
        id: 2,
        name: "Amina Bello",
        address: "Abuja, Nigeria",
        image: "https://images.unsplash.com/photo-1636754906126-58a76fa5c45a?q=80&w=200&h=200&auto=format&fit=crop",
        rating: 4,
        review: "The booking process was frictionless, and the boutique hotel we selected near central area was absolutely top-notch."
    },
    {
        id: 3,
        name: "Olumide Awosika",
        address: "Lagos, Nigeria",
        image: "https://images.unsplash.com/photo-1547544998-6fe24777d37e?q=80&w=200&h=200&auto=format&fit=crop",
        rating: 5,
        review: "Incredible service. I found an ultra-secure luxury suite in Maitama with fully integrated workspace facilities."
    }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows strict premium cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "95% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "GreatStack Abuja",
    "email": "abuja.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2g5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "Maitama"
    ]
}

// Hotel Dummy Data (Abuja High-End Suite)
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Zuma Luxury Suites",
    "address": "Plot 432, Gana Street, Maitama, Abuja",
    "contact": "+2349012345678",
    "owner": userDummyData,
    "city": "Maitama",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data (Prices updated to realistic Naira equivalents)
export const roomsDummyData = [{
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData,
        "roomType": "Presidential Suite",
        "pricePerNight": 250000, // ₦250,000 per night
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Diplomatic Executive",
        "pricePerNight": 180000, // ₦180,000 per night
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Deluxe King Room",
        "pricePerNight": 120000, // ₦120,000 per night
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "Standard Studio",
        "pricePerNight": 85000, // ₦85,000 per night
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]

// User Bookings Dummy Data (Calculations updated based on new pricing)
export const userBookingsDummyData = [{
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1], // Diplomatic Executive
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 180000,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Paystack",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0], // Presidential Suite
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 250000,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3], // Standard Studio
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 85000,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data (Sum of total pricing matches perfectly)
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 515000, // Total: 180k + 250k + 85k = 515,000
    "bookings": userBookingsDummyData
}