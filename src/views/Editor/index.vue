<template>
    <div class="editor-container">
        <Header />
        <div class="editor-body">
            <LeftComponents />
            <div class="editor-content">
                <Canvas />
            </div>
            <RightPanel />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from "./Header/index.vue";
import LeftComponents from "./LeftComponents/index.vue";
import Canvas from "./Canvas/index.vue";
import RightPanel from "./RightPanel/index.vue";
</script>

<style lang="scss" scoped>
.editor-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.editor-body {
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;
}

.editor-content {
    flex: 1;
    min-width: 0;
    overflow: hidden;
}
</style>
