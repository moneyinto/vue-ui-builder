import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface ISelectOptions {
    placeholder?: string;
    disabled?: boolean;
    [key: string]: unknown;
}

export interface ISelectWidget extends IBaseWidget {
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