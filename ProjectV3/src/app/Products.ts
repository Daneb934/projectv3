import {Product} from './Product';

// export const products: Product[] = [
//   {
//         id: 1,
//         name: 'Man Cloth',
//         price: 1000,
//         description: 'Just Dress',
//     // tslint:disable-next-line:max-line-length
//         img: 'https://instagram.fala3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50952114_306260206915261_8164633719030677504_n.jpg?_nc_ht=instagram.fala3-1.fna.fbcdn.net&_nc_ohc=Bs4XNeDca-IAX_temKD&oh=e7a2084cd83f5a4725eb07917f04f2cf&oe=5EB32819',
//         rating: 4,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'},
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'},
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'},
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         category: 1,
//         orderCount: 100,
//         available: true,
//         for: 1
//       },
//       {
//         id: 2,
//         name: 'Man Cloth',
//         price: 1000,
//         description: 'Just Dress',
//         img: 'https://instagram.fala3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50952114_306260206915261_8164633719030677504_n.jpg?_nc_ht=instagram.fala3-1.fna.fbcdn.net&_nc_ohc=Bs4XNeDca-IAX_temKD&oh=e7a2084cd83f5a4725eb07917f04f2cf&oe=5EB32819',
//         rating: 4,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         category: 2,
//         orderCount: 100,
//         available: true,
//         for: 1
//       },
//       {
//         id: 3,
//         name: 'Man Cloth',
//         price: 1000,
//         description: 'Just Dress',
//         img: 'https://instagram.fala3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50952114_306260206915261_8164633719030677504_n.jpg?_nc_ht=instagram.fala3-1.fna.fbcdn.net&_nc_ohc=Bs4XNeDca-IAX_temKD&oh=e7a2084cd83f5a4725eb07917f04f2cf&oe=5EB32819',
//         rating: 4,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         category: 3,
//         orderCount: 100,
//         available: true,
//         for: 1
//       },
//       {
//         id: 4,
//         name: 'Man Cloth',
//         price: 1000,
//         description: 'Just Dress',
//           img: 'https://www.jackjones.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw098372bc/pim-static/large/12058529_BLACK_001_ProductLarge.jpg?sw=1280',
//         rating: 4,
//         category: 2,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         orderCount: 100,
//         available: true,
//         for: 1
//       },
//       {
//         id: 5,
//         name: 'Woman Cloth',
//         price: 1000,
//         description: 'Just Dress',
//         // tslint:disable-next-line:max-line-length
//         img: 'https://sun9-49.userapi.com/c855528/v855528250/16bbb6/BMifqspb2uU.jpg',
//         rating: 4,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         category: 4,
//         orderCount: 100,
//         available: true,
//         for: 2
//       },
//   {
//         id: 6,
//         name: 'Woman Cloth',
//         price: 1000,
//         description: 'Just T-shirt',
//         img: 'https://instagram.fala3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/50952114_306260206915261_8164633719030677504_n.jpg?_nc_ht=instagram.fala3-1.fna.fbcdn.net&_nc_ohc=Bs4XNeDca-IAX_temKD&oh=e7a2084cd83f5a4725eb07917f04f2cf&oe=5EB32819',        rating: 4,
//         category: 5,
//     comments: [
//       {userName: 'Ivan', body: 'Good1'},
//       {userName: 'Ivan2', body: 'Good2'},
//       {userName: 'Ivan3', body: 'Good3'}
//     ],
//         orderCount: 100,
//         available: true,
//         for: 2
//       },
//       {
//         id: 7,
//         name: 'Woman Cloth',
//         price: 1000,
//         description: 'Just T-shirt',
//         img: 'https://www.jackjones.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw098372bc/pim-static/large/12058529_BLACK_001_ProductLarge.jpg?sw=1280',        rating: 4,
//         category: 6,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         orderCount: 100,
//         available: false,
//         for: 2
//       },
//       {
//         id: 8,
//         name: 'Woman Cloth',
//         price: 1000,
//         description: 'Just T-shirt',
//         img: 'https://www.jackjones.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw098372bc/pim-static/large/12058529_BLACK_001_ProductLarge.jpg?sw=1280',
//         rating: 4,
//         category: 5,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         orderCount: 100,
//         available: true,
//         for: 2
//       },
//       {
//         id: 9,
//         name: 'Man',
//         price: 1000,
//         description: 'Just T-shirt',
//         img: 'https://www.jackjones.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw098372bc/pim-static/large/12058529_BLACK_001_ProductLarge.jpg?sw=1280',
//         rating: 4,
//         category: 1,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         orderCount: 100,
//         available: true,
//         for: 1
//       },
//       {
//         id: 10,
//         name: 'Vsem',
//         price: 1000,
//         description: 'Just T-shirt',
//         img: 'https://www.jackjones.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw098372bc/pim-static/large/12058529_BLACK_001_ProductLarge.jpg?sw=1280',
//         rating: 4,
//         category: 0,
//         comments: [
//           {userName: 'Ivan', body: 'Good1'},
//           {userName: 'Ivan2', body: 'Good2'},
//           {userName: 'Ivan3', body: 'Good3'}
//         ],
//         orderCount: 100,
//         available: true,
//         for: 0
//       }
// ]

