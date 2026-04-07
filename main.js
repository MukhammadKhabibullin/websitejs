import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import { PhoneFlagman } from './phone-flagman.js';
import { PhoneBudget } from './phone.js';




const xiaomi = new PhoneBudget('xiaomi', 'redmi note 11')
const oppo = new PhoneBudget('oppo', 'reno 7')
xiaomi.budget()
oppo.budget()

const iphone = new PhoneFlagman ('iphone', '17 pro max', 80000)
const samsung = new PhoneFlagman ('samsung', 's26 Ultra', 70000)
iphone.flagman()
samsung.flagman()