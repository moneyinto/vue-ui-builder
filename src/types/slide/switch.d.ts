import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface ISwitchOptions {
    disabled?: boolean;
    [key: string]: unknown;
}

export interface ISwitchWidget extends IBaseWidget {
    type: WidgetTypes.SWITCH;
    component: WidgetComponents.SWITCH;
    options?: ISwitchOptions;
}