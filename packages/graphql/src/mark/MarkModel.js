import mongoose from 'mongoose';
const Schema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ['event', 'path',],
        required: true,
    },
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
    collection: 'user',
});
export default mongoose.model('User', Schema);
//# sourceMappingURL=MarkModel.js.map