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
        roles: ['Manager'],
        title: 'Inventory',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Inventory',
                path: '/report/inventory'
            },
            {
                title: 'Purchases',
                path: '/report/purchases'
            },
            {
                title: 'Waste',
                path: '/report/waste'
            },
            {
                title: 'FoodBank',
                path: '/report/foodbank'
            },
        ]
    },
    {
        roles: ['Manager'],
        title: 'Finance',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Banking Information',
            path: '/report/bank-info',
        },
        {
            title: 'Cash Report',
            path: '/report/cash',
        }
        ]
    },
    {
        roles: ['Manager'],
        title: 'Sales',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Details',
            path: '/report/sales-details',
        },
        {
            title: 'Speed of Service',
            path: '/report/speed-of-service'
        },
        {
            title: 'Chart',
            path: '/report/sales-chart',
        },
        ]
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
