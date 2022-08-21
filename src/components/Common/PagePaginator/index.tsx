import {Box, Button, useColorMode, useMediaQuery} from "@chakra-ui/react";
import {FC, memo, useEffect, useMemo, useState, MouseEvent} from "react";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
import RowCountChanger from "./RowCountChanger";

interface paginationState{
    page:number;
    itemsOnPage:number;
    totalItems:number;
}

interface pagination{
    page:number;
    pageSize:number;
}

interface PagePaginatorProps{
    onChange?:(obj:pagination)=>void;
    totalItemsCount:number;
}

const PagePaginator:FC<PagePaginatorProps> = ({onChange, totalItemsCount}) => {

    const { colorMode } = useColorMode();
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [state,setState] = useState<paginationState>({
        page:1,
        itemsOnPage:15,
        totalItems: totalItemsCount
    })
    const [showPagesFrom, setShowPagesFrom] = useState(1);
    const currentPage = state.page;
    const pagesCountLimit = useMemo(() => isLargerThan768 ? 5 : 3, [isLargerThan768]);

    useEffect(() => {
        if (onChange !== null && typeof onChange === 'function') {
            onChange({page: state.page, pageSize: state.itemsOnPage});
        }
    }, [state]);

    function changeStateValue(prop:string,value:number) {
        setState(prev=>({
            ...prev,
            [prop]:value,
        }))
    }

    const totalPageCount:number = useMemo(()=>{
        return Math.ceil(state.totalItems/state.itemsOnPage)
    },[state.totalItems,state.itemsOnPage])

    function prevButtonHandler() {
        const curPage = (state.page - 1 > 0) ? state.page - 1 : 1
        changeStateValue('page', curPage);
        if (showPagesFrom === curPage + 1) {
            setShowPagesFrom(showPagesFrom - pagesCountLimit);
        }
    }

    function nextButtonHandler() {
        const curPage = (state.page + 1 <= totalPageCount) ? state.page + 1 : totalPageCount;
        changeStateValue('page', curPage);
        if (showPagesFrom + pagesCountLimit === curPage) {
            setShowPagesFrom(showPagesFrom + pagesCountLimit);
        }
    }

    function pageButtonHandler(event: MouseEvent<HTMLElement>) {
        changeStateValue('page', +event.currentTarget.id)
    }

    function changeCountOfPageItems(newCount:number) {
        changeStateValue('page',1);
        changeStateValue('itemsOnPage',newCount);
        setShowPagesFrom(1);
    }

    function handleLastPage() {
        changeStateValue('page', totalPageCount);
        setShowPagesFrom(totalPageCount - 1);
    }


    const pages = useMemo(()=>{
        return  Array(totalPageCount).fill(0).map((_,i)=>i+1)
    },[totalPageCount,currentPage])

    return (
        <Box display='flex'
             justifyContent='center'
             pos='fixed'
             bottom={0}
             right={0}
             alignItems='center'
             background={colorMode === 'light' ? 'white' : '#273147'}
             boxShadow='base'
             w='100%'
             height='72px'
             zIndex='5'>

            <Button
                disabled={currentPage===1}
                onClick={prevButtonHandler}
                w='40px'
                fontSize='inherit'
                bg='inherit'
            >
                <ArrowLeftIcon />
            </Button>

            {pages.map(pageNum=>{
                if (showPagesFrom <= pageNum && showPagesFrom + pagesCountLimit > pageNum) {
                    return(
                        <Button
                            key={pageNum}
                            id={'id'+pageNum}
                            color={state.page === pageNum ? 'white' : 'inherit'}
                            bg={state.page === pageNum ? 'teal' : 'inherit'}
                            onClick={pageButtonHandler}
                            w='40px'
                            fontSize='inherit'
                        >
                            {pageNum}
                        </Button>
                    )
                } else {
                    return null
                }
            })}
            {state.page + pagesCountLimit < totalPageCount &&
            <>
                <Button isDisabled={true}
                        borderLeft='none'
                        bg='inherit'
                >
                    &hellip;
                </Button>
                <Button
                    onClick={handleLastPage}
                    fontSize='inherit'
                    color={state.page === totalPageCount ? 'white' : 'inherit'}
                    bg={state.page === totalPageCount ? 'teal' : 'inherit'}
                >
                    {totalPageCount}
                </Button>
            </>
            }

            <Button
                disabled={currentPage===totalPageCount}
                onClick={nextButtonHandler}
                w='40px'
                fontSize='inherit'
                bg='inherit'
            >
                <ArrowRightIcon />
            </Button>

            {isLargerThan768 &&
            <Box pos='absolute' right={10} display='flex' alignItems='center'>
                <RowCountChanger
                    currentValue={state.itemsOnPage}
                    onChange={changeCountOfPageItems}
                />
            </Box>
            }

        </Box>
    )
}

export default memo(PagePaginator)