import beautify from "js-beautify";

const beautifyOpts = {
    indent_size: 4
};

export const beautifyCode = (code: string) => {
    return beautify.html(code, beautifyOpts);
};
