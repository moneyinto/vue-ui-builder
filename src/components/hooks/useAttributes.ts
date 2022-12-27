import { ITextWidget } from "@/types/slide/text";
import { IWidget, IWidgetOptions } from "@/types/slide/widget";
import { toLowerLine } from "@/utils";
import { computed, Ref } from "vue";

export default (widget: Ref<Exclude<IWidget, ITextWidget>>) => {
    const attributes = computed(() => {
        const options = widget.value.options || {};
        const _attributes: IWidgetOptions = {};

        Object.keys(options).forEach(key => {
            _attributes[toLowerLine(key)] = options[key];
        });

        return _attributes;
    });
    return attributes;
};
