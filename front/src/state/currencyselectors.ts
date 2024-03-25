import { selector } from "recoil";
import { currencydetailState } from "./currencyatoms";
import { month } from "@/api/currency";

export const currencydataList = selector({
    key:"currencydataList",
    get: async ({ get }) => {
        const countryId = get(currencydetailState);
        const response = await month(countryId);
        const currencyList = [];
        for (const currency of response.data.data) {
            currencyList.push({ x: currency.todayDate, y: currency.basicRate });
        }
        return currencyList;
    }, 
});