import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface ISelectOptions {
    placeholder?: string;
    [key: string]: unknown;
}

export interface ISelectWidget extends IBaseWidget {
[x: string]: any;
    type: WidgetTypes.SELECT;
    component: WidgetComponents.SELECT;
    options?: ISelectOptions;
    widgetList?: ISelectItemWidget[];
}

export interface ISelectItemWidget extends IBaseWidget {
    type: WidgetTypes.SELECT_ITEM;
    component: WidgetComponents.SELECT_ITEM;
    options?: ISelectOptions;
}