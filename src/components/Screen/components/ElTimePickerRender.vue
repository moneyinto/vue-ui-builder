<template>
    <el-time-picker
        v-if="modelForm && modelKeyName"
        class="lyx-adjust__prefix"
        v-model="modelForm[modelKeyName]"
        :style="style"
        v-bind="attributes"
    />
    <el-time-picker
        v-else
        class="lyx-adjust__prefix"
        v-model="modelValue"
        :style="style"
        v-bind="attributes"
    />
</template>

<script name="ElTimePickerRender" setup lang="ts">
import { PropType, ref, toRefs } from "vue";
import { IDateTimePickerWidget } from "@/types/slide/dateTime";
import useStyle from "./hooks/useStyle";
import useAttributes from "./hooks/useAttributes";
import useFom from "./hooks/useForm";

const props = defineProps({
    widget: {
        type: Object as PropType<IDateTimePickerWidget>,
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
