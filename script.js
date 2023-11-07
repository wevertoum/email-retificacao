const receiveEmailButton = document.getElementById("receiveEmailButton");
const emailContent = document.getElementById("emailContent");
const emailAudio = document.getElementById("emailAudio");

receiveEmailButton.addEventListener("click", () => {
  receiveEmailButton.style.display = "none";
  emailContent.style.display = "block";
  emailAudio.play();
});
