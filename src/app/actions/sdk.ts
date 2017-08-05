import { Action } from '@ngrx/store';

export const SDK_READY =   '[SDK] SDK Ready';


export class SDKReadyAction implements Action {
  readonly type = SDK_READY;
}

export type Actions
  = SDKReadyAction;
