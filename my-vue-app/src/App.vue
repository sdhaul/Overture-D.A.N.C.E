<template>
<div class="bg-[linear-gradient(to_bottom,#000000,#333333)] min-h-screen relative">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Scroll Down Prompt -->
    <ScrollDown />

    <br>
    <br>
    <br>
    <br>
    <!-- Video Prompt Section -->
    <VideoPrompt />

    <!-- Example target element for scrolling -->
    <div id="video-prompt" class="py-20 text-white text-center fade-in-text">
        <h2 class="text-3xl font-bold">Video Upload Section</h2>
        <p class="mt-4">This is where users can upload their dance video.</p>
    </div>
</div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import VideoPrompt from './components/VideoPrompt.vue';
import ScrollDown from './components/ScrollDown.vue';
import { gsap } from 'gsap';

export default {
components: {
HeroSection,
ScrollDown,
VideoPrompt,
},
mounted() {
// Fade-in animation for the text after scrolling
gsap.from(".fade-in-text", {
scrollTrigger: {
trigger: ".fade-in-text",
start: "top bottom", // Starts when the text enters the viewport
},
duration: 1,
opacity: 0, // Start with opacity at zero
y: -20, // Move slightly upward
ease: "power2.out",
});
},
};
</script>

<style>
/* Global styles if needed */
.fade-in-text {
opacity: 0; /* Ensure it starts invisible */
transition: opacity ease-in-out, transform ease-in-out;
}
</style>
