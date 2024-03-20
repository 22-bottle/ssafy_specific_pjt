import { selector } from "recoil";
import { currencydetailState } from "./currencyatoms";

// 더미 데이터 테스트--> 추후 api로 요청
const usacurrencymonth =[
    {
        x:new Date('2022-02-01'),
        y:44
    },
    {
        x:new Date('2022-02-02'),
        y:61
    },
    {
        x:new Date('2022-02-03'),
        y:44
    },
    {
        x:new Date('2022-02-04'),
        y:44
    },
    {
        x:new Date('2022-02-04'),
        y:44
    }
]
const japancurrencymonth=[
    {
        x:new Date('2022-02-01'),
        y:71
    },
    {
        x:new Date('2022-02-02'),
        y:78
    },
    {
        x:new Date('2022-02-03'),
        y:75
    },
    {
        x:new Date('2022-02-04'),
        y:70
    },
    {
        x:new Date('2022-02-04'),
        y:99
    }
]
const europecurrencymonth =[
    {
        x:new Date('2022-02-01'),
        y:61
    },
    {
        x:new Date('2022-02-02'),
        y:62
    },
    {
        x:new Date('2022-02-03'),
        y:64
    },
    {
        x:new Date('2022-02-04'),
        y:69
    },
    {
        x:new Date('2022-02-04'),
        y:70
    }
]
const chinacurrencymonth =[
    {
        x:new Date('2022-02-01'),
        y:61
    },
    {
        x:new Date('2022-02-02'),
        y:69
    },
    {
        x:new Date('2022-02-03'),
        y:70
    },
    {
        x:new Date('2022-02-04'),
        y:61
    },
    {
        x:new Date('2022-02-04'),
        y:70
    }
]
const emptyList = [
    {
        x:new Date('2022-02-01'),
        y:61
    },
    {
        x:new Date('2022-02-02'),
        y:61
    },
    {
        x:new Date('2022-02-03'),
        y:61
    },
    {
        x:new Date('2022-02-04'),
        y:61
    },
    {
        x:new Date('2022-02-04'),
        y:61
    }
]
export const currencydataList = selector({
    key:"currencydataList",
    get: async ({ get }) => {
        let countryId = get(currencydetailState);
        let response;
        if (countryId === 1) {
            response = usacurrencymonth
          } else if (countryId === 2) {
            response = japancurrencymonth
          } else if (countryId === 3) {
            response = europecurrencymonth
          } else if (countryId === 4) {
            response=chinacurrencymonth
          } else if (countryId === 0) {
            response = emptyList
          }
          console.log(response)
          return response;
    }, 
});