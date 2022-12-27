<template>
    <el-checkbox-group
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
    </el-checkbox-group>
    <el-checkbox-group
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
    </el-checkbox-group>
</template>

<script name="ElCheckboxGroupRender" setup lang="ts">
import { PropType, ref, toRefs } from "vue";
import { ICheckboxGroupWidget } from "@/types/slide/checkbox";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import useFom from "../hooks/useForm";
import Widget from "./Widget.vue";

const props = defineProps({
    widget: {
        type: Object as PropType<ICheckboxGroupWidget>,
        required: true
    }
});

const { widget } = toRefs(props);
const modelValue = ref([]);

const style = useStyle(widget);

const attributes = useAttributes(widget);

const { modelForm, modelKeyName } = useFom();
if (modelForm) modelForm[modelKeyName] = [];
</script>
