import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../../shared/services/posts.service";
import { ConfirmationService } from "primeng/api";
import { NotificationService } from "../../../shared/services/notification.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-postslist",
  templateUrl: "./postslist.component.html",
  styleUrls: ["./postslist.component.scss"],
})
export class PostslistComponent implements OnInit {
  posts: any = [];
  position: string;
  constructor(
    private postService: PostsService,
    private confirmationService: ConfirmationService,
    private noti: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    //using resolve to ensure if data has been loaded
    this.route.data.subscribe(
      (res) => {
        this.posts = res.myresolve;
      },
      (err) => {
        console.log(err.statusText);
      }
    );

    // this.postService.getAll().subscribe(
    //   (res) => {
    //     this.posts = res;
    //   },
    //   (err) => {
    //     console.log(err.statusText);
    //   }
    // );
  }

  deletePost(id: number) {
    this.confirmationService.confirm({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      accept: () => {
        //toast success Message
        this.postService.deletePost(id).subscribe(
          () => {
            this.noti.successNotification("Post is deleted Successfully");
            this.getAll();
          },
          () => {
            this.noti.errorNotification("unexpected error");
          }
        );
      },
      reject: () => {
        //toast error Message
        this.noti.errorNotification("Post is not deleted");
      },
    });
  }
}
