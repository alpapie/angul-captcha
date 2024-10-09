import { Routes } from '@angular/router';
import { NotFundComponentComponent } from './not-fund-component/not-fund-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

export const routes: Routes = [
  {
    path:"", component: HomeComponentComponent
  },
  {
    path:"result", component: ResultComponentComponent
  },
  {
    path:"**", component: NotFundComponentComponent
  },

];
