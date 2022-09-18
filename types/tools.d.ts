import { WatchStopHandle } from 'vue';
declare type OptionSetter = (dst: any, key: string, value: any) => void;
export declare function applyObjectProps(dst: any, options: Record<string, unknown>, setter?: OptionSetter): void;
export declare function bindObjectProp(src: any, prop: string, dst: any, apply?: boolean, setter?: OptionSetter): WatchStopHandle;
export declare function bindObjectProps(src: any, dst: any, apply?: boolean, setter?: OptionSetter): WatchStopHandle;
export declare function setFromProp(o: Record<string, unknown>, prop: Record<string, unknown>): void;
export declare function bindProps(src: any, props: string[], dst: any): void;
export declare function bindProp(src: any, srcProp: string, dst: any, dstProp?: string): void;
export declare function propsValues(props: Record<string, unknown>, exclude?: string[]): Record<string, unknown>;
export declare function lerp(value1: number, value2: number, amount: number): number;
export declare function limit(val: number, min: number, max: number): number;
export declare function getMatcapUrl(hash?: string, format?: number): string;
export {};
//# sourceMappingURL=tools.d.ts.map