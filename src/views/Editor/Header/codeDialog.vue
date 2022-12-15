<template>
    <el-dialog
        class="lyx-code-view el-dialog-fixed"
        title="代码"
        :modelValue="modelValue"
        :before-close="cancel"
    >
        <el-form>
            <el-form-item label="文件名：">
                <el-input placeholder="请输入文件名" v-model="fileName"></el-input>
            </el-form-item>
        </el-form>

        <Codemirror
            class="codemirror-body"
            v-model:value="code"
            :options="cmOptions"
            :border="true"
        />

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="cancel()">取消</el-button>
                <el-button type="primary" @click="download()">
                    下载
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/vue/vue.js";
// theme
import "codemirror/theme/ayu-dark.css";

import { ref, toRefs, watch } from "vue";
import { useStore } from "@/store";
import { getVue3Code, saveFile } from "@/utils";
import { ElMessage } from "element-plus";

const store = useStore();
const code = ref("");
const fileName = ref("test");
const props = defineProps({
    modelValue: {
        type: Boolean
    }
});

const { modelValue } = toRefs(props);

const emit = defineEmits(["close"]);

const initCode = () => {
    code.value = getVue3Code({
        name: fileName.value,
        widgetList: JSON.parse(JSON.stringify(store.widgetList))
    });
};

watch(modelValue, () => {
    if (modelValue.value) {
        initCode();
    }
});

const cmOptions = ref({
    mode: "text/x-vue", // Language mode
    theme: "ayu-dark", // Theme
    lineNumbers: true, // Show line number
    smartIndent: true, // Smart indent
    indentUnit: 4, // The smart indent unit is 4 spaces in length
    foldGutter: true, // Code folding
    styleActiveLine: true // Display the style of the selected row
});

const cancel = () => {
    emit("close");
};

const download = () => {
    if (!fileName.value) return ElMessage.warning("请输入文件名!");
    saveFile(code.value, fileName.value);
};
</script>

<style lang="scss">
.lyx-code-view {
    &.el-dialog-fixed {
        --el-dialog-width: 80%;
    }

    .el-dialog__body {
        padding-top: 5px !important;
    }

    .codemirror-body {
        margin-top: 20px;
    }
}
</style>
