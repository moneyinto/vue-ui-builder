import { WidgetComponents, WidgetTypes } from "@/config/widget";
import { IBaseWidget, IWidget } from "./widget";

export interface ICardOptions {
    shadow?: "always" | "never" | "hover"; 
    [key: string]: unknown;
}

export interface ICardWidget extends IBaseWidget {
    type: WidgetTypes.CARD;
    component: WidgetComponents.CARD;
    header: boolean;
    headerText: string;
    options?: ICardOptions;
    widgetList: IWidget[];
}
