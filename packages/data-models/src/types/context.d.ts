type Loader = {
  load: (id: string) => any | null;
}
type Dataloaders = {
  UserLoader: Loader,
  MarkLoader: Loader,
  PathLoader: Loader,
  EventLoader: Loader,
  BuildLoader: Loader
}
export type DataloaderContext = {
  dataloaders: Dataloaders
}



