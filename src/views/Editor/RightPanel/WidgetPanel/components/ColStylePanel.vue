<template>
    <el-form label-width="100px">
        <el-form-item label="栅格列数：">
            <el-input-number
                style="width: 100%"
                v-model="formState.span"
                @change="updateSpan"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="间隔格数：">
            <el-input-number
                style="width: 100%"
                v-model="formState.offset"
                @change="updateOffset"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="右移格数：">
            <el-input-number
                style="width: 100%"
                v-model="formState.push"
                @change="updatePush"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="左移格数：">
            <el-input-number
                style="width: 100%"
                v-model="formState.pull"
                @change="updatePull"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="xs：">
            <el-input-number
                style="width: 100%"
                v-model="formState.xs"
                @change="updateXs"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="sm：">
            <el-input-number
                style="width: 100%"
                v-model="formState.sm"
                @change="updateSm"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="md：">
            <el-input-number
                style="width: 100%"
                v-model="formState.md"
                @change="updateMd"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="lg：">
            <el-input-number
                style="width: 100%"
                v-model="formState.lg"
                @change="updateLg"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="xl：">
            <el-input-number
                style="width: 100%"
                v-model="formState.xl"
                @change="updateXl"
            ></el-input-number>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { IColOptions, IColWidget } from "@/types/slide/grid";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as IColWidget);

const formState = reactive<IColOptions>({
    span: 24,
    offset: 0,
    push: 0,
    pull: 0,
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0
});

const initFormState = () => {
    formState.span = handleWidget.value.options?.span || 24;
    formState.offset = handleWidget.value.options?.offset || 0;
    formState.push = handleWidget.value.options?.push || 0;
    formState.pull = handleWidget.value.options?.pull || 0;
    formState.xs = handleWidget.value.options?.xs || 0;
    formState.sm = handleWidget.value.options?.sm || 0;
    formState.md = handleWidget.value.options?.md || 0;
    formState.lg = handleWidget.value.options?.lg || 0;
    formState.xl = handleWidget.value.options?.xl || 0;
};

initFormState();

watch(handleWidget, initFormState);

const updateSpan = (span: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.span = span;
    handleWidget.value.options.span = span;
};

const updateOffset = (offset: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.offset = offset;
    handleWidget.value.options.offset = offset;
};

const updatePush = (push: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.push = push;
    handleWidget.value.options.push = push;
};

const updatePull = (pull: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.pull = pull;
    handleWidget.value.options.pull = pull;
};

const updateXs = (xs: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.xs = xs;
    handleWidget.value.options.xs = xs;
};

const updateSm = (sm: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.sm = sm;
    handleWidget.value.options.sm = sm;
};

const updateMd = (md: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.md = md;
    handleWidget.value.options.md = md;
};

const updateLg = (lg: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.lg = lg;
    handleWidget.value.options.lg = lg;
};

const updateXl = (xl: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.span) handleWidget.value.options.xl = xl;
    handleWidget.value.options.xl = xl;
};
</script>
