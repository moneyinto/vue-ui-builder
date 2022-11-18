import { IStyle } from "@/types/slide/base";
import { IWidget } from "@/types/slide/widget";
import { toLowerLine } from "@/utils";
import { computed, Ref } from "vue";

export default (widget: Ref<IWidget>) => {
    const style = computed(() => {
        let style: IStyle = {};

        if (widget.value.styleInClass) {
            style = { ...style, ...widget.value.styleInClass };
        }

        if (widget.value.classNames) {
            Object.keys(widget.value.classNames).forEach((key) => {
                style = { ...style, ...widget.value.classNames![key] };
            });
        }

        if (widget.value.style) {
            style = { ...style, ...widget.value.style };
        }

        const _style: IStyle = {};
        Object.keys(style).forEach(key => {
            _style[toLowerLine(key)] = style[key];
        });

        return _style;
    });

    return style;
};
