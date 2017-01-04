import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class RedirectToRoot implements CanActivate {

  constructor(private router: Router) {
  }

  public canActivate(): boolean {
    console.log("[RedirectToRoot] redirecting to /");
    this.router.navigate(["/"]);
    return false;
  }
}
