const sliderImage = document.querySelectorAll(".slide-in");

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlider(e) {
  sliderImage.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;

    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;
    console.table(window.scrollY);
    if (isHalfShown && isNotScrollPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlider));
