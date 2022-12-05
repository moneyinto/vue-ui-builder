<template>
    <el-row :style="style" v-bind="attributes">
        <draggable
            class="el-row drag-container"
            style="width: 100%;"
            group="widget"
            :list="widget.widgetList"
            :animation="340"
            item-key="id"
            @change="onChange"
        >
            <template #item="{ element }">
                <ElColEditor :widget="element">
                    <DragItem :data="element" />
                </ElColEditor>
            </template>
        </draggable>
    </el-row>
</template>

<script name="ElRowEditor" setup lang="ts">
import { IColWidget, IRowWidget } from "@/types/slide/grid";
import { PropType, toRefs } from "vue";
import DragItem from "./DragItem.vue";
import ElColEditor from "./ElColEditor.vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import draggable from "vuedraggable";
import useCreateElement from "@/hooks/useCreateElement";
import { IDragChange } from "@/types";

const props = defineProps({
    widget: {
        type: Object as PropType<IRowWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);

const createElement = useCreateElement();

const onChange = (dragData: IDragChange) => {
    if (dragData.added) {
        const added = dragData.added;

        if ("widgetList" in widget.value && widget.value.widgetList) {
            if (added.element.id) {
                // 非新增
                widget.value.widgetList[added.newIndex] = added.element;
            } else {
                widget.value.widgetList[added.newIndex] = createElement(
                    added.element
                );
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.drag-container {
    min-height: 60px;
    width: 100%;
}
</style>
