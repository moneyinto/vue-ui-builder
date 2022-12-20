<template>
    <div class="element-panel">
        <el-form label-width="100px">
            <el-form-item label="部件命名：">
                <el-input
                    v-model="formState.name"
                    @change="updateName"
                ></el-input>
            </el-form-item>

            <el-form-item label="命名空间：">
                <el-input
                    v-model="formState.value"
                    @change="updateValue"
                ></el-input>
            </el-form-item>

            <el-form-item label="ref命名：">
                <el-input
                    v-model="formState.ref"
                    @change="updateRef"
                ></el-input>
            </el-form-item>

            <el-form-item label="styleInClass：">
                <el-button
                    block
                    @click="openStyleInClassEditor()"
                >
                    编辑style
                </el-button>
            </el-form-item>

            <el-form-item label="style：">
                <el-button
                    block
                    @click="openStyleEditor()"
                >
                    编辑style
                </el-button>
            </el-form-item>

            <el-form-item label="class：">
                <el-button
                    block
                    @click="addClass()"
                >
                    新增Class
                </el-button>
                <div class="class-list">
                    <div
                        class="class-item"
                        v-for="(item, index) in formState.classNames"
                        :key="index"
                    >
                        {{ item.key }}

                        <span>
                            <el-button
                                class="class-item-btn"
                                type="primary"
                                text
                                icon="Edit"
                                @click.stop="editClassItem(index)"
                            ></el-button>
                            <el-button
                                class="class-item-btn"
                                type="danger"
                                text
                                icon="Delete"
                                @click.stop="deleteClassItem(index)"
                            ></el-button>
                        </span>
                    </div>
                </div>
            </el-form-item>
        </el-form>

        <component
            v-if="handleWidget"
            :is="currentPanelComponent"
        ></component>

        <StyleEdit
            :styles="styles"
            v-model="showStyleEditor"
            @save="saveStyle"
            @close="showStyleEditor = false"
        />

        <ClassEdit
            :editClass="className"
            v-model="showClassEditor"
            @save="saveClassName"
            @close="showClassEditor = false"
        />
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { IClassNames, IStyle } from "@/types/slide/base";
import { IWidget } from "@/types/slide/widget";
import { computed, ComputedRef, reactive, ref, watch } from "vue";
import StyleEdit from "./StyleEdit.vue";
import ClassEdit from "./ClassEdit.vue";
import InputStylePanel from "./components/InputStylePanel.vue";
import { ElMessage } from "element-plus";
import { WidgetTypes } from "@/config/widget";
import SelectStylePanel from "./components/SelectStylePanel.vue";
import DatePickerStylePanel from "./components/DatePickerStylePanel.vue";
import TimePickerStylePanel from "./components/TimePickerStylePanel.vue";
import TextStylePanel from "./components/TextStylePanel.vue";
import RowStylePanel from "./components/RowStylePanel.vue";
import ColStylePanel from "./components/ColStylePanel.vue";
import FormItemStylePanel from "./components/FormItemStylePanel.vue";
import FormStylePanel from "./components/FormStylePanel.vue";
import SwitchStylePanel from "./components/SwitchStylePanel.vue";

const store = useStore();
const handleWidget = computed<IWidget>(() => store.handleWidget!);

interface IClassName {
    key: string;
    value: IStyle;
}

interface IFormState {
    name: string;
    value: string;
    ref: string;
    classNames: IClassName[]
}

const formState = reactive<IFormState>({
    name: "",
    value: "",
    ref: "",
    classNames: []
});

const currentPanelComponent: ComputedRef | null = computed(() => {
    if (!handleWidget.value) return null;

    const panelMap = {
        [WidgetTypes.ROW]: RowStylePanel,
        [WidgetTypes.COL]: ColStylePanel,
        [WidgetTypes.FORM]: FormStylePanel,
        [WidgetTypes.FORM_ITEM]: FormItemStylePanel,
        [WidgetTypes.INPUT]: InputStylePanel,
        [WidgetTypes.TEXT]: TextStylePanel,
        [WidgetTypes.SELECT]: SelectStylePanel,
        [WidgetTypes.SELECT_ITEM]: null,
        [WidgetTypes.SWITCH]: SwitchStylePanel,
        [WidgetTypes.DAET_TIME_PICKER]: DatePickerStylePanel,
        [WidgetTypes.TIME_PICKER]: TimePickerStylePanel
    };
    return panelMap[handleWidget.value.type] || null;
});

const initFormState = () => {
    formState.name = handleWidget.value.name;
    formState.value = handleWidget.value.value || "";
    formState.ref = handleWidget.value.ref || "";

    const classNames: IClassName[] = [];
    if (handleWidget.value.classNames) {
        for (const key in handleWidget.value.classNames) {
            classNames.push({
                key,
                value: handleWidget.value.classNames[key]
            });
        }
    }
    formState.classNames = classNames;
};

initFormState();

watch(handleWidget, initFormState);

const updateName = () => {
    store.handleWidget!.name = formState.name;
};

const updateValue = () => {
    store.handleWidget!.value = formState.value;
};

const updateRef = () => {
    store.handleWidget!.ref = formState.ref;
};

const showStyleEditor = ref(false);
const styles = ref<IStyle>({});
let isStyleInClass = false;

const openStyleInClassEditor = () => {
    styles.value = handleWidget.value.styleInClass || {};
    isStyleInClass = true;
    showStyleEditor.value = true;
};

const openStyleEditor = () => {
    styles.value = handleWidget.value.style || {};
    isStyleInClass = false;
    showStyleEditor.value = true;
};

const saveStyle = (resultStyles: IStyle) => {
    if (isStyleInClass) {
        handleWidget.value.styleInClass = resultStyles;
    } else {
        handleWidget.value.style = resultStyles;
    }
};

const showClassEditor = ref(false);
const className = ref<IClassName>();
const addClass = () => {
    className.value = undefined;
    showClassEditor.value = true;
};

const editClassItem = (i: number) => {
    className.value = formState.classNames[i];
    showClassEditor.value = true;
};

const deleteClassItem = (i: number) => {
    formState.classNames.splice(i, 1);
    updateClassName();
};

const saveClassName = (resultClass: IClassName) => {
    if (className.value) {
        // 编辑
        // 判断名字是否重复
        if (formState.classNames.filter(item => item.key !== className.value!.key).findIndex(item => item.key === resultClass.key) > -1) {
            ElMessage.warning("class名字不能重复！");
        } else {
            const index = formState.classNames.findIndex(item => item.key === className.value!.key);
            formState.classNames[index] = resultClass;
            showClassEditor.value = false;
            updateClassName();
        }
    } else {
        // 新增
        if (formState.classNames.findIndex(item => item.key === resultClass.key) > -1) {
            ElMessage.warning("class名字不能重复！");
        } else {
            formState.classNames.push(resultClass);
            showClassEditor.value = false;
            updateClassName();
        }
    }
};

const updateClassName = () => {
    const classNames: IClassNames = {};
    formState.classNames.forEach(className => {
        classNames[className.key] = className.value;
    });
    handleWidget.value.classNames = classNames;
};
</script>

<style lang="scss" scoped>
.class-list {
    flex: 1;
}

.class-item {
    padding: 0 10px;
    border: 1px dashed #ccc;
    line-height: 1;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .class-item-btn {
        padding: 0;
    }
}
</style>
