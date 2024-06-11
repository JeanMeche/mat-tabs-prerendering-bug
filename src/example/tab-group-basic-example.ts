import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injector, PLATFORM_ID, ViewChild, inject, signal } from '@angular/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  standalone: true,
  imports: [MatTabsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupBasicExample {
  @ViewChild(MatTabGroup, { static: true }) matTabGroup!: MatTabGroup;
  injector = inject(Injector);
  platform = inject(PLATFORM_ID);
  selectedTabIndex = signal(0);

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      const urlParams = new URLSearchParams(window.location.search);
      const tab = urlParams.get('tab');
      console.log(tab);
      this.selectedTabIndex.set(tab ? parseInt(tab) : 0);
    }
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
