// Generated by dts-bundle v0.7.3


global {
    const swal: SweetAlert;
    const sweetAlert: SweetAlert;
}

export = swal;

export type SwalParams = (string | Partial<SwalOptions>)[];
export interface SweetAlert {
    (...params: SwalParams): Promise<any>;
    close?(namespace: string): void;
    getState?(): SwalState;
    setActionValue?(opts: string | ActionOptions): void;
    stopLoading?(): void;
    setDefaults?(opts: object): void;
}
const swal: SweetAlert;
export default swal;

export interface SwalState {
    isOpen: boolean;
    promise: {
        resolve?(value: string): void;
        reject?(): void;
    };
    actions: {
        [namespace: string]: {
            value?: string | any;
            closeModal?: boolean;
        };
    };
    timer: number;
}
export interface ActionOptions {
    [buttonNamespace: string]: {
        value?: string;
        closeModal?: boolean;
    };
}
let state: SwalState;
export const resetState: () => void;
export const setActionValue: (opts: string | ActionOptions) => void;
export const setActionOptionsFor: (buttonKey: string, {closeModal}?: {
    closeModal?: boolean;
}) => void;
export default state;

export interface SwalOptions {
    title: string;
    text: string;
    icon: string;
    buttons: ButtonList;
    content: ContentOptions;
    className: string;
    closeOnClickOutside: boolean;
    closeOnEsc: boolean;
    dangerMode: boolean;
    timer: number;
}
export const setDefaults: (opts: object) => void;
export const getOpts: (...params: (string | Partial<SwalOptions>)[]) => SwalOptions;

export interface ButtonOptions {
    visible: boolean;
    text: string;
    value: any;
    className: string;
    closeModal: boolean;
}
export interface ButtonList {
    [buttonNamespace: string]: ButtonOptions;
}
export const CONFIRM_KEY = "confirm";
export const CANCEL_KEY = "cancel";
export const defaultButtonList: ButtonList;
export const getButtonListOpts: (opts: string | boolean | object) => ButtonList;

export interface ContentOptions {
    element: string | Node;
    attributes?: object;
}
export const getContentOpts: (contentParam: string | object) => ContentOptions;
