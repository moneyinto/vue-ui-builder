import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export type ICustomObject<T> = {
    [key: string]: T;
}

export interface IInputOptions {
    placeholder?: string;
    [key: string]: unknown;
}

export interface IInputWidget extends IBaseWidget {
    type: WidgetTypes.INPUT;
    component: WidgetComponents.INPUT;
    options?: IInputOptions;
}