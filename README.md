# React and Next with TS
    This is a proyect from scratch and in develop


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