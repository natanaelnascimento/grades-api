import db from './index.js';

const {mongoose} = db;

const gradeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) throw new Error('Value não pode ser menor que 0.');
        }
    },
    lastModified: {
        type: Date,
        required: true
    }
});

const model = mongoose.model('grade', gradeSchema, 'grades');

export default model;