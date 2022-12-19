<template>
    <el-form label-width="100px">
        <el-form-item label="文本内容：">
            <el-input
                v-model="formState.text"
                @input="updateContent"
            ></el-input>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { ITextWidget } from "@/types/slide/text";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as ITextWidget);

const formState = reactive({
    text: ""
});

const initFormState = () => {
    formState.text = handleWidget.value.text;
};

initFormState();

watch(handleWidget, initFormState);

const updateContent = (text: string) => {
    handleWidget.value.text = text;
};
</script>
