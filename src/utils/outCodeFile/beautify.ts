import beautify, { HTMLBeautifyOptions } from "js-beautify";

const beautifyOpts: HTMLBeautifyOptions = {
    indent_size: 4
};

export const beautifyCode = (code: string) => {
    return beautify.html(code, beautifyOpts);
};
