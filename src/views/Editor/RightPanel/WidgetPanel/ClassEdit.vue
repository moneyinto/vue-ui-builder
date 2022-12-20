<template>
    <el-dialog
        title="样式编辑"
        width="500px"
        :modelValue="modelValue"
        :before-close="cancel"
        :z-index="1000"
    >
        <el-input v-model="name" style="margin-bottom: 20px;" placeholder="class命名"></el-input>
        <el-row
            class="style-in-class-input"
            :gutter="10"
            v-for="(item, index) in styleList"
            :key="index"
        >
            <el-col :span="11">
                <el-input
                    v-model="item.key"
                    placeholder="key"
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
                    @click="deleteStyleLine(index)"
                ></el-button>
            </el-col>
        </el-row>
        <el-button icon="CirclePlus" type="primary" link @click="addStyle">新增style</el-button>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="cancel()">取消</el-button>
                <el-button type="primary" @click="save()"> 保存 </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { IStyle } from "@/types/slide/base";
import { ElMessage } from "element-plus";
import { PropType, ref, toRefs, watch } from "vue";

interface IStyleList {
    key: string;
    value: string;
}

interface IClassName {
    key: string;
    value: IStyle;
}

const emit = defineEmits(["save", "close"]);

const props = defineProps({
    editClass: {
        type: Object as PropType<IClassName>
    },
    modelValue: {
        type: Boolean
    }
});

const { modelValue } = toRefs(props);
const name = ref("");
const styleList = ref<IStyleList[]>([]);

watch(modelValue, () => {
    if (modelValue.value) {
        if (props.editClass) {
            name.value = props.editClass.key;
            styleList.value = [];
            for (const key in props.editClass.value) {
                styleList.value.push({
                    key,
                    value: props.editClass.value[key]
                });
            }
        } else {
            name.value = "";
            styleList.value = [];
        }
    }
});

const addStyle = () => {
    styleList.value.push({
        key: "",
        value: ""
    });
};

const deleteStyleLine = (i: number) => {
    styleList.value.splice(i, 1);
};

const cancel = () => {
    emit("close");
};

const save = () => {
    const resultStyles: IStyle = {};
    styleList.value.forEach(style => {
        if (style.key && style.value) {
            resultStyles[style.key] = style.value;
        }
    });
    if (name.value === "") return ElMessage.warning("请输入class名字！");
    emit("save", { key: name.value, value: resultStyles });
};
</script>

<style lang="scss" scoped>
.style-in-class-input {
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
