import { Component, inject, OnInit } from '@angular/core';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { UserService } from '@core-services/user.service';
import { BlockService } from '@core-services/block.service';
import { TransactionService } from '@core-services/transaction.service';
import { ChartModule } from 'primeng/chart';
import { DatePipe } from '@angular/common';
import { ButtonDirective } from 'primeng/button';
import { IconWolfComponent } from '@shared-components/icons/icon-wolf/icon-wolf.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    Card,
    ChartModule,
    TableModule,
    DatePipe,
    ButtonDirective,
    IconWolfComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  user: any = null;
  block: any = null;
  transactions: any = null;
  transactionsChartData: any = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Transactions',
        data: [56, 55, 60, 65, 59, 80, 81],
        fill: false,
        tension: 0.4,
        borderColor: '#FF1FC7FF',
      },
    ],
  };
  transactionsChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#353535',
        },
        grid: {
          color: '#353535',
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: '#353535',
        },
        grid: {
          color: '#353535',
          drawBorder: false,
        },
      },
    },
  };
  protected toast = inject(MessageService);
  protected userService = inject(UserService);
  protected blockService = inject(BlockService);
  protected transactionService = inject(TransactionService);

  ngOnInit() {
    this.user = this.userService.getAuthenticatedUser();
    this.block = this.blockService.getLastBlock();
    this.transactions = this.transactionService.gettransactions();
  }
}
