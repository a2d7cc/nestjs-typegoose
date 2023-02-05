### Add in tsconfig.json

```
    "paths": {
      "@app/*": ["./src/*"]
    },
```

### Install module-alias

```
yarn add module-alias
```

### Configue package.json

```
  "_moduleAliases": {
    "@app/*": "./dist"
  }
```

### Add installed library in main.ts

```
if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}
```

### Rewritting in scripts package json

    - tsconfig-paths adding paths that we before in tsconfig.json added,
    - we need to rewrite script, while default in framework used nest command, it's a wrapper

```
   "start": "IS_TS_NODE=true ts-node -r tsconfig-paths/register src/main.ts",
```

### Instal nodemon to watch the files

    - we are installing nodemon package, because after rewrite command there is no watch function

```
yarn add nodemon
```

### Creating configure file for a nodemon

    - We are taking comand from scripts in package.json

```
{
	"watch": ["src"],
	"ext": "ts",
	"exec": "IS_TS_NODE=true ts-node -r tsconfig-paths/register src/main.ts"
}
```

    - We are writting simple "nodemon" instead

```
"start": "nodemon"
```
