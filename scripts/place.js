// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions for wind chill calculation are met
    // Temperature must be <= 10°C and wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        // Formula for metric wind chill
        // Source: https://en.wikipedia.org/wiki/Wind_chill
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

// Get the current year and set it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date and set it in the footer
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
});
const formattedTime = lastModified.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
});
document.getElementById("lastmodified").textContent = `${formattedDate} ${formattedTime}`;

// Define static weather data
const temperature = 25; // in °C
const windSpeed = 2; // in km/h

// Calculate and display the windchill value
const windChillValue = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill-value").textContent = `${windChillValue}${windChillValue !== "N/A" ? ' °C' : ''}`;