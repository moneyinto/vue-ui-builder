<template>
    <el-col :style="style" v-bind="attributes">
        <Widget v-for="widgetChild in widget.widgetList" :key="widgetChild.id" :widget="widgetChild" />
    </el-col>
</template>

<script name="ElColRender" setup lang="ts">
import { IColWidget } from "@/types/slide/grid";
import { PropType, toRefs } from "vue";
import useStyle from "./hooks/useStyle";
import useAttributes from "./hooks/useAttributes";
import Widget from "./Widget.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<IColWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);
</script>
