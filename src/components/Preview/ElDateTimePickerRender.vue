<template>
    <el-date-picker
        v-if="modelForm && modelKeyName"
        class="lyx-adjust__prefix"
        v-model="modelForm[modelKeyName]"
        :style="style"
        v-bind="attributes"
    />
    <el-date-picker
        v-else
        class="lyx-adjust__prefix"
        v-model="modelInput"
        :style="style"
        v-bind="attributes"
    />
</template>

<script name="ElDateTimePickerRender" setup lang="ts">
import { PropType, ref, toRefs } from "vue";
import { IDateTimePickerWidget } from "@/types/slide/dateTime";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import useFom from "../hooks/useForm";

const props = defineProps({
    widget: {
        type: Object as PropType<IDateTimePickerWidget>,
        required: true
    }
});

const { widget } = toRefs(props);
const modelInput = ref("");

const style = useStyle(widget);

const attributes = useAttributes(widget);

const { modelForm, modelKeyName } = useFom();
if (modelForm) modelForm[modelKeyName] = "";
</script>
