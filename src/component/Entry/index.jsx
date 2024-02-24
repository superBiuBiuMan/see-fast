import EntryStyle from "./index.module.sass";
import Setting from "../Setting/index.jsx";
import {useState} from "preact/hooks";
import {GM_getValue} from "$";

/**
 * 主页
 * @returns {Element}
 * @constructor
 */
const Index = () => {
  const [icon,setIcon] = useState('https://oss.dreamlove.top/i/2024/02/02/nw24wu.png');
  const [url,setUrl] = useState('https://dreamlove.top');
  // 点击跳转
  const handleJump = async () => {
    const value = await GM_getValue('user-select-see','');//获取当前选中值
    const pathname = window.location.pathname;
    const hostname = window.location.hostname
    let newUrl = '';
    if(value === 'gitpod'){
      newUrl = `https://${url}${pathname}`;
    }else if(value === 'sourcegraph'){
      newUrl = `https://${url}/${hostname}${pathname}`;
    }else if(value === 'github.dev'){
      newUrl = `https://${url}${pathname}`;
    }else if(value === 'github1s'){
      newUrl = `https://${url}${pathname}`;
    }
    //当前窗口打开
    window.location.href = newUrl;
  }
  return (
    <div className={EntryStyle.entry}>
      {/*图标*/}
      <div className={EntryStyle.entry_icon} onClick={handleJump}>
        <img src={icon} alt=''/>
      </div>
      {/*设置*/}
      <Setting setIcon={setIcon} setUrl={setUrl}/>
    </div>
  );
};

export default Index;