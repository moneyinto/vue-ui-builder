<template>
    <el-form label-width="100px">
        <el-form-item label="placeholder：">
            <el-input
                v-model="formState.placeholder"
                @input="updatePlaceholder"
            ></el-input>
        </el-form-item>

        <el-form-item label="选项设置：">
            <el-button
                block
                @click="openItemEditor()"
            >
                编辑选项
            </el-button>
        </el-form-item>

        <el-form-item label="是否禁用：">
            <el-switch
                v-model="formState.disabled"
                @change="updateDisabled"
            />
        </el-form-item>
    </el-form>

    <el-dialog
        v-model="showItemEditor"
    >
        <el-button block @click="addSelectItem">新增选项</el-button>
        <el-row
            class="select-item-input"
            :gutter="10"
            v-for="(item, index) in formState.selectItemList"
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
                    @click="deleteSelectItem(index)"
                ></el-button>
            </el-col>
        </el-row>
    </el-dialog>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
import { useStore } from "@/store";
import { ISelectItemWidget, ISelectOptions, ISelectWidget } from "@/types/slide/select";
import useCreateElement from "@/hooks/useCreateElement";
import { WidgetComponents, WidgetTypes } from "@/config/widget";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as ISelectWidget);

interface ISelectItem extends ISelectOptions {
    selectItemList: ISelectItemWidget[];
}

const formState = reactive<ISelectItem>({
    placeholder: "",
    selectItemList: [],
    disabled: false
});

const initFormState = () => {
    formState.placeholder = handleWidget.value.options?.placeholder || "";
    formState.selectItemList = handleWidget.value.widgetList || [];
};

initFormState();

watch(handleWidget, initFormState);

const updatePlaceholder = (placeholder: string) => {
    handleWidget.value.options!.placeholder = placeholder;
    formState.disabled = !!handleWidget.value.options?.disabled;
};

const showItemEditor = ref(false);
const createElement = useCreateElement();
const addSelectItem = () => {
    const selectItem = createElement({
        name: "",
        value: "",
        component: WidgetComponents.SELECT_ITEM,
        type: WidgetTypes.SELECT_ITEM
    });
    formState.selectItemList.push(selectItem as ISelectItemWidget);
    // handleWidget.value.widgetList = formState.selectItemList;
};
const openItemEditor = () => {
    showItemEditor.value = true;
};
const deleteSelectItem = (i: number) => {
    formState.selectItemList.splice(i, 1);
};

const updateDisabled = (disabled: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.disabled = disabled;
};
</script>

<style lang="scss" scoped>
.select-item-input {
    margin-top: 10px;
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
