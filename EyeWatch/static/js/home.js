
function changeVideo(videoUrl) {
  var mainVideo = document.getElementById("video"); // Змініть на відповідний ідентифікатор основного відео
  mainVideo.src = videoUrl;
}

function addCamera() {
  // Отримання значення URL з інпуту
  var cameraUrl = document.getElementById("cameraUrlInput").value;

  // Зміна відеопотоку в основному контейнері
  var mainVideo = document.getElementById("video"); // Змініть на відповідний ідентифікатор основного відео
  mainVideo.src = cameraUrl;

  // Очистка інпуту
  document.getElementById("cameraUrlInput").value = "";
}

var brightnessValue = 50; // Початкове значення яскравості (значення від 0 до 100)

      // Функція для оновлення зображення з врахуванням яскравості
      function updateBrightness() {
        var video = document.getElementById("video");
        var brightnessRange = document.getElementById("brightness-range");
        brightnessValue = brightnessRange.value;
        // Застосовуємо стиль фільтра для яскравості
        video.style.filter = "brightness(" + brightnessValue + "%)";
      }

      function updateContrast() {
        var video = document.getElementById("video"); // Змініть на відповідний ідентифікатор вашого відео
        var contrastRange = document.getElementById("contrast-range");
        var contrastValue = contrastRange.value;
      
        // Застосовуємо стиль фільтра для контрастності
        video.style.filter = "contrast(" + contrastValue + "%)";
      }
