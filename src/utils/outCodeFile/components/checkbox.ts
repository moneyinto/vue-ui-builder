import { ICheckboxWidget } from "@/types/slide/checkbox";

export const getCheckboxConfigHtml = (widget: ICheckboxWidget) => {
    let specialConfigHtml = "";

    if (widget.name) {
        specialConfigHtml += ` label="${widget.name}"`;
    }

    return specialConfigHtml;
};
