import {GET_DATA} from "./actionTypes";
import axios from "axios";

export const axiosData =(city)=>async(dispatch)=>{
    try{
        const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${city}&lang=ru&appid=95154277f9552e853f08eaf0eb6e20b9`);
        dispatch(getData(data))

    }
    catch {
        throw new Error ('Error!')
    }
}
export const getData = (data)=>{
    return {
        type: GET_DATA,
        payload: data
    };
};


/* http://api.openweathermap.org/data/2.5/weather?id=${city}&lang=ru&appid=
http://openweathermap.org/img/wn/${img}@2x.png */

//http://api.openweathermap.org/data/2.5/weather?id=2017370&lang=ru&appid=fcd7780b300a0d0160ee4aef2084c4a8