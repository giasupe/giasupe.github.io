const myimage = document.querySelector("img");

myimage.onclick = () => {
    const mySrc =myimage.getAttribute("src");
    if (mySrc === "images/profile_icon.jpg") {
        myimage.setAttribute("src", "images/favicon.ico");
    } else {
        myimage.setAttribute("src", "images/profile_icon.jpg");
    }
}