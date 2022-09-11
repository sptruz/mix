import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.mjs',
        name: 'SptruzMix',
        format: 'es',
        sourcemap: false,
      },
      {
        file: 'lib/index.umd.js',
        name: 'SptruzMix',
        format: 'umd',
        sourcemap: false,
      },
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.esm.json',
        sourceMap: false,
      }),
    ],
  },
];
