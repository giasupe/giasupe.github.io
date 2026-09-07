const emailButton = document.getElementById('copy-email');

if (emailButton) {
    const emailLabel = emailButton.querySelector('.link-label');

    if (emailLabel) {
        function resetEmailText() {
            emailLabel.textContent = 'Email';
        }

        emailButton.addEventListener('click', async () => {
            try {
                if (!navigator.clipboard) {
                    throw new Error('Clipboard API is unavailable.');
                }

                await navigator.clipboard.writeText('giasupe.com@gmail.com');
                emailLabel.textContent = 'Copied!';
            } catch (error) {
                emailLabel.textContent = 'Failed!';
            }

            setTimeout(resetEmailText, 1500);
        });

        resetEmailText();
    }
}