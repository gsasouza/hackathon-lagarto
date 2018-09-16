var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';
import UserModel from './UserModel';
export default class User {
    constructor(data) {
        this.id = data.id;
        this._id = data._id;
        this.name = data.name;
        this.isAdmin = data.isAdmin;
        this.email = data.email;
        this.active = data.active;
    }
}
export const getLoader = () => new DataLoader((ids) => mongooseLoader(UserModel, ids));
const viewerCanSee = () => true;
export const load = (context, id) => __awaiter(this, void 0, void 0, function* () {
    try {
        if (!id) {
            return null;
        }
        const data = yield context.dataloaders.UserLoader.load(id);
        return viewerCanSee() ? new User(data) : null;
    }
    catch (err) {
        return null;
    }
});
export const loadUsers = (context, args) => __awaiter(this, void 0, void 0, function* () {
    const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
    const users = UserModel.find(where, { _id: 1 }).sort({ createdAt: -1 });
    return connectionFromMongoCursor({
        cursor: users,
        context,
        args,
        loader: load,
    });
});
//# sourceMappingURL=MarkLoader.js.map