<template>
    <el-slider
        v-if="modelForm && modelKeyName"
        v-model="modelForm[modelKeyName]"
        :style="style"
        v-bind="attributes"
    />
    <el-switch v-else v-model="modelValue" :style="style" v-bind="attributes" />
</template>

<script name="ElSwitchRender" setup lang="ts">
import { PropType, ref, toRefs } from "vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import useFom from "../hooks/useForm";
import { ISliderWidget } from "@/types/slide/slider";

const props = defineProps({
    widget: {
        type: Object as PropType<ISliderWidget>,
        required: true
    }
});

const { widget } = toRefs(props);
const modelValue = ref(0);

const style = useStyle(widget);

const attributes = useAttributes(widget);

const { modelForm, modelKeyName } = useFom();
if (modelForm) modelForm[modelKeyName] = 0;
</script>
