export interface IClientStatus {
  onStatus: (getConnection: (status: boolean) => void) => void,
  listeners: () => number
}

declare global {
  interface Window {
    clientConnection: IClientStatus;
  }
}