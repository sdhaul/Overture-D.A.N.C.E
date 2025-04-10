<template>
  <div class="relative text-[#E0E7FF] h-[110vh] flex flex-col items-center justify-center overflow-hidden px-12">
    <!-- Glowing Orbiting Particle -->
    <div class="absolute w-4 h-4 bg-cyan-400 rounded-full glow-orbit" ref="particle"></div>

    <!-- OVERTURE Text with Tooltip -->
    <div class="tooltip-container">
      <h1 class="text-6xl font-bold mb-6 opacity-0 glow-text-cyan cursor-help" ref="overtureText">
        OVERTURE
      </h1>
      <div class="tooltip">
        Meaning: Beginning of a performance. For this project, the AI-powered prelude to understanding and analyzing dance styles.
      </div>
    </div>

    <!-- Logo Container with MJ Silhouette -->
    <div class="relative w-16 h-16 mb-8" ref="logoContainer">
      <img src="./images/mj.png" alt="D.A.N.C.E.R. Logo" class="absolute inset-0 w-full h-full object-contain opacity-0 glow-image" ref="logo" />
    </div>

    <!-- Glowing D.A.N.C.E.R. Letters -->
    <div class="acronymContainer flex justify-center space-x-4 relative w-full mb-12" ref="acronymContainer">
      <span v-for="(letter, index) in letters" :key="index" class="text-6xl font-bold opacity-0 glow-text-magenta">
        {{ letter }}{{ index < letters.length - 1 ? '.' : '' }}
      </span>
    </div>

    <!-- Spaced Full Form with Glow -->
    <div class="full-form-container flex justify-center space-x-6 mt-12 text-xl opacity-0 w-full" ref="fullFormContainer">
      <span v-for="(word, index) in words" :key="index" class="opacity-0 glow-text-cyan px-2">
        {{ word }}
      </span>
    </div>

    <!-- Floating Neon Shape -->
    <div class="absolute right-10 top-1/3 w-20 h-20 border-2 border-magenta-400 rounded-[20%] rotate-45 glow-shape" ref="shape"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      letters: ['D', 'A', 'N', 'C', 'E', 'R'],
      words: [
        'DANCE ', 'ANALYSIS ', 'NETWORK ', 'FOR ', 'CLASSIFICATION ', 'AND ', 'EXPLAINABLE ', 'RECOGNITION'
      ]
    };
  },
  mounted() {
    this.animateCosmicSequence();
  },
  methods: {
    animateCosmicSequence() {
    const tl = gsap.timeline();
    
    tl.to(this.$refs.particle, {
        duration: 8,
        x: 300,
        y: -200,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    }, 0);

    tl.from(this.$refs.overtureText, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power4.out'
    }, 0.5);

    tl.to(this.$refs.logo, {
        duration: 1,
        opacity: 1,
        ease: 'power2.inOut'
    }, '-=0.5');

    tl.from(this.$refs.acronymContainer.children, {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.15,
        ease: 'back.out(1.7)'
    }, '-=0.3');

    tl.from(this.$refs.fullFormContainer.children, {
        duration: 1.2,
        opacity: 0,
        x: -30,
        stagger: 0.15,
        ease: 'power3.out'
    }, '-=0.4');

    tl.to(this.$refs.shape, {
        duration: 4,
        y: -100,
        rotate: 90,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    }, 0);
    }

  }
};
</script>

<style scoped>
.glow-text-cyan {
  text-shadow: 0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.5);
}

.glow-text-magenta {
  text-shadow: 0 0 10px rgba(192, 38, 211, 0.8), 0 0 20px rgba(192, 38, 211, 0.5);
}

.glow-shape {
  box-shadow: 0 0 15px rgba(192, 38, 211, 0.7);
}

.glow-orbit {
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.9);
}

.glow-image {
  filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.8));
}

/* Tooltip styles */
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: 140%;
  text-align: justify;
  text-justify: inter-word;
  transform: translateY(-50%);
  max-width: 300px;
  margin-top: 150px;
  background-color: rgba(42, 41, 41, 0.9);
  color: #E0E7FF;
  text-align: left;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.4;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.7);
  border: 1px solid rgba(34, 211, 238, 0.5);
  backdrop-filter: blur(5px);
}

.tooltip-container:hover .tooltip {
  visibility: visible;
  opacity: 0.8;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent rgba(42, 41, 41, 0.9) transparent transparent;
}
</style>
