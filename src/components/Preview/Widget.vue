<template>
    <component :is="renderComponent" :widget="widget" />
</template>

<script name="Widget" setup lang="ts">
import { WidgetComponents } from "@/config/widget";
import { IWidget } from "@/types/slide/widget";
import { computed, PropType, toRefs } from "vue";
import ElRowRender from "./ElRowRender.vue";
import ElColRender from "./ElColRender.vue";
import SpanRender from "./SpanRender.vue";
import ElFormRender from "./ElFormRender.vue";
import ElFormItemRender from "./ElFormItemRender.vue";
import ElInputRender from "./ElInputRender.vue";
import ElSelectRender from "./ElSelectRender.vue";
import ElSelectItemRender from "./ElSelectItemRender.vue";
import ElDateTimePickerRender from "./ElDateTimePickerRender.vue";
import ElTimePickerRender from "./ElTimePickerRender.vue";
import ElSwitchRender from "./ElSwitchRender.vue";
import ElButtonRender from "./ElButtonRender.vue";
import ElRadioGroupRender from "./ElRadioGroupRender.vue";
import ElRadioRender from "./ElRadioRender.vue";
import ElCheckboxGroupRender from "./ElCheckboxGroupRender.vue";
import ElCheckboxRender from "./ElCheckboxRender.vue";
import ElSliderRender from "./ElSliderRender.vue";
import ElCardRender from "./ElCardRender.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<IWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const renderComponent = computed(() => {
    return {
        [WidgetComponents.ROW]: ElRowRender,
        [WidgetComponents.COL]: ElColRender,
        [WidgetComponents.TEXT]: SpanRender,
        [WidgetComponents.FORM]: ElFormRender,
        [WidgetComponents.FORM_ITEM]: ElFormItemRender,
        [WidgetComponents.INPUT]: ElInputRender,
        [WidgetComponents.SELECT]: ElSelectRender,
        [WidgetComponents.SELECT_ITEM]: ElSelectItemRender,
        [WidgetComponents.DAET_TIME_PICKER]: ElDateTimePickerRender,
        [WidgetComponents.TIME_PICKER]: ElTimePickerRender,
        [WidgetComponents.SWITCH]: ElSwitchRender,
        [WidgetComponents.BUTTON]: ElButtonRender,
        [WidgetComponents.RADIO_GROUP]: ElRadioGroupRender,
        [WidgetComponents.RADIO]: ElRadioRender,
        [WidgetComponents.CHECKBOX_GROUP]: ElCheckboxGroupRender,
        [WidgetComponents.CHECKBOX]: ElCheckboxRender,
        [WidgetComponents.SLIDER]: ElSliderRender,
        [WidgetComponents.CARD]: ElCardRender
    }[widget.value.component];
});
</script>
