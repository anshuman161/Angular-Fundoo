import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LabelService } from 'src/app/services/label.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 labels: [];
  constructor(private labelService: LabelService,
              private router: Router,
              ) {
  }

  ngOnInit() {
    this.getLabels();
  }
  getLabels() {
    console.log('under label ts');
    this.labelService.retrieveAllLabel()
    .subscribe(
      (data: any) => {
      this.labels = data.object;
      console.log(data);
      }
    );
  }

}
