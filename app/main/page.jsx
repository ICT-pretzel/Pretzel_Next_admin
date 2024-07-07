"use client";

import { observer } from "mobx-react-lite";
import { AdminPageTitle } from "../../styles/adminCommonCSS";
import { Chart, Chart_All_Container, Chart_Container, Chart_Container_inner, Chart_title } from "../../styles/dashboardCSS";
import { BarChart, LineChart, PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { AdminContext, LoginContext } from "../../stores/StoreContext";
import LoadingSpinner from "../loadingSpinner/page";

const Main = observer(() => {
    const adminStore = useContext(AdminContext)
    const loginStore = useContext(LoginContext)

    // 구독별 유저 수
    const [subCount, setSubCount] = useState([]);

    // 월별 유저수 증감
    const [monthCount, setMonthCount] = useState([]);

    // 영화 장르별 개수
    const [themaCount, setThemaCount] = useState([]);

    // 시청률순 상위 10개
    const [topView, setTopView] = useState([]);

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(true);

    // 처음 렌더링 될 때 실행
    useEffect(() => {
        console.log("test",adminStore.token);
        chart_data()
    }, []);

    const API_URL = "/main/"

    // 차트 데이터
    async function chart_data() {
        setIsLoading(true); // 데이터를 로드하기 전에 로딩 상태로 설정

        try {
            const response = await axios.get(API_URL + "sub_count",
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                });
            const response2 = await axios.get(API_URL + "month_count",
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                });
            const response3 = await axios.get(API_URL + "thema_count",
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                });
            const response4 = await axios.get(API_URL + "top_view",
                {
                    headers: {
                        Authorization: `Bearer ${loginStore.token}`
                    }
                });
            if (response.data && response2.data && response3.data && response4.data) {
                setSubCount(response.data);
                setMonthCount(response2.data);
                setThemaCount(response3.data);
                setTopView(response4.data);
            }
        } catch (error) {
            console.error('상세 정보 가져오기 실패 : ', error)
        } finally {
            setIsLoading(false); // 데이터를 로드한 후 로딩 상태 해제
        }
    }


    // 로딩중일 때
    if (isLoading) {
         return <LoadingSpinner />
    }

    // 장르별 차트 색상 지정
    function thema_color() {
        let color = [];
        topView.map((k) => {
            if (k.thema === "공포") {
                color.push("#BD88F5");
            } else if (k.thema === "로맨스") {
                color.push("#FFD5F0");
            } else if (k.thema === "범죄/스릴러") {
                color.push("#92BBFC");
            } else if (k.thema === "애니메이션") {
                color.push("#C4ED97");
            } else if (k.thema === "액션") {
                color.push("#FF9E9E");
            } else if (k.thema === "코믹") {
                color.push("#FFF29E");
            }
        });
        return color;
    }

    return (
        <>
                <AdminPageTitle>대시보드</AdminPageTitle>

                <Chart_All_Container>

                    {/* 구독별 유저수 */}
                    <Chart_Container>
                        <Chart_title>구독별 유저수</Chart_title>
                        <Chart_Container_inner>
                            <Chart>
                                <PieChart
                                    colors={['#f29a2e', '#ad6e21', '#868686']}
                                    series={[
                                        {
                                            arcLabel: (item) => `${item.label}`,
                                            arcLabelMinAngle: 45,
                                            data: [
                                                { id: 0, value: subCount[2].count, label: '프리미엄', color: '#f29a2e' },
                                                { id: 1, value: subCount[1].count, label: '베이직', color: '#ad6e21' },
                                                { id: 2, value: subCount[0].count, label: '구독권 없음', color: '#868686' },
                                            ],
                                        },
                                    ]}
                                    sx={{
                                        [`& .${pieArcLabelClasses.root}`]: {
                                            fill: 'white',
                                            fontSize: 16,
                                            fontFamily: 'Pretendard-Regular',
                                        },
                                    }}
                                    slotProps={{
                                        legend: {
                                            labelStyle: {
                                                fontSize: 16,
                                                fill: 'white',
                                                fontFamily: 'Pretendard-Regular',
                                            },
                                        }
                                    }}
                                    width={500}
                                    height={250}
                                />
                            </Chart>
                        </Chart_Container_inner>
                    </Chart_Container>

                    {/* 월별 유저수 증감 */}
                    <Chart_Container>
                        <Chart_title>월별 유저수 증감</Chart_title>
                        <Chart_Container_inner>
                            <LineChart
                                xAxis={[
                                    {
                                        data: [
                                            new Date(monthCount[0].month),
                                            new Date(monthCount[1].month),
                                            new Date(monthCount[2].month)
                                        ],
                                        tickInterval: [
                                            new Date(monthCount[0].month),
                                            new Date(monthCount[1].month),
                                            new Date(monthCount[2].month)
                                        ],
                                        scaleType: "time",
                                        valueFormatter: (date) => dayjs(date).format("YYYY-MM"),
                                    },
                                ]}
                                series={[
                                    {
                                        data: [monthCount[0].count, monthCount[1].count, monthCount[2].count],
                                        area: true,
                                        color: '#f29a2e',
                                    },
                                ]}
                                width={500}
                                height={300}
                                sx={{
                                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                                        strokeWidth: "0.4",
                                        fill: "#ffffff"
                                    },
                                    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                                        fontFamily: 'Pretendard-Regular',
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                                        strokeWidth: "0.5",
                                        fill: "#ffffff"
                                    },
                                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-tick": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    }
                                }}
                            />
                        </Chart_Container_inner>
                    </Chart_Container>

                    {/* 영화 장르별 개수 */}
                    <Chart_Container>
                        <Chart_title>영화 장르별 개수</Chart_title>
                        <Chart_Container_inner>
                            <BarChart
                                xAxis={[{
                                    scaleType: 'band',
                                    data: ['공포', '로맨스', '범죄/스릴러', '애니메이션', '액션', '코믹'],
                                    colorMap: {
                                        type: "ordinal",
                                        thresholds: ['공포', '로맨스', '범죄/스릴러', '애니메이션', '액션', '코믹'],
                                        colors: ['#BD88F5', '#FFD5F0', '#92BBFC', '#C4ED97', '#FF9E9E', '#FFF29E'],
                                    }
                                }]}
                                series={[
                                    {
                                        data: [
                                            themaCount[0].count,
                                            themaCount[1].count,
                                            themaCount[2].count,
                                            themaCount[3].count,
                                            themaCount[4].count,
                                            themaCount[5].count
                                        ]
                                    }
                                ]}
                                width={500}
                                height={300}
                                sx={{
                                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                                        strokeWidth: "0.4",
                                        fill: "#ffffff"
                                    },
                                    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                                        fontFamily: 'Pretendard-Regular',
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                                        strokeWidth: "0.5",
                                        fill: "#ffffff"
                                    },
                                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-tick": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    }
                                }}
                            />
                        </Chart_Container_inner>
                    </Chart_Container>

                    {/* 시청률 순 상위 10개 */}
                    <Chart_Container>
                        <Chart_title>시청률 순 상위 10개</Chart_title>
                        <Chart_Container_inner>
                            <BarChart
                                yAxis={[{
                                    scaleType: 'band',
                                    data: [
                                        topView[0].korea_title,
                                        topView[1].korea_title,
                                        topView[2].korea_title,
                                        topView[3].korea_title,
                                        topView[4].korea_title,
                                        topView[5].korea_title,
                                        topView[6].korea_title,
                                        topView[7].korea_title,
                                        topView[8].korea_title,
                                        topView[9].korea_title,
                                    ],
                                    colorMap: {
                                        type: "ordinal",
                                        thresholds: [
                                            topView[0].korea_title,
                                            topView[1].korea_title,
                                            topView[2].korea_title,
                                            topView[3].korea_title,
                                            topView[4].korea_title,
                                            topView[5].korea_title,
                                            topView[6].korea_title,
                                            topView[7].korea_title,
                                            topView[8].korea_title,
                                            topView[9].korea_title,
                                        ],
                                        colors: thema_color()
                                    }
                                }]}
                                series={[{
                                    data:
                                        [
                                            topView[0].watch_stack,
                                            topView[1].watch_stack,
                                            topView[2].watch_stack,
                                            topView[3].watch_stack,
                                            topView[4].watch_stack,
                                            topView[5].watch_stack,
                                            topView[6].watch_stack,
                                            topView[7].watch_stack,
                                            topView[8].watch_stack,
                                            topView[9].watch_stack
                                        ]
                                }]}
                                sx={{
                                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                                        strokeWidth: "0.4",
                                        fill: "#ffffff"
                                    },
                                    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                                        fontFamily: 'Pretendard-Regular',
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                                        strokeWidth: "0.5",
                                        fill: "#ffffff"
                                    },
                                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    },
                                    "& .MuiChartsAxis-tick": {
                                        stroke: "#ffffff",
                                        strokeWidth: 0.4
                                    }
                                }}
                                width={520}
                                height={300}
                                margin={{
                                    left: 130,
                                }}
                                layout="horizontal"
                            />
                        </Chart_Container_inner>
                    </Chart_Container>
                </Chart_All_Container>
        </>
    )
})

export default Main;