import React, {FC} from "react";
import {Menu} from "antd";
import {HomeOutlined, SettingOutlined, UsergroupAddOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const items=[
    {
        key:'home',
        icon:<HomeOutlined/>,
        label:<Link to="/">首页</Link>
    },
    {
        key:'actions',
        icon:<SettingOutlined/>,
        label:<Link to="/actions">操作</Link>
    },
    {
        key:'externalUser',
        icon:<UserOutlined/>,
        label:<Link to="/external-user">人</Link>
    },
    {
        key:'externalChat',
        icon:<UsergroupAddOutlined/>,
        label:<Link to="/external-chat">群</Link>
    },
]

const Nav: FC = () => {
  return (
    <Menu mode={'horizontal'} items={items}></Menu>
  )
}

export default Nav;
