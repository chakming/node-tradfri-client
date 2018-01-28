import { PropertyTransformKernel } from "./ipsoObject";
export declare const serializers: {
    transitionTime: PropertyTransformKernel;
    hue: PropertyTransformKernel;
    saturation: PropertyTransformKernel;
    brightness: PropertyTransformKernel;
    colorTemperature: PropertyTransformKernel;
};
export declare const deserializers: {
    transitionTime: PropertyTransformKernel;
    hue: PropertyTransformKernel;
    saturation: PropertyTransformKernel;
    brightness: PropertyTransformKernel;
    colorTemperature: PropertyTransformKernel;
};
export declare const conversions: {
    rgbFromCIExyY: (x: number, y: number, Y?: number) => {
        r: number;
        g: number;
        b: number;
    };
    rgbToCIExyY: (r: number, g: number, b: number) => {
        x: number;
        y: number;
        Y: number;
    };
    rgbFromHSV: (h: number, s: number, v: number) => {
        r: number;
        g: number;
        b: number;
    };
    rgbToHSV: (r: number, g: number, b: number) => {
        h: number;
        s: number;
        v: number;
    };
    rgbToString: (r: number, g: number, b: number) => string;
    rgbFromString: (rgb: string) => {
        r: number;
        g: number;
        b: number;
    };
};
