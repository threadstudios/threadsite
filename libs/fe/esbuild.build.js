const postCssPlugin = require('esbuild-style-plugin')

require('esbuild')
  .build({
    entryPoints: [`${__dirname}/src/client.js`, `${__dirname}/src/main.css`],
    outdir: `${__dirname}/../../libs/app/public`,
    bundle: true,
    minify: true,
    watch: process.argv[2] === '--watch' || false,
    plugins: [
      postCssPlugin({
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      }),
    ],
  })
  .catch(() => process.exit(1))
