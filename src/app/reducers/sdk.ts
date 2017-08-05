import * as sdk from '../actions/sdk';


export interface State {
  sdkReady: boolean;
}

const initialState: State = {
  sdkReady: false,
};

export function reducer(state = initialState, action: sdk.Actions): State {
  switch (action.type) {
    case sdk.SDK_READY:
      return {
        sdkReady: true
      };
    default:
      return state;
  }
}

export const getSDKReady = (state: State) => state.sdkReady;
