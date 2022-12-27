<template>
    <el-checkbox :label="widget.value" :style="style" v-bind="attributes">{{ widget.name }}</el-checkbox>
</template>

<script name="ElRadioRender" setup lang="ts">
import { PropType, toRefs } from "vue";
import { ICheckboxWidget } from "@/types/slide/checkbox";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";

const props = defineProps({
    widget: {
        type: Object as PropType<ICheckboxWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);
</script>
