import { IClassNames } from "@/types/slide/base";
import { toLowerLine } from "../common";

export const getWidgetCss = (classNames?: IClassNames) => {
    if (!classNames) return "";
    let resultClassNames = "";
    Object.keys(classNames).forEach((classNamekey) => {
        let classStyle = "";
        const classNameObj = classNames[classNamekey];
        Object.keys(classNameObj).forEach(styleKey => {
            classStyle += `${toLowerLine(styleKey)}: ${classNameObj[styleKey]};`;
        });
        resultClassNames += `.${toLowerLine(classNamekey)}{${classStyle}}`;
    });
    return resultClassNames;
};
