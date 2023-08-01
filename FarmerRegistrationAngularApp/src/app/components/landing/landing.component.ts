import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private router : ActivatedRoute,
    private router1:Router
  ) { }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params) => {
      console.log("Inside Query Param");
      console.log(params.get('data'))
      if (params.get('data') != null) {
        console.log("Data Found")
        // const queryParam = this.encPassService.OnDecryptPwd(params.get('data'));
        // sessionStorage.setItem("user", JSON.stringify(JSON.parse(queryParam).user));
        // sessionStorage.setItem("auth_token", JSON.parse(queryParam).authToken);
        // this.router1.navigate(['application/dashboard']);
      }
    });

    setTimeout(() => {
      if (sessionStorage.getItem("user") != null) {
        window.location.reload();
      }
    }, 1000);
  }

}
