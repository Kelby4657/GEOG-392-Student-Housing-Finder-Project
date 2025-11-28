/**
 * Sample Housing Data for College Station, TX
 * Location data is centered around Texas A&M University
 * Texas A&M Main Campus: 30.6187, -96.3365
 */

const TAMU_LOCATION = {
    lat: 30.6187,
    lng: -96.3365,
    name: "Texas A&M University"
};

const housingData = [
    {
        id: 1,
        name: "The Stack Apartments",
        address: "401 University Dr E, College Station, TX 77840",
        lat: 30.6201,
        lng: -96.3285,
        price: 850,
        type: "apartment",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 650,
        amenities: ["Pool", "Gym", "Study Room", "Parking"],
        petFriendly: true,
        description: "Modern apartment complex walking distance to campus with excellent amenities.",
        travelTimes: {
            walking: 12,
            biking: 4,
            driving: 3,
            bus: 8
        }
    },
    {
        id: 2,
        name: "Northgate Lofts",
        address: "310 Church Ave, College Station, TX 77840",
        lat: 30.6225,
        lng: -96.3401,
        price: 1200,
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 900,
        amenities: ["Rooftop Deck", "Study Lounge", "High-Speed Internet"],
        petFriendly: false,
        description: "Premium loft apartments in the heart of Northgate entertainment district.",
        travelTimes: {
            walking: 8,
            biking: 3,
            driving: 2,
            bus: 6
        }
    },
    {
        id: 3,
        name: "College Park Townhomes",
        address: "500 Harvey Rd, College Station, TX 77840",
        lat: 30.6098,
        lng: -96.3510,
        price: 1500,
        type: "townhouse",
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 1400,
        amenities: ["Garage", "Private Patio", "Washer/Dryer"],
        petFriendly: true,
        description: "Spacious townhomes perfect for roommates or families.",
        travelTimes: {
            walking: 25,
            biking: 8,
            driving: 6,
            bus: 15
        }
    },
    {
        id: 4,
        name: "Aggie Station Studios",
        address: "200 Walton Dr, College Station, TX 77840",
        lat: 30.6145,
        lng: -96.3298,
        price: 600,
        type: "studio",
        bedrooms: 0,
        bathrooms: 1,
        sqft: 400,
        amenities: ["Utilities Included", "Furnished", "Laundry Facility"],
        petFriendly: false,
        description: "Affordable studio apartments ideal for single students on a budget.",
        travelTimes: {
            walking: 15,
            biking: 5,
            driving: 4,
            bus: 10
        }
    },
    {
        id: 5,
        name: "Century Square Living",
        address: "170 Century Square Dr, College Station, TX 77840",
        lat: 30.6050,
        lng: -96.2990,
        price: 1800,
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1100,
        amenities: ["Pool", "Fitness Center", "Business Center", "Pet Park"],
        petFriendly: true,
        description: "Luxury apartments at Century Square with shopping and dining nearby.",
        travelTimes: {
            walking: 35,
            biking: 12,
            driving: 8,
            bus: 20
        }
    },
    {
        id: 6,
        name: "Campus View House",
        address: "800 Boyett St, College Station, TX 77840",
        lat: 30.6178,
        lng: -96.3422,
        price: 2200,
        type: "house",
        bedrooms: 4,
        bathrooms: 2,
        sqft: 1800,
        amenities: ["Fenced Yard", "Garage", "Central AC", "Fireplace"],
        petFriendly: true,
        description: "Classic college home near campus, great for groups.",
        travelTimes: {
            walking: 10,
            biking: 4,
            driving: 3,
            bus: 7
        }
    },
    {
        id: 7,
        name: "The Village at Wellborn",
        address: "1600 Wellborn Rd, College Station, TX 77840",
        lat: 30.6012,
        lng: -96.3560,
        price: 750,
        type: "apartment",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 700,
        amenities: ["Pool", "Volleyball Court", "Free Parking"],
        petFriendly: true,
        description: "Affordable apartments with great community atmosphere.",
        travelTimes: {
            walking: 40,
            biking: 15,
            driving: 10,
            bus: 25
        }
    },
    {
        id: 8,
        name: "University Gardens",
        address: "455 Marion Pugh Dr, College Station, TX 77840",
        lat: 30.6120,
        lng: -96.3380,
        price: 950,
        type: "apartment",
        bedrooms: 2,
        bathrooms: 1,
        sqft: 850,
        amenities: ["Garden", "BBQ Area", "Covered Parking"],
        petFriendly: true,
        description: "Quiet garden-style apartments close to research park.",
        travelTimes: {
            walking: 18,
            biking: 6,
            driving: 5,
            bus: 12
        }
    },
    {
        id: 9,
        name: "Southgate Cottages",
        address: "750 George Bush Dr, College Station, TX 77840",
        lat: 30.6055,
        lng: -96.3420,
        price: 1100,
        type: "house",
        bedrooms: 2,
        bathrooms: 1,
        sqft: 1000,
        amenities: ["Private Yard", "Carport", "Storage"],
        petFriendly: true,
        description: "Charming cottages with character in South College Station.",
        travelTimes: {
            walking: 28,
            biking: 10,
            driving: 7,
            bus: 18
        }
    },
    {
        id: 10,
        name: "Maroon Plaza",
        address: "125 Southwest Pkwy, College Station, TX 77840",
        lat: 30.6280,
        lng: -96.3520,
        price: 1050,
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 950,
        amenities: ["Pool", "Gym", "Study Room", "Package Lockers"],
        petFriendly: false,
        description: "Modern apartments with convenient highway access.",
        travelTimes: {
            walking: 22,
            biking: 8,
            driving: 5,
            bus: 14
        }
    },
    {
        id: 11,
        name: "Reveille Ranch",
        address: "900 Texas Ave S, College Station, TX 77840",
        lat: 30.6088,
        lng: -96.3180,
        price: 2500,
        type: "house",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2200,
        amenities: ["Pool", "Large Yard", "2-Car Garage", "Outdoor Kitchen"],
        petFriendly: true,
        description: "Spacious family home with premium finishes.",
        travelTimes: {
            walking: 30,
            biking: 10,
            driving: 6,
            bus: 18
        }
    },
    {
        id: 12,
        name: "12th Man Studios",
        address: "280 Joe Routt Blvd, College Station, TX 77840",
        lat: 30.6155,
        lng: -96.3340,
        price: 550,
        type: "studio",
        bedrooms: 0,
        bathrooms: 1,
        sqft: 350,
        amenities: ["Furnished", "Utilities Included", "On-Site Laundry"],
        petFriendly: false,
        description: "Budget-friendly studios for focused students.",
        travelTimes: {
            walking: 8,
            biking: 3,
            driving: 2,
            bus: 6
        }
    },
    {
        id: 13,
        name: "The Reserve at College Station",
        address: "1400 Harvey Mitchell Pkwy, College Station, TX 77840",
        lat: 30.5980,
        lng: -96.3650,
        price: 1350,
        type: "townhouse",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1300,
        amenities: ["Pool", "Clubhouse", "Playground", "Dog Park"],
        petFriendly: true,
        description: "Family-friendly townhome community with excellent amenities.",
        travelTimes: {
            walking: 50,
            biking: 18,
            driving: 12,
            bus: 28
        }
    },
    {
        id: 14,
        name: "Eastgate Commons",
        address: "600 University Dr E, College Station, TX 77840",
        lat: 30.6195,
        lng: -96.3220,
        price: 700,
        type: "apartment",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 600,
        amenities: ["Laundry Room", "Covered Parking", "Close to Shops"],
        petFriendly: true,
        description: "Convenient location with easy access to shopping.",
        travelTimes: {
            walking: 18,
            biking: 6,
            driving: 4,
            bus: 10
        }
    },
    {
        id: 15,
        name: "Aggieland Townhomes",
        address: "350 Luther St W, College Station, TX 77840",
        lat: 30.6210,
        lng: -96.3450,
        price: 1650,
        type: "townhouse",
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 1500,
        amenities: ["Garage", "Private Balcony", "Washer/Dryer", "Updated Kitchen"],
        petFriendly: true,
        description: "Modern townhomes with premium finishes near Northgate.",
        travelTimes: {
            walking: 10,
            biking: 4,
            driving: 3,
            bus: 8
        }
    },
    {
        id: 16,
        name: "Wolf Pen Creek Villas",
        address: "1000 Colgate Dr, College Station, TX 77840",
        lat: 30.5920,
        lng: -96.3280,
        price: 1900,
        type: "house",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1600,
        amenities: ["Near Trails", "Large Patio", "Covered Carport"],
        petFriendly: true,
        description: "Beautiful home near Wolf Pen Creek trails.",
        travelTimes: {
            walking: 45,
            biking: 15,
            driving: 10,
            bus: 25
        }
    },
    {
        id: 17,
        name: "Kyle Field View",
        address: "150 Houston St, College Station, TX 77840",
        lat: 30.6165,
        lng: -96.3400,
        price: 1400,
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1000,
        amenities: ["Stadium Views", "Rooftop Access", "Concierge"],
        petFriendly: false,
        description: "Premium apartments with views of Kyle Field.",
        travelTimes: {
            walking: 5,
            biking: 2,
            driving: 2,
            bus: 5
        }
    },
    {
        id: 18,
        name: "Brazos Valley Apartments",
        address: "2000 Earl Rudder Fwy, College Station, TX 77840",
        lat: 30.5850,
        lng: -96.3100,
        price: 650,
        type: "apartment",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 580,
        amenities: ["Pool", "Laundry Facility", "Playground"],
        petFriendly: true,
        description: "Affordable living with easy highway access.",
        travelTimes: {
            walking: 55,
            biking: 20,
            driving: 12,
            bus: 30
        }
    },
    {
        id: 19,
        name: "Campus Heights Studios",
        address: "220 Nagle St, College Station, TX 77840",
        lat: 30.6240,
        lng: -96.3380,
        price: 625,
        type: "studio",
        bedrooms: 0,
        bathrooms: 1,
        sqft: 420,
        amenities: ["Fully Furnished", "All Bills Paid", "Study Area"],
        petFriendly: false,
        description: "Cozy studios perfect for graduate students.",
        travelTimes: {
            walking: 7,
            biking: 3,
            driving: 2,
            bus: 5
        }
    },
    {
        id: 20,
        name: "Southwood Valley House",
        address: "1500 Rock Prairie Rd, College Station, TX 77845",
        lat: 30.5770,
        lng: -96.3350,
        price: 1750,
        type: "house",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1700,
        amenities: ["Fenced Yard", "2-Car Garage", "Quiet Neighborhood"],
        petFriendly: true,
        description: "Quiet family home in established Southwood Valley.",
        travelTimes: {
            walking: 60,
            biking: 22,
            driving: 15,
            bus: 35
        }
    }
];
