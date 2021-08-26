/*
import moment from 'moment';

const logTime = () => {
  Logger.log(moment.now());
}
*/

import * as m1 from './module1'

function start(){// eslint-disable-line
  return m1.test1()
}

function buildHomePage() : GoogleAppsScript.Card_Service.Card {// eslint-disable-line
  return CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("test1")).build()
}