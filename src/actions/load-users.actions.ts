import axios from "axios";
import { UserListResponse } from "../interfaces/reqres.response";

// al ser una peticion se utiliza async
export const loadUsersAction = async (page: number) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users`,
      {
        params: {
          page: page,
        },
      }
    );

    return data.data; // data.data es el arreglo de usuarios, el primer data es la respuesta de axios y el segundo data es la propiedad de la respuesta
  } catch (error) {
    console.log(error);
    return [];
  }
};
