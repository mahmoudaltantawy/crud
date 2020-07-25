import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedState: any = null;
  model: any = {};
  person;
  gender: any[] = [
      
      {name: 'male', value: 'male'},
      {name: 'female', value: 'female'},
      
  ];

  cities1: any[] = [];
  
  cities2: any[] = [];
  
  city1:any = null;

  city2:any = null;
  uploadedFiles: any[] = [];

  constructor(private notifi: NotificationService) {}

  onUpload(event) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.notifi.successNotification('file uploaded successfully');
  }
  onSubmit() {
    console.log(this.model)
  }

  ngOnInit() {
  }

}
