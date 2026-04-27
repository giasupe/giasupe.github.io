const myimage = document.querySelector("img");

myimage.onclick = () => {
    const mySrc =myimage.getAttribute("src");
    if (mySrc === "/images/profile_icon.jpg") {
        myimage.setAttribute("src", "/images/favicon.ico");
    } else {
        myimage.setAttribute("src", "/images/profile_icon.jpg");
    }
}

// コピーボタンの処理
document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', async () => {
    const text = button.getAttribute('data-clipboard-text');
    try {
      await navigator.clipboard.writeText(text);
      // コピー成功時のフィードバック
      const originalText = button.textContent;
      button.textContent = 'コピーしました！';
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  });
});