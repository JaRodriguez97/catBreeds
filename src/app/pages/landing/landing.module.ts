import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { CardItemComponent } from '@components/card-item/card-item.component';
import { CardSkeletonTextComponent } from '@components/card-skeleton-text/card-skeleton-text.component';
import { LandingPage } from './landing.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandingPageRoutingModule],
  declarations: [LandingPage, CardItemComponent, CardSkeletonTextComponent],
})
export class LandingPageModule {}
