import { IClassNames, IStyle } from "./base";
import { IDateTimeOptions, IDateTimePickerWidget, ITimePickerWidget } from "./dateTime";
import {
    IFormItemOptions,
    IFormItemWidget,
    IFormOptions,
    IFormWidget
} from "./form";
import { IColOptions, IColWidget, IRowOptions, IRowWidget } from "./grid";
import { IInputOptions, IInputWidget } from "./input";
import { ISelectItemWidget, ISelectOptions, ISelectWidget } from "./select";
import { ITextWidget } from "./text";

/**
 * 小部件基础
 *
 * id: 部件唯一标识
 *
 * name: 部件命名 中文名 为了方便可读
 *
 * value: 部件命名 英文名 为了方便创建变量及样式的唯一性
 *
 * styleInClass: 针对部件的样式调整，将给部件生成class名，并将样式写入到该class名下，class名生成规则 `MV-${当前页的value作为命名空间}-${当前部件的value作为目标部件}__${当前部件类型type}`
 *
 * classNames: 部件自定义Class及对应的样式
 *
 * style: 部件自定义style样式
 */
export interface IBaseWidget {
    id: string;
    name: string;
    value?: string;
    styleInClass?: IStyle;
    classNames?: IClassNames;
    style?: IStyle;
}

/**
 * 小部件集合
 */
export type IWidget =
    | ITextWidget
    | IRowWidget
    | IColWidget
    | IFormWidget
    | IFormItemWidget
    | IInputWidget
    | ISelectWidget
    | ISelectItemWidget
    | IDateTimePickerWidget
    | ITimePickerWidget;

export type IWidgetOptions =
    | IColOptions
    | IRowOptions
    | IFormOptions
    | IFormItemOptions
    | IInputOptions
    | ISelectOptions
    | IDateTimeOptions;
