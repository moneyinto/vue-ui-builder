<template>
    <el-radio :label="widget.value" :style="style" v-bind="attributes">{{ widget.name }}</el-radio>
</template>

<script name="ElRadioRender" setup lang="ts">
import { PropType, toRefs } from "vue";
import { IRadioWidget } from "@/types/slide/radio";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";

const props = defineProps({
    widget: {
        type: Object as PropType<IRadioWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);
</script>
