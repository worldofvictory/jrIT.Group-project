// vite.config.js
import { defineConfig } from "file:///C:/%D0%9F%D1%80%D0%BE%D1%94%D0%BA%D1%82%D0%B8/GitHub/jrIT.Group-project/node_modules/vite/dist/node/index.js";
import glob from "file:///C:/%D0%9F%D1%80%D0%BE%D1%94%D0%BA%D1%82%D0%B8/GitHub/jrIT.Group-project/node_modules/glob/glob.js";
import injectHTML from "file:///C:/%D0%9F%D1%80%D0%BE%D1%94%D0%BA%D1%82%D0%B8/GitHub/jrIT.Group-project/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/%D0%9F%D1%80%D0%BE%D1%94%D0%BA%D1%82%D0%B8/GitHub/jrIT.Group-project/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig({
  define: {
    _global: {}
  },
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html")
    },
    outDir: "../dist"
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxcdTA0MUZcdTA0NDBcdTA0M0VcdTA0NTRcdTA0M0FcdTA0NDJcdTA0MzhcXFxcR2l0SHViXFxcXGpySVQuR3JvdXAtcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcXHUwNDFGXHUwNDQwXHUwNDNFXHUwNDU0XHUwNDNBXHUwNDQyXHUwNDM4XFxcXEdpdEh1YlxcXFxqcklULkdyb3VwLXByb2plY3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6LyVEMCU5RiVEMSU4MCVEMCVCRSVEMSU5NCVEMCVCQSVEMSU4MiVEMCVCOC9HaXRIdWIvanJJVC5Hcm91cC1wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InO1xyXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tICd2aXRlLXBsdWdpbi1odG1sLWluamVjdCc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgZGVmaW5lOiB7XHJcbiAgICBfZ2xvYmFsOiB7fSxcclxuICB9LFxyXG4gIHJvb3Q6ICdzcmMnLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiBnbG9iLnN5bmMoJy4vc3JjLyouaHRtbCcpLFxyXG4gICAgfSxcclxuICAgIG91dERpcjogJy4uL2Rpc3QnLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW2luamVjdEhUTUwoKSwgRnVsbFJlbG9hZChbJy4vc3JjLyoqLyoqLmh0bWwnXSldLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VSxTQUFTLG9CQUFvQjtBQUN0VyxPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFFdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sU0FBUyxDQUFDO0FBQUEsRUFDWjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTyxLQUFLLEtBQUssY0FBYztBQUFBLElBQ2pDO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMxRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
