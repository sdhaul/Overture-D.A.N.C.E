<template>
  <div class="scroll-down-container">
    <div class="arrows-container">
      <div class="arrow glow-orbit-cyan"></div>
      <div class="arrow glow-orbit-cyan"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.from(".scroll-down-container", {
      delay: 4,
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "power2.out",
    });

    gsap.to(".arrow", {
      y: -8,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
      stagger: 0.15,
    });
  },
};
</script>

<style scoped>
.scroll-down-container {
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrows-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -2px; /* Tighter grouping for a double-arrow look */
}

.arrow {
  width: 12px; /* Narrower arrow */
  height: 12px;
  border: solid #22D3EE;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  border-radius: 2px; /* Slightly rounded for a smooth look */
}

.glow-orbit-cyan {
  box-shadow: 0px 0px 10px rgba(34, 211, 238, 0.75);
}
</style>
