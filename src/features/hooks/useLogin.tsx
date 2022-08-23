import {useMutation} from "@tanstack/react-query";
import {login} from "../../api/auth";
import {IUser} from "../../types";

export const BASE_LOGIN_QUERY_KEY='login';

export default function useLogin() {
    return useMutation([BASE_LOGIN_QUERY_KEY],(data:IUser)=>login(data));
}