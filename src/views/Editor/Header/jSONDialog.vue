<template>
    <el-dialog
        class="lyx-pre-view"
        style="--el-dialog-margin-top: 5vh"
        title="JSON"
        width="80%"
    >
        <JsonEditor
            :height="height"
            mode="tree"
            v-model:text="jsonData"
            readOnly
        />
    </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "@/store";

const store = useStore();
const jsonData = computed(() => JSON.stringify(store.widgetList));

const height = ref(window.innerHeight * 0.9 - 95);
</script>

<style lang="scss">
.lyx-pre-view {
    height: 90vh;
    .el-dialog__body {
        padding-top: 5px !important;
    }

    .codemirror-body {
        margin-top: 20px;
    }

    &.is-fullscreen {
        --el-dialog-margin-top: 0;
        --el-dialog-border-radius: 0;
    }
}
</style>
