<template>
    <el-form label-width="100px">
        <el-form-item label="图片链接：">
            <el-input
                placeholder="请输入图片链接"
                v-model="formState.src"
                @input="updateSrc"
            >
            </el-input>
        </el-form-item>

        <el-form-item label="适应方式：">
            <el-select v-model="formState.fit" @change="updateFit">
                <el-option label="fill" value="fill" />
                <el-option label="contain" value="contain" />
                <el-option label="cover" value="cover" />
                <el-option label="none" value="none" />
                <el-option label="scale-down" value="scale-down" />
            </el-select>
            <div class="form-item-tip">**请先设置宽高度样式**</div>
        </el-form-item>

        <el-form-item label="占位内容：">
            <el-switch v-model="formState.placeholder" @change="updatePlaceholder" />
            <el-input
                v-if="formState.placeholder"
                placeholder="请输入占位内容"
                v-model="formState.placeholderText"
                @input="updatePlaceholderText"
            />
        </el-form-item>

        <el-form-item label="是否预览：">
            <el-switch v-model="formState.preview" @change="updatePreview" />
        </el-form-item>

        <el-form-item label="预览图片：" v-if="formState.preview">
            <el-button block @click="addPreviewImage()">
                新增预览图片
            </el-button>
            <div
                class="preview-image-item"
                v-for="(item, index) in formState.previewSrcList"
                :key="index"
            >
                <el-input
                    v-model="formState.previewSrcList![index]"
                    @change="updatePreviewSrcList()"
                    placeholder="请输入预览图片链接"
                />
                <el-button
                    class="delete-image-btn"
                    type="danger"
                    text
                    icon="Delete"
                    @click.stop="deleteImageItem(index)"
                ></el-button>
            </div>
        </el-form-item>

        <el-form-item label="预览索引：" v-if="formState.preview">
            <el-input-number
                :min="0"
                :max="formState.previewSrcList!.length - 1"
                v-model="formState.initialIndex"
                @change="updateInitialIndex"
            />
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import { IImageOptions, IImageWidget } from "@/types/slide/image";

const store = useStore();
const handleWidget = computed(() => store.handleWidget as IImageWidget);

interface IFormState extends IImageOptions {
    placeholder: boolean;
    placeholderText: string;
    preview: boolean;
}

const formState = reactive<IFormState>({
    placeholder: false,
    placeholderText: "",
    src: "",
    fit: "fill",
    previewSrcList: [],
    preview: false,
    initialIndex: 0
});

const initFormState = () => {
    formState.src = handleWidget.value.options?.src || "";
    formState.preview = handleWidget.value.preview;
    formState.placeholder = handleWidget.value.placeholder;
    formState.placeholderText = handleWidget.value.placeholderText;
    formState.fit = handleWidget.value.options?.fit || "fill";
    formState.previewSrcList = handleWidget.value.options?.previewSrcList || [];
    formState.initialIndex = handleWidget.value.options?.initialIndex || 0;
};

let stashPreviewSrcList: string[] = [];

initFormState();

watch(handleWidget, initFormState);

const updateSrc = (src: string) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.src = src;
};

const updatePreviewSrcList = () => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.previewSrcList = formState.previewSrcList;
};

const deleteImageItem = (i: number) => {
    formState.previewSrcList!.splice(i, 1);
    updatePreviewSrcList();
    if (formState.initialIndex! >= formState.previewSrcList!.length) {
        formState.initialIndex = formState.previewSrcList!.length - 1;
    }
};

const addPreviewImage = () => {
    formState.previewSrcList?.push("");
    updatePreviewSrcList();
};

const updatePreview = (preview: boolean) => {
    handleWidget.value.preview = preview;
    if (preview) {
        formState.previewSrcList = stashPreviewSrcList;
    } else {
        stashPreviewSrcList = JSON.parse(JSON.stringify(formState.previewSrcList || "[]"));
        formState.previewSrcList = [];
    }
    updatePreviewSrcList();
};

const updateFit = (
    fit: "fill" | "contain" | "cover" | "none" | "scale-down"
) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.fit = fit;
};

const updateInitialIndex = (initialIndex: number) => {
    if (!handleWidget.value.options) handleWidget.value.options = {};
    handleWidget.value.options.initialIndex = initialIndex;
};

const updatePlaceholder = (placeholder: boolean) => {
    formState.placeholder = placeholder;
    handleWidget.value.placeholder = placeholder;
};

const updatePlaceholderText = (placeholderText: string) => {
    handleWidget.value.placeholderText = placeholderText;
};
</script>

<style lang="scss" scoped>
.form-item-tip {
    font-size: 14px;
    color: #888;
    font-style: italic;
}

.preview-image-item {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 15px;
}

.delete-image-btn {
    padding: 0;
    margin-left: 10px;
}
</style>
