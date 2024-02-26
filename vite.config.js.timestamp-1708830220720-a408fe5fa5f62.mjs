// vite.config.js
import { defineConfig } from "file:///D:/study-project/see-fast/node_modules/vite/dist/node/index.js";
import preact from "file:///D:/study-project/see-fast/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import monkey, { cdn } from "file:///D:/study-project/see-fast/node_modules/vite-plugin-monkey/dist/node/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    preact(),
    monkey({
      entry: "src/main.jsx",
      userscript: {
        name: "github\u4EE3\u7801\u5FEB\u901F\u8DF3\u8F6C\u7F51\u9875\u67E5\u770B",
        author: "superBiuBiu",
        version: "1.0.0",
        iconURL: "https://www.google.com/s2/favicons?domain=dreamlove.top",
        namespace: "dreamlove/see-fast",
        supportURL: "https://github.com/superBiuBiuMan/see-fast",
        match: ["https://www.github.com/*"]
      },
      build: {
        externalGlobals: {
          preact: cdn.bootcdn("preact", "dist/preact.min.js"),
          "tdesign-react": cdn.jsdelivr("tdesign-react", "dist/tdesign.min.js")
        }
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxzdHVkeS1wcm9qZWN0XFxcXHNlZS1mYXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxzdHVkeS1wcm9qZWN0XFxcXHNlZS1mYXN0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9zdHVkeS1wcm9qZWN0L3NlZS1mYXN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcHJlYWN0IGZyb20gJ0BwcmVhY3QvcHJlc2V0LXZpdGUnO1xuaW1wb3J0IG1vbmtleSwgeyBjZG4gfSBmcm9tICd2aXRlLXBsdWdpbi1tb25rZXknO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHByZWFjdCgpLFxuICAgIG1vbmtleSh7XG4gICAgICBlbnRyeTogJ3NyYy9tYWluLmpzeCcsXG4gICAgICB1c2Vyc2NyaXB0OiB7XG4gICAgICAgIG5hbWU6J2dpdGh1Ylx1NEVFM1x1NzgwMVx1NUZFQlx1OTAxRlx1OERGM1x1OEY2Q1x1N0Y1MVx1OTg3NVx1NjdFNVx1NzcwQicsXG4gICAgICAgIGF1dGhvcjonc3VwZXJCaXVCaXUnLFxuICAgICAgICB2ZXJzaW9uOicxLjAuMCcsXG4gICAgICAgIGljb25VUkw6J2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vczIvZmF2aWNvbnM/ZG9tYWluPWRyZWFtbG92ZS50b3AnLFxuICAgICAgICBuYW1lc3BhY2U6ICdkcmVhbWxvdmUvc2VlLWZhc3QnLFxuICAgICAgICBzdXBwb3J0VVJMOidodHRwczovL2dpdGh1Yi5jb20vc3VwZXJCaXVCaXVNYW4vc2VlLWZhc3QnLFxuICAgICAgICBtYXRjaDogWydodHRwczovL3d3dy5naXRodWIuY29tLyonXSxcbiAgICAgIH0sXG4gICAgICBidWlsZDoge1xuICAgICAgICBleHRlcm5hbEdsb2JhbHM6IHtcbiAgICAgICAgICBwcmVhY3Q6IGNkbi5ib290Y2RuKCdwcmVhY3QnLCAnZGlzdC9wcmVhY3QubWluLmpzJyksXG4gICAgICAgICAgJ3RkZXNpZ24tcmVhY3QnOmNkbi5qc2RlbGl2cigndGRlc2lnbi1yZWFjdCcsJ2Rpc3QvdGRlc2lnbi5taW4uanMnKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUSxTQUFTLG9CQUFvQjtBQUNoUyxPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVLFdBQVc7QUFHNUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLFFBQ1YsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsU0FBUTtBQUFBLFFBQ1IsU0FBUTtBQUFBLFFBQ1IsV0FBVztBQUFBLFFBQ1gsWUFBVztBQUFBLFFBQ1gsT0FBTyxDQUFDLDBCQUEwQjtBQUFBLE1BQ3BDO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxpQkFBaUI7QUFBQSxVQUNmLFFBQVEsSUFBSSxRQUFRLFVBQVUsb0JBQW9CO0FBQUEsVUFDbEQsaUJBQWdCLElBQUksU0FBUyxpQkFBZ0IscUJBQXFCO0FBQUEsUUFDcEU7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
