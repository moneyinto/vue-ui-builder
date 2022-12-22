import { WidgetTypes } from "@/config/widget";
import { IFormWidget } from "@/types/slide/form";
import { IWidget } from "@/types/slide/widget";
import { getWidgetOptions } from "./attributes";
import { getSelectItemConfigHtml } from "./components/select";
import { getWidgetClassName, getWidgetStyle } from "./style";

export const formTypes = [
    WidgetTypes.INPUT,
    WidgetTypes.SELECT,
    WidgetTypes.DAET_TIME_PICKER,
    WidgetTypes.SWITCH
];

export const getSpecialConfigHtml = (
    widget: IWidget,
    formModelName?: string,
    formItemModelName?: string
) => {
    let specialConfigHtml = "";

    if (
        formModelName &&
        formItemModelName &&
        formTypes.indexOf(widget.type) > -1
    ) {
        specialConfigHtml += ` v-model="${formModelName}.${formItemModelName}"`;
    } else if ("modelName" in widget && widget.modelName) {
        specialConfigHtml += ` ${widget.type === WidgetTypes.FORM ? ":model" : "v-model"}="${widget.modelName}"`;
    }

    if ("rulesName" in widget && widget.rulesName) {
        specialConfigHtml += ` :rules="${widget.rulesName}"`;
    }

    return specialConfigHtml;
};

export const getFormButtonsHtml = (widget: IFormWidget) => {
    return `<el-form-item style="margin-top: 30px">
                <el-button type="primary" @click="submitForm(${widget.ref || "ruleFormRef"})">
                    提交
                </el-button>
                <el-button @click="resetForm(${widget.ref || "ruleFormRef"})">重置</el-button>
            </el-form-item>`;
};

const getEvents = (widget: IWidget) => {
    let events = "";
    if (widget.events?.click) {
        events += ` @click="${widget.events.click.name}(${(widget.events.click.input || []).join(", ")})"`;
    }
    if (widget.events?.change) {
        events += ` @change="${widget.events.change.name}(${(widget.events.change.input || []).join(", ")})"`;
    }
    if (widget.events?.input) {
        events += ` @input="${widget.events.input.name}(${(widget.events.input.input || []).join(", ")})"`;
    }
    return events;
};

export const getWidgetHtml = (
    widget: IWidget,
    html: string,
    formModelName?: string,
    formItemModelName?: string
) => {
    const attributes = "options" in widget ? getWidgetOptions(widget.options) : "";
    const style = getWidgetStyle(widget.style);
    const className = getWidgetClassName(widget.type, widget.classNames);
    const ref = widget.ref ? ` ref="${widget.ref}"` : "";
    let specialConfig = getSpecialConfigHtml(
        widget,
        formModelName,
        formItemModelName
    );
    let formButtons = "";
    switch (widget.type) {
    case WidgetTypes.SELECT_ITEM:
        specialConfig += getSelectItemConfigHtml(widget);
        break;
    case WidgetTypes.FORM:
        formButtons = getFormButtonsHtml(widget);
        break;
    }
    const events = getEvents(widget);
    const resultHtml = `<${widget.component}${ref}${specialConfig}${className}${style}${attributes}${events}>${"text" in widget ? widget.text : ""}${html}${formButtons}</${widget.component}>`;
    return resultHtml;
};
