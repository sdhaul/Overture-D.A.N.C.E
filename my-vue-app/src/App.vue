<template>
  <div class="bg-[linear-gradient(to_bottom,#000000,#333333)] min-h-screen">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Video Prompt Section -->
    <VideoPrompt />

    <!-- Example target element for scrolling -->
    <div id="video-prompt" class="py-20 text-white text-center">
      <h2 class="text-3xl font-bold">Video Upload Section</h2>
      <p class="mt-4">This is where users can upload their dance video.</p>
    </div>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import VideoPrompt from './components/VideoPrompt.vue'

export default {
  components: {
    HeroSection,
    VideoPrompt
  }
}
</script>

<style>
/* Global styles if needed */
</style>