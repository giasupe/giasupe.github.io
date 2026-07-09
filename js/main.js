const textElement = document.getElementById('copy-email');

function resetText() {
    document.getElementById('copy-email').textContent = 'Email';
}

function copyEmail() {
    const email = 'giasupe.com@gmail.com';
    navigator.clipboard.writeText(email);
    document.getElementById('copy-email').textContent = 'Copied!';
    setTimeout(resetText, 1500);
}
textElement.addEventListener('click', copyEmail);