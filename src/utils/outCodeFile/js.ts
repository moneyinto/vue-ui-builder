import { WidgetTypes } from "@/config/widget";
import { IFormItemWidget, IFormWidget } from "@/types/slide/form";
import { ICustomObject } from "@/types/slide/input";
import { IWidget } from "@/types/slide/widget";

const addImports = (key: string, value: string, imports: ICustomObject<string[]>) => {
    if (!imports[key]) imports[key] = [];
    if (imports[key].indexOf(value) === -1) imports[key].push(value);
};

const getFormWidgetJs = (widget: IFormWidget, imports: ICustomObject<string[]>, formModel?: ICustomObject<string>) => {
    let formString = "";
    if (formModel) {
        formString += `const ${widget.modelName || "modelForm"}=reactive(${JSON.stringify(formModel)});`;
        addImports("vue", "reactive", imports);
    }
    formString += ` \n
                    // 提交表单方法
                    const submitForm = async (formEl: FormInstance | undefined) => {
                        if (!formEl) return;
                        await formEl.validate((valid, fields) => {
                            if (valid) {
                                console.log("submit!", ${widget.modelName || "modelForm"});
                            } else {
                                console.log("error submit!", fields, ${widget.modelName || "modelForm"});
                            }
                        });
                    };`;
    formString += ` \n   
                    // 重置表单方法
                    const resetForm = (formEl: FormInstance | undefined) => {
                        if (!formEl) return;
                        formEl.resetFields();
                    };`;
    addImports("element-plus", "FormInstance", imports);
    return formString;
};

const getFormItemWidgetJs = (widget: IFormItemWidget) => {
    let formString = "";
    if (widget.rulesName) {
        formString = `const ${widget.rulesName} = ${JSON.stringify(widget.rules || [])};`;
    }
    return formString;
};

export const getWidgetJs = (widget: IWidget, imports: ICustomObject<string[]>, formModel?: ICustomObject<string>) => {
    let formString = "";
    if (widget.type === WidgetTypes.FORM) {
        formString = getFormWidgetJs(widget, imports, formModel);
    } else if (widget.type === WidgetTypes.FORM_ITEM) {
        formString = getFormItemWidgetJs(widget);
    }

    let widgetRef = "";
    if (widget.ref) {
        widgetRef = `const ${widget.ref} = ref();`;
        addImports("vue", "ref", imports);
    }
    return `${widgetRef}${formString}`;
};
