import { ISelectItemWidget } from "@/types/slide/select";

export const getSelectItemConfigHtml = (widget: ISelectItemWidget) => {
    let specialConfigHtml = "";

    if (widget.name) {
        specialConfigHtml += ` label="${widget.name}"`;
    }

    if (widget.value) {
        specialConfigHtml += ` value="${widget.value}"`;
    }

    return specialConfigHtml;
};
