FROM hasura/graphql-engine:v1.0.0-beta.10.cli-migrations

COPY migrations /hasura-migrations

ARG SHEPHERD_METADATA
LABEL shepherd.metadata=${SHEPHERD_METADATA}