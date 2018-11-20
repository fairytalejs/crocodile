# Changelog

### 1.0.1
- Performance improvements
- Make `withHooks` a named export in addition to being the default
- Add `invariant` as a peer dependency

### 1.0.0 - Initial Release

- Initial release of Crocodile forked from [yesmeck/react-with-hooks](https://github.com/yesmeck/react-with-hooks)
- Use React internals for getting the value of context, fixing issues with using class-based context providers
- Add test case for a simple class-based context provider