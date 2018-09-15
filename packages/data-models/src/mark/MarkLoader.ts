import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { ConnectionArguments } from 'graphql-relay';

import { DataloaderContext } from '../types/context';

import MarkModel from './MarkModel';

export type MarkType = {
  id: string,
  _id: string,
  latitude: string,
  longitude: string,
  type: string
};

export default class Mark {
  id: string;
  _id: string;
  latitude: string;
  longitude: string;
  type: string;

  constructor(data: MarkType) {
    this.id = data.id;
    this._id = data._id;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.type = data.type;

  }
}

export const getLoader = () =>
  new DataLoader((ids: Array<string>) => mongooseLoader(MarkModel, ids));

const viewerCanSee = () => true;

export const load = async (context: DataloaderContext, id: string): Promise<MarkType | null> => {
  try {
    if (!id) {
      return null;
    }
    const data = await context.dataloaders.MarkLoader.load(id);
    return viewerCanSee() ? new Mark(data) : null;
  } catch (err) {
    return null;
  }
};

type Args = {
  search: string,
} & ConnectionArguments;

export const loadMarks = async (context: DataloaderContext, args: Args) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
  const marks = MarkModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: marks,
    context,
    args,
    loader: load,
  });
};
