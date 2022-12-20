<template>
    <el-dialog
        title="样式编辑"
        width="500px"
        :before-close="cancel"
    >
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
import { PropType, ref, toRefs, watch } from "vue";

interface IStyleList {
    key: string;
    value: string;
}

const emit = defineEmits(["save", "close"]);

const props = defineProps({
    styles: {
        type: Object as PropType<IStyle>,
        required: true
    }
});

const { styles } = toRefs(props);
const styleList = ref<IStyleList[]>([]);

watch(styles, () => {
    styleList.value = [];
    for (const key in styles.value) {
        styleList.value.push({
            key,
            value: styles.value[key]
        });
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
    emit("save", resultStyles);
    emit("close");
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
