<template>
    <component
        :is="component"
        v-if="modelForm && modelKeyName"
        v-model="modelForm[modelKeyName]"
        :style="style"
        v-bind="attributes"
    />
    <component
        :is="component"
        v-else
        v-model="modelValue"
        :style="style"
        v-bind="attributes"
    />
</template>

<script name="ElInputRender" setup lang="ts">
import { computed, PropType, ref, toRefs, watch } from "vue";
import { IInputWidget } from "@/types/slide/input";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import useFom from "../hooks/useForm";
import { WidgetComponents } from "@/config/widget";

const props = defineProps({
    widget: {
        type: Object as PropType<IInputWidget>,
        required: true
    }
});

const { widget } = toRefs(props);
const modelValue = ref("");

const component = computed(() => widget.value.component);

const style = useStyle(widget);

const attributes = useAttributes(widget);

const { modelForm, modelKeyName } = useFom();
if (modelForm) modelForm[modelKeyName] = "";

watch(component, () => {
    modelForm[modelKeyName] = component.value === WidgetComponents.INPUT ? "" : 0;
});
</script>
