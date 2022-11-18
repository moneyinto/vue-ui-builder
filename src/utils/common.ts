/**
 * 生成随机码
 * @param len 随机码长度
 */
export const createRandomCode = (len = 8) => {
    const charset =
        "_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const maxLen = charset.length;
    let ret = "";
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * maxLen);
        ret += charset[randomIndex];
    }
    return ret;
};

/**
 * 驼峰格式转横线格式
 * @param str
 * @returns
 */
export const toLowerLine = (str: string) => {
    let temp = str.replace(/[A-Z]/g, (match) => {
        return "-" + match.toLowerCase();
    });
    if (temp.slice(0, 1) === "-") {
        // 如果首字母是大写，执行replace时会多一个-，这里需要去掉
        temp = temp.slice(1);
    }
    return temp;
};

/**
 * 横线格式转驼峰格式
 * @param str
 * @returns
 */
export const toCamel = (str: string) => {
    return str.replace(/([^_])(?:_+([^_]))/g, ($0, $1, $2) => {
        return $1 + $2.toUpperCase();
    });
};
