<template>
  <div class="text-white py-12 flex flex-col items-center">
    <h2 class="text-4xl font-bold mb-6">Ready to Analyze Your Dance?</h2>
    <p class="text-lg mb-8 text-gray-400">
      Upload your dance video below to get started with AI-powered analysis.
    </p>
    <button @click="$scrollTo('#video-prompt')" class="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black">
      Upload Video
    </button>
  </div>
</template>

<script>
export default {
  name: 'VideoPrompt'
}
</script>

<style scoped>
/* Add additional styling if needed */
</style>