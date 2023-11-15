'use strict'

document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.getElementById("toggleButton");
    let message = document.getElementById("message");
  
    function toggleButtonState() {
      if (toggleButton.textContent === "Turn off") {
        toggleButton.textContent = "Turn on";
        document.body.style.backgroundColor = "#242424";
        let now = new Date();
        let formattedTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        message.textContent = `Last turn off: ${formattedTime}`;
        localStorage.setItem("buttonState", "off");
        localStorage.setItem("lastTurnOffTime", formattedTime);
      } else {
        toggleButton.textContent = "Turn off";
        document.body.style.backgroundColor = "#faef9b";
        let now = new Date();
        let formattedTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        message.textContent = `Last turn on: ${formattedTime}`;
        localStorage.setItem("buttonState", "on");
        localStorage.setItem("lastTurnOnTime", formattedTime);
      }
    }
  
    toggleButton.addEventListener("click", toggleButtonState);
  
    let buttonState = localStorage.getItem("buttonState");
    if (buttonState === "off") {
      toggleButtonState();
    }
  
    let lastTurnTime = localStorage.getItem(
      buttonState === "off" ? "lastTurnOffTime" : "lastTurnOnTime"
    );
    if (lastTurnTime) {
      message.textContent = `Last turn ${buttonState}: ${lastTurnTime}`;
    }
  });
  