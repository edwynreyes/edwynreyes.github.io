let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["sword"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');
const weapons = [
    {name: 'sword', power: 10},
    {name: 'switchblade', power: 25},
    {name: 'gun', power: 50},
    {name: 'tommygun', power: 70}
];
const monsters = [
    {
        name: "Reptar"
        level: 3,
        health: 50
    },
    {
        name: "Sea Creature"
        level: 5,
        health: 75
    },
    {
        name: "Dragon"
        level: 10,
        health: 350
    }
]
const locations = [
    {
        name: "town square"
    }
]