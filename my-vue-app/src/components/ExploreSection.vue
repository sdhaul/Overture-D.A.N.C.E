<template>
  <div class="bg-black text-white py-12">
    <h2 class="text-center text-4xl font-bold mb-8">Explore the World</h2>
    <p class="text-center text-lg mb-12">
      Discover features, analysis tools, and insights into your dance performance.
    </p>

    <!-- Grid of Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      <!-- Card 1 -->
      <div
        class="rounded-lg overflow-hidden shadow-lg p-6"
        style="background: linear-gradient(135deg,rgb(189, 193, 198),rgb(57, 55, 58));"
      >
        <h3 class="text-xl font-bold mb-2">Feature One</h3>
        <p class="text-gray-200">Analyze your dance style with AI-powered tools.</p>
      </div>

      <!-- Card 2 -->
      <div
        class="rounded-lg overflow-hidden shadow-lg p-6"
        style="background: linear-gradient(135deg,rgb(213, 205, 220),rgb(77, 73, 73));"
      >
        <h3 class="text-xl font-bold mb-2">Feature Two</h3>
        <p class="text-gray-200">Compare your moves to iconic dancers.</p>
      </div>

      <!-- Card 3 -->
      <div
        class="rounded-lg overflow-hidden shadow-lg p-6"
        style="background: linear-gradient(135deg,rgb(210, 208, 208),rgb(45, 45, 45));"
      >
        <h3 class="text-xl font-bold mb-2">Feature Three</h3>
        <p class="text-gray-200">Track your progress over time.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExploreSection',
};
</script>

<style scoped></style>
