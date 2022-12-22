export interface IClassNames {
    [key: string]: IStyle;
}

export interface IStyle {
    [key: string]: string;
}

export interface IFunc {
    name: string;
    content: string;
    input?: string[]; // 传入参数
    accept?: string[]; // 接受参数
}

export interface IEvents {
    click?: IFunc;
    change?: IFunc;
    input?: IFunc;
    [key: string]: string;
}
