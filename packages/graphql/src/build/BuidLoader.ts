import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { ConnectionArguments } from 'graphql-relay';

import { DataloaderContext } from '../types/context';

import BuildModel from './BuildModel';
import { MarkType } from '../mark/MarkLoader';



export type BuildType = {
  id: string,
  _id: string,
  name: string,
  description: string,
  mark: MarkType,
};

export default class Build {
  id: string;
  _id: string;
  name: string;
  description: string;
  mark: MarkType;

  constructor(data: BuildType) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.description = data.description;
    this.mark = data.mark;

  }
}


export const getLoader = () =>
  new DataLoader((ids: Array<string>) => mongooseLoader(BuildModel, ids));

const viewerCanSee = () => true;

export const load = async (context: DataloaderContext, id: string): Promise<BuildType | null> => {
  try {
    if (!id) {
      return null;
    }
    const data = await context.dataloaders.BuildLoader.load(id);
    return viewerCanSee() ? new Build(data) : null;
  } catch (err) {
    return null;
  }
};

type Args = {
  search: string,
} & ConnectionArguments;

export const loadBuilds = async (context: DataloaderContext, args: Args) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
  const builds = await BuildModel.find(where).sort({ createdAt: -1 });
  console.log(builds)
  return builds;
};
