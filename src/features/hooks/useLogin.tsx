import {useMutation} from "@tanstack/react-query";
import {login} from "../../api/auth";
import {IUser} from "../../types";

export default function useLogin() {
    return useMutation(['login'],(data:IUser)=>login(data));
}