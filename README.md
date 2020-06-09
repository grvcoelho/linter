# linter

:art: Styleguides and linter configuration files

## Installing

### eslint-config-grvcoelho-vanilla

To install the package containing the configuration and all its dependencies:

```shell
$ npm install --save-dev eslint@5.16.0 \
                         eslint-plugin-import@2.20.0 \
                         eslint-config-grvcoelho-vanilla@latest
```

> The peer dependencies specified above have hardcoded versions.
> If you prefer you can use the command
> `npm info eslint-config-airbnb-base@latest peerDependencies`
> to find the exact peer dependencies to install.

To include in the project, create an `.eslintrc` file with at least the
following contents:

```json
{
  "extends": ["grvcoelho-vanilla"]
}
```
