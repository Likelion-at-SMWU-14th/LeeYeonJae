<script setup>
defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue", "submit"]);
</script>

<template>
  <input
    class="name-input"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    @keyup.enter="emit('submit')"
    placeholder="이름을 입력하세요"
    maxlength="10"
  />
</template>

<style scoped>
.name-input {
  width: 100%;
  max-width: 340px;
  box-sizing: border-box;
  padding: 14px 16px;
  border: 3px solid #202020;
  border-radius: 14px;
  font-size: 16px;
  text-align: center;
  background: #ffffff;
  outline: none;
}
</style>
