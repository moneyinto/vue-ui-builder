<template>
    <el-image :style="style" v-bind="attributes">
        <template #placeholder v-if="widget.placeholder">
            <div class="image-placeholder-text">{{ widget.placeholderText }}</div>
        </template>
    </el-image>
</template>

<script name="ElImageRender" setup lang="ts">
import { IImageWidget } from "@/types/slide/image";
import { PropType, toRefs } from "vue";
import useAttributes from "../hooks/useAttributes";
import useStyle from "../hooks/useStyle";

const props = defineProps({
    widget: {
        type: Object as PropType<IImageWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const attributes = useAttributes(widget);

const style = useStyle(widget);
</script>

<style lang="scss" scoped>
.image-placeholder-text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
