import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboard"
            to='/dashboard' exact 
        />
        { /* -------- Cards ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-clone"></i>}
            title="Competitors"
            to='/competitors' exact 
        />

        { /* -------- Graphs ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-pie-chart"></i>}
            title="Analytics"
            to='/analytics' 
       />

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-star-o"></i>}
            title="Icons"
            to='/icons'
        />

    </SidebarMenu >
);
