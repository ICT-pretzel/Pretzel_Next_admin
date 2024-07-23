import { Pagings } from "@/styles/commons/pagingCSS";
import { observer } from "mobx-react-lite";

const Paging = observer(({ pages, paging, list_movie }) => {
    
    function handlePaging(cPage) {
        list_movie(cPage);
    }

    return (
        <Pagings>
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
        </Pagings>
    )
})

export default Paging;