import SettingStyle from "./index.module.sass";
import { useState,useCallback,useEffect } from 'preact/hooks';
import {Dialog,Select,Tooltip} from "tdesign-react";
import {websiteNormal} from "../../config.js";
const { Option } = Select;
import {GM_setValue,GM_getValue} from "$";
const { VITE_DEFAULT_OPEN } =  import.meta.env;
/**
 * 设置页面
 * @returns {Element}
 * @constructor
 */
const Index = ({ setIcon,setUrl }) => {
  const [visible,setVisible] = useState(false);
  //选择默认打开的网站名称
  const [value,setValue] = useState('');
  //获取选择网站的icon
  const [iconUrl,setIconUrl] = useState('')
  //值改变
  const handleChange = useCallback((value) => {
    setValue(value);
    const findItem = websiteNormal.find(item => item.name === value) || {};
    const icon = findItem.icon;
    const url = findItem.url;
    setIconUrl(icon);
    setIcon(icon);
    setUrl(url);
    //设置用户选择的默认打开的网站
    GM_setValue('user-select-see',value);
  },[]);
  useEffect(() => {
    (async () => {
      const value = await GM_getValue('user-select-see',VITE_DEFAULT_OPEN)
      //初始化值
      setValue(value);
      const findItem = websiteNormal.find(item => item.name === value) || {};
      const icon = findItem.icon;
      const url = findItem.url;
      setIconUrl(icon);
      setIcon(icon)
      setUrl(url);
    })()
  }, []);
  return (
    <>
      <div className={SettingStyle.setting} onClick={() => setVisible(true)}>

      </div>
      {/*对话框*/}
      <Dialog
        visible={visible}
        width={350}
        footer={null}
        onClose={() => setVisible(false)}
      >
        <Select
          showArrow
          size={'large'}
          value={value}
          prefixIcon={<img src={iconUrl} alt='' style={{width:'30px',height:'30px'}}/>}
          onChange={handleChange}
        >
            {
              websiteNormal.map((web,index) => {
                return (
                  <Option
                    style={{height: '60px'}}
                    value={web.name}
                    label={web.name}
                    key={index}
                  >
                    <div className={SettingStyle.setting_list}>
                      {/*图标*/}
                      <img alt='' src={web.icon}/>
                      {/*信息*/}
                      <div className={SettingStyle.setting_list_info}>
                        {/*名称*/}
                        <div className={SettingStyle.setting_list_info_name}>{web.name}</div>
                        {/*描述*/}
                        <div className={SettingStyle.setting_list_info_desc}>{web.description}</div>
                      </div>
                    </div>
                  </Option>
                );
              })
            }
        </Select>
      </Dialog>
    </>
  );
};

export default Index;