<template>
    <el-form-item :style="style" v-bind="attributes">
        <Widget
            v-for="widgetChild in widget.widgetList"
            :key="widgetChild.id"
            :widget="widgetChild"
        />
    </el-form-item>
</template>

<script name="ElFormItemRender" setup lang="ts">
import { PropType, provide, toRefs } from "vue";
import useStyle from "./hooks/useStyle";
import useAttributes from "./hooks/useAttributes";
import { IFormItemWidget } from "@/types/slide/form";
import Widget from "./Widget.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<IFormItemWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);

provide("modelKeyName", widget.value.options?.prop);
</script>
