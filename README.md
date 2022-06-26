


## problem
package a node js into a binary with pkg (by vercel) which use fp-ts Either results in an error at runtime


**error message**
```
Error: Cannot find module 'fp-ts/Either'
Require stack:
- C:\snapshot\issues-triaging\dist\main.js
1) If you want to compile the package/file into executable, please pay attention to compilation warnings and specify a literal in 'require' call. 2) If you don't want to compile the package/file into executable and want to 'require' it from filesystem (likely plugin), specify an absolute path in 'require' call using process.cwd() or process.execPath.
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function._resolveFilename (pkg/prelude/bootstrap.js:1955:46)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at Module.require (pkg/prelude/bootstrap.js:1855:31)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\snapshot\issues-triaging\dist\main.js)
    at Module._compile (pkg/prelude/bootstrap.js:1930:22)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'C:\\snapshot\\issues-triaging\\dist\\main.js' ],
  pkg: true
}
```



## tried

package.json
```
	"pkg": {
		"scripts": [
			"node_modules/fp-ts/**/*.js",
			"node_modules/fp-ts/Either/**"
		]
	},
```


## how to reproduce

`npm run default`

