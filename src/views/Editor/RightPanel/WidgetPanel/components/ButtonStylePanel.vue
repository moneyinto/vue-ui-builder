<template>
    <el-form label-width="100px">
        <el-form-item label="文本内容：">
            <el-input v-model="formState.text" @input="updateContent">
            </el-input>
        </el-form-item>

        <el-form-item label="按钮类型：">
            <el-select v-model="formState.type" @change="updateType">
                <el-option
                    v-for="item in buttonTypes"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
        </el-form-item>

        <el-form-item label="尺寸大小：">
            <el-radio-group v-model="formState.size" @change="updateSize">
                <el-radio-button label="small">S</el-radio-button>
                <el-radio-button label="default">D</el-radio-button>
                <el-radio-button label="large">L</el-radio-button>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="按钮图标：">
            <el-input v-model="formState.icon" readonly>
                <template #append>
                    <el-button style="width: 80px" link @click="openSelectIcon"
                        >选择图标</el-button
                    >
                </template>
            </el-input>
        </el-form-item>

        <el-form-item label="块级元素：">
            <el-switch v-model="formState.block" @change="updateBlock" />
        </el-form-item>

        <el-form-item label="是否禁用：">
            <el-switch v-model="formState.disabled" @change="updateDisabled" />
        </el-form-item>

        <el-form-item label="朴素按钮：">
            <el-switch v-model="formState.plain" @change="updatePlain" />
        </el-form-item>

        <el-form-item label="链接按钮：">
            <el-switch v-model="formState.link" @change="updateLink" />
        </el-form-item>

        <el-form-item label="圆角按钮：">
            <el-switch v-model="formState.round" @change="updateRound" />
        </el-form-item>

        <el-form-item label="圆形按钮：">
            <el-switch v-model="formState.circle" @change="updateCircle" />
        </el-form-item>

        <el-form-item label="加载状态：">
            <el-switch v-model="formState.loading" @change="updateLoading" />
        </el-form-item>

        <el-form-item label="字符间隔：">
            <el-switch
                v-model="formState.autoInsertSpace"
                @change="updateAutoInsertSpace"
            />
        </el-form-item>

        <el-form-item label="事件：">
            <el-input v-model="formState.click" @input="updateClickEdit">
                <template #prepend> click </template>
                <template #append>
                    <el-button icon="edit" @click="openClickEdit"></el-button>
                </template>
            </el-input>
        </el-form-item>
    </el-form>

    <IconSelect v-model="showIconSelect" @select="selectIcon" />

    <EventEdit
        v-model="showEventEdit"
        :code="code"
        @close="showEventEdit = false"
        @save="saveEvent"
    />
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
import { useStore } from "@/store";
import { IButtonOptions, IButtonWidget } from "@/types/slide/button";
import { BUTTON_TYPES } from "@/config/widget";
import IconSelect from "@/components/IconSelect.vue";
import EventEdit from "./EventEdit.vue";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as IButtonWidget);

interface IFormState extends IButtonOptions {
    text: string;
    click: string;
}

const formState = reactive<IFormState>({
    type: BUTTON_TYPES.DEFAULT,
    text: "",
    size: "default",
    icon: "",
    block: false,
    disabled: false,
    plain: false,
    link: false,
    round: false,
    circle: false,
    loading: false,
    autoInsertSpace: false,
    click: ""
});

const buttonTypes = ref([
    BUTTON_TYPES.DEFAULT,
    BUTTON_TYPES.PRIMARY,
    BUTTON_TYPES.SUCCESS,
    BUTTON_TYPES.WARNING,
    BUTTON_TYPES.DANGER
]);

const initFormState = () => {
    formState.text = handleWidget.value.text;
    formState.type = handleWidget.value.options?.type || BUTTON_TYPES.DEFAULT;
    formState.icon = handleWidget.value.options?.icon;
    formState.block = !!handleWidget.value.options?.block;
    formState.disabled = !!handleWidget.value.options?.disabled;
    formState.plain = !!handleWidget.value.options?.plain;
    formState.link = !!handleWidget.value.options?.link;
    formState.round = !!handleWidget.value.options?.round;
    formState.circle = !!handleWidget.value.options?.circle;
    formState.loading = !!handleWidget.value.options?.loading;
    formState.autoInsertSpace = !!handleWidget.value.options?.autoInsertSpace;
    formState.click = handleWidget.value.events?.click?.name || "";
};

initFormState();

watch(handleWidget, initFormState);

const updateContent = (text: string) => {
    handleWidget.value.text = text;
};

const updateBlock = (block: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.block = block;
};

const updateDisabled = (disabled: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.disabled = disabled;
};

const updateType = (type: BUTTON_TYPES) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.type = type;
};

const updateSize = (size: "small" | "default" | "large") => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.size = size;
};

const updatePlain = (plain: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.plain = plain;
};

const updateLink = (link: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.link = link;
};

const updateRound = (round: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.round = round;
};

const updateCircle = (circle: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.circle = circle;
};

const updateLoading = (loading: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.loading = loading;
};

const updateAutoInsertSpace = (autoInsertSpace: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.autoInsertSpace = autoInsertSpace;
};

const showIconSelect = ref(false);
const openSelectIcon = () => {
    showIconSelect.value = true;
};

const selectIcon = (icon: string) => {
    showIconSelect.value = false;
    formState.icon = icon;
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.icon = icon;
};

const showEventEdit = ref(false);
const code = ref("");

const openClickEdit = () => {
    showEventEdit.value = true;
    code.value = handleWidget.value.events?.click?.content || "";
};

const updateClickEdit = () => {
    if (!handleWidget.value.events) handleWidget.value.events = {};
    if (!handleWidget.value.events.click) handleWidget.value.events.click = { name: formState.click, content: "" };
    handleWidget.value.events.click.name = formState.click;
};

const saveEvent = (code: string) => {
    showEventEdit.value = false;
    if (!handleWidget.value.events) handleWidget.value.events = {};
    if (!handleWidget.value.events.click) handleWidget.value.events.click = { name: formState.click, content: "" };
    handleWidget.value.events.click.content = code;
};
</script>
