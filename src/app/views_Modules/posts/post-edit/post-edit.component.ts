import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../../shared/services/posts.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationService } from "../../../shared/services/notification.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.scss"],
})
export class PostEditComponent implements OnInit {
  constructor(
    private postSer: PostsService,
    private acRouter: ActivatedRoute,
    private fb: FormBuilder,
    private postsSer: PostsService,
    private noti: NotificationService,
    private router: Router
  ) {}
  postId: number;
  postDetails = {};
  updateForm: FormGroup;
  ngOnInit() {
    this.acRouter.params.subscribe((params) => {
      this.postId = params.id;
    });
    this.getPostd();
    this.initalizeForm();
  }
  getPostd() {
    this.postSer.getSpecificPost(this.postId).subscribe((res) => {
      this.postDetails = res;
    });
  }
  initalizeForm() {
    this.updateForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  // access inputs
  get form_controls() {
    return this.updateForm.controls;
  }
  onSubmit() {
    if (this.updateForm.invalid) {
      return;
    }
    this.postsSer.updatePost(this.updateForm.value, this.postId).subscribe(
      () => {
        this.noti.successNotification("Post Is updated Successfully");

        this.router.navigate(["/admin/posts"]);
      },
      () => {
        this.noti.errorNotification("post Is Not updated");
      }
    );
  }
}
