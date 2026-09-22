const config = {
	//网页元数据
	metaData: {
		title: 'XUGUOCHEN的个人主页🎉',
		description: '欢迎来到XUGUOCHEN的网址导航站',
		keywords: 'XUGUOCHEN,XUGUOCHEN,个人主页,个人网站',
		icon: '/public/img/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/01.png", // 头像
	welcometitle: "xuguochen's website navigation", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '有些社恐', '随和亲切',  '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "海洋女孩",
				"preview": "/img/wallpaper/static/海洋女孩/image-pre.webp",
				"url": "/img/wallpaper/static/海洋女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://xuguochenblog.dpdns.org/" },
		{ icon: "mdi-email", link: "https://xuguochenblog.dpdns.org/" },
		{ icon: "mdi-qqchat", link: "https://xuguochenblog.dpdns.org/" },
		{ icon: "mdi-wechat", link: "https://xuguochenblog.dpdns.org/" },
		{ icon: "mdi-youtube", link: "https://xuguochenblog.dpdns.org/" },
		{ icon: "mdi-facebook", link: "https://xuguochenblog.dpdns.org/" }
	],

	//打字机
	typeWriterStrings: [
		"人生没有白走的路，每一步都算数。那些看似无用的经历、暂时的迷茫和孤独的坚持，终将在未来的某个时刻串联成你独有的风景。不要急于否定当下的自己，成长往往发生在你看不见的地方。",
		"人生如登山，有人追求登顶的荣耀，有人享受沿途的风景。其实，重要的不是你站在多高的位置，而是你是否走出了属于自己的路。慢一点没关系，只要方向对，终会抵达。",
		"在这个快节奏的时代，我们总被催促着前进，却很少停下来问问自己：这真的是我想要的生活吗？真正的自由，是敢于按照自己的节奏生活，而不是活在别人的期待里。",
		"真正的成熟，不是变得世故圆滑，而是在看清生活的复杂之后，依然选择善良与真诚。你不必讨好所有人，但要对得起自己的良心；世界或许喧嚣，但内心可以保持宁静。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887',  //歌单id ---> music.163.com/#/playlist?id=2028178887
		randomFirstPlay: true,  //进入页面是否随机播放歌单中的某一首（true开启，若开启则 startIndex 忽略）
		startIndex: 0,          //不随机时，进入页面可以自定义播放第几首（索引从0开始，若超出歌单长度则自动回落为0）
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/02.png", title: "个人博客", subtitle: "站点1", text: "点击此处访问我的博客.", url: "https://xuguochenblog.dpdns.org/", show: false },
		{ go: "🗂️ 前往", img: "/img/03.png", title: "在线音乐平台", subtitle: "站点2", text: "Live Music.", url: "http://xuguochen003.dpdns.org/", show: false },
		{ go: "📝 前往", img: "/img/04.png", title: "hive AI聊天", subtitle: "站点3", text: "AI Chat, I've managed to get your attention.", url: "http://xuguochen.dpdns.org/", show: false },
		{ go: "👍 前往", img: "/img/05.png", title: "open webui AI聊天", subtitle: "已下线", text: "已下线", url: "https://webui.xuguochen.dpdns.org/", show: false },
		{ go: "🗃 前往", img: "/img/06.png", title: "影视站Libre TV", subtitle: "站点5", text: "影视1", url: "http://xuguochen001.dpdns.org/", show: false },
		{ go: "🎨 前往", img: "/img/07.png", title: "影视站Moon TV", subtitle: "站点6", text: "影视2", url: "http://xuguochen002.dpdns.org/", show: false },
		{ go: "💍 前往", img: "/img/08.png", title: "待补充", subtitle: "站点7", text: "待补充", url: "https://xuguochenblog.dpdns.org/", show: false },
		{ go: "🔍 前往", img: "/img/09.png", title: "待补充", subtitle: "站点8", text: "待补充", url: "https://xuguochenblog.dpdns.org/", show: false },
	],

	statement: ["备案号：XUGUOCHEN--许国臣", "Copyright © 2026 XUGUOCHEN"],
}

export default config
