# Node App Setup

## Setup Typescript

- Initiate Typescript \
    ``` npx tsc -init```

- Setup tsconfig file \
    ```
    {
        "compilerOptions": {
            "target": "ES2022",
            
            /* Modules */
            "module": "NodeNext",
            "rootDir": "./src",
            "outDir": "./dist",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,

            /* Type Checking */
            "strict": true,
            "skipLibCheck": true
        }
    }
    ```

- Import express and types of express and node
    ```
    # npm i express

    # npm i @types/express @types/node --save-dev
    ```

- Import Typesscript and nodemon
    ```
    npm i typescript nodemon --save-dev
    ```

- To build TS to JS
    ```
    tsc
    ```

- To build TS to JS in watch mode
    ```
    tsc -w
    ```

- To run the server
    ```
    node ./dist/index.js
    ```


Scripts to run server
```
"scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "watch": "tsc -w",
    "dev temp": "nodemon dist/index.js",
    "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
}
```

To run ts and nodemon concurrently need to install concurrently package:
```
npm i concurrently --save-dev
```