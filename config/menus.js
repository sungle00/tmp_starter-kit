import { 
		Application
	,	Alert2
	,	Sun
	,	Users
	,	Chart
	,	Components
	,	DashBoard
	,	SiteLogo
	,	Stacks2
	,	Map
	,	Grid
	,	Files
	,	Graph
	,	ClipBoard
	,	Cart
	,	Envelope
	,	Messages
	,	Monitor
	,	ListFill
	,	Calendar
	,	Flag
	,	Book
	,	Note
	,	ClipBoard2
	,	Note2
	,	Note3
	,	BarLeft
	,	BarTop
	,	ChartBar
	,	PretentionChartLine
	,	PretentionChartLine2
	,	Google
	,	Pointer
	,	Map2
	,	MenuBar
	,	Icons
	,	ChartArea
	,	Building
	,	Building2
	,	Sheild
	,	Error
	,	Diamond
	,	Heroicon
	,	LucideIcon
	,	CustomIcon
	,	Mail
	,
} from "@/components/svg";

export const menusConfig 			= {
		mainNav: [
				{
						title: "홈"
					,	icon: DashBoard
					,	href: "/dashboard"
					,
				}
			,	{
						title: "건민네"
					,	icon: ClipBoard
					,	megaMenu: [
								{
										title: "건민네 소개"
									,	icon: Sun
									,	href: "#"
									,	child : [
												{
														title: "소개"
													,	icon: Users
													,	href: "#"
												}
											,	{
														title: "조직 및 기여자"
													,	icon: Users
													,	href: "#"
												}
											,	{
														title: "운영 규칙 및 시민 참여"
													,	icon: Users
													,	href: "#"
												}
											,	{
														title: "자주 묻는 질문"
													,	icon: ClipBoard
													,	href: "#"
												}
											]
									,
								}
							,	{
										title: "건민네 활동"
									,	icon: Users
									,	href: "#"
									,	child: [
												{
														title: "공지"
													,	icon: Users
													,	href: "#"
												}
											,	{
														title: "기사 및 사진첩"
													,	icon: Note3
													,	href: "#"
												}
											,	{
														title: "일정"
													,	icon: Calendar
													,	href: "#"
												}
											,	{
														title: "묻고 답하기"
													,	icon: Calendar
													,	href: "#"
												}
										]
								}
							,
						]						
					,
				}
			,	{
						title: "프로젝트"
					,	icon: Users
					,	href: "#"
					,	megaMenu: [
								{
										title: "작업"
									,	icon: ListFill
									,	href: "#"
								}
							,	{
										title: "인사평가결과"
									,	icon: Flag
									,	href: "#"
								}
							
						]
					,
				}
			,	{
						title: "커뮤니티"
					,	icon: Components
					,	megaMenu: [
								{
										title: "프로젝트 참여"
									,	icon: ClipBoard
									,	href: "#"
									,	child: [
												{
														title: "프로젝트 팀"
													,	icon: Users
													,	href: "#"
													,
												}
											,	{
														title: "BE 자료 수집 참여"
													,	icon: Book
													,	href: "#"
													,
												}
											,											
										]
									,
								}
							,	{
										title: "인사조직 연구"
									,	icon: ClipBoard
									,	href: "#"
									,	child: [
												{
														title: "영상 강의 자료"
													,	icon: Book
													,	href: "#"
													,
												}
											,	{
														title: "학습 자료"
													,	icon: Book
													,	href: "#"
													,
												}
											,
										]
									,
								}
							,
						]					
					,
				}
			,
		]
	,	sidebarNav: {
				modern: [
						{
								title: "홈"
							,	icon: DashBoard
							,	href: "/dashboard"
							,
						}
					,	{
								title: "건민네"
							,	icon: ClipBoard
							,	child: [
										{
												title: "건민네 소개"
											,	icon: Sun
											,	href: "#"
											,	nested : [
														{
																title: "소개"
															,	icon: Users
															,	href: "#"
														}
													,	{
																title: "조직 및 기여자"
															,	icon: Users
															,	href: "#"
														}
													,	{
																title: "운영 규칙 및 시민 참여"
															,	icon: Users
															,	href: "#"
														}
													,	{
																title: "자주 묻는 질문"
															,	icon: ClipBoard
															,	href: "#"
														}
													]
											,
										}
									,	{
												title: "건민네 활동"
											,	icon: Users
											,	href: "#"
											,	nested: [
														{
																title: "공지"
															,	icon: Users
															,	href: "#"
														}
													,	{
																title: "기사 및 사진첩"
															,	icon: Note3
															,	href: "#"
														}
													,	{
																title: "일정"
															,	icon: Calendar
															,	href: "#"
														}
													,	{
																title: "묻고 답하기"
															,	icon: Calendar
															,	href: "#"
														}
												]
										}
									,
								]						
							,
						}
					,	{
								title: "프로젝트"
							,	icon: Users
							,	href: "#"
							,	child: [
										{
												title: "작업"
											,	icon: ListFill
											,	href: "#"
										}
									,	{
												title: "인사평가결과"
											,	icon: Flag
											,	href: "#"
										}
									
								]
							,
						}
					,	{
								title: "커뮤니티"
							,	icon: Components
							,	child: [
										{
												title: "프로젝트 참여"
											,	icon: ClipBoard
											,	href: "#"
											,	nested: [
														{
																title: "프로젝트 팀"
															,	icon: Users
															,	href: "#"
															,
														}
													,	{
																title: "BE 자료 수집 참여"
															,	icon: Book
															,	href: "#"
															,
														}
													,											
												]
											,
										}
									,	{
												title: "인사조직 연구"
											,	icon: ClipBoard
											,	href: "#"
											,	nested: [
														{
																title: "영상 강의 자료"
															,	icon: Book
															,	href: "#"
															,
														}
													,	{
																title: "학습 자료"
															,	icon: Book
															,	href: "#"
															,
														}
													,
												]
											,
										}
									,
								]					
							,
						}
					,
				]
			,	classic: [
						{
								isHeader: true
							,	title: "menu"							
							,
						}
					,	{
								title: "대시보드"
							,	icon: DashBoard
							,	href: "/dashboard"
						}
					,	{
								title: "프로젝트"
							,	icon: ClipBoard
							,	href: "#"
							,
						}
					,
				]
			,
		}
	,
};
