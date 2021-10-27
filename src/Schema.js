import { makeExecutableSchema } from "@graphql-tools/schema"
import { gql } from "apollo-server-express"

import { resolvers } from "./resolvers"

const typeDefs =  gql `
    type Query {
        getNotes: [Note]
        getNoteById(id: ID!): Note
    }

    input NoteInput {
        title: String
        description: String
        done: Boolean
    }

    type Note {
        id: ID!
        title: String
        description: String
        done: Boolean
    }

    type Mutation {
        createNote(input: NoteInput): Note
        deleteNote(id: ID!): Note
        updateNote(id: ID!, input: NoteInput): Note
        deleteNoteByID(id: ID!): Note
    }
`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})