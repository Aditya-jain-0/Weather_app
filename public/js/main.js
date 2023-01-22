const submitBtn = document.getElementById('submitBtn');//submit button
const cityName = document.getElementById('cityName'); //input text


const city_name = document.getElementById('city_name'); //Jabalpur,IN
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status'); //cloud
const datahide = document.querySelector('.middle_layer');
const temp_real_val = document.getElementById('temp_real_val');//actual temerature

const getInfo=async(event)=>{
    event.preventDefault();//prevent refreshing the event performing on the pgeafter submit
    let cityVal = cityName.value;
     if(cityVal === ""){
        city_name.innerText='Plz write the name before search';
        datahide.classList.add('data_hide');
     }else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9eba4d1145f22a853a792b306bbeed3f`;
        const response = await fetch(url);//jbtk data mil nhi jata wait kro
        const data = await response.json();
        const arrData = [data];
            console.log(arrData[0]);
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText=arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        //condition to check sunny or cloudy
        datahide.classList.remove('data_hide');
    }catch{
            city_name.innerText='Plz write the name properly';
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);