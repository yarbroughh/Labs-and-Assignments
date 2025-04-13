//Move my type code into a new file and add "export" so another file can use it

//Translate to TS and resolve errors by defining the type for my API response (the forecast
// items that will display in the card for each day):
export type WeatherApiResponse = {
    days: {
      datetime: string;
      temp: number;
      conditions: string;
      icon: string;
    } [];
  };

//Suggested by AI to help TypeScript understand what each object in the array looks like
//Originally I had "any[]" to resolve errors, but now I'll update to use Vacation
  export type Vacation = {
    id: number;
    destination: string;
    monthTraveled: string;
    rating: string;
    thoughts: string;
  };

