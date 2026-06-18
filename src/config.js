// 配置文件：集中管理网站所有内容与样式
const config = {
	/* ============ 管理员权限（决定"外观/壁纸/音乐"是否对所有访客开放） ============
	   判断规则：访问站点时，URL query string 里带 ?admin=你的管理员口令，则进入管理员模式；
	   进入后会在 localStorage 里写一条 key = "leleo_admin_token" 作为持久凭证。

	   如果你想让任何人都不能改（最严）：把下面 isAdmin 设为 "LELEO_SUPER_SECRET"，
	   但只允许通过 URL 口令进入管理员模式（不改下面任何代码）。

	   如果你就是管理员、且想开发调试改主题：把 isAdmin 改成任意字符串，
	   然后访问一次 http://你的域名/?admin=这个字符串 就能解锁。

	   注意：任何情况下（无论是不是管理员），都无法"解锁" config.js 里的壁纸和配色 ——
	   它们以 config 里写死的值为准。管理员只是能在设置面板里临时切换壁纸，
	   但一刷新就会回到 config 默认（除非你自己又把 background 改回去）。
	*/
	isAdmin: "LELEO_SUPER_SECRET",

	// 网页元数据
	metaData: {
		title: '忘川渡客的个人主页🎉',
		description: '欢迎来到忘川渡客的奇妙世界！',
		keywords: 'Leleo,leleo,个人主页,个人网站',
		icon: '/favicon.ico'   // 网页图标，支持外链
	},

	// 头像路径
	avatar: "/img/tos-cn-i-0813c001_ooEtIAAA9gSLA8BqziAZfOpwCA6AfiAgNAYDCu~tplv-8yspqt5zfm-300x300.webp",
	// 欢迎语标题
	welcometitle: "Hi, I'm 忘川渡客",

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --百分比
	blur: 5, // 毛玻璃模糊效果

	// 个人标签
	tags: ['乐观开朗', '温柔体贴', '随和亲切', '冷静沉着', '才思敏捷', '风趣幽默', '刚正不阿', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   // pc端（当前锁定为「世界很温柔《龙族》上杉绘梨衣」动态视频壁纸）
			"type": "video",   // "pic":静态壁纸; "video":动态壁纸
			"datainfo": {
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"     // 也可以填写网络地址或壁纸 API
			},
		},
		"mobile": {   // 移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"
			}
		}

	},

	/* ============ 社交平台按钮（按自己的账号替换 link 即可） ============
	   下面是各平台链接的获取方式与格式示例，把 "YOUR_xxx" 部分换成你自己的账号：

	   GitHub   → https://github.com/YOUR_USERNAME             （登录后右上角头像菜单里能看到用户名）
	   邮箱     → mailto:YOUR_EMAIL@example.com                （mailto: 前缀 + 你的邮箱地址）
	   QQ       → https://user.qzone.qq.com/YOUR_QQ号          （QQ 空间主页链接；或用 https://im.qq.com/ 通用入口）
	   微信     → 把你的微信号生成一个「微信二维码」放到 public/img/ 下
                  再把 link 改成一个网络二维码展示服务（推荐：https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=YOUR_WECHAT_ID）
                  或者直接改成你自己的微信公众号文章/主页链接
	   B站     → https://space.bilibili.com/YOUR_UID            （B站个人空间链接，浏览器地址栏即可看到）
	   抖音     → https://www.douyin.com/user/YOUR_UID          （抖音主页链接；分享→复制链接）
	   企业微信 → https://work.weixin.qq.com/                       （企业微信官网入口；或直接放你的企业微信二维码链接）
                  推荐做法：在企业微信管理后台「客户联系 → 加客户 → 获取加群/添加成员二维码」，
                  截图保存到 public/img/ 下，再把 link 改成 https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=YOUR_WORKWECHAT_二维码链接
	   Twitter/X→ https://twitter.com/YOUR_USERNAME
	   YouTube  → https://www.youtube.com/@YOUR_CHANNEL_NAME
	   Facebook → https://www.facebook.com/YOUR_PAGE_NAME
	   Instagram→ https://www.instagram.com/YOUR_USERNAME
	   自定义   → 只要 mdi 图标里有对应图标，直接用 mdi-xxx 即可；
                  想换图标，去 https://pictogrammers.com/library/mdi/ 搜对应图标名替换
	*/
	socialPlatformIcons: [
		{ icon: "mdi-github",    link: "https://github.com/CXF0817" },
		{ icon: "mdi-email",     link: "mailto:cwh081714@520.email.cn" },
		{ icon: "mdi-qqchat",    link: "https://user.qzone.qq.com/194389314/infocenter?loginfrom=31&_t_=0.9924012421812086" },
		{ icon: "mdi-wechat",    link: "/img/03b22fb7dc4c9423ae541d866b5f504c.jpg" },
		{ icon: "mdi-play-circle-outline", link: "https://space.bilibili.com/3546604453759103" },
		// { icon: "mdi-music",     link: "https://www.douyin.com/user/YOUR_UID" },
		// { icon: "mdi-domain",    link: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=YOUR_WORKWECHAT_QR" },
		// 下面这些用不到可以直接删掉；想用就填自己的链接
		// { icon: "mdi-twitter",    link: "https://twitter.com/YOUR_USERNAME" },
		// { icon: "mdi-youtube",    link: "https://www.youtube.com/@YOUR_CHANNEL_NAME" },
		// { icon: "mdi-instagram",  link: "https://www.instagram.com/YOUR_USERNAME" },
		// { icon: "mdi-facebook",   link: "https://www.facebook.com/YOUR_PAGE_NAME" },
	],

	// 打字机文字内容
	typeWriterStrings: [
		"如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
		"顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
		"心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
		"生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
	],

	// 音乐播放配置，采用 MetingJS Api (https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  // 服务提供商 --网易云音乐
		type: 'playlist',   // 歌单类型
		id: '8904898278'  // 歌单 id
	},

	// 壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用 API，请前往脚本自行修改逻辑
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

	// 项目卡片，字段 "show" 控制初始卡片的 text 是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/sunshine.jpg", title: "Project 1", subtitle: "1,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		{ go: "🗂️ 前往", img: "/img/sunshine.jpg", title: "Project 2", subtitle: "2,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		{ go: "📝 前往", img: "/img/sunshine.jpg", title: "Project 3", subtitle: "3,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		{ go: "👍 前往", img: "/img/sunshine.jpg", title: "Project 4", subtitle: "4,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		{ go: "🗃 前往", img: "/img/sunshine.jpg", title: "Project 5", subtitle: "5,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		{ go: "🎨 前往", img: "/img/sunshine.jpg", title: "Project 6", subtitle: "6,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		{ go: "💍 前往", img: "/img/sunshine.jpg", title: "Project 7", subtitle: "7,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		{ go: "🔍 前往", img: "/img/sunshine.jpg", title: "Project 8", subtitle: "8,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
	],

	// 页脚声明（版权、备案号等）
	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Leleo"],
}

export default config
