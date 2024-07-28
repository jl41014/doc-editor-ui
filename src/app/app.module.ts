import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EditorComponent } from './features/editor/editor.component';
import { TermsheetDashboardComponent } from './features/termsheet-dashboard/termsheet-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { PdfPreviewComponent } from './features/popups/pdf-preview/pdf-preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentPreviewComponent } from './features/component-preview/component-preview.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableDirective } from './directives/contenteditable.directive';
import { AddComponentComponent } from './features/popups/add-component/add-component.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TermsheetDashboardComponent,
    ObjectKeysPipe,
    PdfPreviewComponent,
    ComponentPreviewComponent,
    ContenteditableDirective,
    AddComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CdkDrag,
    CdkDropList,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    NgbModule,
    NgbPopoverModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
