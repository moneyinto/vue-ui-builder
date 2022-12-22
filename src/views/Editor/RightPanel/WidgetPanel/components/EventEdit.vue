<template>
    <el-dialog
        class="lyx-code-view el-dialog-fixed"
        title="事件"
        :modelValue="modelValue"
        :before-close="cancel"
    >
        <Codemirror
            class="codemirror-body"
            v-model:value="code"
            :options="cmOptions"
            :border="true"
        />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="cancel()">取消</el-button>
                <el-button type="primary" @click="save()">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import Codemirror from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
// theme
import "codemirror/theme/ayu-dark.css";
import { ref, toRefs, watch } from "vue";

const code = ref("");
const props = defineProps({
    modelValue: {
        type: Boolean
    },
    code: {
        type: String,
        default: ""
    }
});

const { modelValue } = toRefs(props);

const emit = defineEmits(["close", "save"]);

const initCode = () => {
    code.value = props.code;
};

watch(modelValue, () => {
    if (modelValue.value) {
        initCode();
    }
});

const cmOptions = ref({
    mode: "text/javascript", // Language mode
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

const save = () => {
    emit("save", code.value);
};
</script>

<style lang="scss" scoped>
.codemirror-body {
    height: 65vh;
}
</style>
