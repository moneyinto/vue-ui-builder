import { WidgetTypes } from "@/config/widget";
import { ISlide } from "@/types/slide";
import { ICustomObject } from "@/types/slide/input";
import { IWidget } from "@/types/slide/widget";
import { getWidgetCss } from "./css";
import { getWidgetHtml } from "./html";
import { getWidgetJs } from "./js";

const dealWidget = (widget: IWidget, imports: ICustomObject<string[]>, formModelName?: string, formItemModelName?: string, formModel?: { [key: string]: string }) => {
    let childHtml = "";
    let childJs = "";
    let childScopedCss = "";

    let resultHtml = "";
    let resultJs = "";
    let resultScopedCss = "";
    let _formModel = formModel;

    if ("widgetList" in widget && widget.widgetList) {
        // form表单 model变量要进行特殊处理
        let _formModelName = formModelName || "";
        let _formItemModelName = formItemModelName || "";
        if (widget.type === WidgetTypes.FORM) {
            _formModelName = widget.modelName || "modelForm";
            _formModel = {};
        }
        if (widget.type === WidgetTypes.FORM_ITEM) {
            _formItemModelName = widget.options?.prop || "";
            if (_formModel && _formItemModelName) _formModel[_formItemModelName] = "";
        }

        const { html, js, scopedCss } = dealWidgetList(widget.widgetList, imports, _formModelName, _formItemModelName, _formModel);

        childHtml = html;
        childJs = js;
        childScopedCss = scopedCss;
    }

    resultHtml = getWidgetHtml(widget, childHtml, formModelName, formItemModelName);
    resultScopedCss = getWidgetCss(widget.classNames);
    resultJs = getWidgetJs(widget, imports, _formModel);

    return { html: resultHtml, js: childJs + resultJs, scopedCss: resultScopedCss };
};

const dealWidgetList = (widgetList: IWidget[], imports: ICustomObject<string[]>, formModelName?: string, formItemModelName?: string, formModel?: { [key: string]: string }) => {
    let resultHtml = "";
    let resultJs = "";
    let resultScopedCss = "";

    widgetList.forEach((widget) => {
        const { html, js, scopedCss } = dealWidget(widget, imports, formModelName, formItemModelName, formModel);

        resultHtml += html;
        resultJs += js;
        resultScopedCss += scopedCss;
    });

    return { html: resultHtml, js: resultJs, scopedCss: resultScopedCss };
};

const dealSlide = (slide: ISlide) => {
    const _imports: ICustomObject<string[]> = {};
    const result = dealWidgetList(slide.widgetList, _imports);
    let imports = "";
    Object.keys(_imports).forEach(key => {
        imports += `import { ${_imports[key].join(",")} } from "${key}";`;
    });
    return { ...result, imports };
};

export const generatorCode = (slide: ISlide) => {
    const { html, js, scopedCss, imports } = dealSlide(slide);
    return `
        <template>
            ${html}
        </template>

        <script setup lang="ts">
            ${imports}

            ${js}
        </script>

        <style lang="scss" scoped>
            ${scopedCss}
        </style>
    `;
};
