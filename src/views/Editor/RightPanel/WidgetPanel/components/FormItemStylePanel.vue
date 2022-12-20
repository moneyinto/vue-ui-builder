<template>
    <el-form label-width="100px">
        <el-form-item label="属性：">
            <el-input v-model="formState.prop" @input="updateProp"></el-input>
        </el-form-item>

        <el-form-item label="是否必填：">
            <el-switch v-model="formState.required" @change="updateRequired" />
        </el-form-item>

        <el-form-item v-if="formState.required">
            <el-input
                v-model="formState.requiredMessage"
                @change="updateRules"
            ></el-input>
        </el-form-item>

        <el-form-item label="校验配置：">
            <el-button block @click="addRule()"> 新增校验配置 </el-button>
        </el-form-item>

        <div
            class="set-rule-block"
            v-for="(item, index) in formState.rules"
            :key="index"
        >
            <el-button
                class="rule-delete"
                type="danger"
                text
                icon="CircleCloseFilled"
                @click="deleteRule(index)"
            ></el-button>
            <el-form-item label="表达式">
                <el-input
                    v-model="item.pattern"
                    @change="updateRules"
                ></el-input>
            </el-form-item>
            <el-form-item label="错误提示">
                <el-input
                    v-model="item.message"
                    @change="updateRules"
                ></el-input>
            </el-form-item>
        </div>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { IFormItemOptions, IFormItemWidget } from "@/types/slide/form";
import { FormItemRule } from "element-plus";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as IFormItemWidget);

interface IFormState extends IFormItemOptions {
    rules: FormItemRule[];
    requiredMessage: string;
}

const formState = reactive<IFormState>({
    prop: "",
    required: false,
    requiredMessage: "",
    rules: []
});

const initFormState = () => {
    formState.prop = handleWidget.value.options?.prop || "";
    formState.required = !!handleWidget.value.options?.required;
    formState.rules = (handleWidget.value.rules || []).filter(
        (rule) => typeof rule.required === "undefined"
    );
    if (formState.required) {
        const rule = (handleWidget.value.rules || []).find(
            (rule) => typeof rule.required !== "undefined"
        );
        if (rule) {
            formState.requiredMessage = (rule.message as string) || "";
        } else {
            updateRules();
        }
    }
};

initFormState();

watch(handleWidget, initFormState);

const updateProp = (prop: string) => {
    handleWidget.value.options!.prop = prop;
};

const updateRequired = (required: boolean) => {
    handleWidget.value.options!.required = required;
    updateRules();
};

const updateRules = () => {
    if (formState.required) {
        handleWidget.value.rules = formState.rules.concat({
            required: formState.required,
            message: formState.requiredMessage
        });
    } else {
        handleWidget.value.rules = formState.rules;
    }
};

const addRule = () => {
    formState.rules.push({
        pattern: "",
        message: ""
    });
    updateRules();
};

const deleteRule = (i: number) => {
    formState.rules.splice(i, 1);
    updateRules();
};
</script>

<style lang="scss" scoped>
.set-rule-block {
    background-color: #f8f8f8;
    padding: 20px 20px 20px 0;
    margin-bottom: 20px;
    position: relative;
    :deep(.el-form-item:last-child) {
        margin-bottom: 0;
    }

    .rule-delete {
        position: absolute;
        font-size: 20px;
        right: -25px;
        top: -15px;
    }
}
</style>
