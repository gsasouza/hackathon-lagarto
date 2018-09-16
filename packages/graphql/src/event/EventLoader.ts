import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { ConnectionArguments } from 'graphql-relay';

import { DataloaderContext } from '../types/context';

import EventModel from './EventModel';
import { MarkType } from '../modules/mark/MarkType';
import { BuildType } from '../modules/build/BuildType';


export type EventType = {
  id: string,
  _id: string,
  name: string,
  description: string,
  mark: MarkType,
  build: BuildType
};

export default class Event {
  id: string;
  _id: string;
  name: string;
  description: string;
  mark: MarkType;
  build: BuildType;

  constructor(data: EventType) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.description = data.description;
    this.mark = data.mark;
    this.build = data.build;

  }
}


export const getLoader = () =>
  new DataLoader((ids: Array<string>) => mongooseLoader(EventModel, ids));

const viewerCanSee = () => true;

export const load = async (context: DataloaderContext, id: string): Promise<EventType | null> => {
  try {
    if (!id) {
      return null;
    }
    const data = await context.dataloaders.EventLoader.load(id);
    return viewerCanSee() ? new Event(data) : null;
  } catch (err) {
    return null;
  }
};

type Args = {
  search: string,
} & ConnectionArguments;

export const loadEvents = async (context: DataloaderContext, args: Args) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
  const events = EventModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: events,
    context,
    args,
    loader: load,
  });
};