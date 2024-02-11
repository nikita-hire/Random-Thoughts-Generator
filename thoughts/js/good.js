const thghts = [
    "Things will always work out.🙃",
    "Dream .... Then make sure to take actions towards your dreams 😚",
    "You do matter 🙂",
    "A bit of crazy is good 😉",
    "Turn your pain into power 😘"
    // Add more emojis 
  ];
const generateBtn = document.getElementById("thghtGenerateBtn");
const thght = document.querySelector(".thght");

// generate random number 
generateRandomNumber = () => {
    return Math.floor(Math.random()*thghts.length);
}
// generate random color 
generateBtn.addEventListener("click" , () => {
    thght.textContent = thghts[generateRandomNumber()];
})