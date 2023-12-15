import customFetch from "../../config/config";

export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    const response = await customFetch('http://') 
    const data = await response.json()
    resolve({data})
  }
  );
}
