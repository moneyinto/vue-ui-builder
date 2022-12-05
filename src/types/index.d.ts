import { IWidgetList } from "@/config/widget";
import { IWidget } from "./slide/widget";

export interface IDragChange {
    added?: {
        element: IWidgetList;
        newIndex: number;
    }
}

export interface IStoreState {
    widgetList: IWidget[];
}
