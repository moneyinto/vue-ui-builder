import { IWidget } from "./widget";

/**
 * 页面配置
 */
export interface ISlide {
    name: string;
    widgetList: IWidget[];
}
