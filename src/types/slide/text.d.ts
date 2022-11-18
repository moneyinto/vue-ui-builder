import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget, IWidget } from "./widget";

export interface ITextWidget extends IBaseWidget {
    type: WidgetTypes.TEXT;
    component: WidgetComponents.TEXT;
    text: string;
    widgetList?: IWidget[];
}
