<template>
    <el-form label-width="100px">
        <el-form-item label="placeholder：">
            <el-input
                v-model="formState.placeholder"
                @input="updatePlaceholder"
            ></el-input>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { ITimePickerWidget } from "@/types/slide/dateTime";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as ITimePickerWidget);

const formState = reactive({
    placeholder: ""
});

const initFormState = () => {
    formState.placeholder = handleWidget.value.options?.placeholder || "";
};

initFormState();

watch(handleWidget, initFormState);

const updatePlaceholder = (placeholder: string) => {
    handleWidget.value.options!.placeholder = placeholder;
};
</script>
