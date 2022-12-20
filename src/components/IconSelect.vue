<template>
    <el-dialog
        title="图标"
        width="1000px"
        style="--el-dialog-margin-top: 5vh"
        class="lyx-icon-dialog"
    >
        <div class="icon-list-body">
            <el-row class="icon-row">
                <el-col :span="4" v-for="icon in iconList" :key="icon">
                    <div class="icon-item" @click="selectIcon(icon)">
                        <el-icon :size="20">
                            <component :is="icon" />
                        </el-icon>
                        <div style="margin-top: 8px;">{{icon}}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const iconList = ref<string[]>([]);
const emit = defineEmits(["select"]);

for (const [key] of Object.entries(ElementPlusIconsVue)) {
    iconList.value.push(key);
}

const selectIcon = (icon: string) => {
    emit("select", icon);
};
</script>

<style lang="scss">
.lyx-icon-dialog {
    height: 90vh;
    display: flex;
    flex-direction: column;
    .el-dialog__body {
        flex: 1;
        min-height: 0;
    }
    .icon-list-body {
        height: 100%;
        overflow-y: auto;
    }
    .icon-row {
        border-left: 1px solid #ccc;
        border-top: 1px solid #ccc;
    }
    .icon-item {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
    }
}
</style>
