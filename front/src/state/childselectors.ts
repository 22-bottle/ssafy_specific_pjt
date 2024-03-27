import { selector } from "recoil";
import { stageSubjectState, countrydetailState } from "./StageSubjectAtoms";
import { book } from "@/api/child";

export const bookList = selector({
    key: "bookList",
    get: async({ get }) => {
        const stageId = get(stageSubjectState);
        const countryId = get(countrydetailState);
        const response = await book(stageId + (countryId - 1) * 5);
        const bookList = response.data.data.pageList;
        return bookList;
    }
})