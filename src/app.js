// 应用主逻辑：根组件 <script> 部分，负责页面整体状态管理
import homeright from '../src/components/hoemright.vue';
import typewriter from './components/typewriter.vue';
import tab1 from './components/tabs/tab1.vue';
import tab2 from './components/tabs/tab2.vue';
import tab3 from './components/tabs/tab3.vue';
import loader from './components/loader.vue';
import config from './config.js';
import { getCookie } from './utils/cookieUtils.js';
import { setMeta, getFormattedTime, getFormattedDate, dataConsole } from './utils/common.js';
import { useDisplay } from 'vuetify'

// ============ 管理员权限检测工具 ============
// 规则：
//   1) 访问 URL 时带 ?admin=xxx 且 xxx 等于 config.isAdmin，则进入管理员模式；
//   2) 检测到管理员后，把 token 写入 localStorage("leleo_admin_token")；
//   3) 只要当前是管理员或 localStorage 里存了正确 token，isAdminNow() 都返回 true。
function checkAdminToken() {
  try {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get('admin') || '';
    if (urlToken && urlToken === config.isAdmin) {
      localStorage.setItem('leleo_admin_token', urlToken);
    }
  } catch (e) { /* ignore */ }
}
function isAdminNow() {
  try {
    const token = localStorage.getItem('leleo_admin_token');
    return !!(token && token === config.isAdmin);
  } catch (e) { return false; }
}
// 页面启动就执行一次：允许带 ?admin=口令 立即解锁
checkAdminToken();

export default {
  components: {
    tab1, tab2, tab3, loader, homeright, typewriter
  },
  setup() {
    const { xs, sm, md } = useDisplay();
    return { xs, sm, md };
  },
  data() {
    return {
      isloading: false,
      isClearScreen: false,
      formattedTime: "",
      formattedDate: "",
      configdata: config,
      dialog1: false,
      dialog2: false,
      personalizedtags: null,
      videosrc: '',
      ismusicplayer: false,
      isPlaying: false,
      playlistIndex: 0,
      audioLoading: false,
      musicinfo: null,
      musicinfoLoading: false,
      lyrics: {},
      socialPlatformIcons: null,
      isExpanded: false,
      isAdmin: isAdminNow(),
      stackicons: [
        { icon: "mdi-vuejs", color: "green", model: false, tip: 'vue' },
        { icon: "mdi-language-javascript", color: "#CAD300", model: false, tip: 'javascript' },
        { icon: "mdi-language-css3", color: "blue", model: false, tip: 'css' },
        { icon: "mdi-language-html5", color: "red", model: false, tip: 'html' },
        { icon: "", color: "#1697F6", model: false, tip: 'vuetify' },
      ],
      projectcards: null,
      tab: null,
      tabs: [
        { icon: 'mdi-pencil-plus', text: '样式预览', value: 'tab-1', component: "tab1" },
        { icon: 'mdi-wallpaper', text: '背景预览', value: 'tab-2', component: "tab2" },
        { icon: 'mdi-music-circle-outline', text: '音乐播放', value: 'tab-3', component: "tab3" },
      ],
    };
  },
  async mounted() {
    if (import.meta.env.VITE_CONFIG) {
      this.configdata = JSON.parse(import.meta.env.VITE_CONFIG);
    }

    // 管理员"发布为全局"后，会把最终配置存到 localStorage("leleo_global_config")
    // 只要存在就用它覆盖 config.js 默认值 —— 相当于全局生效
    try {
      const globalStr = localStorage.getItem('leleo_global_config');
      if (globalStr) {
        const globalCfg = JSON.parse(globalStr);
        this.configdata = Object.assign({}, this.configdata, globalCfg);
      }
    } catch (e) { /* ignore */ }

    this.projectcards = this.configdata.projectcards;
    this.socialPlatformIcons = this.configdata.socialPlatformIcons;
    this.personalizedtags = this.configdata.tags;
    this.isloading = true;
    let imageurl = "";
    this.dataConsole();
    this.setMeta(this.configdata.metaData.title, this.configdata.metaData.description, this.configdata.metaData.keywords, this.configdata.metaData.icon);
    imageurl = this.setMainProperty(imageurl);

    const loadImage = () => {
        const imageUrls = [ config.avatar, ...config.projectcards.map(item => item.img) ];
        return new Promise((resolve, reject) => {
          const imagePromises = imageUrls.map((url) => {
            return new Promise((resolve, reject) => {
                const imgs = new Image();
                imgs.src = url;
                imgs.onload = () => resolve();
                imgs.onerror = (err) => reject(err);
            });
          })
          const timeoutPromise = new Promise((resolve) => {
            setTimeout(() => { resolve(); }, 2500);
          });
          Promise.race([Promise.all(imagePromises), timeoutPromise]).then(() => {
            if (imageurl) {
              const img = new Image();
              img.src = imageurl;
              img.onload = () => { resolve(); };
              img.onerror = (err) => { reject(err); };
            } else {
              const video = this..VdPlayer;
              video.onloadedmetadata = () => { setTimeout(() => {}, "200"); resolve(); };
              video.onerror = (err) => { resolve(); };
            }
          })
        });
     };

    loadImage().then(() => {
        this.formattedTime = this.getFormattedTime(new Date());
        this.formattedDate = this.getFormattedDate(new Date());
        setTimeout(() => { this.isloading = false; }, "500");
      }).catch((err) => {
        console.error('壁纸加载失败:', err);
        setTimeout(() => { this.isloading = false; }, "100");
      });

      setInterval(() => {
        this.formattedTime = this.getFormattedTime(new Date());
      }, 1000);

      await this.getMusicInfo();
      this.setupAudioListener();
  },

  beforeDestroy() {
    this..audioPlayer.removeEventListener('ended', this.nextTrack);
  },

  watch: {
    isClearScreen(val) {
      if (!this.videosrc) { return }
      if (val) {
        this..VdPlayer.style.zIndex = 0;
        this..VdPlayer.controls = true;
      } else {
        this..VdPlayer.style.zIndex = -100;
        this..VdPlayer.controls = false;
      }
    },
    audioLoading(val) {
      this.isPlaying = !val;
    }
  },

  computed: {
    currentSong() { return this.musicinfo[this.playlistIndex]; },
    audioPlayer() { return this..audioPlayer; }
  },
  
  methods: {
    getCookie, setMeta, getFormattedTime, getFormattedDate, dataConsole,

    // 非管理员强制 config 默认值；管理员才允许 cookie 覆盖
    setMainProperty(imageurl) {
      const root = document.documentElement;
      let leleodata = this.isAdmin ? this.getCookie("leleodata") : null;
      if (leleodata) {
        root.style.setProperty('--leleo-welcomtitle-color', ${leleodata.color.welcometitlecolor});
        root.style.setProperty('--leleo-vcard-color', ${leleodata.color.themecolor});
        root.style.setProperty('--leleo-brightness', ${leleodata.brightness}%);
        root.style.setProperty('--leleo-blur', ${leleodata.blur}px); 
      } else {
        root.style.setProperty('--leleo-welcomtitle-color', ${this.configdata.color.welcometitlecolor});
        root.style.setProperty('--leleo-vcard-color', ${this.configdata.color.themecolor});  
        root.style.setProperty('--leleo-brightness', ${this.configdata.brightness}%);  
        root.style.setProperty('--leleo-blur', ${this.configdata.blur}px);
      }
  
      let leleodatabackground = this.isAdmin ? this.getCookie("leleodatabackground") : null;
      const { xs } = useDisplay();
      if (leleodatabackground) {
        if (xs.value) {
          if (leleodatabackground.mobile.type == "pic") {
            root.style.setProperty('--leleo-background-image-url', url(''));
            imageurl = leleodatabackground.mobile.datainfo.url;
            return imageurl;
          } else { this.videosrc = leleodatabackground.mobile.datainfo.url; }
        } else {
          if (leleodatabackground.pc.type == "pic") {
            root.style.setProperty('--leleo-background-image-url', url(''));
            imageurl = leleodatabackground.pc.datainfo.url;
            return imageurl;
          } else { this.videosrc = leleodatabackground.pc.datainfo.url; }
        }
      } else {
        if (xs.value) {
          if (this.configdata.background.mobile.type == "pic") {
            root.style.setProperty('--leleo-background-image-url', url(''));
            imageurl = this.configdata.background.mobile.datainfo.url;
            return imageurl;
          } else { this.videosrc = this.configdata.background.mobile.datainfo.url; }
        } else {
          if (this.configdata.background.pc.type == "pic") {
            root.style.setProperty('--leleo-background-image-url', url(''));
            imageurl = this.configdata.background.pc.datainfo.url;
            return imageurl;
          } else { this.videosrc = this.configdata.background.pc.datainfo.url; }
        }
      }
    },

    projectcardsShow(key) {
      this.projectcards.forEach((item, index) => { if (index != key) { item.show = false; } });
    },
    handleCancel() { this.dialog1 = false; },
    jump(url) { window.open(url, '_blank').focus(); },
    
    async getMusicInfo() {
      this.musicinfoLoading = true;
      try {
        const response = await fetch(https://api.i-meto.com/meting/api?server=&type=&id=);
        if (!response.ok) { throw new Error('网络请求失败'); }
        this.musicinfo = await response.json();
        this.musicinfoLoading = false;
      } catch (error) { console.error('请求失败:', error); }
    },
    musicplayershow(val) { this.ismusicplayer = val; },
    setupAudioListener() { this..audioPlayer.addEventListener('ended', this.nextTrack); },

    togglePlay() {
      if (!this.isPlaying) { this.audioPlayer.play(); this.isVdMuted = true; }
      else { this.audioPlayer.pause(); this.isVdMuted = false; }
      this.isPlaying = !this.musicinfoLoading && !this.isPlaying;
    },
    previousTrack() { this.playlistIndex = this.playlistIndex > 0 ? this.playlistIndex - 1 : this.musicinfo.length - 1; this.updateAudio(); },
    nextTrack() { this.playlistIndex = this.playlistIndex < this.musicinfo.length - 1 ? this.playlistIndex + 1 : 0; this.updateAudio(); },
    updateAudio() {
      this.audioPlayer.src = this.currentSong.url;
      this..audiotitle.innerText = this.currentSong.title;
      this..audioauthor.innerText = this.currentSong.author;
      this.isPlaying = true;
      this.audioPlayer.play();
    },
    updateCurrentIndex(index) { this.playlistIndex = index; this.updateAudio(); },
    updateIsPlaying(isPlaying) { this.isPlaying = isPlaying; },
    updateLyrics(lyrics) { this.lyrics = lyrics; },
    onWaiting() { this.audioLoading = true; },
    onCanPlay() { this.audioLoading = false; },
    expandSwitch() { this.isExpanded = true; },
    collapseSwitch() { this.isExpanded = false; },
  }
};