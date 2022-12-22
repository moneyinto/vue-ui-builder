<template>
    <el-button :style="style" v-bind="attributes" @click="btnClick()">
        {{ widget.text }}
    </el-button>
</template>

<script name="ElButtonRender" setup lang="ts">
import { IButtonWidget } from "@/types/slide/button";
import { PropType, toRefs } from "vue";
import useAttributes from "../hooks/useAttributes";
import useStyle from "../hooks/useStyle";

const props = defineProps({
    widget: {
        type: Object as PropType<IButtonWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const attributes = useAttributes(widget);

const style = useStyle(widget);

const btnClick = () => {
    if (widget.value.events?.click) {
        eval(widget.value.events.click.content);
    }
};
</script>
