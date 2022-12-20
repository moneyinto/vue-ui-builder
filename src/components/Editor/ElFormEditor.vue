<template>
    <el-form
        :model="modelForm"
        :style="style"
        v-bind="attributes"
        ref="ruleFormRef"
    >
        <slot />

        <el-form-item style="margin-top: 30px">
            <el-button type="primary" @click="submitForm(ruleFormRef)">
                提交
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script name="ElFormEditor" setup lang="ts">
import { PropType, provide, reactive, ref, toRefs } from "vue";
import { FormInstance } from "element-plus";
import useStyle from "../hooks/useStyle";
import useAttributes from "../hooks/useAttributes";
import { IFormWidget } from "@/types/slide/form";

const props = defineProps({
    widget: {
        type: Object as PropType<IFormWidget>,
        required: true
    }
});

const { widget } = toRefs(props);

const style = useStyle(widget);

const attributes = useAttributes(widget);

const modelFormPreset: { [key: string]: string } = {};
const modelForm = reactive(modelFormPreset);

provide("modelForm", modelForm);

const ruleFormRef = ref();
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log("submit!", modelForm);
        } else {
            console.log("error submit!", fields, modelForm);
        }
    });
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>
