// Orijinal başlığı kaydet
let docTitle = document.title;

// Kullanıcı sekmeden ayrıldığında
window.addEventListener("blur", () => {
    document.title = "Beni Unutma! 👨‍💻"; 
});

// Kullanıcı sekmeye geri döndüğünde
window.addEventListener("focus", () => {
    document.title = docTitle;
});