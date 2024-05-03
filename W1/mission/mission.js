function changeTheme() {
    const themeSelector = document.getElementById("theme-selector");

    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        document.querySelector(".logo").src = "white-logo.webp";
    } else {
        document.body.classList.remove("dark");
        document.querySelector(".logo").src = "blue-logo.webp";
    }
}

const themeSelector = document.getElementById("theme-selector");

themeSelector.addEventListener("change", changeTheme);
