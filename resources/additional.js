/* Implement data-poster attribute for video background 
Only needed for printing, to avoid a black slide  */
Reveal.on('ready', () => {
    document.querySelectorAll('section[data-poster]').forEach((section) => {
        const indices = Reveal.getIndices(section);
        const background = Reveal.getSlideBackground(indices.h, indices.v);
        const video = background ? background.querySelector('video') : null;

        if (video) {
            video.setAttribute('poster', section.getAttribute('data-poster'));
        }
    });
});

makeSpacebarControlVideosNotSlides();

function makeSpacebarControlVideosNotSlides() {
    window.addEventListener('keydown', (event) => {
        // Only target the Spacebar for easier video control during presentation
        if (event.code !== 'Space') return;

        const currentSlide = Reveal.getCurrentSlide();
        if (!currentSlide) return;

        // Check for inline video or background video on this slide
        const inlineVideo = currentSlide.querySelector('video');
        const bg = Reveal.getSlideBackground(currentSlide);
        const bgVideo = bg ? bg.querySelector('video') : null;
        const activeVideo = inlineVideo || bgVideo;

        // If there's no video on this slide, let Reveal.js handle Space normally
        if (!activeVideo) return;

        // Prevent Reveal.js from advancing the slide and toggle play/pause
        event.preventDefault();
        event.stopImmediatePropagation();

        if (activeVideo.paused) {
            activeVideo.play();
        } else {
            activeVideo.pause();
        }
    }, true); // <-- 'true' enables the capture phase, running BEFORE Reveal.js handles it
}