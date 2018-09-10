type Loader = {
  load: (id: string) => any | null;
}
type Dataloaders = {
  UserLoader: Loader
}
export type DataloaderContext = {
  dataloaders: Dataloaders
}



