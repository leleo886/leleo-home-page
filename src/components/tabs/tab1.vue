<!-- 设置面板 - 外观样式页签：主题色、标题色、亮度、模糊度 -->
<template>
    <div class="mx-auto rounded" style="background: transparent;">
        <v-form fast-fail @submit.prevent>
            <!-- 主题颜色选择 -->
            <v-text-field
                v-model="color.themecolor"
                label="主题颜色"
                @click="selectcolor='themecolor';colordialog = true"
                readonly
                variant="outlined"
            ></v-text-field>
            <!-- 标题颜色选择 -->
            <v-text-field
                v-model="color.welcometitlecolor"
                label="标题颜色"
                @click="selectcolor='welcometitlecolor';colordialog = true"
                readonly
                variant="outlined"
            ></v-text-field>
            <!-- 背景亮度滑块 -->
            <v-slider
                class="ml-5 mr-8"
                label="背景亮度"
                color=var(--leleo-vcard-color)
                :max="100"
                :min="50"
                :step="0.5"
                :thumb-size="xs?15:18"
                v-model="brightness"
                thumb-label="always"
            ></v-slider>
            <!-- 背景模糊度滑块 -->
            <v-slider
                class="ml-5 mr-8"
                label="模糊度"
                color=var(--leleo-vcard-color)
                :max="20"
                :min="0"
                :thumb-size="xs?15:18"
                :step="0.2"
                v-model="blur"
                thumb-label="always"
            ></v-slider>
            
            <!-- 按钮区 -->
            <div style="display: flex;justify-content: center;align-items: center;flex-wrap: wrap;gap: 6px;">
                <v-btn :loading="loading1" variant="tonal" @click="redefault()">恢复</v-btn>
                <v-btn variant="tonal" @click="cancel()">取消</v-btn>
                <v-btn :loading="loading2" variant="tonal" @click="submitdata()">确认</v-btn>
                <v-btn v-if="isAdmin" color="var(--leleo-vcard-color)" variant="tonal" @click="publishToGlobal()">🔒 发布为全局</v-btn>
            </div>
     
            <!-- 颜色选择器弹窗 -->
            <v-dialog
                v-model="colordialog"
                width="auto"
                >
                <v-card title="颜色选择器">                   
                    <div class="d-flex flex-column">
                        <v-color-picker
                            v-model="color[selectcolor]"
                            v-model:mode="mode"
                        ></v-color-picker>
                    </div>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        text="确认"
                        variant="elevated"
                        @click="colordialog = false"
                    ></v-btn>
                    </v-card-actions>
                </v-card>
             </v-dialog>
        </v-form>
    </div>

    <!-- 操作结果提示 -->
    <v-snackbar
      :timeout="2000"
      variant="tonal"
      color=var(--leleo-vcard-color)
      rounded="pill"
      v-model="snackbar"
    >
      {{snackbartext}}
    </v-snackbar>
</template>

<script>
import { setCookie, getCookie, eraseCookie } from '../../utils/cookieUtils.js';
import config from '../../config.js';
import { useDisplay } from 'vuetify';
export default {
  emits: ['cancel'],
  setup() {
        const { xs } = useDisplay();
        return { xs };
    },
  data() {
    return {
        loading1: false,       // 恢复按钮 loading
        loading2: false,       // 确认按钮 loading
        snackbar: false,       // 提示条
        configdata: config,    // 配置数据
        snackbartext: '',
        color:{
            "themecolor":'',
            "welcometitlecolor": '',
        },
        brightness: 78,        // 背景亮度默认值
        blur: 0,               // 模糊度默认值
        selectcolor: "themecolor", // 当前选择哪个颜色字段
        colordialog: false,    // 颜色选择器显示状态
        mode: 'hex',           // 颜色选择器显示模式
    };
  },
  mounted() {
    // 支持 VITE_CONFIG 环境变量覆盖配置
    if(import.meta.env.VITE_CONFIG){
        this.configdata = JSON.parse(import.meta.env.VITE_CONFIG);
    }
    
    // 优先从 cookie 读取用户之前保存的设置
    let leleodata = this.getCookie("leleodata");
    if(leleodata){
        this.color = leleodata.color;
        this.brightness = leleodata.brightness;
        this.blur = leleodata.blur;
    }else{
        // 否则使用配置文件中的默认值
        this.color = this.configdata.color;
        this.brightness = this.configdata.brightness;
        this.blur = this.configdata.blur;
    }
  },
  methods: {
    setCookie,
    getCookie,
    eraseCookie,
    // 确认保存：写入 cookie 后刷新页面
    submitdata() {      
        this.loading2 = true
        setTimeout(() => {
            this.loading = false;
            // 注意数字 String 格式化
            this.setCookie('leleodata', {color:this.color,brightness:String(this.brightness),blur:String(this.blur),backgroundblur:String(this.backgroundblur)},0.005);
            location.reload();
        }, 800)   
    },
    // 恢复默认：清除 cookie 后刷新页面
    redefault(){              
        this.loading1 = true
        setTimeout(() => {
            this.loading = false;
            this.eraseCookie('leleodata');
            location.reload();
        }, 800) 
          
    },
    // 取消（触发父组件事件）
    cancel() {
        this.$emit('cancel');
    },
  },
  
};

</script>
