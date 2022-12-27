<template>
    <el-form label-width="100px">
        <el-form-item label="是否禁用：">
            <el-switch v-model="formState.disabled" @change="updateDisabled" />
        </el-form-item>

        <el-form-item label="尺寸大小：">
            <el-radio-group v-model="formState.size" @change="updateSize">
                <el-radio-button label="small">S</el-radio-button>
                <el-radio-button label="default">D</el-radio-button>
                <el-radio-button label="large">L</el-radio-button>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="最小值：">
            <el-input-number
                style="width: 100%"
                v-model="formState.min"
                @change="updateMin"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="最大值：">
            <el-input-number
                style="width: 100%"
                v-model="formState.max"
                @change="updateMax"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="步长：">
            <el-input-number
                style="width: 100%"
                v-model="formState.step"
                @change="updateStep"
            ></el-input-number>
        </el-form-item>

        <el-form-item label="输入框：">
            <el-switch
                v-model="formState.showInput"
                @change="updateShowInput"
            />
        </el-form-item>

        <el-form-item label="控制按钮：">
            <el-switch
                v-model="formState.showInputControls"
                @change="updateShowInputControls"
            />
        </el-form-item>

        <el-form-item label="间断点：">
            <el-switch
                v-model="formState.showStops"
                @change="updateShowStops"
            />
        </el-form-item>

        <el-form-item label="提示信息：">
            <el-switch
                v-model="formState.showTooltip"
                @change="updateShowTooltip"
            />
        </el-form-item>

        <el-form-item label="选择范围：">
            <el-switch v-model="formState.range" @change="updateRange" />
        </el-form-item>

        <el-form-item label="垂直显示：">
            <el-switch v-model="formState.vertical" @change="updateVertical" />
        </el-form-item>

        <el-form-item>
            <el-input
                v-if="formState.vertical"
                v-model="formState.height"
                @change="updateHeight"
            ></el-input>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { ISliderOptions, ISliderWidget } from "@/types/slide/slider";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as ISliderWidget);

const formState = reactive<ISliderOptions>({
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    showInput: false,
    showInputControls: false,
    size: "default",
    showStops: false,
    showTooltip: false,
    range: false,
    vertical: false,
    height: "200px"
});

const initFormState = () => {
    formState.disabled = !!handleWidget.value.options?.disabled;
    formState.size = handleWidget.value.options?.size || "default";
    formState.min = handleWidget.value.options?.min || 0;
    formState.max = handleWidget.value.options?.max || 100;
    formState.step = handleWidget.value.options?.step || 1;
    formState.showInput = !!handleWidget.value.options?.showInput;
    formState.showInputControls =
        !!handleWidget.value.options?.showInputControls;
    formState.showStops = !!handleWidget.value.options?.showStops;
    formState.showTooltip = !!handleWidget.value.options?.showTooltip;
    formState.range = !!handleWidget.value.options?.range;
    formState.vertical = !!handleWidget.value.options?.vertical;
    formState.height = handleWidget.value.options?.height || "200px";
};

initFormState();

watch(handleWidget, initFormState);

const updateDisabled = (disabled: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.disabled = disabled;
};

const updateSize = (size: "small" | "default" | "large") => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.size = size;
};

const updateMin = (min: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.min = min;
};

const updateMax = (max: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.max = max;
};

const updateStep = (step: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    if (!handleWidget.value.options.step) handleWidget.value.options.step = step;
    handleWidget.value.options.step = step;
};

const updateShowInput = (showInput: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.showInput = showInput;
};

const updateShowInputControls = (showInputControls: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.showInputControls = showInputControls;
};

const updateShowStops = (showStops: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.showStops = showStops;
};

const updateShowTooltip = (showTooltip: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.showTooltip = showTooltip;
};

const updateRange = (range: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.range = range;
};

const updateVertical = (vertical: boolean) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.vertical = vertical;
    updateHeight(formState.height || "200px");
};

const updateHeight = (height: string) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.height = height;
};
</script>
