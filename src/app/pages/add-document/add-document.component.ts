import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent {
  form: FormGroup;
  files: File[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      privacy: '',
      type :''
    });
  }

  onSelect(event: any) {
    if (event.addedFiles && event.addedFiles.length > 0) {
      // get the first added file
      const file = event.addedFiles[0];
  
      // set the file to the form control
  
      // update the files array to only contain the new file
      this.files = [file];
    }
  }
  

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit() {
    const file = this.files[0];
    const formData = new FormData();
    formData.append('title', this.form.get('title')!.value);
    formData.append('description', this.form.get('description')!.value);
    formData.append('privacy', this.form.get('privacy')!.value);
    formData.append('type', this.form.get('type')!.value);
    formData.append('file',file ,file.name);
    console.log(formData);
    // TODO: send the form data to the server
  }
}