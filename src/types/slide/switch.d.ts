import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface ISwitchOptions {
    [key: string]: unknown;
}

export interface ISwitchWidget extends IBaseWidget {
    type: WidgetTypes.SWITCH;
    component: WidgetComponents.SWITCH;
    options?: ISwitchOptions;
}