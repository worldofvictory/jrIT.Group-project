const refs = {
    homeLink: document.getElementById("link1"),
    favoriteLink: document.getElementById("link2")
}

const currentUrl = window.location.href;

if (currentUrl.includes("/favorites.html")) {
    refs.homeLink.classList.remove("h-link-active");
    refs.homeLink.classList.add("h-link-inactive");
    refs.favoriteLink.classList.remove("h-link-inactive");
    refs.favoriteLink.classList.add("h-link-active");
} else {
    refs.homeLink.classList.remove("h-link-inactive");
    refs.homeLink.classList.add("h-link-active");
    refs.favoriteLink.classList.remove("h-link-active");
    refs.favoriteLink.classList.add("h-link-inactive");
}