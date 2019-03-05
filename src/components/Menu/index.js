import React from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

const SideMenu = () => {
    const menuList = [
        {
            id: 1,
            name: 'Card',
            icon: 'pie-chart',
            childmenu: [],
            url: '/card'
        },
        {
            id: 2,
            name: 'Dashboard',
            icon: 'dashboard',
            url: '/dashboard',
            childmenu: [
                {
                    id: 1,
                    name: '分析页',
                    url: '/dashboard/analysis'
                },
                {
                    id: 2,
                    name: '监控页',
                    url: '/dashboard/monitor'
                },
                {
                    id: 3,
                    name: '工作台',
                    url: '/dashboard/workplace'
                }
            ]
        }
    ];

    return (
        <Menu theme="dark" mode="inline">
            {menuList.map((value) => (
                value.childmenu.length === 0 ?
                    <Menu.Item key={value.url}>
                        <Link to={value.url}>
                            <Icon type="pie-chart" />
                            <span>{value.name}</span>
                        </Link>
                    </Menu.Item> :
                    <SubMenu
                        key={value.url}
                        title={<span><Icon type={value.icon} /><span>{value.name}</span></span>}
                    >
                        {value.childmenu.map((item, index) => {
                            return <Menu.Item key={item.url}><Link to={item.url}>{item.name}</Link></Menu.Item>
                        })}
                    </SubMenu>
            ))}
        </Menu>
    )
}

export default SideMenu;