import { IWidgetList, WidgetComponents, WidgetTypes } from "@/config/widget";
import { IButtonWidget } from "@/types/slide/button";
import { IDateTimePickerWidget, ITimePickerWidget } from "@/types/slide/dateTime";
import { IFormItemWidget, IFormWidget } from "@/types/slide/form";
import { IColWidget, IRowWidget } from "@/types/slide/grid";
import { IInputWidget } from "@/types/slide/input";
import { ISelectItemWidget, ISelectWidget } from "@/types/slide/select";
import { ISwitchWidget } from "@/types/slide/switch";
import { ITextWidget } from "@/types/slide/text";
import { IWidget } from "@/types/slide/widget";
import { createRandomCode } from "@/utils";

export default () => {
    const createElement = (element: IWidgetList) => {
        const id = createRandomCode();
        const name = element.name;
        let widget: IWidget;
        switch (element.type) {
        case WidgetTypes.TEXT:
            widget = createTextElement(id, name);
            break;
        case WidgetTypes.ROW:
            widget = createRowElement(id, name);
            break;
        case WidgetTypes.COL:
            widget = createColElement(id, name);
            break;
        case WidgetTypes.FORM:
            widget = createFormElement(id, name);
            break;
        case WidgetTypes.FORM_ITEM:
            widget = createFormItemElement(id, name);
            break;
        case WidgetTypes.INPUT:
            widget = createInputElement(id, name);
            break;
        case WidgetTypes.SELECT:
            widget = createSelectElement(id, name);
            break;
        case WidgetTypes.SELECT_ITEM:
            widget = createSelectItemElement(id, name, element.value || "");
            break;
        case WidgetTypes.DAET_TIME_PICKER:
            widget = createDateTimePickerElement(id, name);
            break;
        case WidgetTypes.TIME_PICKER:
            widget = createTimePickerElement(id, name);
            break;
        case WidgetTypes.SWITCH:
            widget = createSwitchElement(id, name);
            break;
        case WidgetTypes.BUTTON:
            widget = createButtonElement(id, name);
            break;
        }

        return widget!;
    };

    const createTextElement = (id: string, name: string): ITextWidget => {
        return {
            id,
            name,
            component: WidgetComponents.TEXT,
            type: WidgetTypes.TEXT,
            text: "我是普通文本"
        };
    };

    const createRowElement = (id: string, name: string): IRowWidget => {
        return {
            id,
            name,
            component: WidgetComponents.ROW,
            type: WidgetTypes.ROW,
            widgetList: []
        };
    };

    const createColElement = (id: string, name: string): IColWidget => {
        return {
            id,
            name,
            component: WidgetComponents.COL,
            type: WidgetTypes.COL,
            widgetList: []
        };
    };

    const createFormElement = (id: string, name: string): IFormWidget => {
        return {
            id,
            name,
            component: WidgetComponents.FORM,
            type: WidgetTypes.FORM,
            widgetList: [],
            options: {
                labelWidth: 100,
                labelPosition: "top"
            }
        };
    };

    const createFormItemElement = (id: string, name: string): IFormItemWidget => {
        return {
            id,
            name,
            component: WidgetComponents.FORM_ITEM,
            type: WidgetTypes.FORM_ITEM,
            widgetList: []
        };
    };

    const createInputElement = (id: string, name: string): IInputWidget => {
        return {
            id,
            name,
            component: WidgetComponents.INPUT,
            type: WidgetTypes.INPUT,
            options: {
                placeholder: "请输入"
            }
        };
    };

    const createSelectElement = (id: string, name: string): ISelectWidget => {
        return {
            id,
            name,
            component: WidgetComponents.SELECT,
            type: WidgetTypes.SELECT,
            widgetList: []
        };
    };

    const createSelectItemElement = (id: string, name: string, value: string): ISelectItemWidget => {
        return {
            id,
            name,
            value,
            component: WidgetComponents.SELECT_ITEM,
            type: WidgetTypes.SELECT_ITEM
        };
    };

    const createDateTimePickerElement = (id: string, name: string): IDateTimePickerWidget => {
        return {
            id,
            name,
            component: WidgetComponents.DAET_TIME_PICKER,
            type: WidgetTypes.DAET_TIME_PICKER
        };
    };

    const createTimePickerElement = (id: string, name: string): ITimePickerWidget => {
        return {
            id,
            name,
            component: WidgetComponents.TIME_PICKER,
            type: WidgetTypes.TIME_PICKER
        };
    };

    const createSwitchElement = (id: string, name: string): ISwitchWidget => {
        return {
            id,
            name,
            component: WidgetComponents.SWITCH,
            type: WidgetTypes.SWITCH
        };
    };

    const createButtonElement = (id: string, name: string): IButtonWidget => {
        return {
            id,
            name,
            text: "按钮",
            block: false,
            component: WidgetComponents.BUTTON,
            type: WidgetTypes.BUTTON
        };
    };

    return createElement;
};
