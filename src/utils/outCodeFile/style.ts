import { WidgetTypes } from "@/config/widget";
import { IClassNames, IStyle } from "@/types/slide/base";
import { toLowerLine } from "../common";

export const getWidgetStyle = (style?: IStyle) => {
    if (!style) return "";
    let resultStyle = "";
    Object.keys(style).forEach((key) => {
        resultStyle += `${toLowerLine(key)}:${style[key]};`;
    });
    return ` style="${resultStyle}"`;
};

export const getWidgetClassName = (widgetType: string, classNames?: IClassNames) => {
    const isNeedAdjustClass = widgetType === WidgetTypes.TIME_PICKER || widgetType === WidgetTypes.DAET_TIME_PICKER;
    if (!classNames && !isNeedAdjustClass) return "";
    let resultClassNames = ` class="${isNeedAdjustClass ? "lyx-adjust__prefix " : ""}`;
    if (classNames) {
        Object.keys(classNames).forEach((key) => {
            resultClassNames += `${toLowerLine(key)} `;
        });
    }
    return resultClassNames.replace(/(\s*$)/g, "") + `"`;
};
