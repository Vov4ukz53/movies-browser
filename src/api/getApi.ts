import axios from "axios";

export const getApi = async (apiUrl: string) => {
  return (await axios.get<string[]>(apiUrl)).data;
};