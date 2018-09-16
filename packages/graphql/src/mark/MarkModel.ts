import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
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
      enum:[
        'event',
        'path',
        'build'
      ]
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

export default mongoose.model('Mark', Schema);
