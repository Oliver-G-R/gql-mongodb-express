import { NoteSchema } from "./models/Notes"

export const resolvers = {
    Query: {
        getNotes: async () => await NoteSchema.find(),
        getNoteById: async (_, { id }) => await NoteSchema.findById(id)
    },
    Mutation: {
        createNote: async (_, { input }) => {
            const newNote = new NoteSchema(input)
            return await newNote.save()
        },
        deleteNote: async (_, { id }) => 
            await NoteSchema.findByIdAndDelete(id),

        updateNote: async (_, { id, input }) =>
            await NoteSchema.findByIdAndUpdate(id, input, { new: true }),
            
        deleteNoteByID: async (_, { id }) => 
            await NoteSchema.findByIdAndDelete(id)
    }
}