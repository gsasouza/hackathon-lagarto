import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    description:{
      type: String
    },
    marks:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mark'
    }]
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'path',
  }
);

export default mongoose.model('Path', Schema);
