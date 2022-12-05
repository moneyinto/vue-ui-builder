<template>
    <Widget
        class="drag-item move drag-item-container"
        :data-type="data.type"
        :widget="data"
        v-if="isRow"
    />

    <div
        v-else-if="isCol"
        class="drag-item move drag-item-container"
        :data-type="data.type"
    >
        <draggable
            class="drag-container"
            :list="widgetList"
            :animation="340"
            item-key="id"
            group="widget"
            @change="onChange"
        >
            <template #item="{ element }">
                <DragItem :data="element" />
            </template>
        </draggable>
    </div>

    <Widget
        class="drag-item move drag-item-container"
        v-else-if="isForm"
        :widget="data"
        :data-type="data.type"
    >
        <draggable
            class="drag-container"
            group="widget"
            :list="widgetList"
            :animation="340"
            item-key="id"
            @change="onChange"
        >
            <template #item="{ element }">
                <DragItem :data="element" />
            </template>
        </draggable>
    </Widget>

    <div
        class="drag-item drag-child-element move"
        style="display: inline-block"
        v-else-if="isText"
    >
        <Widget :widget="data" />
    </div>

    <div class="drag-item move drag-child-element" v-else>
        <Widget :widget="data" />
    </div>
</template>

<script setup lang="ts">
import { WidgetTypes } from "@/config/widget";
import { IDragChange } from "@/types";
import { IWidget } from "@/types/slide/widget";
import useCreateElement from "@/hooks/useCreateElement";
import { PropType, toRefs, defineProps, computed } from "vue";
import draggable from "vuedraggable";
import DragItem from "./DragItem.vue";
import Widget from "./Widget.vue";

const props = defineProps({
    data: {
        type: Object as PropType<IWidget>,
        required: true
    }
});

const { data } = toRefs(props);

const isRow = computed(() => {
    return WidgetTypes.ROW === data.value.type;
});

const isForm = computed(() => {
    return (
        WidgetTypes.FORM === data.value.type ||
        WidgetTypes.FORM_ITEM === data.value.type
    );
});

const isCol = computed(() => {
    return WidgetTypes.COL === data.value.type;
});

const isText = computed(() => {
    return WidgetTypes.TEXT === data.value.type;
});

const widgetList = computed(() => {
    return "widgetList" in data.value ? data.value.widgetList : [];
});

const createElement = useCreateElement();

const onChange = (dragData: IDragChange) => {
    if (dragData.added) {
        const added = dragData.added;

        if ("widgetList" in data.value && data.value.widgetList) {
            if (added.element.id) {
                // 非新增
                data.value.widgetList[added.newIndex] = added.element;
            } else {
                data.value.widgetList[added.newIndex] = createElement(
                    added.element
                );
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.drag-item {
    padding: 10px;
    border-radius: 3px;
    margin-left: 0 !important;
    margin-right: 0 !important;
    flex: 1;
}

.drag-child-element:hover {
    background-color: var(--el-color-primary-light-9);
}

.move {
    cursor: move;
}

.drag-item-container {
    border: 1px dashed #ccc;
    margin-bottom: 10px;
    position: relative;
    &:hover {
        border-color: var(--el-color-primary);
        &:before {
            color: var(--el-color-primary);
        }
    }
    &:before {
        content: attr(data-type);
        font-size: 12px;
        position: absolute;
        top: -7px;
        left: 6px;
        padding: 0 5px;
        background-color: #fff;
        line-height: 1;
        z-index: 1;
    }
}

.editor-widget-name {
    font-size: 12px;
    color: #888;
}

.drag-container {
    min-height: 60px;
    width: 100%;
}
</style>
