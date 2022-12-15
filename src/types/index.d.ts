import { IWidgetList } from "@/config/widget";
import { IWidget } from "./slide/widget";

export interface IDragChange {
    added?: {
        element: IWidgetList & IWidget;
        newIndex: number;
    }
}

export interface IStoreState {
    widgetList: IWidget[];
    handleWidget: null | IWidget
}
