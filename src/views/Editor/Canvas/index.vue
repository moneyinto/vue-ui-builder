<template>
    <draggable
        class="editor-canvas-content"
        :list="widgetList"
        :animation="340"
        item-key="id"
        group="widget"
        @change="onChange"
    >
        <template #item="{ element }">
            <DragItem :data="element" @onDelete="onDelete" />
        </template>
    </draggable>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IDragChange } from "@/types";
import draggable from "vuedraggable";
import DragItem from "@/components/Editor/DragItem.vue";
import useCreateElement from "@/hooks/useCreateElement";
import { useStore } from "@/store";

const store = useStore();
const widgetList = computed(() => store.widgetList);

const createElement = useCreateElement();

const onChange = (data: IDragChange) => {
    if (data.added) {
        const added = data.added;
        if (added.element.id) {
            // 非新增
            store.widgetList[added.newIndex] = added.element;
        } else {
            store.widgetList[added.newIndex] = createElement(added.element);

            store.handleWidget = store.widgetList[added.newIndex];
        }
    }
};

const onDelete = (id: string) => {
    const i = store.widgetList.findIndex(widget => widget.id === id);
    store.widgetList.splice(i, 1);
    if (store.handleWidget?.id === id) {
        setTimeout(() => {
            store.handleWidget = null;
        });
    }
};
</script>

<style lang="scss" scoped>
.editor-canvas-content {
    padding: 20px;
    height: 100%;
    overflow-y: auto;
}
</style>
