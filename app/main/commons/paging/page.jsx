import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Paging = observer(({ setCPage, pages, paging, list_movie }) => {
    useEffect(()=>{},[paging])
    function handlePaging(cPage){
        console.log("paging", cPage);
        setCPage(cPage);
        list_movie();
    }

    return (
        <ol>
            {/* 이전 버튼 */}
            {paging.beginBlock <= paging.pagePerBlock ? 
                <li>이전</li> :
                <li>
                    <span onClick={() => handlePaging(paging.beginBlock - paging.pagePerBlock)}>이전</span>
                </li>
            }

            {/* 페이지 번호들 */}
            {pages.map((k) => (
                <li key={k}>
                    {k === paging.nowPage ? 
                        k
                    : 
                        <span onClick={() => handlePaging(k)}>{k}</span>
                    }
                </li>
            ))}

            {/* 이후 버튼 */}
            {paging.endBlock >= paging.totalPage ? 
                <li>다음</li> :
                <li>
                    <span onClick={() => handlePaging(paging.beginBlock + paging.pagePerBlock)}>다음</span>
                </li>
            }
        </ol>
    )
})

export default Paging;