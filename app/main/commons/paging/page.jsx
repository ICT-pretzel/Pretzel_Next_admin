import { NoPage, Page, Pagings } from "@/styles/commons/pagingCSS";
import { observer } from "mobx-react-lite";

const Paging = observer(({ pages, paging, list_movie, noticeList, qnaList, faqList, userList, reportList, adminList }) => {
    
    function handlePaging(cPage) {
        list_movie(cPage);
        noticeList(cPage);
        qnaList(cPage);
        faqList(cPage);
        userList(cPage);
        reportList(cPage);
        adminList(cPage);
    }

    return (
        <Pagings>
            {/* 이전 버튼 */}
            {paging.beginBlock <= paging.pagePerBlock ?
                <NoPage>이전</NoPage> :
                <li>
                    <Page onClick={() => handlePaging(paging.beginBlock - paging.pagePerBlock)}>이전</Page>
                </li>
            }

            {/* 페이지 번호들 */}
            {pages.map((k) => (
                <li key={k}>
                    {k === paging.nowPage ?
                        <NoPage>{k}</NoPage>
                        :
                        <Page onClick={() => handlePaging(k)}>{k}</Page>
                    }
                </li>
            ))}

            {/* 이후 버튼 */}
            {paging.endBlock >= paging.totalPage ?
                <NoPage>다음</NoPage> :
                <li>
                    <Page onClick={() => handlePaging(paging.beginBlock + paging.pagePerBlock)}>다음</Page>
                </li>
            }
        </Pagings>
    )
})

export default Paging;