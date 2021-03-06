import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { InViewportModule } from 'ng-in-viewport';
import { AnimateModule } from './animate/animate.module';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorksCardComponent } from './pages/work/works-card/works-card.component';
import { RedBottomRowComponent } from './layouts/red-bottom-row/red-bottom-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { ContentfulService } from './common/contentful.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CapabilitiesComponent,
    WorkComponent,
    ContactUsComponent,
    WorksCardComponent,
    RedBottomRowComponent,
    CaseStudyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InViewportModule,
    AnimateModule,
    ClickOutsideModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
