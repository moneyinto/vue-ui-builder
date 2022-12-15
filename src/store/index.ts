import { previewSlide } from "@/data/preview";
import { IStoreState } from "@/types";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state: (): IStoreState => ({
        widgetList: previewSlide.widgetList,
        handleWidget: null
    })
});
