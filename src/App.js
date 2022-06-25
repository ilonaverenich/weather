import {useDispatch, useSelector} from 'react-redux';
import { axiosData } from './redux/actions/getDataAction';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Geo from './components/Geo';


function App() {
    const [value,setValue] = useState('');


    const dispatch = useDispatch();
    const store = useSelector(store=> store.data);
    console.log(store)
    const json = require('./citylist.json');
   



    useEffect(()=>{
      dispatch(axiosData(2643743))
    },[]); 


    function getImage (img){
      return `http://openweathermap.org/img/wn/${img}@2x.png`;
    }

    function getPlace(json){
        json.map(el=>{
          if (el.name.includes(value)&& dispatch(axiosData(el.id))){
            console.log('Найдено!')
          }
          else{
            console.log('Не найдено!')
          }
        } );
        setValue('')

    }

  return (
  
        <div className="App ">
        { store && store.map(city=>{
          return (  
            <div className='container '>
             
                <div className='city'>
                  <div className='content'>
                    <div>Введите название страны, погоду которой хотите узнать.</div>
                     <div className='input'>
                     <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" />
                      <span>
                        <img width={20} src='https://i.postimg.cc/rFTQL4vx/icons8-16.png' alt="подсказка" />
                      </span>
                     </div>
                      <button onClick={()=>getPlace(json)} >Поиск</button>
                  </div>
                  <h1>{city.name}</h1>
                  <h2>{Math.floor( city.main['temp'] - 273)}&#176;</h2>
                  <div className='weather'>
                    
                    <img src={getImage(city.weather[0].icon)} alt="" /> 
                    

                    <div>
                     {city.weather[0].main} 
                    </div>
                  </div>
                </div>
              {/*   <hr className='vertical'/> */}

             
              
              
              </div>
              )
                })}
        </div>
  

   
  );
}

export default App;


{/*     <h2 ></h2>
                 Weather: 
                   
                

              
                    fills like:
                    min: {Math.ceil( city.main['temp_min'] - 273)} &#176;
                    max: {Math.ceil( city.main['temp_max'] - 273)} &#176; */}
