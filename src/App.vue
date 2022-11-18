<template>
    <Screen :slide="slide" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Screen from "./components/Screen/index.vue";
import { ISlide } from "./types/slide";
import { previewSlide } from "./data/preview";

const slide = ref<ISlide>(previewSlide);
</script>

<style scoped></style>
