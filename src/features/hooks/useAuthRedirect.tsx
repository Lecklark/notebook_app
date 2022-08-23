import {useAppSelector} from "./useAppSelector";
import {isAuthInState} from "../../store/slices/appSlice";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {CONTACTS_PAGE} from "../../constants";

export function useAuthRedirect() {
    const isAuth = useAppSelector(isAuthInState);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) navigate(CONTACTS_PAGE)
    }, [isAuth,navigate])
}