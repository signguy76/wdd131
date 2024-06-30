document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Update last modified date
    document.getElementById('last-modified').textContent = document.lastModified;

    // Calculate and display wind chill
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill;
});

function calculateWindChill(temperature, windSpeed) {
    // Convert temperature to Fahrenheit for the calculation
    const tempF = (temperature * 9 / 5) + 32;
    const windSpeedMph = windSpeed / 1.609344;

    if (tempF <= 50 && windSpeedMph > 3) {
        // Wind Chill formula (Fahrenheit)
        const windChillF = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeedMph, 0.16)) + (0.4275 * tempF * Math.pow(windSpeedMph, 0.16));

        // Convert back to Celsius
        const windChillC = (windChillF - 32) * 5 / 9;

        return windChillC.toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}