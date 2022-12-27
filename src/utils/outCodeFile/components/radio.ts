import { IRadioWidget } from "@/types/slide/radio";

export const getRadioConfigHtml = (widget: IRadioWidget) => {
    let specialConfigHtml = "";

    if (widget.name) {
        specialConfigHtml += ` label="${widget.name}"`;
    }

    if (widget.value) {
        specialConfigHtml += ` value="${widget.value}"`;
    }

    return specialConfigHtml;
};
