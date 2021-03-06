import { PubSub } from '../src/Observer';
import app from './Observer';
import client from './Mediator';
import client2 from './ChainOfResponsibilty';


// 单例模式
import ('./Singleton');

// 观察者模式
// app.main();

// 中介者模式
// client.main();

// 职责链模式
client2.main();

// pubsub模式
const pubsub = new PubSub();

const btn1 = document.querySelector('#btn1');
pubsub.subscribe('keke', (...args: any[]) => {
  console.log(...args)
});

(btn1 as HTMLElement).addEventListener('click', () => {
  pubsub.dispatch('keke', 'hello', 'sakura');
});
