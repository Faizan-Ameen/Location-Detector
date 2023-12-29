// var button = document.querySelector('button');
// var apikey = "e10d8289603c4108a77c390c91d52a9d";
// button.addEventListener('click', () => {

//       // Navigator.geolocation java Script ka built in function hy 
//       if (navigator.geolocation) {
//             console.log(navigator.geolocation);
//             navigator.geolocation.getCurrentPosition(onSuccess, onError)
//       } else {
//             button.innerHTML = "Your browser not support the API"
//       }

// })
// function onSuccess(position) {
//       let { latitude, longitude } = position.coords;
//       fetch(`https:api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apikey}`)
//             .then(response => response.json()).then(result => {
//                   let allDetails = result.results[0].components;
//                   let { country, postcode, county, road_type, city, continent, neighbourhood } = allDetails;
//                   // console.log(country , postcode , county ,road_type , city ,continent ,neighbourhood)
//                   button.innerHTML = `Country:${country}  City:${city}  Postal Code:${postcode}  Nearby Town:${neighbourhood} ${continent}  `;
//             })
// }
// function onError(error) {
//       if (error.code == 1) {
//             button.innerHTML = "You Denide the request";
//       } else if (error.code == 2) {
//             button.innerHTML = "Location not available";
//             console.log(button.innerHTML)
//       } else {
//             button.innerHTML = "Something went wrong";
//       }
//       button.setAttribute("disabled", "true");
//       console.log(error);
// }




const button = document.querySelector("button");
let apikey = "e10d8289603c4108a77c390c91d52a9d";


button.addEventListener('click', () => {
      if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
            console.log(navigator.geolocation)
      }
})


function onSuccess(position) {
      console.log(position);

      let {latitude ,longitude}=position.coords;
      fetch(`https:api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apikey}`)
      .then(response=> response.json()).then(result=>{
            console.log(result)
            let allData =result.results[0].components
            let{country ,city ,postcode}=allData
            console.log(country ,city ,postcode);
            button.innerHTML =`${country} ${city} ${postcode}`
      })


}


function onError(error) {
      // console.log(error);


      if (error.code == 1) {
            button.innerHTML = "User denied Geolocation"  // if user denide the request
      } else if (error.code == 2) {
            button.innerHTML = "Location Not Available"  //if location not available
      } else {
            button.innerHTML = "Something Went Wrong" //if any error occur
      }
      button.setAttribute("disabled", "true");

}
