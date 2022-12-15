<template>
    <Codemirror
        class="codemirror-body"
        v-model:value="code"
        :options="cmOptions"
        :border="true"
        @blur="onBlur"
    />
</template>

<script lang="ts" setup>
import { ref } from "vue";

import "codemirror/theme/eclipse.css";
import "codemirror/mode/javascript/javascript.js";

const code = ref("{}");

const cmOptions = ref({
    mode: "application/x-json", // Language mode
    theme: "eclipse", // Theme
    lineNumbers: false, // Show line number
    smartIndent: false, // Smart indent
    indentUnit: 4, // The smart indent unit is 4 spaces in length
    // foldGutter: true, // Code folding
    styleActiveLine: true // Display the style of the selected row
});

const onBlur = () => {
    console.log(code);
};
</script>
