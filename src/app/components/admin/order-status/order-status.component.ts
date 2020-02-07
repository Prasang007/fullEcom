import { Component, OnInit} from '@angular/core';
import { Order } from 'src/app/orders';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  progress = 0;
  step = 0;
  constructor(private shared: SharedService, private location: Location) { }
  order: Order;
  ngOnInit() {
    this.order = history.state.data;
    this.progressAssign();
  }
  deleteOrder(id: string) {
    this.shared.deleteOrder(id).subscribe(success => {
      this.shared.updateTotalOrder(this.order._id, 1, 'del').subscribe(success1 => {
        this.shared.openSnackbar(success1, 'Close');
      });
    });
    this.location.back();
  }
  progressAssign() {
    switch (this.order.status) {
      case 'Pending' :
        this.progress = 25;
        this.step = 0;
        break;
      case 'Accepted' :
        this.progress = 50;
        this.step = 1;
        break;
      case 'Shipped' :
        this.progress = 75;
        this.step = 2;
        break;
      case 'Delivered' :
        this.progress = 100;
        this.step = 3;
        break;
    }
  }
  increaseProgress() {
    switch (this.progress) {
      case 25:
        this.order.status = 'Accepted';
        this.shared.changeStatus(this.order).subscribe( success => {
        });
        break;
      case 50:
        this.order.status = 'Shipped';
        this.shared.changeStatus(this.order).subscribe( success => {
        });
        break;
      case 75:
          this.order.status = 'Delivered';
          this.shared.changeStatus(this.order).subscribe( success => {
          });
          break;
    }
    this.progress = this.progress + 25 ;
  }
  goBack() {
    this.location.back();
  }

}
