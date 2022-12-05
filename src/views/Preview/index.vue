<template>
    <Slide :slide="slide" />
</template>

<script name="Screen" setup lang="ts">
import { PropType, toRefs } from "vue";
import { ISlide } from "@/types/slide";
import Slide from "./Slide.vue";

const props = defineProps({
    slide: {
        type: Object as PropType<ISlide>,
        required: true
    }
});

const { slide } = toRefs(props);
</script>
