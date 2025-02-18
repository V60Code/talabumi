// Dark Mode Toggle
const darkModeBtn = document.getElementById("dark-mode-toggle");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀ Mode Terang" : "🌙 Mode Gelap";
});

// Slider Menu Kopi
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".menu-slider");
    const items = document.querySelectorAll(".menu-item");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 0;
    const totalItems = items.length;
    const visibleItems = 2;
    const itemWidth = items[0].offsetWidth + 20;
    const maxIndex = totalItems - visibleItems;

    function updateSlider() {
        let offset = -(currentIndex * itemWidth);
        slider.style.transform = `translateX(${offset}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }
        updateSlider();
    });

    window.addEventListener("resize", function () {
        updateSlider();
    });

    updateSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("message-box");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            messageBox.textContent = "Harap isi semua kolom!";
            messageBox.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            messageBox.textContent = "Format email tidak valid!";
            messageBox.style.color = "red";
            return;
        }

        messageBox.textContent = "Pesan berhasil terkirim!";
        messageBox.style.color = "green";

        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
