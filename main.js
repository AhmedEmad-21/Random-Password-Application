const copyBtn = document.getElementById("copyIcon");
const Box = document.querySelector(".inputBox");
const passBox = document.getElementById("passBox");


const sliderValue = document.getElementById("sliderValue");
const generateBtn = document.getElementById("btn");
const inputSlider = document.getElementById("inputSlider")

const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");


copyBtn.addEventListener("click",() => {

    navigator.clipboard.writeText(passBox.value);
    if(passBox.value !== "") {
        NewSpan =  document.createElement("span") ;
        NewSpan.textContent = "copied";
        NewSpan.classList.add("temp");
        
    setTimeout(() => {
    copyBtn.style.display = "none";
    Box.appendChild(NewSpan);
    },250)

    setTimeout(() => {
     NewSpan.remove()
     copyBtn.style.display = "block";
    },1000)
}
 });

inputSlider.addEventListener("input",() => {
 
    sliderValue.textContent = inputSlider.value;
})

let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nums = "0123456789";
let sym = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\";
function generatePassword(){

   
        let l = inputSlider.value;
        let characters = "";
        let password = "";

        characters+= lowerCase.checked ? lowerLetters : "";
        characters+= upperCase.checked ? upperLetters : "";
        characters+= numbers.checked ? nums : "";
        characters+= symbols.checked ? sym : "";

        for(let i = 0 ; i < l ; i++){
            password += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        passBox.value = password;
    

}
generateBtn.addEventListener("click",() => {
  generatePassword();

})
