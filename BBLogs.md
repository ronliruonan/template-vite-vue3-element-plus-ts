

1. `Cannot find name 'process'` 在 vitejs@2环境下
> 通过 `@types/node` 可解决ide的错误识别

2. `process is not defined` 在vitejs@2 和 浏览器访问的环境下
> 可通过此骚操作来解决
```ts
// vite.config.ts
export default defineConfig({
  define: {
    'process.env': {}
  },
}
```
> 亦可通过 `import.meta.env` 来 代替 `process.env`
