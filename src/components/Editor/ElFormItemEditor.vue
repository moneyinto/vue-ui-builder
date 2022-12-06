<template>
    <div>
        <el-button
            type="danger"
            icon="Delete"
            class="drag-delete"
            circle
            @click="dragDelete()"
        ></el-button>
        <el-form-item :style="style" :rules="rules" v-bind="attributes">
            <slot />
        </el-form-item>
    </div>
</template>

<script name="ElFormItemEditor" setup lang="ts">
import { PropType, provide, toRefs } from "vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import { IFormItemWidget } from "@/types/slide/form";

const emit = defineEmits(["onDelete"]);

const props = defineProps({
    widget: {
        type: Object as PropType<IFormItemWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);

const rules = widget.value.rules || [];

provide("modelKeyName", widget.value.options?.prop);

const dragDelete = () => {
    emit("onDelete", widget.value.id);
};
</script>

<style lang="scss" scoped>
.drag-item-container {
    &:hover {
        >.drag-delete {
            display: block;
        }
    }
}

.drag-delete {
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 12px;
    padding: 4px !important;
    z-index: 10;
    height: 22px;
    width: 22px;
    display: none;
}
</style>
