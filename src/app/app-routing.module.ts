import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeEightComponent } from './components/layouts/home-eight/home-eight.component';
import { HomeNineComponent } from './components/pages/home-nine/home-nine.component';
import { HomeTenComponent } from './components/pages/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/pages/home-eleven/home-eleven.component';
import { HomeTwelveComponent } from './components/pages/home-twelve/home-twelve.component';
import { HomeThirteenComponent } from './components/pages/home-thirteen/home-thirteen.component';
import { HomeFourteenComponent } from './components/pages/home-fourteen/home-fourteen.component';
import { HomeFifteenComponent } from './components/pages/home-fifteen/home-fifteen.component';
import { HomeSixteenComponent } from './components/pages/home-sixteen/home-sixteen.component';
import { HomeSeventeenComponent } from './components/pages/home-seventeen/home-seventeen.component';
import { HomeEighteenComponent } from './components/pages/home-eighteen/home-eighteen.component';
import { HomeNineteenComponent } from './components/pages/home-nineteen/home-nineteen.component';
import { HomeTwentyComponent } from './components/pages/home-twenty/home-twenty.component';
import { HomeTwentyOneComponent } from './components/pages/home-twenty-one/home-twenty-one.component';
import { HomeTwentyTwoComponent } from './components/pages/home-twenty-two/home-twenty-two.component';
import { HomeTwentyThreeComponent } from './components/pages/home-twenty-three/home-twenty-three.component';
import { HomeTwentyFourComponent } from './components/pages/home-twenty-four/home-twenty-four.component';
import { HomeTwentyFiveComponent } from './components/pages/home-twenty-five/home-twenty-five.component';
import { HomeTwentySixComponent } from './components/pages/home-twenty-six/home-twenty-six.component';
import { HomeTwentySevenComponent } from './components/pages/home-twenty-seven/home-twenty-seven.component';
import { HomeTwentyEightComponent } from './components/pages/home-twenty-eight/home-twenty-eight.component';
import { HomeTwentyNineComponent } from './components/pages/home-twenty-nine/home-twenty-nine.component';
import { HomeThirtyComponent } from './components/pages/home-thirty/home-thirty.component';
import { HomeThirtyOneComponent } from './components/pages/home-thirty-one/home-thirty-one.component';
import { HomeThirtyTwoComponent } from './components/pages/home-thirty-two/home-thirty-two.component';
import { HomeThirtyThreeComponent } from './components/pages/home-thirty-three/home-thirty-three.component';
import { HomeThirtyFourComponent } from './components/pages/home-thirty-four/home-thirty-four.component';
import { HomeThirtyFiveComponent } from './components/pages/home-thirty-five/home-thirty-five.component';
import { HomeThirtySixComponent } from './components/pages/home-thirty-six/home-thirty-six.component';
import { HomeThirtySevenComponent } from './components/pages/home-thirty-seven/home-thirty-seven.component';
import { HomeThirtyEightComponent } from './components/pages/home-thirty-eight/home-thirty-eight.component';
import { HomeThirtyNineComponent } from './components/pages/home-thirty-nine/home-thirty-nine.component';
import { HomeFortyComponent } from './components/pages/home-forty/home-forty.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { WorksDetailsComponent } from './components/pages/works-details/works-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';

const routes: Routes = [
    {path: '', component: HomeEightComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'home-four', component: HomeFourComponent},
    {path: 'home-five', component: HomeFiveComponent},
    {path: 'home-six', component: HomeSixComponent},
    {path: 'home-seven', component: HomeSevenComponent},
    {path: 'home-eight', component: HomeEightComponent},
    {path: 'home-nine', component: HomeNineComponent},
    {path: 'home-ten', component: HomeTenComponent},
    {path: 'home-eleven', component: HomeElevenComponent},
    {path: 'home-twelve', component: HomeTwelveComponent},
    {path: 'home-thirteen', component: HomeThirteenComponent},
    {path: 'home-fourteen', component: HomeFourteenComponent},
    {path: 'home-fifteen', component: HomeFifteenComponent},
    {path: 'home-sixteen', component: HomeSixteenComponent},
    {path: 'home-seventeen', component: HomeSeventeenComponent},
    {path: 'home-eighteen', component: HomeEighteenComponent},
    {path: 'home-nineteen', component: HomeNineteenComponent},
    {path: 'home-twenty', component: HomeTwentyComponent},
    {path: 'home-twenty-one', component: HomeTwentyOneComponent},
    {path: 'home-twenty-two', component: HomeTwentyTwoComponent},
    {path: 'home-twenty-three', component: HomeTwentyThreeComponent},
    {path: 'home-twenty-four', component: HomeTwentyFourComponent},
    {path: 'home-twenty-five', component: HomeTwentyFiveComponent},
    {path: 'home-twenty-six', component: HomeTwentySixComponent},
    {path: 'home-twenty-seven', component: HomeTwentySevenComponent},
    {path: 'home-twenty-eight', component: HomeTwentyEightComponent},
    {path: 'home-twenty-nine', component: HomeTwentyNineComponent},
    {path: 'home-thirty', component: HomeThirtyComponent},
    {path: 'home-thirty-one', component: HomeThirtyOneComponent},
    {path: 'home-thirty-two', component: HomeThirtyTwoComponent},
    {path: 'home-thirty-three', component: HomeThirtyThreeComponent},
    {path: 'home-thirty-four', component: HomeThirtyFourComponent},
    {path: 'home-thirty-five', component: HomeThirtyFiveComponent},
    {path: 'home-thirty-six', component: HomeThirtySixComponent},
    {path: 'home-thirty-seven', component: HomeThirtySevenComponent},
    {path: 'home-thirty-eight', component: HomeThirtyEightComponent},
    {path: 'home-thirty-nine', component: HomeThirtyNineComponent},
    {path: 'home-forty', component: HomeFortyComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'works-details', component: WorksDetailsComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
