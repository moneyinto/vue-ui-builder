import { WidgetComponents } from "@/config/widget";
import { ITextWidget } from "@/types/slide/text";
import { IWidget } from "@/types/slide/widget";

export const getWidgetOptions = (widget?: Exclude<IWidget, ITextWidget>) => {
    const options = widget?.options;
    if (!options) return "";
    let attributes = "";
    Object.keys(options).forEach((key) => {
        if (widget.component === WidgetComponents.INPUT_NUMBER && key === "placeholder") return;

        if (typeof options[key] === "string") {
            attributes += ` ${key}="${options[key]}"`;
        } else {
            attributes += ` :${key}="${options[key]}"`;
        }
    });

    return attributes;
};
