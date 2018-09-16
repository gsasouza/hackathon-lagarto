import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    mark: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mark',
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'build',
  },
);


export default mongoose.model('Build', Schema);
