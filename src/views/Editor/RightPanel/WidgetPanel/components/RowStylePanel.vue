<template>
    <el-form label-width="100px">
        <el-form-item label="栅格间隔：">
            <el-input-number
                style="width: 100%"
                v-model="formState.gutter"
                @change="updateGutter"
            ></el-input-number>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { IRowWidget } from "@/types/slide/grid";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as IRowWidget);

const formState = reactive({
    gutter: 0
});

const initFormState = () => {
    formState.gutter = handleWidget.value.options?.gutter || 0;
};

initFormState();

watch(handleWidget, initFormState);

const updateGutter = (gutter: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.gutter) handleWidget.value.options.gutter = gutter;
    handleWidget.value.options.gutter = gutter;
};
</script>
