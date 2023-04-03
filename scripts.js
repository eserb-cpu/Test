// Replace with your ThingSpeak channel ID and read API key
const CHANNEL_ID = '2092743';
const READ_API_KEY = '2ZKCYCOZ0BH68HI4';

async function getFillLevel() {
  const url = `https://api.thingspeak.com/channels/${2092743}/fields/1/last?api_key=${2ZKCYCOZ0BH68HI4}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    const fillLevel = await response.text();
    return parseInt(fillLevel, 10);
  } catch (error) {
    console.error('Error fetching fill level:', error);
    return null;
  }
}

async function updateFillLevelDisplay() {
  const fillLevel = getFillLevel();
  const fillLevelRect = document.getElementById("fillLevelRect");
  const fillLevelPercentage = document.getElementById("fillLevelPercentage");

  const maxHeight = 32;
  const currentHeight = (maxHeight * fillLevel) / 100;
  const y = 16 + maxHeight - currentHeight;
  
  fillLevelRect.setAttribute("y", y);
  fillLevelRect.setAttribute("height", currentHeight);
  
  if (fillLevel > 80) {
    fillLevelRect.setAttribute("fill", "#f44336"); // Red
  } else {
    fillLevelRect.setAttribute("fill", "#4caf50"); // Green
  }

  fillLevelPercentage.textContent = `${fillLevel}%`;
}

// Update the fill level display every 5 seconds
setInterval(updateFillLevelDisplay, 5000);


