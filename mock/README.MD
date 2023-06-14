# instruções de como executar o json server

1. Abra uma nova aba do terminal
2. Instale o json server:
    ```
    yarn add -D json-server
    ```
3. Ativar o json server: 
    ```
    yarn run json-server -w -p 3333 ./mock/database.json
    ```