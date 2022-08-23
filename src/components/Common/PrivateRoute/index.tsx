import {FC, ReactNode} from "react";
import {useAppSelector} from "../../../features/hooks/useAppSelector";
import {isAuthInState} from "../../../store/slices/appSlice";
import {Navigate} from "react-router-dom";
import {LOGIN_PAGE} from "../../../constants";

interface PrivateRouteProps {
    children: ReactNode,
}

const PrivateRoute: FC<PrivateRouteProps> = ({children}) => {

    const isAuth = useAppSelector(isAuthInState);
    return (<>
        {isAuth ? children : <Navigate to={LOGIN_PAGE}/>}
    </>)
}

export default PrivateRoute;