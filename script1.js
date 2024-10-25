document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let gamesList = document.getElementById('gamesList');
    let gameCards = gamesList.getElementsByClassName('game-card');

    for (let i = 0; i < gameCards.length; i++) {
        let gameTitle = gameCards[i].getElementsByTagName('h3')[0];
        if (gameTitle.innerHTML.toUpperCase().indexOf(filter) > -1) {
            gameCards[i].style.display = "";
        } else {
            gameCards[i].style.display = "none";
        }
    }
});

// Hover to play/pause video without controls
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});
