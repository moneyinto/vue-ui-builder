import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface IRadioOptions {
    disabled?: boolean;
    size?: "small" | "large" | "default";
    [key: string]: unknown;
}

export interface IRadioWidget extends IBaseWidget {
    type: WidgetTypes.RADIO;
    component: WidgetComponents.RADIO;
    options?: IRadioOptions;
}

export interface IRadioGroupWidget extends IBaseWidget {
    type: WidgetTypes.RADIO_GROUP;
    component: WidgetComponents.RADIO_GROUP;
    options?: IRadioOptions;
    widgetList?: IRadioWidget[];
}
