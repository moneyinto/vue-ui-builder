import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget, IWidget } from "./widget";
import type { FormRules, FormItemRule } from "element-plus";

/**
 * form
 */
export interface IFormOptions {
    ref?: string;
    inline?: boolean;
    labelPosition?: "left" | "right" | "top";
    labelWidth?: string | number;
    [key: string]: unknown;
}

export interface IFormWidget extends IBaseWidget {
    type: WidgetTypes.FORM;
    component: WidgetComponents.FORM;
    widgetList?: IFormItemWidget[];
    options?: IFormOptions;
    modelName?: string;
    rules?: FormRules;
    rulesName?: string;
}

/**
 * form-item
 */
export interface IFormItemOptions {
    prop?: string;
    required?: boolean;
    [key: string]: unknown;
}

export interface IFormItemWidget extends IBaseWidget {
    type: WidgetTypes.FORM_ITEM;
    component: WidgetComponents.FORM_ITEM;
    widgetList?: IWidget[];
    options?: IFormItemOptions;
    rules?: FormItemRule[];
    rulesName?: string;
}