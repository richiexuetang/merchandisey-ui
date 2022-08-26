export interface ItemAttributes {
  title: string;
  url: string;
  submenu?: any;
}

export interface MenuItem {
  title: string;
  url: string;
  submenu?: ItemAttributes[];
}

export const navMenuItems: MenuItem[] = [
  {
    title: 'Browse',
    url: '/',
    submenu: [
      {
        title: 'Sneakers',
        url: 'sneakers',
        submenu: [
          {
            title: 'Adidas',
            url: 'adidas',
            submenu: [
              {
                title: 'Yeezy',
                url: 'yeezy',
              },
            ],
          },
          {
            title: 'Air Jordan',
            url: 'retro-jordan',
            submenu: [
              {
                title: '1',
                url: 'retro-jordan/1',
              },
            ],
          },
          {
            title: 'Nike',
            url: 'nike',
          },
          {
            title: 'New Balance',
            url: 'new-balance',
          },
          {
            title: 'Reebok',
            url: 'reebok',
          },
        ],
      },
      {
        title: 'Apparel',
        url: 'apparel',
      },
      {
        title: 'Electronics',
        url: 'electronics',
      },
      {
        title: 'Trading Cards',
        url: 'trading-cards',
      },
      {
        title: 'Collectibles',
        url: 'collectibles',
      },
      {
        title: 'Accessories',
        url: 'accessories',
      },
      {
        title: 'NFTs',
        url: 'nfts',
      },
    ],
  },
  {
    title: 'News',
    url: '/news',
  },
  {
    title: 'About',
    url: '/about/how-it-works',
  },
  {
    title: 'Help',
    url: '/help/home',
  },
  {
    title: 'Sell',
    url: '/sell',
  },
];
