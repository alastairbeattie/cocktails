import axios, { AxiosResponse } from 'axios'

const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/";
const alcoholicListPath = "filter.php?a=Alcoholic";
const nonAlcoholicListPath = "filter.php?a=Non_Alcoholic";

export type CocktailSummary = {
    strDrink: string, 
    strDrinkThumb: string,
    idDrink: number
}
export type CocktailSummaryListResponse = {
    drinks: CocktailSummary[]
}


// export const getCocktailList = () => (
//     axios.request<CocktailSummary[]>({
//         method: "get",
//         url: `${endpoint}${alcoholicListPath}`,
//         transformResponse: (r: CocktailSummaryListResponse) => r.drinks
//       }).then((response) => {
//         // `response` is of type `AxiosResponse<ServerData>`
//         const { data } = response
//         // `data` is of type ServerData, correctly inferred
//       }).catch(err => console.log(err))
// )

export const getCocktailList = () => (
    axios.get<CocktailSummaryListResponse>(`${endpoint}${alcoholicListPath}`)
    //   .then(res => res.data.results)
      .then(res =>{
          return res.data.drinks
        })
      .catch(err => console.log(err))
  )