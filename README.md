# linter

:art: Styleguides and linter configuration files

## Installing

### eslint-config-grvcoelho-vanilla

To install the package containing the configuration and all its dependencies:

```shell
$ npm install --save-dev eslint@5.16.0 \
                         eslint-plugin-import@2.21.0 \
                         eslint-config-grvcoelho-vanilla@latest
```

> The peer dependencies specified above have hardcoded versions.
> If you prefer you can use the command
> `npm info eslint-config-grvcoelho-vanilla@latest peerDependencies`
> to find the exact peer dependencies to install.

If you have **npm 5+**, you can install all dependencies with the shortcut:

```shell
$ npx install-peerdeps --dev eslint-config-grvcoelho-vanilla
```


To include in the project, create an `.eslintrc` file with at least the
following contents:

```json
{
  "extends": ["grvcoelho-vanilla"]
}
```

### eslint-config-grvcoelho-react

To install the package containing the configuration and all its dependencies:

```shell
$ npm install --save-dev eslint@5.16.0 \
                         eslint-plugin-import@2.21.0 \
                         eslint-plugin-jsx-a11y@6.2.0 \
                         eslint-plugin-react@7.20.0 \
                         eslint-plugin-react-hooks@4.0.0
                         eslint-config-grvcoelho-react@latest
```

> The peer dependencies specified above have hardcoded versions.
> If you prefer you can use the command
> `npm info eslint-config-grvcoelho-vanilla@latest peerDependencies`
> to find the exact peer dependencies to install.

If you have **npm 5+**, you can install all dependencies with the shortcut:

```shell
$ npx install-peerdeps --dev eslint-config-grvcoelho-react
```


To include in the project, create an `.eslintrc` file with at least the
following contents:

```json
{
  "extends": ["grvcoelho-react"]
}
```
