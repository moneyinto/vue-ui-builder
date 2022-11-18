<template>
    <Widget v-for="widget in slide.widgetList" :key="widget.id" :widget="widget" />
</template>

<script name="Slide" setup lang="ts">
import { ISlide } from "@/types/slide";
import { PropType, toRefs } from "vue";
import Widget from "./components/Widget.vue";

const props = defineProps({
    slide: {
        type: Object as PropType<ISlide>,
        required: true
    }
});

const { slide } = toRefs(props);
</script>
