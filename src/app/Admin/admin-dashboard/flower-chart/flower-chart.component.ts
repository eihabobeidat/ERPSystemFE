import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';

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

export const CoolTheme = {
  color: [
    '#b21ab4',
    '#6f0099',
    '#2a2073',
    '#0b5ea8',
    '#17aecc',
    '#b3b3ff',
    '#eb99ff',
    '#fae6ff',
    '#e6f2ff',
    '#eeeeee'
  ],

  title: {
    textStyle: {
      fontWeight: 'normal',
      color: '#00aecd'
    }
  },

  visualMap: {
    color: ['#00aecd', '#a2d4e6']
  },

  toolbox: {
    color: ['#00aecd', '#00aecd', '#00aecd', '#00aecd']
  },

  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    axisPointer: {
      // Axis indicator, coordinate trigger effective
      type: 'line', // The default is a straight line： 'line' | 'shadow'
      lineStyle: {
        // Straight line indicator style settings
        color: '#00aecd',
        type: 'dashed'
      },
      crossStyle: {
        color: '#00aecd'
      },
      shadowStyle: {
        // Shadow indicator style settings
        color: 'rgba(200,200,200,0.3)'
      }
    }
  },

  // Area scaling controller
  dataZoom: {
    dataBackgroundColor: '#eee', // Data background color
    fillerColor: 'rgba(144,197,237,0.2)', // Fill the color
    handleColor: '#00aecd' // Handle color
  },

  timeline: {
    lineStyle: {
      color: '#00aecd'
    },
    controlStyle: {
      color: '#00aecd',
      borderColor: '00aecd'
    }
  },

  candlestick: {
    itemStyle: {
      color: '#00aecd',
      color0: '#a2d4e6'
    },
    lineStyle: {
      width: 1,
      color: '#00aecd',
      color0: '#a2d4e6'
    },
    areaStyle: {
      color: '#b21ab4',
      color0: '#0b5ea8'
    }
  },

  chord: {
    padding: 4,
    itemStyle: {
      color: '#b21ab4',
      borderWidth: 1,
      borderColor: 'rgba(128, 128, 128, 0.5)'
    },
    lineStyle: {
      color: 'rgba(128, 128, 128, 0.5)'
    },
    areaStyle: {
      color: '#0b5ea8'
    }
  },

  graph: {
    itemStyle: {
      color: '#b21ab4'
    },
    linkStyle: {
      color: '#2a2073'
    }
  },

  map: {
    itemStyle: {
      color: '#c12e34'
    },
    areaStyle: {
      color: '#ddd'
    },
    label: {
      color: '#c12e34'
    }
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#dddddd'],
          [0.8, '#00aecd'],
          [1, '#f5ccff']
        ],
        width: 8
      }
    }
  }
};

@Component({
  selector: 'app-flower-chart',
  templateUrl: './flower-chart.component.html',
  styleUrls: ['./flower-chart.component.css']
})
export class FlowerChartComponent implements OnInit {
  role = localStorage.getItem('role')? localStorage.getItem('role') :"Admin ERP";
  graphName:string = ' information';
  user:IEmployee;

  constructor(private http:HttpClient) { 
    this.http.get<IEmployee>('https://localhost:44333/api/Employee/GetById/'+localStorage.getItem('id'))
    .subscribe((res:IEmployee) => {
      this.user = res;
      this.options = {
        title: {
          text: this.role + this.graphName,
          subtext: this.user.firstname + ' last updates'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          // x: 'center',
          // y: 'bottom',
          data: ['Salary', 'Rate/H', 'Annually', 'RI', 'Rate/D', 'Bonus', 'EI', 'Expertise']
        },
        calculable: true,
        series: [
          {
            name: this.user.firstname + ' ' + this.user.lastname,
            type: 'pie',
            radius: [30, 110],
            roseType: 'area',
            data: [
              { value: this.user.salary/100, name: 'Salary' },
              { value: this.user.salary/30/8, name: 'Rate/H' },
              { value: this.user.salary*12/1000, name: 'Annually' },
              { value: 2*(this.user.firstname.length + this.user.lastname.length), name: 'RI' },
              { value: this.user.salary/30, name: 'Rate/D' },
              { value: this.getExpert(this.user.salary)%100, name: 'Bonus' },
              { value: this.user.id, name: 'EI' },
              { value: this.getExpert(this.user.salary), name: 'Expertise' }
            ]
          }
        ]
      };
    });
  }

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

  theme: string | ThemeOption;
  coolTheme = CoolTheme;
  initOpts = {
    width: 1050,
  };
  options:EChartsOption;

  ngOnInit(): void {
    
  }
}
