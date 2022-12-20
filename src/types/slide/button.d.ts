import { BUTTON_TYPES, WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface IButtonOptions {
    size?: "small" | "large" | "default",
    block?: boolean;
    type?: BUTTON_TYPES;
    plain?: boolean;
    link?: boolean;
    loading?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    autoInsertSpace?: boolean;
    icon?: string;
    [key: string]: unknown;
}

export interface IButtonWidget extends IBaseWidget {
    type: WidgetTypes.BUTTON;
    component: WidgetComponents.BUTTON;
    text: string;
    options?: IButtonOptions;
}
