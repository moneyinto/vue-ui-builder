<template>
    <el-option :label="widget.name" :value="widget.value" :style="style" v-bind="attributes" />
</template>

<script name="ElSelectItemRender" setup lang="ts">
import { ISelectItemWidget } from "@/types/slide/select";
import { PropType, toRefs } from "vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";

const props = defineProps({
    widget: {
        type: Object as PropType<ISelectItemWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);
</script>
