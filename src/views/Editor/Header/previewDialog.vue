<template>
    <el-dialog
        class="lyx-pre-view"
        title="预览"
        fullscreen
        destroy-on-close
    >
        <Preview :slide="slide" />
    </el-dialog>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";
import Preview from "@/views/Preview/index.vue";

const store = useStore();
const slide = computed(() => {
    return {
        name: "test",
        widgetList: store.widgetList
    };
});
</script>

<style lang="scss">
.lyx-pre-view {
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
