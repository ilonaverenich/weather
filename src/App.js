import {useDispatch, useSelector} from 'react-redux';
import { axiosData } from './redux/actions/getDataAction';
import { useEffect,useState } from 'react';
import { Button, Modal, Input, message } from 'antd';




function App() {
    const [value,setValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const dispatch = useDispatch();
    const store = useSelector(store=> store.data);
    const json = require('./country.json');

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
   

    useEffect(()=>{
      dispatch(axiosData(630336))
    },[]); 


    function getImage (img){
      return `http://openweathermap.org/img/wn/${img}@2x.png`;
    }

    function getPlace(json){
     let res =  json.filter(city=>(city.name.toLowerCase()==value.toLowerCase()))
     res.length>0? dispatch(axiosData(res[0].id)):message.error('такой страны в базе нет');
     setValue('');

    }

    const handleSubmit = event => {
      event.preventDefault();
      getPlace(json)
    };

  return (
  
        <div className="App ">
       <form onSubmit={handleSubmit} >
       { store && store.map(city=>{
          return (  
            <div className='container ' key={city.id}>
             
                <div className='city'>
                  <div className='content'>
                  
                     <div className='input'>
                     
                   <Input required placeholder="Например : Беларусь" value={value} onChange={(e)=>setValue(e.target.value)} type="text"/>
    
                <Button ghost  onClick={showModal}>Инфо</Button>
                <Modal title="Страны, которые есть в базе данных:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>   
                  <p>Беларусь</p>
                  <p>Россия</p>
                  <p>Украина</p>
                  <p>Латвия</p>
                  <p>Литва</p>
                  <p>Польша</p>
                  <p>Италия</p>
                  <p>Испания</p>
                  <p>Франция</p>
                  <p>Германия</p>
                  <p>Турция</p> 
                </Modal>
                     </div>
                      <Button type="submit" onSubmit={(e)=>handleSubmit(e)} onClick={()=>getPlace(json)}>Поиск</Button>
                  </div>
                  <h1>{city.name}</h1>
                  <h2>{Math.floor( city.main['temp'] - 273)}&#176;</h2>
                  <div className='weather'>
                    
                    <img src={getImage(city.weather[0].icon)} alt="" /> 
                    <div>
                     {city.weather[0].main} 
                    </div>
                  </div>
                  <p className='text'>API взято с сайта <a href="https://openweathermap.org/api"> https://openweathermap.org/api</a></p>

                </div>
              </div>
              )
                })}
       </form>
        </div>
  

   
  );
}

export default App;
