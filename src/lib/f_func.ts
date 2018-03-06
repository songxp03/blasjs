//intrinsic routines of fortran

export function sign(a: number, b?: number): number {
    if (b === undefined) {
        return a;
    }
    const rc = Math.abs(a);
    return b >= 0 ? rc : -rc;
}

//make JS arrays work like fortran ones
//1. export type
//2. export array wrapper factory

//1
export type Complex = { re: number, im: number };
export type fpArray = Float32Array | Float64Array;
export type FortranSetterGetter = (index: number) => (value?: number) => number | Complex;
export type FortranArr = {
    base: number,
    r: fpArray,
    i?: fpArray,
    s: FortranSetterGetter
};
//2
export function mimicFArray(r: fpArray, i?: fpArray) {
    //Lets make some curry
    let func = function n(startIndex: number = 0): FortranArr {

        return Object.freeze({
            base: startIndex,
            r,
            i,
            s: (index: number) => (re?: number, im?: number) => {
                const pRe = r[index - startIndex];
                const pIm = im && i ? i[index - startIndex] : undefined;
                //check
                if (re !== undefined) {
                    r[index - startIndex] = re;
                }
                if (im !== undefined && i === undefined) {
                    throw new Error('You specified a complex number for a real array');
                }
                if (i !== undefined) {
                    r[index - startIndex] = im || 0;
                    return { re: pRe || 0, im: pIm || 0 };
                }
                return pRe;
            }
        });
    }
    //   TODO: maybe keep reference later, who knows
    //    func['buffer'] = arr;
    return func;
}
