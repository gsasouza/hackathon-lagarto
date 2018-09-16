type Loader = {
  load: (id: string) => any | null;
}
type Dataloaders = {
  MarkLoader: Loader,
  PathLoader: Loader,
  EventLoader: Loader,
  BuildLoader: Loader
}
export type DataloaderContext = {
  dataloaders: Dataloaders
}



