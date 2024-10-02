function popup(popupId) {
    const popup = document.getElementById(popupId);
    
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
