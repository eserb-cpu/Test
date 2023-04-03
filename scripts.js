function updateFillLevelDisplay() {
  const fillLevel = 42;
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


