import mongoose from 'mongoose';


const Schema = new mongoose.Schema(
  {
    latitude: {
      type: Number,
<<<<<<< HEAD
      required: true
=======
      required: true,
>>>>>>> 6aaa0e27ec156d274ef83e94a541ac06ea2d9c17
    },
    longitude: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
<<<<<<< HEAD
      enum:[
        'event',
        'path',
        'build'
      ]
    }
=======
      enum: ['event', 'path',],
      required: true,
    },
>>>>>>> 6aaa0e27ec156d274ef83e94a541ac06ea2d9c17
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'mark',
  },
);


export default mongoose.model('Mark', Schema);
