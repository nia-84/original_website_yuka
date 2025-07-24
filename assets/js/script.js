
    const slides = document.querySelectorAll("#members img");
        let current = 0;

        function showSlide(index) {
        slides.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

  // 最初の画像を表示
    showSlide(current);

  // 3秒ごとに次へ
    setInterval(nextSlide, 3000);

//-------------------------------------------

    document.addEventListener("DOMContentLoaded", () => {
        const sliders = document.querySelectorAll(".member-slider");

        sliders.forEach(slider => {
            const wrapper = slider.querySelector(".slider-wrapper");
            const slides = slider.querySelectorAll(".slide");
            let currentIndex = 0;

    setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
                wrapper.style.transform = `translateX(-${100 * currentIndex}%)`;
            }, 3000); // 3秒ごとに切り替え
        });
    });

//-----------------------------------------------
