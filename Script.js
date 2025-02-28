

document.getElementById("yes_btn").addEventListener("click", function() {
    alert("Thank you my dear pagal ❤️ Love you love you love you so much 😘😘😘😘 ଆଜି ଠାରୁ ମୁଁ ଆଉ କେବେ ବି ଏମିତି କରିବିନି");
});

let button = document.getElementById("randomMoveButton");

button.addEventListener("click", function() {
    let x = Math.random() * (window.innerWidth - this.clientWidth);
    let y = Math.random() * (window.innerHeight - this.clientHeight);

    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
