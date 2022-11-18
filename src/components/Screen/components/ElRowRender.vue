<template>
    <el-row :style="style" v-bind="attributes">
        <Widget v-for="widgetChild in widget.widgetList" :key="widgetChild.id" :widget="widgetChild" />
    </el-row>
</template>

<script name="ElRowRender" setup lang="ts">
import { IRowWidget } from "@/types/slide/grid";
import { PropType, toRefs } from "vue";
import useStyle from "./hooks/useStyle";
import useAttributes from "./hooks/useAttributes";
import Widget from "./Widget.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<IRowWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);
</script>
