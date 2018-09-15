import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { ConnectionArguments } from 'graphql-relay';

import { DataloaderContext } from '../types/context';

import PathModel from './PathModel';
import { MarkType } from '../mark/MarkLoader'

export type PathType = {
  id: string,
  _id: string,
  name: string,
  description: string,
  marks: MarkType[]
};

export default class Path {
  id: string;
  _id: string;
  name: string;
  description: string;
  marks: MarkType[];

  constructor(data: PathType) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.description = data.description;
    this.marks = data.marks;

  }
}


export const getLoader = () =>
  new DataLoader((ids: Array<string>) => mongooseLoader(PathModel, ids));

const viewerCanSee = () => true;

export const load = async (context: DataloaderContext, id: string): Promise<PathType | null> => {
  try {
    if (!id) {
      return null;
    }
    const data = await context.dataloaders.PathLoader.load(id);
    return viewerCanSee() ? new Path(data) : null;
  } catch (err) {
    return null;
  }
};

type Args = {
  search: string,
} & ConnectionArguments;

export const loadPaths = async (context: DataloaderContext, args: Args) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
  const paths = PathModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: paths,
    context,
    args,
    loader: load,
  });
};