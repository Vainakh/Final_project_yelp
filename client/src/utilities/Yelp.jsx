
const apiKey = 'z0NpnthOZGyCbiUjBFeBAOvCnRhRL5yphDbKtxV8KH97PcONU3owXcgYIkh_EZMiIuKqM1_C5l79zIrEgG6Q0Gk1AdjbC1Zc9fylzQ9dC3JMWt6vSrKm04rU3kULX3Yx';
const Yelp = {
  search(term, location, sortBy){
    // console.log(term);
    // console.log(location);
    // console.log(sortBy);
    // console.log("this is fetch:" + fetch)
   return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers : {
      Authorization :`Bearer ${apiKey}`
    }
   }) 
   .then((response) => response.json())
   .then((jsonResponse) => {
     console.log(response)
     if (jsonResponse.businesses) { 
       return jsonResponse.businesses.map(business => ({
         id : business.id,
         imageSrc: business.image_url,
         name: business.name,
         address : business.location.address1,
         city : business.location.city,
         state : business.location.state,
         zipCode : business.location.zip_code,
         category : business.categories[0].title,
         rating : business.rating,
         reviewCount : business.review_count
       }));
      }
   });
  }
};

export default Yelp;