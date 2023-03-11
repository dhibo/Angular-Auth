import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatCardModule} from '@angular/material/card'; 
import { ReactiveFormsModule } from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AppRoutingModule } from '../app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { AllDocumentsComponent } from './all-documents/all-documents.component'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatDividerModule} from '@angular/material/divider'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatSelectModule} from '@angular/material/select'; 
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RequestsComponent } from './requests/requests.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDeleteComponent } from './dialog/confirm-delete/confirm-delete.component'; 


@NgModule({
  declarations: [
    LoginComponent,
    SignComponent,
    HomeComponent,
    AddDocumentComponent,
    ListDocumentsComponent,
    AllDocumentsComponent,
    RequestsComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatTabsModule,
    MatRadioModule,
    MatDividerModule,
    MatProgressBarModule,
    HttpClientModule,
    DragDropModule,
    NgxDropzoneModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule,
    MatDialogModule
  ],
})
export class PagesModule { }
