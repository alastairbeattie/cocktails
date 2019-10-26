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

export const getCocktailList = async () => {
    try {
        const result = await axios.get<CocktailSummaryListResponse>(`${endpoint}${alcoholicListPath}`)
        return result.data.drinks
    } catch(e) {
        console.log('API GET error: ', e);
        return `${e}`
    }
}