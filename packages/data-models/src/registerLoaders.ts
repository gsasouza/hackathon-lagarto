import * as UserLoader from './user/UserLoader';
import { Dataloaders } from './types/context';

export default (): Dataloaders => ({
  UserLoader: UserLoader.getLoader(),
})
