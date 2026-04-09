import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import { PhoneFlagman } from './phone-flagman.js';
import { PhoneBudget } from './phone.js';
//11 дз
import Cafe from './cafe.js';
import Coffee from './coffee.js';
import Tea from './tea.js';
import Lemanade from './lemonade.js';


const nameCafe = new Cafe("Чайхана", "г.Ульяновск, ул.Мухаммада 1 ");

const latte = new Coffee("Латте", "Средний", "120 \u20BD", 90, "Молоко Кокосовое", "Арабика");
const americano = new Coffee("Американо", "Большой", "150 \u20BD", 90, "Молоко Мендальное", "Либерика");

const green = new Tea("Чай зеленый", "Средний", "70 \u20BD", 70, "Мелколистовой и высевки");
const black = new Tea("Чай черный", "Средний", "85 \u20BD", 70, "Цельнолистовой");
const fruct = new Tea("Чай фруктовый", "Большой", "95 \u20BD", 70, "Ройбуш");

const lem = new Lemanade("Мохито", "Большой", "70 \u20BD", 15, "Клубника");




const xiaomi = new PhoneBudget('xiaomi', 'redmi note 11')
const oppo = new PhoneBudget('oppo', 'reno 7')
xiaomi.budget()
oppo.budget()

const iphone = new PhoneFlagman ('iphone', '17 pro max', 80000)
const samsung = new PhoneFlagman ('samsung', 's26 Ultra', 70000)
iphone.flagman()
samsung.flagman()