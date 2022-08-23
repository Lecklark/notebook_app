import {FC, ReactNode} from "react";
import Header from "./Header";
import {Box} from "@chakra-ui/react";

interface LayoutProps {
    children: ReactNode,
}

const Layout: FC<LayoutProps> = ({children}) => {

    return (
        <Box minH='100vh' display='flex' flexDirection='column'>
            <Header/>
            {children}
        </Box>
    )
}

export default Layout