import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    monkey({
      entry: 'src/main.jsx',
      userscript: {
        name:'github代码快速跳转网页查看',
        author:'superBiuBiu',
        version:'1.0.1',
        iconURL:'https://www.google.com/s2/favicons?domain=dreamlove.top',
        namespace: 'dreamlove/see-fast',
        supportURL:'https://github.com/superBiuBiuMan/see-fast',
        match: ['https://github.com/*'],
        '@run-at':'document-end'

      },
      build: {
        externalGlobals:[
          ['preact',cdn.jsdelivr('preact', 'dist/preact.min.js'),],
          ['tdesign-react',cdn.jsdelivr('tdesignReact','dist/tdesign.min.js')]
        ],
        externalResource: {
          'tdesign-react/es/style/index.css': "https://cdn.jsdelivr.net/npm/tdesign-react@1.5.1/dist/tdesign.min.css",
        },
      },
    }),
  ],
});
