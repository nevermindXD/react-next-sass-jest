# React and Next with TS

This is a proyect from scratch and in develop

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
## Absolute imports

You can import modules, component or whatever with the follow code instead using the usual.

  ```
  import MyComponent from '@components/myComponent'
  import { helperOne, helperTwo } from '@helpers'
  ```

you can add the folders that you want in 'tsconfig.json' in the following line:

  ```
  "paths": { // Aquí
    "@helpers/*": ["helpers/*"],
    "@components/*": ["components/*"],
    ... 
  },
  ```