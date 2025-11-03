// ===== STORAGE SYSTEM =====
document.body.style.display = "block"; // Show page now

const dataInput = document.getElementById("dataInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");
const storedData = document.getElementById("storedData");

// Update displayed storage
function updateDisplay() {
  const data = localStorage.getItem("myStorage");
  storedData.textContent = data ? data : "(empty)";
}

// Save data
sendBtn.addEventListener("click", () => {
  const value = dataInput.value.trim();
  if (value) {
    localStorage.setItem("myStorage", value);
    status.textContent = "Data saved!";
    dataInput.value = "";
    updateDisplay();
  } else {
    status.textContent = "Enter something first!";
  }
});

// Clear storage
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("myStorage");
  status.textContent = "Storage cleared!";
  updateDisplay();
});

// Initialize display on page load
updateDisplay();
