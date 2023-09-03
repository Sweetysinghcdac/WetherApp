import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  cityName:string = 'Chandigarh';
  tempk:any;
  data:any;
  minTemp: any;
  tempmin: any;
  temMax: any;
  MaxTemp: any;

constructor(private weatherService: WeatherService) {

}

weatherData?: WeatherData; 

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  
  }

  onSubmit(){
this.getWeatherData(this.cityName);
this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response: any) =>{
          this.weatherData =response;
          
          this.tempk=this.weatherData?.main.temp;
          this.data=this.tempk-273.15;

          this.tempmin=this.weatherData?.main.temp_min;
          this.minTemp=(this.tempmin-273.15);

          this.temMax=this.weatherData?.main.temp_max;
          this.MaxTemp=this.temMax-273.15;

        console.log(response);
      }
    });
  }
  
  // title = 'weatherApp';
}
