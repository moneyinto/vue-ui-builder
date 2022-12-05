<template>
    <span :style="style">
        {{ widget.text }}
    </span>
</template>

<script name="ElColRender" setup lang="ts">
import { ITextWidget } from "@/types/slide/text";
import { PropType, toRefs } from "vue";
import useStyle from "../hooks/useStyle";

const props = defineProps({
    widget: {
        type: Object as PropType<ITextWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);
</script>
