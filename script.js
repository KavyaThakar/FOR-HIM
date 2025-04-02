function startLoveStory() {
    document.getElementById('loveSong').play();
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';
    generateHearts();
}
function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(`page${pageNumber}`).style.display = 'flex';
}
function generateHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerText = "❤";
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}
