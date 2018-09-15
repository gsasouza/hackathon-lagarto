import * as UserLoader from './user/UserLoader';
import * as MarkLoader from './mark/MarkLoader';
import * as PathLoader from './path/PathLoader';
import * as EventLoader from './event/EventLoader';
import * as BuildLoader from './build/BuidLoader';
import { Dataloaders } from './types/context';

export default (): Dataloaders => ({
  UserLoader: UserLoader.getLoader(),
  MarkLoader: MarkLoader.getLoader(),
  PathLoader: PathLoader.getLoader(),
  EventLoader: EventLoader.getLoader(),
  BuildLoader: BuildLoader.getLoader(),
})
