export const enum WidgetTypes {
    TEXT = "text",
    ROW = "row",
    COL = "col",
    FORM = "form",
    FORM_ITEM = "form-item",
    INPUT = "input",
    SELECT = "select",
    SELECT_ITEM = "select-item",
    DAET_TIME_PICKER = "date-picker",
    TIME_PICKER = "time-picker",
    SWITCH = "switch"
}

export const enum WidgetComponents {
    TEXT = "span",
    ROW = "el-row",
    COL = "el-col",
    FORM = "el-form",
    FORM_ITEM = "el-form-item",
    INPUT = "el-input",
    SELECT = "el-select",
    SELECT_ITEM = "el-option",
    DAET_TIME_PICKER = "el-date-picker",
    TIME_PICKER = "el-time-picker",
    SWITCH = "el-switch"
}

export interface IWidgetList {
    name: string;
    component: WidgetComponents;
    type: WidgetTypes.TEXT | WidgetTypes.ROW | WidgetTypes.COL | WidgetTypes.FORM | WidgetTypes.FORM_ITEM | WidgetTypes.INPUT | WidgetTypes.SELECT | WidgetTypes.SELECT_ITEM | WidgetTypes.DAET_TIME_PICKER | WidgetTypes.TIME_PICKER | WidgetTypes.SWITCH;
    icon: string;
}

interface IWidgetGroup {
    name: string;
    icon: string;
    children: IWidgetList[]
}

export const WidgetGroupList: IWidgetGroup[] = [
    {
        name: "文本类型",
        icon: "",
        children: [
            {
                name: "普通文本",
                component: WidgetComponents.TEXT,
                type: WidgetTypes.TEXT,
                icon: ""
            }
        ]
    },
    {
        name: "布局类型",
        icon: "",
        children: [
            {
                name: "行容器(row)",
                component: WidgetComponents.ROW,
                type: WidgetTypes.ROW,
                icon: ""
            },
            {
                name: "列容器(col)",
                component: WidgetComponents.COL,
                type: WidgetTypes.COL,
                icon: ""
            }
        ]
    },
    {
        name: "表单类型",
        icon: "",
        children: [
            {
                name: "表单容器(form)",
                component: WidgetComponents.FORM,
                type: WidgetTypes.FORM,
                icon: ""
            },
            {
                name: "表单容器(form-item)",
                component: WidgetComponents.FORM_ITEM,
                type: WidgetTypes.FORM_ITEM,
                icon: ""
            },
            {
                name: "文本框",
                component: WidgetComponents.INPUT,
                type: WidgetTypes.INPUT,
                icon: ""
            },
            {
                name: "选择框",
                component: WidgetComponents.SELECT,
                type: WidgetTypes.SELECT,
                icon: ""
            },
            {
                name: "日期选择",
                component: WidgetComponents.DAET_TIME_PICKER,
                type: WidgetTypes.DAET_TIME_PICKER,
                icon: ""
            },
            {
                name: "时间选择",
                component: WidgetComponents.TIME_PICKER,
                type: WidgetTypes.TIME_PICKER,
                icon: ""
            },
            {
                name: "开关",
                component: WidgetComponents.SWITCH,
                type: WidgetTypes.SWITCH,
                icon: ""
            }
        ]
    }
];
