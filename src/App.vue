<template>
    <!-- <Preview :slide="slide" />

    <el-button style="margin-left: 20px;" @click="download()">下载</el-button> -->

    <Editor />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Editor from "./views/Editor/index.vue";
import Preview from "./views/Preview/index.vue";
import { ISlide } from "./types/slide";
import { previewSlide } from "./data/preview";
import { getVue3Code, saveFile } from "@/utils";

const slide = ref<ISlide>(previewSlide);

const code = getVue3Code(slide.value);

console.log(code);

const download = () => {
    saveFile(code, "test");
};
</script>

<style lang="scss" scoped></style>
