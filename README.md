# TypeScriptCrashCourse

## What is TypeScript?

- Open Source language
- Superset of JavaScript
- Allows declaration of variable types (similar to statically typed languages).

## Install typeScript Compiler globally to machine

- sudo npm i -g typescript

## Type Inference

- Typescript infers the Data type of the variable, even if there is no type is declared. We call this Type Inference. The variables in the typescript tutorial show the various ways to declare a variable. We can declare the variable without type annotation. In such a circumstance, the Typescript makes an attempt to infer the type of the variable.

## Compile to a javaScript file

- In terminal type - tsc (name of file) or tsc index.ts

- By default, it compiles to ES2016

- In terminal type tsc

## Watch a file

- In terminal type --watch index

## Setup a configuration file

- In terminal type tsc --init

## Can setup the out directory and root directory in the jsconfig.json

- Uncomment (line 52 and 29) and name the folders outDir to dist, rootDir to src
