export interface IClassNames {
    [key: string]: IStyle;
}

export interface IStyle {
    [key: string]: string;
}

export interface IEvents {
    click?: string;
    change?: string;
    input?: string;
    [key: string]: string;
}
