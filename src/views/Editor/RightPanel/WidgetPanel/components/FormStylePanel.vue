<template>
    <el-form label-width="100px">
        <el-form-item label="标签宽度：">
            <el-input-number
                style="width: 100%"
                v-model="formState.labelWidth"
                @change="updateLabelWidth"
                :disabled="formState.labelPosition === 'top'"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="标签对齐：">
            <el-radio-group
                v-model="formState.labelPosition"
                @change="updateLabelPosition"
            >
                <el-radio-button label="left" />
                <el-radio-button label="right" />
                <el-radio-button label="top" />
            </el-radio-group>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { IFormOptions, IFormWidget } from "@/types/slide/form";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as IFormWidget);

const formState = reactive<IFormOptions>({
    labelWidth: 100,
    labelPosition: "top"
});

const initFormState = () => {
    formState.labelWidth = handleWidget.value.options?.labelWidth || 100;
    formState.labelPosition =
        handleWidget.value.options?.labelPosition || "top";
};

initFormState();

watch(handleWidget, initFormState);

const updateLabelWidth = (width: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options!.labelWidth = width;
};

const updateLabelPosition = (position: "top" | "left" | "right") => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options!.labelPosition = position;
};
</script>
