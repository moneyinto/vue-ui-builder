<template>
    <Screen :slide="slide" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Screen from "./components/Screen/index.vue";
import { WidgetComponents, WidgetTypes } from "./config/widget";
import { ISlide } from "./types/slide";
import { createRandomCode } from "./utils";

const slide = ref<ISlide>({
    widgetList: [
        {
            id: createRandomCode(),
            name: "栅格盒子",
            value: "grid",
            type: WidgetTypes.ROW,
            component: WidgetComponents.ROW,
            style: {
                width: "400px",
                backgroundColor: "red"
            },
            options: {
                gutter: 20
            },
            widgetList: [
                {
                    id: createRandomCode(),
                    name: "栅格col",
                    value: "col",
                    type: WidgetTypes.COL,
                    component: WidgetComponents.COL,
                    widgetList: [
                        {
                            id: createRandomCode(),
                            name: "文本1",
                            value: "text",
                            type: WidgetTypes.TEXT,
                            component: WidgetComponents.TEXT,
                            text: "我是第一格"
                        }
                    ],
                    options: {
                        span: 12
                    }
                },
                {
                    id: createRandomCode(),
                    name: "栅格col",
                    value: "col",
                    type: WidgetTypes.COL,
                    component: WidgetComponents.COL,
                    widgetList: [
                        {
                            id: createRandomCode(),
                            name: "文本2",
                            value: "text",
                            type: WidgetTypes.TEXT,
                            component: WidgetComponents.TEXT,
                            text: "我是第二格"
                        }
                    ],
                    options: {
                        span: 12
                    }
                }
            ]
        },
        {
            id: createRandomCode(),
            name: "活动表单",
            value: "activity",
            type: WidgetTypes.FORM,
            component: WidgetComponents.FORM,
            style: {
                width: "600px",
                padding: "10px 20px"
            },
            widgetList: [
                {
                    id: createRandomCode(),
                    name: "活动名称",
                    value: "activityName",
                    type: WidgetTypes.FORM_ITEM,
                    component: WidgetComponents.FORM_ITEM,
                    options: {
                        prop: "activityName",
                        label: "活动名称",
                        required: true,
                        rules: [
                            {
                                required: true,
                                message: "请填写活动名称"
                            }
                        ]
                    },
                    widgetList: [
                        {
                            id: createRandomCode(),
                            name: "活动名称输入框",
                            value: "activityName",
                            type: WidgetTypes.INPUT,
                            component: WidgetComponents.INPUT
                        }
                    ]
                }
            ]
        }
    ]
});
</script>

<style scoped></style>
