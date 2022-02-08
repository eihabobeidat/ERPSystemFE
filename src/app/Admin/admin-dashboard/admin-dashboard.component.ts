import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { map, Observable } from 'rxjs';

export interface IEmployee{
  id:number,
  email?:string,
  firstname:string,
  lastname:string,
  mobile?:string,
  address?:string,
  imagepath?:string,
  salary:number,
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  options: Observable<any>;

  initOpts = {
    width: 1050,
    height: 550
  };

  option:any|null;

  constructor(private http: HttpClient) { }

  getExpert(salary:number){
    if(salary <= 500){
      return 12;
    }else if(salary <= 1000){
      return 24
    } else if(salary <= 1500){
      return 38
    } else {
      return 50
    }
  }

  getRate(sal:number){
    return (sal/30)/8;
  }

  ngOnInit(): void {
    this.http.get<IEmployee[]>('https://localhost:44333/api/Employee').subscribe((res:IEmployee[]) => {
      let data:any[] = [["Salary","HRate","EI","Address","Expertise"]];
      res.forEach(employee => {
        data.push([employee.salary, this.getRate(employee.salary), employee.id, employee.address, this.getExpert(employee.salary)])
      })
      this.option = {
        grid3D: {},
        tooltip: {},
        xAxis3D: {
          type: 'category',
        },
        yAxis3D: {
          type: 'category',
        },
        zAxis3D: {},
        visualMap: {
          max: 1e8,
          dimension: 'HRate',//EI
        },
        dataset: {//["Income","Life Expectancy","Population","Country","Year"]
          dimensions: [
            'Salary',
            'HRate',
            'EI',
            'Address',
            { name: 'Expertise', type: 'ordinal' },
          ],
          source: data,
        },
        series: [
          {
            type: 'bar3D',
            symbolSize: 15,
            shading: 'lambert',
            encode: {
              x: 'Expertise',
              y: 'Address',
              z: 'HRate',
              tooltip: [0, 1, 2, 3, 4],
            },
          },
        ],
      }
    });
  }
}

