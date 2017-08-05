/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { AppState } from './app.service';
import { SDKService } from './services/sdk.service';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as layout from './actions/layout';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  sdk ready: {{sdkReady$ | async}}<br/>
    {{showSidenav$ | async }}
    <button (click)="open()">open nav</button> | <button (click)="close()">close nav</button>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  showSidenav$: Observable<boolean>;
  sdkReady$: Observable<boolean>;
  constructor(
    public appState: AppState,
    private store: Store<fromRoot.State>,
    private sdkService: SDKService
  ) {
    this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    this.sdkReady$ = this.store.select(fromRoot.getSDKReady);
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
    this.sdkService.init();
  }
  open(){
  this.store.dispatch(new layout.OpenSidenavAction());
  }
  close(){
    this.store.dispatch(new layout.CloseSidenavAction());
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
