/**
 * 图标获取设置
 */
const { VITE_ICON_GET } =  import.meta.env;
//图标获取
export const ICON_GET = {
  splitbee:'https://favicon.splitbee.io/?url=',
  horse:'https://icon.horse/icon/',
}

//在线网站-无需创建账号(只有高亮效果)
export const websiteNormal = [
  {
    name: "gitpod",
    description: "Always ready-to-code.",
    url:"gitpod.io",
    icon: "",
  },
  {
    name: 'sourcegraph',
    description: 'Easily browse and search for code on Github',
    url:"sourcegraph.com",
    icon: '',
  },
  {
    name: 'github.dev',
    url:'github.dev',
    description: '',
    icon: '',
  },
  {
    name: 'github1s',
    description: '',
    url:'github1s.com',
    icon: '',
  }
].map(item => {
  //计算生成Url
  switch (VITE_ICON_GET){
    case 'splitbee': item.icon = ICON_GET.splitbee + item.url;break;
    case 'horse':item.icon = ICON_GET.horse + item.url;break;
  }
  return item;
})

//在线网站-需要自行创建账号在对应网站(可在线运行)
export const websiteSpecial = {
  'stackblitz':{
    description:"5",
    icon:"",
  }
}