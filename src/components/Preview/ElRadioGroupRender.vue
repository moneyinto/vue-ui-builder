<template>
    <el-radio-group
        v-if="modelForm && modelKeyName"
        v-model="modelForm[modelKeyName]"
        :style="style"
        v-bind="attributes"
    >
        <Widget
            v-for="widgetChild in widget.widgetList"
            :key="widgetChild.id"
            :widget="widgetChild"
        />
    </el-radio-group>
    <el-radio-group
        v-else
        v-model="modelValue"
        :style="style"
        v-bind="attributes"
    >
        <Widget
            v-for="widgetChild in widget.widgetList"
            :key="widgetChild.id"
            :widget="widgetChild"
        />
    </el-radio-group>
</template>

<script name="ElRadioGroupRender" setup lang="ts">
import { PropType, ref, toRefs } from "vue";
import { IRadioGroupWidget } from "@/types/slide/radio";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import useFom from "../hooks/useForm";
import Widget from "./Widget.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<IRadioGroupWidget>,
        required: true
    }
});

const { widget } = toRefs(props);
const modelValue = ref("");

const style = useStyle(widget);

const attributes = useAttributes(widget);

const { modelForm, modelKeyName } = useFom();
if (modelForm) modelForm[modelKeyName] = "";
</script>
