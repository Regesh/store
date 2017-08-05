import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as sdk from '../actions/sdk';

@Injectable()
export class SDKService {
    constructor(
        private store: Store<fromRoot.State>
    ) {
    }
    init() {
        this.setInit(this);
        this.loadScript();
    }

    setInit(context) {
        window['sdkInit'] = function(){
            context.store.dispatch(new sdk.SDKReadyAction());
        }
    }

    loadScript() {
        window['sdkInit']();
    }
}