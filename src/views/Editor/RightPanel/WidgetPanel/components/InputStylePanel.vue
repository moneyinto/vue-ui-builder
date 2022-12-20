<template>
    <el-form label-width="100px">
        <el-form-item label="placeholder：">
            <el-input
                v-model="formState.placeholder"
                @input="updatePlaceholder"
            ></el-input>
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

const store = useStore();
const handleWidget = computed(() => store.handleWidget as IInputWidget);

const formState = reactive<IInputOptions>({
    placeholder: "",
    disabled: false
});

const initFormState = () => {
    formState.placeholder = handleWidget.value.options?.placeholder || "";
    formState.disabled = !!handleWidget.value.options?.disabled;
};

initFormState();

watch(handleWidget, initFormState);

const updatePlaceholder = (placeholder: string) => {
    handleWidget.value.options!.placeholder = placeholder;
};

const updateDisabled = (disabled: boolean) => {
    handleWidget.value.options!.disabled = disabled;
};
</script>
