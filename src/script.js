document.addEventListener('DOMContentLoaded', function() {
    const playerRatingInput = document.getElementById('playerRatingInputText');
    const playerRatingNumber = document.getElementById('playerRatingNumber');
    const playerRatingRange = document.getElementById('playerRatingRange');
    
    function updateRating() {
        playerRatingNumber.textContent = playerRatingInput.value;
        playerRatingRange.value = playerRatingInput.value;
    }

    playerRatingInput.addEventListener('input', updateRating);
    playerRatingRange.addEventListener('input', () => {
        playerRatingInput.value = playerRatingRange.value;
        updateRating();
    });
});
