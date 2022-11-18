import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface IDateTimeOptions {
    placeholder?: string;
    [key: string]: unknown;
}

export interface IDateTimePickerWidget extends IBaseWidget {
    type: WidgetTypes.DAET_TIME_PICKER;
    component: WidgetComponents.DAET_TIME_PICKER;
    options?: IDateTimeOptions;
}

export interface ITimePickerWidget extends IBaseWidget {
    type: WidgetTypes.TIME_PICKER;
    component: WidgetComponents.TIME_PICKER;
    options?: IDateTimeOptions;
}
