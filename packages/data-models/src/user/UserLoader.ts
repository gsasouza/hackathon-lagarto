import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import { ConnectionArguments } from 'graphql-relay';

import { DataloaderContext } from '../types/context';

import UserModel from './UserModel';

export type UserType = {
  id: string,
  _id: string,
  name: string,
  password?: string,
  email: string,
  active: boolean,
  isAdmin: boolean,
};

export default class User {
  id: string;
  _id: string;
  name: string;
  email: string;
  active: boolean;
  isAdmin: boolean;

  constructor(data: UserType) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.isAdmin = data.isAdmin;
    this.email = data.email;
    this.active = data.active;
  }
}

export const getLoader = () =>
  new DataLoader((ids: Array<string>) => mongooseLoader(UserModel, ids));

const viewerCanSee = () => true;

export const load = async (context: DataloaderContext, id: string): Promise<UserType | null> => {
  try {
    if (!id) {
      return null;
    }
    const data = await context.dataloaders.UserLoader.load(id);
    return viewerCanSee() ? new User(data) : null;
  } catch (err) {
    return null;
  }
};

type Args = {
  search: string,
} & ConnectionArguments;

export const loadUsers = async (context: DataloaderContext, args: Args) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
  const users = UserModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: users,
    context,
    args,
    loader: load,
  });
};
