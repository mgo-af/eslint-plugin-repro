## To test

symlink eslint-plugin-fuegokit-react, original package is published to private npm registry unfortunately

run

```
DEBUG=eslint:* npx eslint src
```

observe

```
...output abbreviated
  eslint:rules Loading rule 'prefer-spread' (remaining=164) +1ms
  eslint:file-enumerator Didn't match: App.css +1s

Oops! Something went wrong! :(

ESLint: 8.54.0

ESLint couldn't find the plugin "eslint-plugin-fuegokit-react".

(The package "eslint-plugin-fuegokit-react" was not found when loaded as a Node module from the directory "/Users/appfire/Desktop/fuegokit-testing-projects/ts-migration/fuegokit-3.0-example-eslint-plugin-fuegokit-react".)

It's likely that the plugin isn't installed correctly. Try reinstalling by running the following:

    npm install eslint-plugin-fuegokit-react@latest --save-dev

The plugin "eslint-plugin-fuegokit-react" was referenced from the config file in ".eslintrc.js » plugin:@fuegokit/fuegokit-react/recommended".

If you still can't figure out the problem, please stop by https://eslint.org/chat/help to chat with the team.

```
