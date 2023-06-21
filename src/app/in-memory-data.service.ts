// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Alumnus } from './domain/alumnus.model';
// import { Status } from './enums/status.enum';
// import { Sector } from './enums/sector.enum';
// import { EventInterface } from './events/event';
// import { NewsInterface } from './domain/news.model';
// import { NewsStatus } from './enums/news_status.enum';

// import { Time } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class InMemoryDataService implements InMemoryDbService{

//   constructor() { }
//   createDb(){
//     const alumni: Alumnus[] = [
//       { 
//         id: 1, first_name: 'Abiud', last_name: 'Samo', 
//         batch: new Date(), status: Status.UNEMPLOYEED
//       },
//       { 
//         id: 2, first_name: 'Abiud1', last_name: 'Samo1',
//         batch: new Date(), status: Status.EMPLOYEED, 
//         sector: Sector.GOVERNMENT
//       },
//       { 
//         id: 3, first_name: 'Abiud2', last_name: 'Samo2', 
//         batch: new Date(), status: Status.EMPLOYEED, 
//         sector: Sector.PRIVATE
//       },
//       { 
//         id: 4, first_name: 'Abiud3', last_name: 'Samo3', 
//         batch: new Date(), status: Status.EMPLOYEED, 
//         sector: Sector.SELF
//       },
//       { 
//         id: 5, first_name: 'Abiud4', last_name: 'Samo4', 
//         batch: new Date(), status: Status.UNEMPLOYEED
//       },
//       { 
//         id: 6, first_name: 'Abiud5', last_name: 'Samo5', 
//         batch: new Date(), status: Status.UNEMPLOYEED
//       },
//       { 
//         id: 7, first_name: 'Abiud6', last_name: 'Samo6', 
//         batch: new Date(), status: Status.UNEMPLOYEED
//       },
//       { 
//         id: 8, first_name: 'Abiud7', last_name: 'Samo7', 
//         batch: new Date(), status: Status.UNEMPLOYEED
//       }
//     ];
//     const events: EventInterface[] = [
//       {
//         id: 1, title: 'Event title', 
//         description: 'Description', date: '2022-03-05',   
//         location: 'Dodoma',
//         start: '12:40',
//         fin: '12:48'
//       },
//       {
//         id: 2, title: 'Event title 2', 
//         description: 'Description 2', date: '2022-03-05',   
//         location: 'Dodoma 2',
//         start: '13:00',
//         fin: '13:00'
//       },
//       {
//         id: 3, title: 'Event title 3', 
//         description: 'Description3', date: '2023-10-05',   
//         location: 'Dodoma3',
//         start: '13:00',
//         fin: '13:00'
//       },
//       {
//         id: 4, title: 'Event title 4', 
//         description: 'Description 4', date: '2023-06-05',   
//         location: 'Dodoma 4', 
//         start: '13:00',
//         fin: '13:00'
//       },
//       {
//         id: 5, title: 'Event title 5', 
//         description: 'Description 5', date: '2023-04-05',   
//         location: 'Dodoma 5',
//         start: '13:00',
//         fin: '13:00'
//       },
//     ];

//     const news: NewsInterface[] = [
//       {
//         id: 1, heading: 'Heading one', body:'First body', 
//         author:{
//           id: 1, username: 'admin', password: 'keyword.', role: 'admin'
//         }, 
//         created: new Date(), updated: new Date(), 
//         publish: new Date(), 
//         status: NewsStatus.PUBLISHED 
//       },
//       {
//         id: 2, heading: 'Heading two', body:'Second body', 
//         author:{
//           id: 1, username: 'admin', password: 'keyword.', role: 'admin'
//         }, 
//         created: new Date(), updated: new Date(), 
//         publish: new Date(), 
//         status: NewsStatus.DRAFT 
//       },
//       {
//         id: 3, heading: 'Heading three', body:'Third body', 
//         author:{
//           id: 1, username: 'admin', password: 'keyword.', role: 'admin'
//         }, 
//         created: new Date(), updated: new Date(), 
//         publish: new Date(), 
//         status: NewsStatus.PUBLISHED 
//       },
//       {
//         id: 4, heading: 'Heading four', body:'Fourth body', 
//         author:{
//           id: 1, username: 'admin', password: 'keyword.', role: 'admin'
//         }, 
//         created: new Date(), updated: new Date(), 
//         publish: new Date(), 
//         status: NewsStatus.DRAFT 
//       },
//     ];

//     return { news, alumni, events, };
//   }

//   genId< T extends Alumnus | EventInterface | NewsInterface>(table: T[]): number{
//     return table.length > 0 ?
//     Math.max(...table.map(data => data.id)) + 1 :
//     1;
//   }

// }
