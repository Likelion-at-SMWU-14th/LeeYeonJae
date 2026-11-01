<script setup>
import { ref, computed } from "vue";
import NameInput from "./components/NameInput.vue";
import FortuneCard from "./components/FortuneCard.vue";

const fortunes = [
  { min: 100, emoji: "🌟", message: "오늘은 뭘 해도 잘 풀려요!" },
  { min: 90, emoji: "🍀", message: "작은 행운이 찾아와요." },
  { min: 80, emoji: "😌", message: "무난하지만 편안한 하루예요." },
  { min: 70, emoji: "🍃", message: "서두르지 말고 천천히 가요." },
  { min: 60, emoji: "🧘🏻‍♀️", message: "오늘은 쉬어가는 게 좋겠어요." },
  { min: 50, emoji: "🧸", message: "오늘도 충분히 잘하고 있어요!" },
  { min: 40, emoji: "🌧️", message: "작은 실수는 가볍게 넘겨요." },
  { min: 30, emoji: "🫧", message: "잠시 멈추고 마음을 정리해 봐요." },
  { min: 20, emoji: "🌙", message: "오늘은 나를 먼저 챙겨주세요." },
  { min: 10, emoji: "🪴", message: "작은 것부터 다시 시작해 봐요." },
  { min: 0, emoji: "☁️", message: "조금은 답답해도 괜찮아요." },
];

const name = ref("");
const score = ref(null);

const title = computed(() =>
  score.value === null ? "오늘의 운세" : `${name.value.trim()}님의 운세`,
);

const canDraw = computed(() => name.value.trim() !== "");
const tier = computed(() => fortunes.find((t) => score.value >= t.min));

function draw() {
  if (!canDraw.value) return;
  score.value = Math.floor(Math.random() * 101);
}

function reset() {
  score.value = null;
}
</script>

<template>
  <div class="page">
    <main class="card">
      <h1>{{ title }}</h1>

      <template v-if="score === null">
        <div class="crystal">🔮</div>
        <NameInput v-model="name" @submit="draw" />
        <button class="btn" :disabled="!canDraw" @click="draw">
          운세 뽑기
        </button>
      </template>

      <template v-else>
        <FortuneCard :score="score" :tier="tier" />
        <div class="actions">
          <button class="btn" @click="draw">다시 뽑기</button>
          <button class="btn reset" @click="reset">처음으로</button>
        </div>
      </template>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  color: #171717;
}
</style>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff3d6;
  background-image: radial-gradient(#f3d9a0 1.5px, transparent 1.5px);
  background-size: 24px 24px;
}

.card {
  width: 420px;
  min-height: 480px;
  padding: 32px 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: #ffffff;
  border: 4px solid #202020;
  border-radius: 24px;
  box-shadow: 4px 4px 0 #202020;
}

h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
}

.crystal {
  font-size: 80px;
  animation: float 2s ease-in-out infinite;
  margin: 12px 0;
}

.actions {
  display: flex;
  gap: 16px;
}

.btn {
  padding: 12px 24px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: 2.5px solid #202020;
  border-radius: 14px;
  background: #c968e1;
  box-shadow: 1px 1px 0 #202020;
  transition: transform 0.2s;
  cursor: pointer;
}

.btn:hover:not(:disabled) {
  transform: scale(0.98);
}

.btn:disabled {
  background: #d9d9d9;
  color: #909090;
  cursor: not-allowed;
  box-shadow: none;
}

.btn.reset {
  background: #ffffff;
  color: #171717;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
</style>
