# Shepherd UI Hasura

This project contains the migrations for the database and the graphql schema and its types

# Creating migrations

To create migrations through the hasura console, it must be started using the command

```
hasura console
```
Note: Postgres and Hasura must be started first using docker-compose


# Updating schema/types

```sh
yarn gen-types
```
