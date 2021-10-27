import { Schema, model} from "mongoose";

const Note = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false,
        required: true
    }
});

export const NoteSchema = model('Note', Note);