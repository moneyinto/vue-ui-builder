import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget, IWidget } from "./widget";

interface ISpan {
    span: number;
    offset: number;
}

export interface IColOptions {
    span?: number;
    offset?: number;
    push?: number;
    pull?: number;
    xs?: number | ISpan;
    sm?: number | ISpan;
    md?: number | ISpan;
    lg?: number | ISpan;
    xl?: number | ISpan;
    tag?: string;
    [key: string]: unknown;
}

/**
 * 栅格col
 */
export interface IColWidget extends IBaseWidget {
    type: WidgetTypes.COL;
    component: WidgetComponents.COL;
    widgetList?: IWidget[];
    options?: IColOptions;
}

export interface IRowOptions {
    gutter?: number;
    justify?: "start" | "end" | "center" | "space-around" | "space-between" | "space-evenly";
    align?: "top" | "middle" | "bottom";
    tag?: string;
    [key: string]: unknown;
}

/**
 * 栅格row
 * 
 * type: 部件类型
 * 
 * component: 部件插件名
 * 
 * widgetList: 部件下嵌套部件
 * 
 * options: 插件使用配置
 */
export interface IRowWidget extends IBaseWidget {
    type: WidgetTypes.ROW;
    component: WidgetComponents.ROW;
    widgetList?: IWidget[];
    options?: IRowOptions;
}