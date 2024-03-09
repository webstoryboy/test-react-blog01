const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BoardSchema = new Schema({
    title: String,
    content: String,
    cover: { type: String, default: 'default.jpg' },
    view: { type: Number, default: 1 },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true,
});

const BoardModel = model('Board', BoardSchema);

module.exports = BoardModel;