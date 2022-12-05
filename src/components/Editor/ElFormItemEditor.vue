<template>
    <el-form-item :style="style" :rules="rules" v-bind="attributes">
        <slot />
    </el-form-item>
</template>

<script name="ElFormItemEditor" setup lang="ts">
import { PropType, provide, toRefs } from "vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import { IFormItemWidget } from "@/types/slide/form";

const props = defineProps({
    widget: {
        type: Object as PropType<IFormItemWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);

const rules = widget.value.rules || [];

provide("modelKeyName", widget.value.options?.prop);
</script>
