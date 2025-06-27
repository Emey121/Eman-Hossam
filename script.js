// تشغيل الأغنية عند الضغط
function playLove() {
  const audio = document.getElementById("loveAudio");
  if (audio) {
    audio.play();
  }
}

// تحديد كل العناصر اللي فيها class="fade-in"
const fadeElements = document.querySelectorAll('.fade-in');

// إعداد المراقب (IntersectionObserver)
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // إضافة class لبدء التأثير
      observer.unobserve(entry.target);   // إيقاف المراقبة بعد أول مرة
    }
  });
}, {
  threshold: 0.2 // تبدأ التأثير لما 20% من العنصر يظهر
});

// ربط كل العناصر بالمراقب
fadeElements.forEach(el => {
  fadeObserver.observe(el);
});

// ------------------------------------
// ✅ كود السلايدر التلقائي
let slider = document.getElementById("slider");
let currentIndex = 0;

function autoSlide() {
  const totalImages = slider.children.length;
  currentIndex = (currentIndex + 1) % totalImages;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoSlide, 3000); // يغير الصورة كل 3 ثواني

// ------------------------------------
// ✅ كود رفع الصور من الجهاز
const imageInput = document.getElementById("imageUpload");

imageInput.addEventListener("change", (event) => {
  const files = event.target.files;

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      slider.appendChild(img); // أضف الصورة للسلايدر
    };
    reader.readAsDataURL(file);
  }
});
