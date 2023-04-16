document.addEventListener("DOMContentLoaded", function() {
  const images = [
    "media/orkhan.jpg",
    "media/vusat.jpg",
    "media/aykhan.jpg",
    "media/sardar.jpg",
  ];
  let currentImageIndex = 0;
  const sliderImage = document.getElementById("slider-image");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  function updateImage() {
    sliderImage.src = images[currentImageIndex];
  }

  prevButton.addEventListener("click", function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    updateImage();
  });

  nextButton.addEventListener("click", function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    updateImage();
  });
});
