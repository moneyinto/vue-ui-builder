<template>
    <el-card :style="style" v-bind="attributes">
        <template #header v-if="widget.header">
            {{ widget.headerText || "标题" }}
        </template>
        <Widget
            v-for="widgetChild in widget.widgetList"
            :key="widgetChild.id"
            :widget="widgetChild"
        />
    </el-card>
</template>

<script name="ElCardRender" setup lang="ts">
import { ICardWidget } from "@/types/slide/card";
import { PropType, toRefs } from "vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import Widget from "./Widget.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<ICardWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);
</script>
