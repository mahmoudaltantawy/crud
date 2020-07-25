import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../shared/services/auth.service";
import { NotificationService } from "../../../shared/services/notification.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private noti: NotificationService
  ) {}
  ngOnInit() {}
  err: string;
  loader:boolean;
  model: any = {
    email: "admin@abharworks.com",
    password: "123456",
  };

  onSubmit() {
    this.loader = true;
    this.auth.login(this.model).subscribe(
      (res) => {
        if (res && res["access_token"]) {
          setInterval(()=>{
            this.loader = false
          },5000)
          const jwt = res["access_token"];
          localStorage.setItem("token", jwt);
          this.router.navigate(["admin/posts"]);
          this.noti.successNotification("Login Successfully");
        }
      },
      (err) => {
        this.err = err;
      }
    );
  }
}
