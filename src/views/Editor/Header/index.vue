<template>
    <div class="editor-header">
        <div class="editor-name">
            UI Builder
        </div>

        <div class="editor-btns">
            <el-button type="primary" link @click="openVueCode">导出Vue</el-button>
        </div>

        <CodeDialog v-model="showCode" @close="(showCode = false)" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CodeDialog from "./codeDialog.vue";

const showCode = ref(false);
const openVueCode = () => {
    showCode.value = true;
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
