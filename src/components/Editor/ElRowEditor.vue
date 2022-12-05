<template>
    <el-row :style="style" v-bind="attributes">
        <draggable
            class="el-row"
            style="width: 100%;"
            group="{ name: 'drag' }"
            :list="widget.widgetList"
            :animation="340"
            item-key="id"
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
import { IRowWidget } from "@/types/slide/grid";
import { PropType, toRefs } from "vue";
import DragItem from "./DragItem.vue";
import ElColEditor from "./ElColEditor.vue";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import draggable from "vuedraggable";

const props = defineProps({
    widget: {
        type: Object as PropType<IRowWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);
</script>
