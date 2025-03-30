<template>
  <div class="relative bg-gradient text-white h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
    <!-- Heading Container (OVERTURE text, Logo, and D.A.N.C.E. Acronym) -->
    <div class="flex flex-col items-center justify-center z-10">
      <!-- OVERTURE Text -->
      <h1 class="text-8xl font-bold mb-4 opacity-0" ref="overtureText">OVERTURE</h1>

      <!-- Logo Container with click interaction -->
      <div class="relative w-24 h-24 mb-6" ref="logoContainer">
        <svg
          @click="spinLogo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          class="absolute inset-0 opacity-0 cursor-pointer"
          ref="logo"
        >
          <!-- Smaller circle with draw animation properties -->
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            stroke-width="2"
            fill="none"
            stroke-dasharray="251"
            stroke-dashoffset="251"
          />
        </svg>
      </div>

      <!-- D.A.N.C.E. Acronym -->
      <div class="flex space-x-2 text-6xl font-mono opacity-0" ref="acronymContainer">
        <span v-for="(letter, index) in acronym" :key="index">
          {{ letter }}<span v-if="index < acronym.length - 1">.</span>
        </span>
      </div>
    </div>

    <!-- Expanded Full Form -->
    <div class="mt-6 w-full max-w-3xl opacity-0 text-3xl flex flex-wrap justify-center gap-x-4 gap-y-2" ref="fullFormContainer">
      <span v-for="(word, index) in words" :key="index" class="inline-block">
        {{ word }}
      </span>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data() {
    return {
      acronym: ['D', 'A', 'N', 'C', 'E', 'R'],
      words: [
        'Dance',
        'Analysis',
        'Network for',
        'Classification and',
        'Explainable',
        'Recognition'
      ]
    }
  },
  mounted() {
    this.animateSequence()
  },
  methods: {
    animateSequence() {
      const { overtureText, logo, acronymContainer, fullFormContainer } = this.$refs
      const tl = gsap.timeline()

      // Fade in OVERTURE text
      tl.from(overtureText, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power4.out'
      })

      // Animate logo: fade in, draw circle, and rotate
      tl.to(logo, {
        duration: 1.5,
        opacity: 1,
        strokeDashoffset: 0,
        rotate: 360,
        ease: 'power2.inOut'
      }, '-=0.5')

      // Animate acronym letters
      tl.from(acronymContainer.children, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.5')

      // Move acronym up slightly
      tl.to(acronymContainer, {
        duration: 1,
        y: -20,
        ease: 'power2.inOut'
      })

      // Animate full form appearing
      tl.to(fullFormContainer, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power4.out'
      })
    },

    // Spin the logo on click to simulate Earth's rotation
    spinLogo() {
      gsap.to(this.$refs.logo, {
        duration: 1,
        rotation: "+=360",
        ease: 'power2.inOut'
      })
    }
  }
}
</script>

<style scoped>
/* Moving gradient background from black to dark grey */
.bg-gradient {
  background: linear-gradient(45deg, #000, #222);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Ensures spacing and wrapping for full form */
.inline-block {
  white-space: nowrap;
}
</style>
