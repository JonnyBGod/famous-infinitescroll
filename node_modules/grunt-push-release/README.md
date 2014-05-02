# grunt-push-release

**Bump package version, create tag, commit, push...**

## Installation

Install npm package, next to your project's `Gruntfile.js` file:

    npm install grunt-push-release --save-dev

Add this line to your project's `Gruntfile.js`:

    grunt.loadNpmTasks('grunt-push-release');


## Usage

Let's say current version is `0.0.1`.

````
$ grunt bump
>> Version bumped to 0.0.2
>> Committed as "Release v0.0.2"
>> Tagged as "v0.0.2"
>> Pushed to origin

$ grunt bump:patch
>> Version bumped to 0.0.3
>> Committed as "Release v0.0.3"
>> Tagged as "v0.0.3"
>> Pushed to origin

$ grunt bump:minor
>> Version bumped to 0.1.0
>> Committed as "Release v0.1.0"
>> Tagged as "v0.1.0"
>> Pushed to origin

$ grunt bump:major
>> Version bumped to 1.0.0
>> Committed as "Release v1.0.0"
>> Tagged as "v1.0.0"
>> Pushed to origin

$ grunt bump:git
>> Version bumped to 1.0.0-1-ge96c
>> Committed as "Release v1.0.0-1-ge96c"
>> Tagged as "v1.0.0-1-ge96c"
>> Pushed to origin
````

Sometimes you want to run another task between bumping the version and commiting, for instance generate changelog. You can use `bump-only` and `bump-commit` to achieve that:

```bash
$ grunt bump-only:minor
$ grunt changelog
$ grunt push-commit
$ grunt push-release //This will do a full push and publish to npm even if you have configured npm option to false
$ grunt push-publish //Just publishes to NPM overriding (npm option: false)
```

## Configuration

This shows all the available config options with their default values.

```js
bump: {
  options: {
    files: ['package.json'],
    updateConfigs: [],
    add: true,
    addFiles: ['.'], // '.' for all files except ingored files in .gitignore
    commit: true,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['package.json'], // '-a' for all files
    createTag: true,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: true,
    pushTo: 'origin',
    npm: false,
    npmTag: 'Release v%VERSION%',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
  }
}
```

### files
List of files to bump. Maybe you wanna bump 'component.json' as well ?

### updateConfigs
Sometimes you load the content of `package.json` into a grunt config. This will update the config property, so that even tasks running in the same grunt process see the updated value.

```js
bump: {
  files:         ['package.json', 'bower.json'],
  updateConfigs: ['pkg',          'bower']
}
```
### add
Do you wanna add files ?

### addFiles
An array of files that you wanna add. You can use `['.']` to add all files.

### commit
Do you wanna commit the changes ?

### commitMessage
If so, what is the commit message ? You can use `%VERSION%` which will get replaced with the new version.

### commitFiles
An array of files that you wanna commit. You can use `['-a']` to commit all files.

### createTag
Do you wanna create a tag ?

### tagName
If so, this is the name of that tag (`%VERSION%` placeholder is available).

### tagMessage
Yep, you guessed right, it's the message of that tag - description (`%VERSION%` placeholder is available).

### push
Do you wanna push all these changes ?

### pushTo
If so, which remote branch would you like to push to ?

### npm
Do you wanna publish all these changes to NPM ?

Make sure you have registered an npm used: 'npm adduser'

### npmTag
If so, what is the tag ? You can use `%VERSION%` which will get replaced with the new version.

-----------------------------------
Released under a MIT-style license.