import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  toggled: Subject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}
}
