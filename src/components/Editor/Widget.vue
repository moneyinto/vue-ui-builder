<template>
    <component :is="renderComponent" :widget="widget">
        <slot />
    </component>
</template>

<script name="Widget" setup lang="ts">
import { WidgetComponents } from "@/config/widget";
import { IWidget } from "@/types/slide/widget";
import { computed, PropType, toRefs } from "vue";
import ElRowEditor from "./ElRowEditor.vue";
import ElColEditor from "./ElColEditor.vue";
import SpanRender from "../Preview/SpanRender.vue";
import ElFormEditor from "./ElFormEditor.vue";
import ElFormItemEditor from "./ElFormItemEditor.vue";
import ElInputRender from "../Preview/ElInputRender.vue";
import ElSelectRender from "../Preview/ElSelectRender.vue";
import ElSelectItemRender from "../Preview/ElSelectItemRender.vue";
import ElDateTimePickerRender from "../Preview/ElDateTimePickerRender.vue";
import ElTimePickerRender from "../Preview/ElTimePickerRender.vue";
import ElSwitchRender from "../Preview/ElSwitchRender.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<IWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const renderComponent = computed(() => {
    return {
        [WidgetComponents.ROW]: ElRowEditor,
        [WidgetComponents.COL]: ElColEditor,
        [WidgetComponents.TEXT]: SpanRender,
        [WidgetComponents.FORM]: ElFormEditor,
        [WidgetComponents.FORM_ITEM]: ElFormItemEditor,
        [WidgetComponents.INPUT]: ElInputRender,
        [WidgetComponents.SELECT]: ElSelectRender,
        [WidgetComponents.SELECT_ITEM]: ElSelectItemRender,
        [WidgetComponents.DAET_TIME_PICKER]: ElDateTimePickerRender,
        [WidgetComponents.TIME_PICKER]: ElTimePickerRender,
        [WidgetComponents.SWITCH]: ElSwitchRender
    }[widget.value.component];
});
</script>