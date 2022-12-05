<template>
    <el-input
        v-if="modelForm && modelKeyName"
        v-model="modelForm[modelKeyName]"
        :style="style"
        v-bind="attributes"
    />
    <el-input v-else v-model="modelValue" :style="style" v-bind="attributes" />
</template>

<script name="ElInputRender" setup lang="ts">
import { PropType, ref, toRefs } from "vue";
import { IInputWidget } from "@/types/slide/input";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import useFom from "../hooks/useForm";

const props = defineProps({
    widget: {
        type: Object as PropType<IInputWidget>,
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
