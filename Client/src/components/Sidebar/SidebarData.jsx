import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        roles: ['Manager'],
        title: 'Admin',
        path: '/admin'
    },
    {
        roles: ['Manager'],
        title: 'Alerts',
        path: '/alerts'
    },
    {
        roles: ['Manager', 'Supervisor'],
        title: 'Inventory',
        path: '/inventory'
    },
    {
        roles: ['Manager', 'Supervisor'],
        title: 'Purchases',
        path: '/purchases'
    },
    {
        roles: ['Manager', 'Supervisor'],
        title: 'Finance',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Banking Information',
            path: '/report/bank',
        },
        {
            title: 'Cash Report',
            path: '/report/cash',
        }
        ]
    },
    {
        roles: ['Manager', 'Supervisor'],
        title: 'Sales',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Details',
            path: '/reports/details',
        },
        {
            title: 'Speed of Service',
            path: '/service-speed'
        },
        {
            title: 'Chart',
            path: '/reports/chart',
        },
        ]
    },
    {
        roles: ['Manager', 'Supervisor'],
        title: 'Waste',
        path: '/waste'
    },
    {
        roles: ['Cashier'],
        title: 'Menu',
        path: '/',
    },
    {
        roles: ['Cashier'],
        title: 'Order',
        path: '/order',
    },
    {
        roles: ['Cashier'],
        title: 'Dashboard',
        path: '/dashboard',
    }
];
