var GenerateButton = document.querySelector(".GenerateColorBtn");
const Body = document.body
const Hexid = document.querySelector(".HexID");

GenerateButton.addEventListener("click", function(){
    const letters = '1234567890ABCDEF';
    let Color = '#';
    for (let i = 0; i < 6; i++) {
        Color += letters[Math.floor(Math.random() * 16)];
    }
    Body.style.backgroundColor = Color;
    Hexid.innerHTML = Color;
});