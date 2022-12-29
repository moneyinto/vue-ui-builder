import { WidgetComponents } from "@/config/widget";
import { ITextWidget } from "@/types/slide/text";
import { IWidget } from "@/types/slide/widget";

export const getWidgetOptions = (widget?: Exclude<IWidget, ITextWidget>) => {
    const options = widget?.options;
    if (!options) return "";
    let attributes = "";
    Object.keys(options).forEach((key) => {
        if (widget.component === WidgetComponents.INPUT_NUMBER && key === "placeholder") return;
        if (widget.component === WidgetComponents.IMAGE && !widget.preview && (key === "previewSrcList" || key === "initialIndex")) return;
        if (widget.component === WidgetComponents.IMAGE && widget.preview && key === "previewSrcList") {
            attributes += ` :${key}='${options[key] ? JSON.stringify(options[key]) : "[]"}'`;
            return;
        }

        if (typeof options[key] === "string") {
            attributes += ` ${key}="${options[key]}"`;
        } else {
            attributes += ` :${key}="${options[key]}"`;
        }
    });

    return attributes;
};
