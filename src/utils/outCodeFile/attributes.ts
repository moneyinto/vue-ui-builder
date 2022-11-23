import { IWidgetOptions } from "@/types/slide/widget";

export const getWidgetOptions = (options?: IWidgetOptions) => {
    if (!options) return "";
    let attributes = "";
    Object.keys(options).forEach((key) => {
        if (typeof options[key] === "string") {
            attributes += ` ${key}="${options[key]}"`;
        } else {
            attributes += ` :${key}="${options[key]}"`;
        }
    });
    return attributes;
};
