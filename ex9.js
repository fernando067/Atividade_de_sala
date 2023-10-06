// 9. Crie um programa que crie um objeto Cachorro com nome "Totó" e especie "Cachorro" e imprima o animal latindo.

const Cachorro = require('./Cachorro');

const cachorro = new Cachorro("Totó", "Cachorro");
cachorro.latir();