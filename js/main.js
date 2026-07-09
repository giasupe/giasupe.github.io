const textElement = document.getElementById('copy-email');

function resetText() {
    document.getElementById('copy-email').textContent = 'Email';
}

function copyEmail() {
    const email = 'giasupe.com@gmail.com';
    navigator.clipboard.writeText(email);
    document.getElementById('copy-email').textContent = 'Copied!';
}
textElement.addEventListener('click', copyEmail);

function scaleImage() {
    const image = document.getElementById('scale-image');
    
}
document.getElementById('scale-image').addEventListener('click', scaleImage);