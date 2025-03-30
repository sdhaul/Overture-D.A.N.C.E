<template>
  <div class="bg-black text-white py-12">
    <h2 class="text-center text-4xl font-bold mb-8">The Journal</h2>
    <p class="text-center text-lg mb-12">
      Insights and updates about dance analysis and performance tracking.
    </p>

    <!-- Grid of Posts -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
      <!-- Post One -->
      <div
        class="rounded-lg overflow-hidden shadow-lg p-6"
        style="background: linear-gradient(135deg,rgb(172, 182, 179),rgb(44, 46, 46));"
      >
        <h3 class="text-xl font-bold mb-2">An Unforgettable Journey</h3>
        <p class="text-gray-200">Discover how AI is revolutionizing dance analysis.</p>
        <span class="block mt-4 text-blue-400 cursor-pointer hover:underline">Read More</span>
      </div>

      <!-- Post Two -->
      <div
        class="rounded-lg overflow-hidden shadow-lg p-6"
        style="background: linear-gradient(135deg,rgb(179, 186, 185),rgb(57, 57, 57));"
      >
        <h3 class="text-xl font-bold mb-2">Symphonies in Steel</h3>
        <p class="text-gray-200">
          How iconic dancers inspire modern AI algorithms.
        </p>
        <span class="block mt-4 text-blue-400 cursor-pointer hover:underline">Read More</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JournalSection',
};
</script>

<style scoped></style>
