# Student Housing Finder - College Station, TX

## GEOG 392 Project - Texas A&M University

A GIS-based web application that helps students find affordable housing near Texas A&M University in College Station, Texas. The application combines rental information with travel time analysis to highlight apartments and houses that are both affordable and convenient for daily commutes.

![Student Housing Finder](https://img.shields.io/badge/GEOG%20392-Project-maroon)
![Status](https://img.shields.io/badge/Status-Active-green)

## Features

### 🗺️ Interactive Map
- Interactive map powered by Leaflet.js and OpenStreetMap
- Visual markers showing property locations with price indicators
- Color-coded markers by property type (apartment, house, studio, townhouse)
- Texas A&M University campus marker as the destination point

### 🔍 Advanced Filtering
- **Budget Filter**: Set minimum and maximum monthly rent
- **Housing Type**: Filter by apartment, house, studio, or townhouse
- **Transportation Mode**: Choose from walking, biking, driving, or bus/transit
- **Travel Time**: Filter properties within your desired commute time (5-60 minutes)
- **Bedrooms**: Filter by number of bedrooms

### 📊 Property Information
- Detailed property cards with:
  - Monthly rent price
  - Address
  - Number of bedrooms and bathrooms
  - Square footage
  - Pet-friendly status
  - Available amenities
  - Estimated travel times to Texas A&M campus

### 🚗 Travel Time Analysis
Each property includes estimated travel times via:
- 🚶 Walking
- 🚴 Biking
- 🚗 Driving
- 🚌 Bus/Transit

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Running the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kelby4657/GEOG-392-Student-Housing-Finder-Project.git
   cd GEOG-392-Student-Housing-Finder-Project
   ```

2. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (requires http-server package)
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

## Project Structure

```
GEOG-392-Student-Housing-Finder-Project/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Application styles
├── js/
│   └── app.js          # Main application JavaScript
├── data/
│   └── housing-data.js # Sample housing data
└── README.md           # Project documentation
```

## Technology Stack

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Application logic
- **Leaflet.js** - Interactive mapping library
- **OpenStreetMap** - Map tiles and base layer

## Sample Data

The application includes 20 sample housing listings in the College Station area with:
- Realistic addresses and locations
- Various price points ($550 - $2,500/month)
- Different property types
- Estimated travel times to campus

## Future Enhancements

- [ ] Integration with real rental listing APIs (Zillow, Apartments.com)
- [ ] Real-time travel time calculations using routing APIs
- [ ] User authentication and saved searches
- [ ] Property comparison feature
- [ ] Mobile app version
- [ ] Integration with Texas A&M bus routes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is created for educational purposes as part of GEOG 392 at Texas A&M University.

## Authors

GEOG 392 Student Team - Texas A&M University

## Acknowledgments

- Texas A&M University - GEOG 392 Course
- Leaflet.js - Open-source mapping library
- OpenStreetMap - Map data contributors
