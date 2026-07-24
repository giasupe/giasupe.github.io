const emailButton = document.getElementById('copy-email');
const emailLabel = emailButton.querySelector('.link-label');

function resetEmailText() {
    emailLabel.textContent = 'Email';
}

emailButton.addEventListener('click', () => {
    navigator.clipboard.writeText('giasupe.com@gmail.com');
    emailLabel.textContent = 'Copied!';
    setTimeout(resetEmailText, 1500);
});

resetEmailText();
