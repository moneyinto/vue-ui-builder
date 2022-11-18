import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface IInputOptions {
    [key: string]: unknown;
}

export interface IInputWidget extends IBaseWidget {
    type: WidgetTypes.INPUT;
    component: WidgetComponents.INPUT;
    widgetList?: IWidget[];
    options?: IInputOptions;
}