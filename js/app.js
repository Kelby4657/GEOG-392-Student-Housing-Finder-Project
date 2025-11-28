/**
 * Student Housing Finder Application
 * College Station, TX - Texas A&M University
 * GEOG 392 Project
 */

// Initialize the map
let map;
let markers = [];
let tamuMarker;
let currentFilters = {
    budgetMin: null,
    budgetMax: null,
    types: ['apartment', 'house', 'studio', 'townhouse'],
    transportMode: 'all',
    maxTravelTime: 30,
    bedrooms: 'any'
};

// Marker colors for different property types
const markerColors = {
    apartment: '#3498db',
    house: '#27ae60',
    studio: '#9b59b6',
    townhouse: '#e67e22'
};

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    initFilters();
    loadHousingData();
});

/**
 * Initialize the Leaflet map centered on Texas A&M University
 */
function initMap() {
    // Create map centered on Texas A&M
    map = L.map('map').setView([TAMU_LOCATION.lat, TAMU_LOCATION.lng], 14);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add Texas A&M marker
    const tamuIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #500000; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">TAMU</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });
    
    tamuMarker = L.marker([TAMU_LOCATION.lat, TAMU_LOCATION.lng], { icon: tamuIcon })
        .addTo(map)
        .bindPopup(`
            <div class="popup-content">
                <h3>🎓 ${TAMU_LOCATION.name}</h3>
                <p>Main Campus - Destination Point</p>
                <p style="font-size: 0.85rem; color: #666;">All travel times are calculated to this location.</p>
            </div>
        `);
}

/**
 * Initialize filter controls and event listeners
 */
function initFilters() {
    // Budget inputs
    const budgetMin = document.getElementById('budget-min');
    const budgetMax = document.getElementById('budget-max');
    
    // Housing type checkboxes
    const typeCheckboxes = [
        document.getElementById('type-apartment'),
        document.getElementById('type-house'),
        document.getElementById('type-studio'),
        document.getElementById('type-townhouse')
    ];
    
    // Transport mode select
    const transportMode = document.getElementById('transport-mode');
    
    // Travel time slider
    const maxTravelTime = document.getElementById('max-travel-time');
    const travelTimeValue = document.getElementById('travel-time-value');
    
    // Bedrooms select
    const bedrooms = document.getElementById('bedrooms');
    
    // Update travel time display
    maxTravelTime.addEventListener('input', function() {
        travelTimeValue.textContent = `${this.value} min`;
    });
    
    // Apply filters button
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    
    // Reset filters button
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    
    // Close property panel
    document.getElementById('close-panel').addEventListener('click', closePropertyPanel);
    
    // Event delegation for popup buttons (handles dynamically created buttons)
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('btn-details')) {
            const propertyId = parseInt(e.target.getAttribute('data-property-id'), 10);
            if (!isNaN(propertyId)) {
                showPropertyDetails(propertyId);
            }
        }
    });
}

/**
 * Load housing data and display on map
 */
function loadHousingData() {
    clearMarkers();
    
    const filteredData = filterHousingData(housingData);
    
    filteredData.forEach(property => {
        addPropertyMarker(property);
    });
    
    updateResultsCount(filteredData.length);
}

/**
 * Filter housing data based on current filter settings
 */
function filterHousingData(data) {
    return data.filter(property => {
        // Budget filter
        if (currentFilters.budgetMin !== null && property.price < currentFilters.budgetMin) {
            return false;
        }
        if (currentFilters.budgetMax !== null && property.price > currentFilters.budgetMax) {
            return false;
        }
        
        // Housing type filter
        if (!currentFilters.types.includes(property.type)) {
            return false;
        }
        
        // Transport mode and travel time filter
        if (currentFilters.transportMode !== 'all') {
            const travelTime = property.travelTimes[currentFilters.transportMode];
            if (travelTime > currentFilters.maxTravelTime) {
                return false;
            }
        } else {
            // For 'all' mode, check if ANY transport mode is within the time limit
            const minTravelTime = Math.min(
                property.travelTimes.walking,
                property.travelTimes.biking,
                property.travelTimes.driving,
                property.travelTimes.bus
            );
            if (minTravelTime > currentFilters.maxTravelTime) {
                return false;
            }
        }
        
        // Bedrooms filter
        if (currentFilters.bedrooms !== 'any') {
            const bedroomFilter = parseInt(currentFilters.bedrooms);
            if (bedroomFilter === 4) {
                if (property.bedrooms < 4) return false;
            } else {
                if (property.bedrooms !== bedroomFilter) return false;
            }
        }
        
        return true;
    });
}

/**
 * Add a property marker to the map
 */
function addPropertyMarker(property) {
    const color = markerColors[property.type];
    const priceLabel = Math.round(property.price / 100);
    
    const icon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="property-marker" style="background-color: ${color};">$${priceLabel}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    const marker = L.marker([property.lat, property.lng], { icon: icon })
        .addTo(map)
        .bindPopup(createPopupContent(property));
    
    marker.propertyId = property.id;
    markers.push(marker);
}

/**
 * Create popup HTML content for a property
 */
function createPopupContent(property) {
    const typeEmoji = {
        apartment: '🏢',
        house: '🏠',
        studio: '🏨',
        townhouse: '🏘️'
    };
    
    const selectedMode = currentFilters.transportMode;
    let travelInfo = '';
    
    if (selectedMode === 'all') {
        travelInfo = `
            <div class="popup-travel">
                <strong>Travel to TAMU:</strong><br>
                🚶 ${property.travelTimes.walking} min | 
                🚴 ${property.travelTimes.biking} min | 
                🚗 ${property.travelTimes.driving} min | 
                🚌 ${property.travelTimes.bus} min
            </div>
        `;
    } else {
        const modeEmoji = { walking: '🚶', biking: '🚴', driving: '🚗', bus: '🚌' };
        travelInfo = `
            <div class="popup-travel">
                <strong>Travel to TAMU:</strong> ${modeEmoji[selectedMode]} ${property.travelTimes[selectedMode]} min
            </div>
        `;
    }
    
    return `
        <div class="popup-content">
            <h3>${typeEmoji[property.type]} ${property.name}</h3>
            <div class="popup-price">$${property.price}/month</div>
            <div class="popup-details">
                ${property.bedrooms === 0 ? 'Studio' : property.bedrooms + ' bed'} | 
                ${property.bathrooms} bath | 
                ${property.sqft} sq ft
            </div>
            ${travelInfo}
            <button class="btn-details" data-property-id="${property.id}">View Details</button>
        </div>
    `;
}

/**
 * Show detailed property information in side panel
 */
function showPropertyDetails(propertyId) {
    const property = housingData.find(p => p.id === propertyId);
    if (!property) return;
    
    const typeEmoji = {
        apartment: '🏢',
        house: '🏠',
        studio: '🏨',
        townhouse: '🏘️'
    };
    
    const panelContent = document.getElementById('panel-content');
    panelContent.innerHTML = `
        <h2>${typeEmoji[property.type]} ${property.name}</h2>
        <div class="property-image">${typeEmoji[property.type]}</div>
        <div class="property-price">$${property.price}/month</div>
        <div class="property-info">
            <p><strong>📍 Address:</strong> ${property.address}</p>
            <p><strong>🛏️ Bedrooms:</strong> ${property.bedrooms === 0 ? 'Studio' : property.bedrooms}</p>
            <p><strong>🚿 Bathrooms:</strong> ${property.bathrooms}</p>
            <p><strong>📐 Size:</strong> ${property.sqft} sq ft</p>
            <p><strong>🏷️ Type:</strong> ${capitalizeFirst(property.type)}</p>
            <p><strong>🐾 Pet Friendly:</strong> ${property.petFriendly ? 'Yes ✅' : 'No ❌'}</p>
        </div>
        <div class="travel-times">
            <h3>🚗 Travel Times to Texas A&M</h3>
            <div class="travel-time-item">
                <span>🚶 Walking</span>
                <span><strong>${property.travelTimes.walking} min</strong></span>
            </div>
            <div class="travel-time-item">
                <span>🚴 Biking</span>
                <span><strong>${property.travelTimes.biking} min</strong></span>
            </div>
            <div class="travel-time-item">
                <span>🚗 Driving</span>
                <span><strong>${property.travelTimes.driving} min</strong></span>
            </div>
            <div class="travel-time-item">
                <span>🚌 Bus/Transit</span>
                <span><strong>${property.travelTimes.bus} min</strong></span>
            </div>
        </div>
        <div class="property-info" style="margin-top: 1rem;">
            <p><strong>📝 Description:</strong></p>
            <p style="color: #666;">${property.description}</p>
        </div>
        <div class="property-info">
            <p><strong>✨ Amenities:</strong></p>
            <p style="color: #666;">${property.amenities.join(', ')}</p>
        </div>
    `;
    
    // Show the panel
    document.getElementById('property-details').classList.remove('hidden');
    
    // Close popup
    map.closePopup();
    
    // Center map on property
    map.setView([property.lat, property.lng], 16);
}

/**
 * Close the property details panel
 */
function closePropertyPanel() {
    document.getElementById('property-details').classList.add('hidden');
}

/**
 * Apply current filter settings
 */
function applyFilters() {
    // Get budget values
    const budgetMin = document.getElementById('budget-min').value;
    const budgetMax = document.getElementById('budget-max').value;
    currentFilters.budgetMin = budgetMin ? parseInt(budgetMin) : null;
    currentFilters.budgetMax = budgetMax ? parseInt(budgetMax) : null;
    
    // Get housing types
    currentFilters.types = [];
    if (document.getElementById('type-apartment').checked) currentFilters.types.push('apartment');
    if (document.getElementById('type-house').checked) currentFilters.types.push('house');
    if (document.getElementById('type-studio').checked) currentFilters.types.push('studio');
    if (document.getElementById('type-townhouse').checked) currentFilters.types.push('townhouse');
    
    // Get transport mode
    currentFilters.transportMode = document.getElementById('transport-mode').value;
    
    // Get max travel time
    currentFilters.maxTravelTime = parseInt(document.getElementById('max-travel-time').value);
    
    // Get bedrooms
    currentFilters.bedrooms = document.getElementById('bedrooms').value;
    
    // Reload data with new filters
    loadHousingData();
    
    // Close property panel if open
    closePropertyPanel();
}

/**
 * Reset all filters to default values
 */
function resetFilters() {
    // Reset form inputs
    document.getElementById('budget-min').value = '';
    document.getElementById('budget-max').value = '';
    document.getElementById('type-apartment').checked = true;
    document.getElementById('type-house').checked = true;
    document.getElementById('type-studio').checked = true;
    document.getElementById('type-townhouse').checked = true;
    document.getElementById('transport-mode').value = 'all';
    document.getElementById('max-travel-time').value = 30;
    document.getElementById('travel-time-value').textContent = '30 min';
    document.getElementById('bedrooms').value = 'any';
    
    // Reset filter state
    currentFilters = {
        budgetMin: null,
        budgetMax: null,
        types: ['apartment', 'house', 'studio', 'townhouse'],
        transportMode: 'all',
        maxTravelTime: 30,
        bedrooms: 'any'
    };
    
    // Reload data
    loadHousingData();
    
    // Close property panel if open
    closePropertyPanel();
    
    // Reset map view
    map.setView([TAMU_LOCATION.lat, TAMU_LOCATION.lng], 14);
}

/**
 * Clear all property markers from the map
 */
function clearMarkers() {
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
}

/**
 * Update the results count display
 */
function updateResultsCount(count) {
    document.getElementById('results-count').textContent = count;
}

/**
 * Capitalize first letter of a string
 */
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Calculate distance between two coordinates (Haversine formula)
 * Not currently used but available for future enhancements
 */
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 3959; // Earth's radius in miles
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function toRad(deg) {
    return deg * (Math.PI / 180);
}
