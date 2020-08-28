FROM hasura/graphql-engine:v1.3.1

COPY migrations /hasura-migrations

ARG SHEPHERD_METADATA
LABEL shepherd.metadata=${SHEPHERD_METADATA}
