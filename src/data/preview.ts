import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { ISlide } from "@/types/slide";
import { createRandomCode } from "@/utils";

export const previewSlide: ISlide = {
    name: "testGenerator",
    widgetList: [
        {
            id: createRandomCode(),
            name: "栅格盒子",
            value: "grid",
            type: WidgetTypes.ROW,
            component: WidgetComponents.ROW,
            classNames: {
                lyxMyRow: {
                    width: "400px",
                    backgroundColor: "red"
                }
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
            modelName: "modelForm",
            ref: "modelFormRef",
            classNames: {
                elFormVertical: {
                    width: "600px",
                    padding: "10px 20px"
                }
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
                        required: true
                    },
                    rulesName: "activityNameRules",
                    rules: [
                        {
                            required: true,
                            message: "请填写活动名称"
                        }
                    ],
                    widgetList: [
                        {
                            id: createRandomCode(),
                            name: "活动名称输入框",
                            value: "activityName",
                            type: WidgetTypes.INPUT,
                            component: WidgetComponents.INPUT,
                            options: {
                                placeholder: "请输入活动名称"
                            }
                        }
                    ]
                },
                {
                    id: createRandomCode(),
                    name: "活动地址",
                    value: "activityAddress",
                    type: WidgetTypes.FORM_ITEM,
                    component: WidgetComponents.FORM_ITEM,
                    options: {
                        prop: "activityAddress",
                        label: "活动地址",
                        required: true
                    },
                    rulesName: "activityAddressRules",
                    rules: [
                        {
                            required: true,
                            message: "请选择活动地址"
                        }
                    ],
                    widgetList: [
                        {
                            id: createRandomCode(),
                            name: "活动地址选择框",
                            value: "activityAddress",
                            type: WidgetTypes.SELECT,
                            component: WidgetComponents.SELECT,
                            options: {
                                placeholder: "请选择活动地址"
                            },
                            style: {
                                width: "100%"
                            },
                            widgetList: [
                                {
                                    id: createRandomCode(),
                                    name: "北京",
                                    value: "beijing",
                                    type: WidgetTypes.SELECT_ITEM,
                                    component: WidgetComponents.SELECT_ITEM
                                },
                                {
                                    id: createRandomCode(),
                                    name: "上海",
                                    value: "shanghai",
                                    type: WidgetTypes.SELECT_ITEM,
                                    component: WidgetComponents.SELECT_ITEM
                                },
                                {
                                    id: createRandomCode(),
                                    name: "天津",
                                    value: "tianjin",
                                    type: WidgetTypes.SELECT_ITEM,
                                    component: WidgetComponents.SELECT_ITEM
                                },
                                {
                                    id: createRandomCode(),
                                    name: "重庆",
                                    value: "chongqing",
                                    type: WidgetTypes.SELECT_ITEM,
                                    component: WidgetComponents.SELECT_ITEM
                                }
                            ]
                        }
                    ]
                },
                {
                    id: createRandomCode(),
                    name: "活动时间",
                    value: "activityTime",
                    type: WidgetTypes.FORM_ITEM,
                    component: WidgetComponents.FORM_ITEM,
                    options: {
                        label: "活动时间",
                        required: true
                    },
                    widgetList: [
                        {
                            id: createRandomCode(),
                            name: "",
                            value: "",
                            type: WidgetTypes.COL,
                            component: WidgetComponents.COL,
                            options: {
                                span: 11
                            },
                            widgetList: [
                                {
                                    id: createRandomCode(),
                                    name: "",
                                    value: "",
                                    type: WidgetTypes.FORM_ITEM,
                                    component: WidgetComponents.FORM_ITEM,
                                    options: {
                                        prop: "activityDate",
                                        required: true
                                    },
                                    rulesName: "activityDateRules",
                                    rules: [
                                        {
                                            required: true,
                                            message: "请选择活动日期",
                                            trigger: "change"
                                        }
                                    ],
                                    widgetList: [
                                        {
                                            id: createRandomCode(),
                                            name: "",
                                            value: "",
                                            type: WidgetTypes.DAET_TIME_PICKER,
                                            component: WidgetComponents.DAET_TIME_PICKER,
                                            style: {
                                                width: "100%"
                                            },
                                            options: {
                                                type: "date",
                                                placeholder: "请选择活动日期"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: createRandomCode(),
                            name: "",
                            value: "",
                            type: WidgetTypes.COL,
                            component: WidgetComponents.COL,
                            style: {
                                textAlign: "center"
                            },
                            options: {
                                span: 2
                            },
                            widgetList: [
                                {
                                    id: createRandomCode(),
                                    name: "",
                                    value: "",
                                    type: WidgetTypes.TEXT,
                                    component: WidgetComponents.TEXT,
                                    text: "-"
                                }
                            ]
                        },
                        {
                            id: createRandomCode(),
                            name: "",
                            value: "",
                            type: WidgetTypes.COL,
                            component: WidgetComponents.COL,
                            options: {
                                span: 11
                            },
                            widgetList: [
                                {
                                    id: createRandomCode(),
                                    name: "",
                                    value: "",
                                    type: WidgetTypes.FORM_ITEM,
                                    component: WidgetComponents.FORM_ITEM,
                                    options: {
                                        prop: "activityTime",
                                        required: true
                                    },
                                    rulesName: "activityTimeRules",
                                    rules: [
                                        {
                                            required: true,
                                            message: "请选择活动时间",
                                            trigger: "change"
                                        }
                                    ],
                                    widgetList: [
                                        {
                                            id: createRandomCode(),
                                            name: "",
                                            value: "",
                                            type: WidgetTypes.TIME_PICKER,
                                            component: WidgetComponents.TIME_PICKER,
                                            style: {
                                                width: "100%"
                                            },
                                            options: {
                                                format: "HH:mm",
                                                placeholder: "请选择活动时间"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: createRandomCode(),
                    name: "必须参加",
                    value: "join",
                    type: WidgetTypes.FORM_ITEM,
                    component: WidgetComponents.FORM_ITEM,
                    options: {
                        label: "必须参加",
                        prop: "join"
                    },
                    widgetList: [
                        {
                            id: createRandomCode(),
                            name: "",
                            value: "",
                            type: WidgetTypes.SWITCH,
                            component: WidgetComponents.SWITCH
                        }
                    ]
                }
            ]
        }
    ]
};
