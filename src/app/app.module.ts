import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { PoliticaComponent } from './politica/politica.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "politica", component: PoliticaComponent }
]

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
