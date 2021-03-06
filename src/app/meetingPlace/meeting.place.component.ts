import { Component, OnInit } from '@angular/core';
import { UserNoManagerDatas } from '../shared/services/service.user.component';
import { AuthService } from '../auth/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-meeting-place',
    templateUrl: './meeting.place.component.html',
    styleUrls: ['./meeting.place.component.scss']
})

export class MeetingPlace implements OnInit {
  displayedColumns: string[] = ['position', 'employee', 'estimation'];

  people: MatTableDataSource<any>;
  userDev: string = '';
  sprintName: string = '';
  uId: number;
  hash: string;
  notShowEstimates = true;

  constructor(private userCommon: UserNoManagerDatas, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.sprintName = this.userCommon.sprintName;
    this.hash = this.router.url.substring(this.router.url.indexOf('user-employee/')+16, this.router.url.length);
    let id = 0;
    this.authService.updatedLoggeInPeople(this.hash).subscribe(params =>{
      if(!params.names || params.names.length === 0) return ;
      id = id + 1;
      this.uId = params.names.length + 1;
      this.notShowEstimates = !params.notShowEstimates ? false: true;
      if(params.notShowEstimates === undefined){
        this.notShowEstimates = true;
      }
      this.people = new MatTableDataSource(params.names);
    });

  }

  public estimate(signupForm: NgForm){
    if(!signupForm.valid){
      return ;
    }
  const valueEstimate = signupForm.value.time;
  this.authService.updateDevEstimation(this.userCommon.id, this.hash, valueEstimate);
  }

  public alternateShowNotShowEstimates(){
    this.notShowEstimates = !this.notShowEstimates;
    this.authService.alternateShowNotShowEstimatesForAll(this.notShowEstimates,this.hash)
  }

  public deleteEstimates(){
      this.authService.deleteAllEstimates(this.hash);
  }

}
