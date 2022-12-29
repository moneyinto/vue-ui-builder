<template>
    <el-form label-width="100px">
        <el-form-item label="placeholder：" v-if="!formState.isNumber">
            <el-input
                v-model="formState.placeholder"
                @input="updatePlaceholder"
            ></el-input>
        </el-form-item>

        <el-form-item label="数字输入：">
            <el-switch
                v-model="formState.isNumber"
                @change="updateNumber"
            />
        </el-form-item>

        <el-form-item label="是否禁用：">
            <el-switch
                v-model="formState.disabled"
                @change="updateDisabled"
            />
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { IInputOptions, IInputWidget } from "@/types/slide/input";
import { WidgetComponents } from "@/config/widget";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as IInputWidget);

interface IInputState extends IInputOptions {
    isNumber: boolean;
}

const formState = reactive<IInputState>({
    placeholder: "",
    disabled: false,
    isNumber: false
});

const initFormState = () => {
    formState.placeholder = handleWidget.value.options?.placeholder || "";
    formState.disabled = !!handleWidget.value.options?.disabled;
    formState.isNumber = handleWidget.value.component === WidgetComponents.INPUT_NUMBER;
};

initFormState();

watch(handleWidget, initFormState);

const updatePlaceholder = (placeholder: string) => {
    handleWidget.value.options!.placeholder = placeholder;
};

const updateDisabled = (disabled: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.disabled = disabled;
};

const updateNumber = () => {
    handleWidget.value.component = formState.isNumber ? WidgetComponents.INPUT_NUMBER : WidgetComponents.INPUT;
};
</script>
