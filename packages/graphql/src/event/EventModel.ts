import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    dateStart: {
      type: Date,
      required: true,
      default: Date.now
    },
    dateEnd: {
      type: Date,
      required: true
    },
    mark:{
      type: Schema.Types.ObjectId,
      ref: 'Mark'
    },
    build:{
      type: Schema.Types.ObjectId,
      ref: 'Build'
    }

  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'event',
  },
);


export default mongoose.model('Event', eventSchema);
