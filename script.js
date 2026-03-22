// 1. Swiper.js Initialization
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

// 2. Vanta.js Space Animation
VANTA.CLOUDS2({
    el: "#space-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0x05010c,
    cloudColor: 0x1d0e3a,
    cloudShadowColor: 0x0,
    sunColor: 0x5a189a,
    sunGlareColor: 0x3c096c,
    sunLightColor: 0x240046,
    speed: 1.5
});
