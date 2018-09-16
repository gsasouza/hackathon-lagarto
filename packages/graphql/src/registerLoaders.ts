import * as MarkLoader from './mark/MarkLoader';
import * as PathLoader from './path/PathLoader';
import * as EventLoader from './event/EventLoader';
import * as BuildLoader from './build/BuidLoader';
import { Dataloaders } from './types/context';

export default (): Dataloaders => ({
  MarkLoader: MarkLoader.getLoader(),
  PathLoader: PathLoader.getLoader(),
  EventLoader: EventLoader.getLoader(),
  BuildLoader: BuildLoader.getLoader(),
})
