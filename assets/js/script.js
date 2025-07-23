    document.getElementById("moreViewBtn").addEventListener("click", function () {
        const moreMovie = document.querySelector(".more-movie");
        const isHidden = moreMovie.style.display === "none" || moreMovie.style.display === "";
        
        moreMovie.style.display = isHidden ? "block" : "none";
        this.textContent = isHidden ? "Close" : "More View";
    });

    const slides = document.querySelectorAll("#slideshow img");
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