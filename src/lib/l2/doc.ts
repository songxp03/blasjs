export const desc: { [index: string]: string } = {
    CTBSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b,   or   A**H*x = b',
    CGBMV: 'performs one of the matrix-vector operations,  y := alpha*A*x + beta*y,   or   y := alpha*A**T*x + beta*y,  y := alpha*A**H*x + beta*y',
    CTPMV: 'performs one of the matrix-vector operations, x := A*x,   or   x := A**T*x,   or   x := A**H*x,',
    CTPSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b,   or   A**H*x = b,',
    CTRMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x,   or   x := A**H*x,',
    CTRSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b,   or   A**H*x = b,',
    CGEMV: 'performs one of the matrix-vector operations, y := alpha*A*x + beta*y,   or   y := alpha*A**T*x + beta*y, or y := alpha*A**H*x + beta*y',
    CGERC: 'performs the rank 1 operation  A := alpha*x*y**H + A',
    CGERU: 'performs the rank 1 operation  A := alpha*x*y**T + A',
    CHBMV: 'performs the matrix-vector  operation y := alpha*A*x + beta*y',
    CHEMV: 'performs the matrix-vector  operation y := alpha*A*x + beta*y',
    CHER: 'performs the hermitian rank 1 operation A := alpha*x*x**H + A',
    CHER2: 'performs the hermitian rank 2 operation A := alpha*x*y**H + conjg( alpha )*y*x**H + A',
    CHPR: 'performs the hermitian rank 1 operation A := alpha*x*x**H + A',
    CHPR2: 'performs the hermitian rank 2 operation A := alpha*x*y**H + conjg( alpha )*y*x**H + A',
    CTBMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x,   or   x := A**H*x',
    CHPMV: 'performs the matrix-vector operation y := alpha*A*x + beta*y',

    ZGBMV: 'performs one of the matrix-vector operations y := alpha*A*x + beta*y,   or   y := alpha*A**T*x + beta*y, or y := alpha*A**H*x + beta*y',
    ZGEMV: 'performs one of the matrix-vector operations y := alpha*A*x + beta*y,   or   y := alpha*A**T*x + beta*y, or y := alpha*A**H*x + beta*y',
    ZGERC: 'performs the rank 1 operation A := alpha*x*y**H + A',
    ZGERU: 'performs the rank 1 operation A := alpha*x*y**T + A',
    ZHBMV: 'performs the matrix-vector  operation y := alpha*A*x + beta*y',
    ZHEMV: 'performs the matrix-vector  operation y := alpha*A*x + beta*y',
    ZHER: 'performs the hermitian rank 1 operation A := alpha*x*x**H + A',
    ZHER2: 'performs the hermitian rank 2 operation A := alpha*x*y**H + conjg( alpha )*y*x**H + A',
    ZHPMV: 'performs the matrix-vector operation y := alpha*A*x + beta*y',
    ZHPR: 'performs the hermitian rank 1 operation A := alpha*x*x**H + A',
    ZHPR2: 'performs the hermitian rank 2 operation A := alpha*x*y**H + conjg( alpha )*y*x**H + A',
    ZTBMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x,   or   x := A**H*x',
    ZTBSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b,   or   A**H*x = b',
    ZTPMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x,   or   x := A**H*x',
    ZTPSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b,   or   A**H*x = b',
    ZTRMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x,   or   x := A**H*x',
    ZTRSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b,   or   A**H*x = b',

    DGBMV: 'performs one of the matrix-vector operations y := alpha*A*x + beta*y,   or   y := alpha*A**T*x + beta*y',
    DGEMV: 'performs one of the matrix-vector operations y := alpha*A*x + beta*y,   or   y := alpha*A**T*x + beta*y',
    DGER: 'performs the rank 1 operation A := alpha*x*y**T + A',
    DSBMV: 'performs the matrix-vector  operation y := alpha*A*x + beta*y',
    DSPMV: 'performs the matrix-vector operation y := alpha*A*x + beta*y',
    DSPR: 'performs the symmetric rank 1 operation A := alpha*x*x**T + A',
    DSPR2: 'performs the symmetric rank 2 operation A := alpha*x*y**T + alpha*y*x**T + A',
    DSYMV: 'performs the matrix-vector  operation y := alpha*A*x + beta*y',
    DSYR: 'performs the symmetric rank 1 operation A := alpha*x*x**T + A',
    DSYR2: 'performs the symmetric rank 2 operation A := alpha*x*y**T + alpha*y*x**T + A',
    DTBMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x',
    DTBSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b',
    DTPMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x',
    DTPSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b',
    DTRMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x',
    DTRSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b',

    SGBMV: 'performs one of the matrix-vector operations y := alpha*A*x + beta*y,   or   y := alpha*A**T*x + beta*y',
    SGEMV: 'performs one of the matrix-vector operations y := alpha*A*x + beta*y,   or   y := alpha*A**T*x + beta*y',
    SGER: 'performs the rank 1 operation A := alpha*x*y**T + A',
    SSBMV: 'performs the matrix-vector  operation y := alpha*A*x + beta*y',
    SSPMV: 'performs the matrix-vector operation y := alpha*A*x + beta*y',
    SSPR: 'performs the symmetric rank 1 operation A := alpha*x*x**T + A',
    SSPR2: 'performs the symmetric rank 2 operation A := alpha*x*y**T + alpha*y*x**T + A',
    SSYMV: 'performs the matrix-vector  operation y := alpha*A*x + beta*y',
    SSYR: 'performs the symmetric rank 1 operation A := alpha*x*x**T + A',
    SSYR2: 'performs the symmetric rank 2 operation A := alpha*x*y**T + alpha*y*x**T + A',
    STBMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x',
    STBSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b',
    STPMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x',
    STPSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b',
    STRMV: 'performs one of the matrix-vector operations x := A*x,   or   x := A**T*x',
    STRSV: 'solves one of the systems of equations A*x = b,   or   A**T*x = b'
};
//65


(function i() {

    const props = Object.getOwnPropertyNames(desc);
    const reverted = props.map(name => ({ o: name, n: name.split('').reverse().join('') }));
    const reverseSorted = reverted.sort((o1, o2) => o1.n > o2.n ? 1 : o1.n < o2.n ? -1 : 0);
    console.log('===level2=====');
    console.log('{ ');
    reverseSorted.forEach(o => console.log(`${o.o}: '${desc[o.o].replace(/\s+/g, ' ')}',`));
    console.log(' } ');
})();
