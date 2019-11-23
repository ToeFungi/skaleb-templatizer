# Templatizer
[![NPM Version](https://badge.fury.io/js/skaleb-templatizer.svg)](https://badge.fury.io/js/skaleb-templatizer)
[![Build Status](https://travis-ci.org/ToeFungi/skaleb-templatizer.svg?branch=master)](https://travis-ci.org/ToeFungi/skaleb-templatizer)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=skaleb-templatizer&metric=alert_status)](https://sonarcloud.io/dashboard?id=skaleb-templatizer)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=skaleb-templatizer&metric=bugs)](https://sonarcloud.io/dashboard?id=skaleb-templatizer)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=skaleb-templatizer&metric=code_smells)](https://sonarcloud.io/dashboard?id=skaleb-templatizer)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=skaleb-templatizer&metric=coverage)](https://sonarcloud.io/dashboard?id=skaleb-templatizer)

The Templatizer is essentially a glorified search and replace function. Given a string template with certain variables
that require to be replaced and an object containing the replacement variables, the templatizer will recursively loop
through the variables until all templated variables have been replaced with the given replacements. It returns a string
value which contains the newly replaced templated value.

## Installation
To install this package you can simply use the install command below.

```
$ npm i --save skaleb-templatizer
```

## Usage
```typescript
import { Templatizer } from './Templatizer'

// New instantiation of the templatizer
const templatizer = new Templatizer()
```

`.templatize` templates a given template with the replacements supplied.
```typescript
const template = 'This {{VAR1}} will be {{VAR2}} and returned'
const replacements = {
  var1: 'sentence',
  var2: 'templated'
}

const templated = templatizer.templatize(template, replacements)

// This sentence will be templated and returned
console.log(templated) 
```

`.setTemplateStyle` sets the indicators indicating the variables within the template. Default for open `{{` and default
for close `}}`
```typescript
const template = 'This {VAR1} will be {VAR2} and returned'
const replacements = {
  var1: 'sentence',
  var2: 'templated'
}

const templated = templatizer.setTemplateStyle('{', '}')
  .templatize(template, replacements)

// This sentence will be templated and returned
console.log(templated) 
```

## Tests
This project is completely covered by unit tests. Various cases have been accounted for both in the codebase and in the 
tests covering it. If a bug is picked up regarding the test suite or code, feel free to make a contribution to help 
correct the bug.

To run the tests, you can simply run the following `test` command/s.

```
$ npm run lint
$ npm run test
$ npm run coverage
```

## Contributions
Feedback and contributions are more than welcome. Should you feel there is something you wish to contribute to this 
paginator, feel free to make a merge request. Ensure that whatever proposed change, has tests covering various cases for
the change.
 