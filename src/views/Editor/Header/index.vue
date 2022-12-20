<template>
    <div class="editor-header">
        <div class="editor-name">
            UI Builder
        </div>

        <div class="editor-btns">
            <el-button type="primary" link @click="openPreview()">预览</el-button>
            <el-button type="primary" link @click="openJSON()">查看JSON</el-button>
            <el-button type="primary" link @click="openVueCode()">导出Vue</el-button>
        </div>

        <CodeDialog v-model="showCode" @close="(showCode = false)" />

        <PreviewDialog v-model="showPreview" />

        <JSONDialog v-model="showJSON" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CodeDialog from "./codeDialog.vue";
import JSONDialog from "./jSONDialog.vue";
import PreviewDialog from "./previewDialog.vue";

const showCode = ref(false);
const openVueCode = () => {
    showCode.value = true;
};

const showPreview = ref(false);
const openPreview = () => {
    showPreview.value = true;
};

const showJSON = ref(false);
const openJSON = () => {
    showJSON.value = true;
};
</script>

<style lang="scss" scoped>
.editor-header {
    border-bottom: 1px solid #eee;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .editor-name {
        font-weight: 600;
        color: var(--el-color-primary);
    }
}
</style>
