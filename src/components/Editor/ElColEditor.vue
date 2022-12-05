<template>
    <el-col :style="style" v-bind="attributes">
        <slot />
    </el-col>
</template>

<script name="ElColEditor" setup lang="ts">
import { IColWidget } from "@/types/slide/grid";
import { PropType, toRefs } from "vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";

const props = defineProps({
    widget: {
        type: Object as PropType<IColWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);
</script>
