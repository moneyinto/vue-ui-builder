<template>
    <div class="editor-right-panel">
        <WidgetPanel v-if="handleWidget" />
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { IWidget } from "@/types/slide/widget";
import { computed } from "vue";
import WidgetPanel from "./WidgetPanel.vue";

const store = useStore();
const handleWidget = computed<IWidget>(() => store.handleWidget!);
</script>

<style lang="scss" scoped>
.editor-right-panel {
    width: 300px;
    border-left: 1px solid #eee;
    padding: 15px;
}
</style>
