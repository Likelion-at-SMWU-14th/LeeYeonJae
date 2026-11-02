<script setup>
defineProps({
  score: Number,
  tier: Object,
});
</script>

<template>
  <div class="fortune">
    <div :key="tier.emoji + score" class="emoji">{{ tier.emoji }}</div>

    <p class="score">
      <strong>{{ score }}</strong
      ><span>점</span>
    </p>

    <div class="bar">
      <div
        class="fill"
        :class="{ high: score >= 70, low: score < 30 }"
        :style="{ width: score + '%' }"
      ></div>
    </div>

    <p class="message">{{ tier.message }}</p>
  </div>
</template>

<style scoped>
.fortune {
  width: 100%;
  text-align: center;
}

.emoji {
  font-size: 80px;
  animation: pop 0.5s ease;
}

.score {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 20px 0;
}

.score strong {
  font-size: 56px;
  font-weight: 800;
  line-height: 1;
}

.score span {
  font-size: 24px;
  font-weight: 700;
}

.bar {
  height: 18px;
  border: 3px solid #202020;
  border-radius: 100px;
  background: #ffffff;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: #ffdc5c;
  transition: width 0.6s ease;
}

.fill.high {
  background: #5ad1a4;
}

.fill.low {
  background: #ff8a70;
}

.message {
  color: #606060;
  margin: 20px 0 0;
  font-size: 18px;
  font-weight: 600;
}

@keyframes pop {
  0% {
    transform: scale(0.3) rotate(-20deg);
    opacity: 0;
  }
  70% {
    transform: scale(1.2) rotate(8deg);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}
</style>
