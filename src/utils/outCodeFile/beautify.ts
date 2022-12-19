import beautify, { HTMLBeautifyOptions } from "js-beautify";

const beautifyHtmlOpts: HTMLBeautifyOptions = {
    indent_size: 4,
    indent_char: " ",
    max_preserve_newlines: -1,
    preserve_newlines: false,
    indent_scripts: "separate",
    wrap_attributes: "force-expand-multiline"
};

export const beautifyHtmlCode = (code: string) => {
    return beautify.html(code, beautifyHtmlOpts);
};
