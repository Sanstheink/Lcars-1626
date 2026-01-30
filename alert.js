function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  msg.rate = 0.9;
  speechSynthesis.speak(msg);
}

function setAlert(type, text) {
  document.body.className = type;
  document.getElementById("alertStatus").innerText = text;
  speak(text);
}

function alertRed() {
  setAlert("red", "Red Alert. All hands to battle stations.");
}

function alertYellow() {
  setAlert("yellow", "Yellow Alert. Defensive systems activated.");
}

function alertBlue() {
  setAlert("blue", "Blue Alert. Landing sequence initiated.");
}

function alertBlack() {
  setAlert("black", "Black Alert. Spore drive engaged.");
}

function alertProximity() {
  setAlert("", "Proximity alert. Object detected nearby.");
}
