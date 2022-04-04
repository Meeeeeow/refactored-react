import React,{Component} from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search.component';
import Weather from './components/weather.component';
const API_Key = "ebf1a0346e702ad67c5da2fe4bba32be";
class App extends Component {
  constructor(){
    super();

    this.state={
        city:'',
        country:'',
        temp_cel:0,
        temp_max:0,
        temp_min:0,
        desc:'',
        icon:'',
        color:'',
        feels:0,
        humidity:0,
        text:'',
        wind:0,
        pressure:0
    }

    this.weatherIcon = {
      thunderstorm : "wi-thunderstorm",
      drizzle:"wi-sleet",
      rain:"wi-storm-showers",
      snow:"wi-snow",
      atmosphere:"wi-fog",
      clear:"wi-day-sunny",
      clouds:"wi-day-fog"
    }
  }
  
  getWeatherIcon =(icons,id) =>{
    switch(true){
      case id >= 200 && id <= 232:
        this.setState({
          icon:icons.thunderstorm,
          color:'bg-secondary'
        })
        break;
        case id >= 300 && id <= 321:
          this.setState({
            icon:icons.drizzle,
            color:'bg-success bg-gradient'
          })
          break;
          case id >= 500 && id <= 531:
            this.setState({
              icon:icons.rain,
              color:'bg-dark bg-gradient',
              text:'text-light'
            })
            break;
            case id >= 600 && id <= 622:
              this.setState({
                icon:icons.snow,
                color:'bg-light bg-gradient'
              })
              break;
              case id >= 701 && id <= 781:
                this.setState({
                  icon:icons.atmosphere,
                  color:'bg-primary bg-gradient'
                })
                break;
                case id === 800:
                  this.setState({
                    icon:icons.clear,
                    color:'bg-warning bg-gradient'
                  })
                  break;
                  case id >= 801 && id <= 804:
                    this.setState({
                      icon:icons.clouds,
                      color:'bg-info bg-gradient'
                    })
                    break;
              default:
    }
  }
  getWeather = async(e) =>{
    e.preventDefault();
    const cityName =  e.target.elements.city.value

    const countryName =  e.target.elements.country.value
   if(cityName !== '' && countryName !== '')
   {
    const city =  e.target.elements.city.value[0].toUpperCase() + e.target.elements.city.value.slice(1);
    console.log(city);
    const country =  e.target.elements.country.value[0].toUpperCase() + e.target.elements.country.value.slice(1);
    console.log(country);
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}&units=metric`)
    const response = await api_call.json();
    console.log(response);
    
    this.setState({
      city:response.name,
      country:response.sys.country,
      temp_cel:Math.round(response.main.temp),
      temp_max:Math.round(response.main.temp_max),
      temp_min:Math.round(response.main.temp_min),
      desc:response.weather[0].description[0].toUpperCase() + response.weather[0].description.slice(1),
      feels:Math.round(response.main.feels_like),
      humidity:Math.round(response.main.humidity),
      wind:response.wind.speed,
      pressure:response.main.pressure
    })
    this.getWeatherIcon(this.weatherIcon,response.weather[0].id);
    e.target.elements.city.value = city;
    e.target.elements.country.value = country;
   }else{
     alert('Please enter valid city and country');
   }
  } 
  render(){
    const {city,country,temp_cel,temp_max,temp_min,desc,icon,color,feels,humidity,text,wind,pressure} = this.state;
    return (
      <div className={`App ${color} ${text}`}>
        <h2 className='mt-5'>Weather App</h2>
        <Search  weatherLoader={this.getWeather}/>
          <Weather  
            city={city} 
            country={country}
            temp ={temp_cel}
            max_temp={temp_max}
            min_temp={temp_min}
            description = {desc}
            weatherIcon = {icon}
            color={color}
            feel_temp = {feels}
            humidity = {humidity}
            wind={wind}
            pressure={pressure}
          />
      </div>
    );
  }
  
}

export default App;
