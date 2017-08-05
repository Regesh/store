import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';
import { combineReducers } from '@ngrx/store';
import * as fromLayout from './layout';
import * as fromSdk from './sdk';

export interface State {
  layout: fromLayout.State,
  sdk: fromSdk.State
}

const reducers = {
  layout: fromLayout.reducer,
  sdk: fromSdk.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (ENV == 'production') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Layout Reducers
 */
export const getLayoutState = (state: State) => state.layout;
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);

/**
 * SDK Reducers
 */
export const getSDKState = (state: State) => state.sdk;
export const getSDKReady = createSelector(getSDKState, fromSdk.getSDKReady);
