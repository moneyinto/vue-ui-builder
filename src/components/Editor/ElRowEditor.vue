<template>
    <el-row :style="style" v-bind="attributes">
        <el-button
            type="danger"
            icon="Delete"
            class="drag-delete"
            circle
            @click="dragDelete()"
        ></el-button>
        <draggable
            class="el-row drag-container"
            style="width: 100%"
            group="widget"
            :list="widget.widgetList"
            :animation="340"
            item-key="id"
            @change="onChange"
        >
            <template #item="{ element }">
                <ElColEditor :widget="element">
                    <DragItem :data="element" @onDelete="onDelete" />
                </ElColEditor>
            </template>
        </draggable>
    </el-row>
</template>

<script name="ElRowEditor" setup lang="ts">
import { IRowWidget } from "@/types/slide/grid";
import { PropType, toRefs } from "vue";
import DragItem from "./DragItem.vue";
import ElColEditor from "./ElColEditor.vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import draggable from "vuedraggable";
import useCreateElement from "@/hooks/useCreateElement";
import { IDragChange } from "@/types";

const emit = defineEmits(["onDelete"]);

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

const dragDelete = () => {
    emit("onDelete", props.widget.id);
};

const onDelete = (id: string) => {
    if ("widgetList" in widget.value && widget.value.widgetList) {
        const i = widget.value.widgetList.findIndex(widget => widget.id === id);
        widget.value.widgetList.splice(i, 1);
    }
};
</script>

<style lang="scss" scoped>
.drag-container {
    min-height: 60px;
    width: 100%;
}

.drag-item-container {
    &:hover {
        > .drag-delete {
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
