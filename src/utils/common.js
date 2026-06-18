// common.js —— 通用工具函数集合
// 提供页面元信息设置、时间格式化、控制台欢迎横幅等功能

// 设置网页元信息（标题、描述、关键词、图标）
export function setMeta(title,description,keywords,icon) {   
  // 设置浏览器标签页标题
  document.title = title;

  // 设置页面描述
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  // 设置页面关键词（便于 SEO）
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords);
  }

   // 设置网页图标（favicon）
  const webico = document.querySelector('link[rel="icon"]');
   if (webico) {
    webico.href = icon;
  }
}

// 将 Date 格式化为 HH : MM : SS 字符串（12 小时制数字会自动转 24 小时制）
export function getFormattedTime(currentDate){
   return currentDate.toLocaleTimeString('en-US', {
       hour: '2-digit',
       minute: '2-digit',
       second: '2-digit',
       hour12: false,
     }).replace(/:/g, ' : ');
}

// 将 Date 格式化为 "YYYY 年 MM 月 DD 日 星期X" 的中文日期字符串
export function getFormattedDate(currentDate){
   const year = currentDate.getFullYear();
   const month = String(currentDate.getMonth() + 1).padStart(2, '0');
   const day = String(currentDate.getDate()).padStart(2, '0');
   const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][currentDate.getDay()];

   return `${year} 年 ${month} 月 ${day} 日 ${weekday}`;
}

// 在控制台打印欢迎横幅（ASCII 艺术字 + 年份）
export function dataConsole(){
 console.log(`%c                                                             
                ,----------------,              ,---------, 
           ,-----------------------,          ,"        ,"| 
         ,"                      ,"|        ,"        ,"  | 
        +-----------------------+  |      ,"        ,"    | 
        |  .-----------------.  |  |     +---------+      | 
        |  |                 |  |  |     | -==----'|      | 
        |  I LOVE YOU!    |  |  |     |         |      | 
        |  FROM %cleleo.top%c |  |  |/----|'---=    |      ; 
        |  Copyright ©    |  |  |   ,/|==== ooo |      ; 
        |      ${new Date().getFullYear()}       |  |  |  // |(((( [33]|    ,"  
        |  ·-----------------'  |," .;'| |((((     |  ,"    
        +-----------------------+  ;;  | |         |,"      
           /_)______________(_/  //'   | +---------+        
      ___________________________/___  ',                   
     /  oooooooooooooooo  .o.  oooo /,   \,"-----------      
    / ==ooooooooooooooo==.o.  ooo= //   ,'\--{)B     ,"      
   /_==__==========__==_ooo__ooo=_/'   /___________,"       
   '-----------------------------'                          
`,'background-color:#CFFFFB','background-color:#CFFFFB;color: #0045FE;','background-color:#CFFFFB');
   
}
