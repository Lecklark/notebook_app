import {useMutation} from "@tanstack/react-query";
import {registration} from "../../api/auth";
import {IUser} from "../../types";

export const BASE_REGISTRATION_QUERY_KEY = 'registration';

export default function useRegistration() {
    return useMutation([BASE_REGISTRATION_QUERY_KEY], (data: IUser) => registration(data));
}