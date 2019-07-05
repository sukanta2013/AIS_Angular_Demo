import { Component, OnInit } from '@angular/core';
import { LncService } from '../../../services/lnc-service';

@Component({
  selector: 'ngx-list-of-users',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(
    private _lncService: LncService
  ) {

   }
  ngOnInit() {
  }
}
