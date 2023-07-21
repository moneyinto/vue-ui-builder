<template>
    <div class="editor-left-components">
        <div
            class="editor-module"
            v-for="item in WidgetGroupList"
            :key="item.name"
        >
            <div class="editor-module-title">
                {{ item.name }}
            </div>
            <draggable
                class="editor-module-components"
                :list="item.children"
                :sort="false"
                item-key="name"
                :group="{ name: 'widget', pull: 'clone', put: false }"
            >
                <template #item="{ element }">
                    <div
                        class="editor-component-block"
                    >
                        {{ element.name }}
                    </div>
                </template>
            </draggable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { WidgetGroupList } from "@/config/widget";
import draggable from "vuedraggable";
</script>

<style lang="scss" scoped>
.editor-left-components {
    width: 370px;
    border-right: 1px solid #eee;
    padding: 20px 15px;
    overflow-y: auto;
}

.editor-module {}

.editor-module-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}

.editor-module-components {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
}

.editor-component-block {
    padding: 0 10px;
    border-radius: 3px;
    background-color: var(--el-color-primary-light-9);
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    width: 157px;
    margin-left: 15px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
    user-select: none;
    &:hover {
        border: 1px dashed var(--el-color-primary);
        color: var(--el-color-primary);
    }
}
</style>
