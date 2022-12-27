import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface ISliderOptions {
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
    showInput?: boolean;
    showInputControls?: boolean;
    size?: "small" | "large" | "default";
    showStops?: boolean;
    showTooltip?: boolean;
    range?: boolean;
    vertical?: boolean;
    height?: string;
    [key: string]: unknown;
}

export interface ISliderWidget extends IBaseWidget {
    type: WidgetTypes.SLIDER;
    component: WidgetComponents.SLIDER;
    options?: ISliderOptions;
}