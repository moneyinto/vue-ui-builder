<template>
    <el-form label-width="100px">
        <el-form-item label="启用标题：">
            <el-switch v-model="formState.header" @change="updateHeader" />
        </el-form-item>

        <el-form-item label="标题内容：" v-if="formState.header">
            <el-input placeholder="请输入标题" v-model="formState.headerText" @input="updateHeaderText" />
        </el-form-item>

        <el-form-item label="尺寸大小：">
            <el-radio-group v-model="formState.shadow" @change="updateShadow">
                <el-radio-button label="always">总是</el-radio-button>
                <el-radio-button label="never">从不</el-radio-button>
                <el-radio-button label="hover">悬浮</el-radio-button>
            </el-radio-group>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { ICardOptions, ICardWidget } from "@/types/slide/card";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as ICardWidget);

interface ICardState extends ICardOptions {
    header: boolean;
    headerText: string;
}

const formState = reactive<ICardState>({
    header: false,
    headerText: "",
    shadow: "always"
});

const initFormState = () => {
    formState.header = !!handleWidget.value.header;
    formState.headerText = handleWidget.value.headerText;
    formState.shadow = handleWidget.value.options?.shadow || "always";
};

initFormState();

watch(handleWidget, initFormState);

const updateHeader = (header: boolean) => {
    handleWidget.value.header = header;
};

const updateHeaderText = (headerText: string) => {
    handleWidget.value.headerText = headerText;
};

const updateShadow = (shadow: "always" | "never" | "hover") => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.shadow = shadow;
};
</script>
