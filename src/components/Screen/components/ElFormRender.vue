<template>
    <el-form
        class="el-form-vertical"
        :model="modelForm"
        :style="style"
        v-bind="attributes"
    >
        <Widget
            v-for="widgetChild in widget.widgetList"
            :key="widgetChild.id"
            :widget="widgetChild"
        />
    </el-form>
</template>

<script name="ElFormRender" setup lang="ts">
import { PropType, provide, reactive, toRefs } from "vue";
import useStyle from "./hooks/useStyle";
import useAttributes from "./hooks/useAttributes";
import { IFormWidget } from "@/types/slide/form";
import Widget from "./Widget.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<IFormWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const propsKeys = widget.value.widgetList?.map((item) => item.options?.props);

const modelFormPreset: { [key: string]: string } = {};

propsKeys?.forEach((key) => {
    if (key) modelFormPreset[key] = "";
});

const modelForm = reactive(modelFormPreset);

provide("modelForm", modelForm);

const attributes = useAttributes(widget);
</script>
