import { ISlide } from "@/types/slide";
import { beautifyHtmlCode } from "./beautify";
import { saveAs } from "file-saver";
import { generatorCode } from "./generator";

export const getVue3Code = (slide: ISlide) => {
    const code = generatorCode(slide);
    return beautifyHtmlCode(code);
};

export const saveFile = (fileContent: string, fileName?: string) => {
    const fileBlob = new Blob([fileContent], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(fileBlob, `${fileName || "default"}.vue`);
};
