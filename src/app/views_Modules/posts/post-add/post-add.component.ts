import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { PostsService } from "../../../shared/services/posts.service";
import { NotificationService } from "../../../shared/services/notification.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-post-add",
  templateUrl: "./post-add.component.html",
  styleUrls: ["./post-add.component.scss"],
})
export class PostAddComponent implements OnInit {
  addForm: FormGroup;
  submited: boolean;
  constructor(
    private fb: FormBuilder,
    private postsSer: PostsService,
    private noti: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initalizeForm();
  }
  initalizeForm() {
    this.addForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  // access inputs
  get form_controls() {
    return this.addForm.controls;
  }
  onSubmit() {
    this.submited = true;
    if (this.addForm.invalid) {
      return;
    }
    this.postsSer.addpost(this.addForm.value).subscribe(
      () => {
        this.noti.successNotification("Post Is Added Successfully");
        this.router.navigate(["/admin/posts"]);
      },
      () => {
        this.noti.errorNotification("post Is Not Added");
      }
    );
  }
}
