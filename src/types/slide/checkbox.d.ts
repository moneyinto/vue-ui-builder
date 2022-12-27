import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface ICheckboxOptions {
    disabled?: boolean;
    size?: "small" | "large" | "default";
    [key: string]: unknown;
}

export interface ICheckboxWidget extends IBaseWidget {
    type: WidgetTypes.CHECKBOX;
    component: WidgetComponents.CHECKBOX;
    options?: ICheckboxOptions;
}

export interface ICheckboxGroupWidget extends IBaseWidget {
    type: WidgetTypes.CHECKBOX_GROUP;
    component: WidgetComponents.CHECKBOX_GROUP;
    options?: ICheckboxOptions;
    widgetList?: ICheckboxWidget[];
}
