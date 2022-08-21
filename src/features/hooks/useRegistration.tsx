import {useMutation} from "@tanstack/react-query";
import { registration} from "../../api/auth";
import { IUser} from "../../types";


export default function useRegistration() {
    return useMutation(['registration'],(data:IUser)=>registration(data));
}