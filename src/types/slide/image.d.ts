import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget } from "./widget";

export interface IImageOptions {
    src?: string;
    previewSrcList?: string[];
    fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    initialIndex?: number;
    [key: string]: unknown;
}

export interface IImageWidget extends IBaseWidget {
    type: WidgetTypes.IMAGE;
    component: WidgetComponents.IMAGE;
    placeholder: boolean;
    placeholderText: string;
    preview: boolean;
    options?: IImageOptions;
}
