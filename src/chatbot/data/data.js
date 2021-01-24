const baseURL = "https://developers.zomato.com/api/v2.1/";

export const getRestaurants = async (
  cuisineType,
  categoryType,
  latitude,
  longitude
) => {
   let data = await fetch(
     `${baseURL}search?q=${categoryType}&count=5&lat=${latitude}&lon=${longitude}&cuisines=${cuisineType}`,
     {
       method: "GET",
       headers: {
         Accept: "application/json",
         "user-key": "443cebb0c149559671b6093778226894",
       },
     }
   );
   data = await data.json();

  console.log(data);
  return data["restaurants"];
};

export const getTrending = async () => {
   let data = await fetch(
     `${baseURL}search?collection_id=1&entity_id=70`,
     {
       method: "GET",
       headers: {
         Accept: "application/json",
         "user-key": "443cebb0c149559671b6093778226894",
       },
     }
   );
   data = await data.json();
  console.log(data);
  return data["restaurants"];
};