# TypeScript 2.0 sample project

## About
This example shows how to configure a project with TypeScript 2.0. Here's what included:
- express
- mocha tests
- nyc code coverage
- build with gulp
- ESLint linter
- source maps generating

## Building and running
```
npm install         // installs packages
docker-compose up   // starts MongoDB instance on mongodb://localhost:27017 (Docker must be installed on the machine)
./bin/run           // compiles and runs the project
```
Open <http://localhost:3000>

## Other commands

`./bin/compile`: Compiles the source files with TypeScript compiler  
`./bin/test`: Runs tests with Mocha  
`./bin/lint`: Lints all source files with TSLint  
`./bin/coverage`: Generates nyc coverage report  
`./bin/clean`: Removes compiled files and coverage report files  

## Adding aditional libraries:
```
npm install bcrypt --save-dev
npm install @types/bcrypt --save-dev
```
