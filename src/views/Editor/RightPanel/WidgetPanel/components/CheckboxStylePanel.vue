<template>
    <el-form label-width="100px">
        <el-form-item label="选项设置：">
            <el-button
                block
                @click="openItemEditor()"
            >
                编辑选项
            </el-button>
        </el-form-item>

        <el-form-item label="尺寸大小：">
            <el-radio-group v-model="formState.size" @change="updateSize">
                <el-radio-button label="small">S</el-radio-button>
                <el-radio-button label="default">D</el-radio-button>
                <el-radio-button label="large">L</el-radio-button>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="是否禁用：">
            <el-switch
                v-model="formState.disabled"
                @change="updateDisabled"
            />
        </el-form-item>
    </el-form>

    <el-dialog
        title="选项配置"
        v-model="showItemEditor"
    >
        <el-row
            class="checkbox-item-input"
            :gutter="10"
            v-for="(item, index) in formState.checkboxList"
            :key="index"
        >
            <el-col :span="11">
                <el-input
                    v-model="item.name"
                    placeholder="label"
                ></el-input>
            </el-col>
            <el-col :span="11">
                <el-input
                    v-model="item.value"
                    placeholder="value"
                ></el-input>
            </el-col>
            <el-col :span="2">
                <el-button
                    class="minus-btn"
                    type="danger"
                    circle
                    plain
                    icon="Minus"
                    @click="deleteCheckboxItem(index)"
                ></el-button>
            </el-col>
        </el-row>
        <el-button icon="CirclePlus" type="primary" link @click="addCheckboxItem">新增多选</el-button>
    </el-dialog>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
import { useStore } from "@/store";
import useCreateElement from "@/hooks/useCreateElement";
import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { ICheckboxGroupWidget, ICheckboxOptions, ICheckboxWidget } from "@/types/slide/checkbox";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as ICheckboxGroupWidget);

interface ICheckbox extends ICheckboxOptions {
    checkboxList: ICheckboxWidget[];
}

const formState = reactive<ICheckbox>({
    checkboxList: [],
    size: "default",
    disabled: false
});

const initFormState = () => {
    formState.checkboxList = handleWidget.value.widgetList || [];
    formState.disabled = !!handleWidget.value.options?.disabled;
    formState.size = handleWidget.value.options?.size || "default";
};

initFormState();

watch(handleWidget, initFormState);

const showItemEditor = ref(false);
const createElement = useCreateElement();
const addCheckboxItem = () => {
    const checkbox = createElement({
        name: "",
        value: "",
        component: WidgetComponents.CHECKBOX,
        type: WidgetTypes.CHECKBOX
    });
    formState.checkboxList.push(checkbox as ICheckboxWidget);
};
const openItemEditor = () => {
    showItemEditor.value = true;
};
const deleteCheckboxItem = (i: number) => {
    formState.checkboxList.splice(i, 1);
};

const updateDisabled = (disabled: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.disabled = disabled;
};

const updateSize = (size: "small" | "default" | "large") => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.size = size;
};
</script>

<style lang="scss" scoped>
.checkbox-item-input {
    margin-bottom: 10px;
}

.minus-btn {
    font-size: 12px;
    padding: 2px !important;
    height: 20px;
    width: 20px;
    margin-top: 5px;
    margin-left: 3px;
}
</style>
