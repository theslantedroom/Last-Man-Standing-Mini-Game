// this code is the first code i ever wrote, it was piled on top of itself with no plan or even knowledge of what was possible
// its not very good code but I learned some things
// to do;
// clean this code up
// Add CSS
//rewrite functions

const imageUrls = [
	"img/dead.jpg",
	"img/market/w1.jpg",
	"img/market/w2.jpg",
	"img/market/w3.jpg",
	"img/market/w4.jpg",
	"img/market/w5.jpg",
	"img/market/w6.jpg",
	"img/market/w7.jpg",
	"img/market/w8.jpg",
	"img/market/w9.jpg",
	"img/market/w10.jpg",
	"img/market/w21.jpg",
	"img/market/w22.jpg",
	"img/market/w23.jpg",
	"img/market/w24.jpg",
	"img/market/w25.jpg",
	"img/market/w26.jpg",
	"img/market/w27.jpg",
	"img/market/w28.jpg",
	"img/market/w29.jpg",
	"img/market/w30.jpg",
	"img/market/w31.jpg",
	"img/market/w32.jpg",
	"img/market/w33.jpg",
	"img/market/w34.jpg",
	"img/market/w35.jpg",
	"img/market/w36.jpg",
	"img/market/w37.jpg",
	"img/market/w38.jpg",
	"img/market/w39.jpg",
	"img/market/w40.jpg",
	"img/market/w11.jpg",
	"img/market/w12.jpg",
	"img/market/w13.jpg",
	"img/market/w14.jpg",
	"img/market/w15.jpg",
	"img/market/w16.jpg",
	"img/market/w17.jpg",
	"img/market/w18.jpg",
	"img/market/w19.jpg",
	"img/market/w20.jpg",
	"img/market/a1.jpg",
	"img/market/a2.jpg",
	"img/market/a3.jpg",
	"img/market/a4.jpg",
	"img/market/a5.jpg",
	"img/market/a6.jpg",
	"img/market/a7.jpg",
	"img/market/a8.jpg",
	"img/market/a9.jpg",
	"img/market/a10.jpg",
	"img/market/a11.jpg",
	"img/market/a12.jpg",
	"img/market/a13.jpg",
	"img/market/a14.jpg",
	"img/market/healthBonus01.jpg",
	"img/market/damageBonus1.jpg",
	"img/market/healthBonus02.jpg",
	"img/market/damageBonus2.jpg",
	"img/market/healthBonus03.jpg",
	"img/market/damageBonus3.jpg",
	"img/market/attackBonus1.jpg",
	"img/market/defenseBonus1.jpg",
	"img/market/attackBonus2.jpg",
	"img/market/defenseBonus2.jpg",
	"img/market/attackBonus3.jpg",
	"img/market/defenseBonus3.jpg",
];

// Function to preload images
function preloadImages() {
	for (let i = 0; i < imageUrls.length; i++) {
		const img = new Image();
		img.src = imageUrls[i];
	}
}

// Call the preloadImages function when the window has finished loading
window.onload = () => {
	preloadImages();
};

// Player object
const player1 = {
	name: "player1",
	currentCharCard: Math.floor(Math.random() * 32) + 1,
	gold: 5,
	healthBonusArmor: 0,
	damageBonusWeapon1: 0,
	damageBonusWeapon2: 0,
	attackBonusWeapon1: 0,
	attackBonusWeapon2: 0,
	defenseBonusWeapon: 0,
	defenseBonusShield1: 0,
	defenseBonusShield2: 0,
	damageBonusShield1: 0,
	damageBonusShield2: 0,
	healthBonusSkill: 0,
	damageBonusSkill: 0,
	attackBonusSkill: 0,
	defenseBonusSkill: 0,
	healthCard: 0,
	damageCard: 0,
	weapon1Card: 1,
	armorCard: 1,
	weapon2Card: 0,
	attackCard: 0,
	defenseCard: 0,
	// in math calculation
	maxHealth: 20,
	currentHealth: 20,
	damage: 0,
	attack: 0,
	defense: 0, //calculated total
	armor: 6,
	weapon1: 4,
	weapon2: -1,
	weapon1Bonus: -1,
	weapon2Bonus: -1,
	kills: 0,
	deaths: 0,
};

// Global Stats
let killCount = 0;
let deathCount = 0;
let highScore = 0;
let gamesPlayed = 0;

// Combat DICE
let battleNumber = 1;
const goldRewardDice = 6;
let attackRollE = 0;
let attackRoll = 0;
let attackDamage = 0;
let attackDamageE = 0;
let healCostGold = 2;

// Campaign variables
let currentEnemyCard = 0;
let currentWeek = 0;

// CONTRUCT ENEMIES
const enemyArray = [];
class Enemy1 {
	constructor(
		card,
		health,
		currentHealth,
		defense,
		weapon1,
		weapon2,
		weapon1Bonus,
		weapon2Bonus,
		attack,
		damage,
		name,
	) {
		// Constructor
		this.card = card;
		this.health = health;
		this.currentHealth = currentHealth;
		this.defense = defense;
		this.weapon1 = weapon1;
		this.weapon2 = weapon2;
		this.weapon1Bonus = weapon1Bonus;
		this.weapon2Bonus = weapon2Bonus;
		this.attack = attack;
		this.damage = damage;
		this.name = name;
	}
}

// close title screen
const closeTitleScreen = () => {
	characterCreation.style.display = "block";
	titleScreen.style.display = "none";
	titleScreen.classList.add("offScreenTop");
	playMusic(ancientDream);
	const closeTitleScreen = document.getElementById("closeTitleScreen");
	closeTitleScreen.style.display = "none";
	document.getElementById("nameConfirmButton").style.display = "block";
	document.getElementById("player1NameInput").defaultValue = "Unknown Hero";
};

// Construct Quest
const questArray = [];
class Quest1 {
	constructor(week, text) {
		// Constructor
		this.week = week;
		this.text = text;
	}
}
const week1 = new Quest1(0, "start map");
// puts the new quest into the quest array
questArray.push(week1);

// update market text
const nextMarketText = () => {
	switch (questArray[0].week) {
		case 0:
			questArray[0].text =
				"you hear rumors in the crowd as you browse the weapon shop";
			break;
		case 1:
			questArray[0].text =
				'hunter - "heard they caught a huge wolf in Mountain Pass."';
			break;
		case 2:
			questArray[0].text =
				'farmers wife- "looks like a low life criminal to me"';
			break;
		case 3:
			questArray[0].text = 'child - "timmy saw a dead man moving"';
			break;
		case 4:
			questArray[0].text = 'tinker - "yes! it is magnificent, the wonder!"';
			break;
		case 5:
			questArray[0].text = 'barkeep - "she looks like an independant woman"';
			break;
		case 6:
			questArray[0].text =
				'trader - "a real gladiator, that is what it says here"';
			break;
		case 7:
			questArray[0].text = 'merchant - "darn devil made of stone"';
			break;
		case 8:
			questArray[0].text = 'painter - "I heard it howling in the night, I did"';
			break;
		case 9:
			questArray[0].text = 'soldier - "yeah, we caught him raiding caravans"';
			break;
		case 10:
			questArray[0].text =
				'little boy - "he was scary, mom, and little like me"';
			break;
		case 11:
			questArray[0].text = 'baker - "yeah they pay them well I hear"';
			break;
		case 12:
			questArray[0].text =
				'craftswoman - "I wish I looked like her, she is so strong"';
			break;
		case 13:
			questArray[0].text =
				'shepard - "I hope he dies in there, I saw him bullying a woman"';
			break;
		case 14:
			questArray[0].text =
				'shoe maker - "she is my favorite, but do not tell my wife"';
			break;
		case 15:
			questArray[0].text = 'halfwit - "duh... hit.. smash hard"';
			break;
		case 16:
			questArray[0].text =
				'influencer - "I would kill to get a selfie killing her!"';
			break;
		case 17:
			questArray[0].text = 'zookeeper - "this is a #@!$& SHAME! "';
			break;
		case 18:
			questArray[0].text = 'priest - "oh all that is Holy! save me"';
			break;
		case 19:
			questArray[0].text = 'lady - "Oh how I relish his bravery"';
			break;
		case 20:
			questArray[0].text = 'street urchin - "I bet he is ugly under the mask"';
			break;
		case 21:
			questArray[0].text = 'drunk - "$%^# dommies boy! he gun win hic!"';
			break;
		case 22:
			questArray[0].text = 'zookeeper - "Oh COME on! why? Its so majestic"';
			break;
		case 23:
			questArray[0].text =
				'fletcher - "may they fly true, so I can sell some more"';
			break;
		case 24:
			questArray[0].text = 'lord - "he disobeyed MY wife! Intolerable"';
			break;
		case 25:
			questArray[0].text = 'victim- "justice is served this day, God willing"';
			break;
		case 26:
			questArray[0].text = 'stable boy - "the horses scars.. ashonishing"';
			break;
		case 27:
			questArray[0].text =
				'captain - "yeah, thats wats he got comin when he drinkin on duty eh"';
			break;
		case 28:
			questArray[0].text =
				'zookeeper - "why do I keep coming here...what even is this?"';
			break;
		case 29:
			questArray[0].text =
				'studdly lumberjack - "she made your blade, eh Duke?"';
			break;
		case 30:
			questArray[0].text =
				'fisherman - "she said if I stop, she would get the cudgel again"';
			break;
		case 31:
			questArray[0].text =
				'hag - "looks like she just got out of a pot of stew"';
			break;
		case 32:
			questArray[0].text = 'maid - "are they even real? oh imagine"';
			break;
		case 33:
			questArray[0].text = 'zookeeper - "how intriguing, what beautiful paws"';
			break;
		case 34:
			questArray[0].text = 'guard - "the Dominator is real SOB I hear"';
			break;
		case 35:
			questArray[0].text =
				'a second Dominator gets enters.. "you killed my brother"';
			break;
	}

	welcomeMarket.innerText = questArray[0].text;
};

// Handles the Week card pop up
const closeWeek = document.getElementById("closeWeek");
closeWeek.addEventListener("click", () => {
	document.getElementById("week").classList.add("weekOffScreen");
	battleScreen.style.display = "block";
	closeWeek.style.display = "none";
	battleFooter.style.display = "block";
});

const weekCardUp = (week) => {
	battleScreen.style.display = "none";
	const weekSlide = document.getElementById("week");
	weekSlide.classList.remove("weekOffScreen");
	weekSlide.style.backgroundImage = `url('img/theLongQuest${currentWeek}.jpg')`;
	questArray[0].week += 1;
	nextMarketText();
};

// Enemy Objects
const giantAnt = new Enemy1(0, 4, 4, 4, 4, -1, -1, -1, 0, 0, "Giant Ant");
enemyArray.push(giantAnt);

const wolf = new Enemy1(1, 10, 10, 6, 4, -1, -1, -1, 0, 0, "Wolf");
enemyArray.push(wolf);

const peasant = new Enemy1(2, 20, 20, 6, 4, -1, -1, -1, 0, 0, "Peasant");
enemyArray.push(peasant);

const intelligentZombie = new Enemy1(
	3,
	15,
	15,
	5,
	6,
	-1,
	-1,
	-1,
	0,
	0,
	"intelligentZombie",
);
enemyArray.push(intelligentZombie);

const automaton = new Enemy1(4, 10, 10, 10, 8, -1, -1, -1, 3, 0, "automaton");
enemyArray.push(automaton);

const spearSister = new Enemy1(
	5,
	20,
	20,
	9,
	6,
	-1,
	-1,
	-1,
	0,
	0,
	"spearSister",
);
enemyArray.push(spearSister);

const gladiator = new Enemy1(6, 20, 20, 10, 6, -1, -1, -1, 0, 0, "gladiator");
enemyArray.push(gladiator);

const stoneDevil = new Enemy1(7, 15, 15, 9, 6, 4, -1, -1, 0, 0, "stoneDevil");
enemyArray.push(stoneDevil);

const werewolf = new Enemy1(8, 20, 20, 8, 4, -1, -1, -1, 0, 4, "werewolf");
enemyArray.push(werewolf);

const bandit = new Enemy1(9, 20, 20, 7, 6, 6, -1, -1, 0, 0, "bandit");
enemyArray.push(bandit);

const armoredMidget = new Enemy1(
	10,
	20,
	20,
	13,
	4,
	-1,
	-1,
	-1,
	0,
	0,
	"armoredMidget",
);
enemyArray.push(armoredMidget);

const mercenary = new Enemy1(11, 20, 20, 10, 8, -1, -1, -1, 0, 0, "mercenary");
enemyArray.push(mercenary);

const amazon = new Enemy1(12, 20, 20, 11, 8, -1, -1, -1, 0, 0, "amazon");
enemyArray.push(amazon);

const thug = new Enemy1(13, 20, 20, 10, 10, -1, -1, -1, 0, 0, "thug");
enemyArray.push(thug);

const assasin = new Enemy1(14, 20, 20, 8, 8, 8, -1, -1, 0, 0, "assasin");
enemyArray.push(assasin);

const berserker = new Enemy1(15, 20, 20, 8, 10, 10, -1, -1, 0, 0, "berserker");
enemyArray.push(berserker);

const pikeQueen = new Enemy1(16, 20, 20, 14, 10, -1, -1, -1, 0, 0, "pikeQueen");
enemyArray.push(pikeQueen);

const unicorn = new Enemy1(17, 20, 20, 9, 20, -1, -1, -1, 0, 0, "unicorn");
enemyArray.push(unicorn);

const evilAngel = new Enemy1(18, 20, 20, 12, 8, 8, -1, -1, 0, 0, "evilAngel");
enemyArray.push(evilAngel);

const knight = new Enemy1(19, 20, 20, 15, 6, -1, -1, -1, 0, 0, "knight");
enemyArray.push(knight);

const darkCleric = new Enemy1(
	20,
	20,
	20,
	14,
	12,
	-1,
	-1,
	-1,
	3,
	0,
	"darkCleric",
);
enemyArray.push(darkCleric);

const youngDominator = new Enemy1(
	21,
	25,
	25,
	11,
	12,
	12,
	-1,
	-1,
	0,
	0,
	"youngDominator",
);
enemyArray.push(youngDominator);

const hydra = new Enemy1(22, 30, 30, 10, 6, 6, 6, -1, 0, 0, "hydra");
enemyArray.push(hydra);

const archer = new Enemy1(23, 16, 16, 7, 4, 4, 4, -1, 2, 0, "archer");
enemyArray.push(archer);

const centurion = new Enemy1(24, 20, 20, 16, 6, -1, -1, -1, 1, 1, "centurion");
enemyArray.push(centurion);

const murderer = new Enemy1(25, 22, 22, 11, 8, 4, -1, -1, 0, 1, "murderer");
enemyArray.push(murderer);

const horseman = new Enemy1(26, 22, 22, 12, 8, 8, -1, -1, 0, 0, "horseman");
enemyArray.push(horseman);

const gaurd = new Enemy1(27, 20, 20, 12, 8, -1, -1, -1, 1, 0, "gaurd");
enemyArray.push(gaurd);

const catWarrior = new Enemy1(28, 20, 20, 14, 10, -1, -1, -1, 1, 0, "Peasant");
enemyArray.push(peasant);

const bladeMaid = new Enemy1(29, 22, 22, 10, 8, -1, -1, -1, 2, 2, "bladeMaid");
enemyArray.push(bladeMaid);

const abuser = new Enemy1(30, 20, 20, 13, 8, -1, -1, -1, 3, 0, "abuser");
enemyArray.push(abuser);

const devilGirl = new Enemy1(31, 20, 20, 13, 8, -1, -1, -1, 2, 0, "devilGirl");
enemyArray.push(devilGirl);

const fallenAngel = new Enemy1(
	32,
	22,
	22,
	16,
	12,
	-1,
	-1,
	-1,
	1,
	2,
	"fallenAngel",
);
enemyArray.push(fallenAngel);

const huntress = new Enemy1(33, 22, 22, 10, 4, 4, 4, 4, 3, 0, "huntress");
enemyArray.push(huntress);

const dominatorA = new Enemy1(
	34,
	40,
	40,
	15,
	12,
	12,
	-1,
	-1,
	0,
	0,
	"dominatorA",
);
enemyArray.push(dominatorA);

const dominatorB = new Enemy1(
	35,
	40,
	40,
	17,
	12,
	-1,
	-1,
	-1,
	4,
	5,
	"dominatorB",
);
enemyArray.push(dominatorB);

// Screens
const titleScreen = document.getElementById("titleScreen");
//UI Interface
const confirmBuyWindow = document.getElementById("confirmBuyWindow");
const confirmDiscardWindow = document.getElementById("confirmDiscardWindow");
const okBuyRightButton = document.getElementById("okBuyRightButton");
const okBuyLeftButton = document.getElementById("okBuyLeftButton");
const okBuyTwoHanded = document.getElementById("okBuyTwoHanded");
const okBuyHealth = document.getElementById("okBuyHealth");
const okBuyDamage = document.getElementById("okBuyDamage");
const okBuyAttack = document.getElementById("okBuyAttack");
const okBuyDefense = document.getElementById("okBuyDefense");
const okBuyArmor = document.getElementById("okBuyArmor");

const discardButtonRightHand = document.getElementById(
	"discardButtonRightHand",
);
const discardButtonLeftHand = document.getElementById("discardButtonLeftHand");
const discardButtonArmor = document.getElementById("discardButtonArmor");
const discardButtonHealth = document.getElementById("discardButtonHealth");
const discardButtonDamage = document.getElementById("discardButtonDamage");
const discardButtonAttack = document.getElementById("discardButtonAttack");
const discardButtonDefense = document.getElementById("discardButtonDefense");
const cancelBuyButton = document.getElementById("cancelBuyButton");
const cancelDiscardButton = document.getElementById("cancelDiscardButton");
const wantToBuy = document.getElementById("wantToBuy");
const wantToBuyGoldCost = document.getElementById("wantToBuyGoldCost");
const buyPreview = document.getElementById("buyPreview");
const discardPreview = document.getElementById("discardPreview");

const characterCreation = document.getElementById("characterCreation");
const player1CharCard = document.getElementById("player1CharCard");
const chooseCharacter = document.getElementById("chooseCharacter");
const goTo1a = document.getElementById("goTo1a");
const player1NameInput = document.getElementById("player1NameInput");
const player1Gold = document.getElementById("player1Gold");
const foundGold = document.getElementById("foundGold");
const market = document.getElementById("market");
const player1AtMarket = document.getElementById("player1AtMarket");
const playArea = document.getElementById("playArea");

// Visual components
const player1HealthCard = document.getElementById("player1HealthCard");
const player1DamageCard = document.getElementById("player1DamageCard");
const player1Weapon1Card = document.getElementById("player1Weapon1Card");
const player1ArmorCard = document.getElementById("player1ArmorCard");
const player1Weapon2Card = document.getElementById("player1Weapon2Card");
const player1AttackCard = document.getElementById("player1AttackCard");
const player1DefenseCard = document.getElementById("player1DefenseCard");
const player1DefenseCounter = document.getElementById("player1DefenseCounter");
const player1CurrentHp = document.getElementById("player1CurrentHp");
const player1MaxHp = document.getElementById("player1MaxHp");

const logWeapon1PopUp = document.getElementById("logWeapon1PopUp");
const logWeapon2PopUp = document.getElementById("logWeapon2PopUp");

const enemy1CharCard = document.getElementById("enemy1Idle");
const enemy1HealthCounter = document.getElementById("enemyHealthCounter");

// TABLE Stats
const nameConfirm = document.getElementById("nameConfirm");
const player1Name = document.getElementById("player1Name");
const player1GoldTable = document.getElementById("player1GoldTable");
const tableKillScore = document.getElementById("tableKillScore");
const tableDeathScore = document.getElementById("tableDeathScore");
const tableHighScore = document.getElementById("tableHighScore");
const tableGamesPlayed = document.getElementById("tableGamesPlayed");
const tableDamageBonusSkill = document.getElementById(
	"player1.damageBonusSkill",
);
const tableAttackBonusSkill = document.getElementById(
	"player1.attackBonusSkill",
);
const tablePlayer1Weapon1 = document.getElementById("player1.weapon1");
const tablePlayer1Weapon2 = document.getElementById("player1.weapon2");
const goldTop = document.getElementById("goldTop");
const battleTop = document.getElementById("battleTop");
const tablePlayer1Weapon1Bonus = document.getElementById(
	"player1.weapon1Bonus",
);
const tablePlayer1Weapon2Bonus = document.getElementById(
	"player1.weapon2Bonus",
);

// SLIDES for combat screen
const slideStart = document.getElementById("slideStart");
const slidePlayer1Hit = document.getElementById("slidePlayer1Hit");
const slidePlayer1Critical = document.getElementById("slidePlayer1Critical");
const slidePlayer1Turn = document.getElementById("slidePlayer1Turn");
const slideEnemy1Turn = document.getElementById("slideEnemy1Turn");
const slideLogSlide = document.getElementById("slideLogSlide");
const slideLogSlideE = document.getElementById("slideLogSlideE");
const slideNextEnemy = document.getElementById("slideNextEnemy");
const slidePlayer1Dead = document.getElementById("slidePlayer1Dead");
const slideKillLog = document.getElementById("slideKillLog");

const logSlideRollResult = document.getElementById("rollResult");
const logSlideResultLine2 = document.getElementById("resultLine2");
const logSlideResultLine3 = document.getElementById("resultLine3");
const logSlideRollResultE = document.getElementById("rollResultE");
const logSlideResultLine2E = document.getElementById("resultLine2E");
const logSlideResultLine3E = document.getElementById("resultLine3E");

const damageRollResultK = document.getElementById("damageRollResultK");
const damageResultLine2K = document.getElementById("damageResultLine2K");
const damageResultLine3K = document.getElementById("damageResultLine3K");

const nextEnemyKillCount = document.getElementById("nextEnemyKillCount");
const popUpEnemy1Dead = document.getElementById("popUpEnemy1Dead");
const popUpOuch = document.getElementById("popUpOuch");
const popUpHitEnemy = document.getElementById("popUpHitEnemy");
const deathCountPopup = document.getElementById("deathCountPopup");
const finalScorePopup = document.getElementById("finalScorePopup");
const player1DamageAttackRoll = document.getElementById(
	"player1DamageAttackRoll",
);

const healCost = document.getElementById("healCost");
const buyHealing = document.getElementById("buyHealing");
const battleScreen = document.getElementById("battleScreen");
const battleFooter = document.getElementById("battleFooter");
const welcomeMarket = document.getElementById("welcomeMarket");

// cycle character cards
function player1previousCharacter() {
	player1.currentCharCard -= 1;
	playSound(changeCharacterSound);
	if (player1.currentCharCard === 0) {
		player1.currentCharCard = 32;
	}
	console.log(`player1.currentCharCard ${player1.currentCharCard}`);
	player1CharCard.style.backgroundImage = `url('img/charCard${player1.currentCharCard}.jpg')`;
}

function player1NextCharacter() {
	player1.currentCharCard += 1;
	playSound(changeCharacterSound);
	if (player1.currentCharCard === 33) {
		player1.currentCharCard = 1;
	}
	console.log(`player1.currentCharCard ${player1.currentCharCard}`);
	player1CharCard.style.backgroundImage = `url('img/charCard${player1.currentCharCard}.jpg')`;
}

// Music Handler
const fadeMusic = (song) => {
	const fadeTimer = setInterval(() => {
		if (song.volume <= 0.1) {
			song.pause();
			song.currentTime = 0;
			song.volume = 1;
			clearInterval(fadeTimer);
		}
		if (song.volume >= 0.1) {
			song.volume -= 0.1;
		}
	}, 50);
};
const playMusic = (song) => {
	song.currentTime = 0;
	song.volume = 0.05;
	song.play();
};
const playSound = (sound) => {
	sound.currentTime = 0;
	sound.volume = 0.1;
	sound.play();
};
// MUSIC TOGGLE currently hidden
const musicToggle = document.getElementById("musicToggle");
// musicToggle.style.display = 'block';
musicToggle.addEventListener("click", () => {
	// biome-ignore lint/complexity/noForEach: <explanation>
	Array.prototype.slice
		.call(document.querySelectorAll("audio"))
		.forEach((audio) => {
			audio.muted = true;
		});
	musicToggle.style.display = "none";
});
function mutePage() {
	// biome-ignore lint/complexity/noForEach: <explanation>
	document.querySelectorAll("video, audio").forEach((elem) => muteMe(elem));
}

// HEALING MARKET BUTTON
buyHealing.addEventListener("click", () => {
	if (
		player1.gold >= healCostGold &&
		player1.currentHealth !== player1.maxHealth
	) {
		player1.currentHealth = player1.maxHealth;
		player1.gold -= healCostGold;
		updateGold();
		player1CurrentHp.innerHTML = player1.currentHealth;
		buyHealing.innerHTML = "All healed!";
		playSound(healedSound);
	} else if (player1.currentHealth === player1.maxHealth) {
		buyHealing.innerHTML = "You are at full health already!";
		playSound(cannotAffordSound);
	} else {
		buyHealing.innerHTML = "You can not afford to this!";
		playSound(cannotAffordSound);
	}
});
const resetHealButton = () => {
	buyHealing.innerHTML =
		'Rest and Heal for <span id="healCost">...</span> gold?';
	document.getElementById("healCost").innerHTML = healCostGold;
};

// ready > leave market for first time > popup week card [0]
goTo1a.addEventListener("click", () => {
	player1.name = player1NameInput.value;
	fadeMusic(ancientDream);
	closeMarket();
	player1GotoBattle();
	weekCardUp(currentWeek);
	buyHealing.style.display = "none";
	goTo1a.style.display = "none";
	battleFooter.style.display = "block";
	closeWeek.style.display = "block";
	battleFooter.style.display = "none";
	refresh();
});

// confirm NAME button
function nameToPlayer1Card() {
	const player1Namep = document.createElement("h6"); //place name on card
	player1Namep.appendChild(document.createTextNode(player1NameInput.value));
	player1.name = player1NameInput.value;
	player1CharCard.insertBefore(player1Namep, player1CharCard.firstChild);
	nameConfirm.style.display = "none";
	document.getElementById("nameConfirmButton").style.display = "none";
	document.getElementById("completeChar").style.display = "block";
	document.getElementById("chooseCharacterWindow").style.display = "block";
	document.getElementById("chooseCharacter").style.display = "block";
	player1CharCard.style.display = "inline-block";
	document.getElementById("nametag1").innerText =
		`Your name is ${player1.name}`;
	document.getElementById("nametag2").innerText =
		"You see your reflection in a puddle";
}

function clearDiscardPopUp() {
	discardButtonRightHand.style.display = "none";
	discardButtonLeftHand.style.display = "none";
	discardButtonArmor.style.display = "none";
	discardButtonHealth.style.display = "none";
	discardButtonDamage.style.display = "none";
	discardButtonAttack.style.display = "none";
	discardButtonDefense.style.display = "none";
}
clearDiscardPopUp();

//create a  ABC div--------------add to it-------a textnode------(inputtext)
// document.createElement("div").appendChild(document.createTextNode(player1NameInput.value));
// //place in this location-----------------before------------the a  ABC div----------------------before first child
// document.getElementById("player1CharCard").insertBefore(document.createElement("div"), player1CharCard.firstChild);

// MOVING THE CHAR CARD DIV
function player1GotoCharacterSelect() {
	chooseCharacter.insertBefore(player1CharCard, chooseCharacter.childNodes[1]);
}

function player1GotoBattle() {
	playArea.insertBefore(player1CharCard, playArea.childNodes[0]);
	player1CharCard.style.display = "block";
}

function player1GotoMarket() {
	player1AtMarket.appendChild(player1CharCard);
	document.getElementById("buyHealing").style.display = "block";
}

// update gold text
function updateGold() {
	player1Gold.innerHTML = player1.gold;
	player1Gold2.innerHTML = player1.gold;
}

// adds health bonus items to player stats
function addHealthBonus() {
	player1.maxHealth = 20 + player1.healthBonusArmor + player1.healthBonusSkill;
	player1MaxHp.innerHTML = player1.maxHealth;
	player1CurrentHp.innerHTML = player1.currentHealth;
	if (player1.currentHealth > player1.maxHealth) {
		player1.currentHealth = player1.maxHealth;
		player1CurrentHp.innerHTML = player1.currentHealth;
	}
}

advanceWeek.addEventListener("click", () => {
	start();
	weekCardUp();
	document.getElementById("market").style.display = "none";
	closeWeek.style.display = "block";
	battleFooter.style.display = "none";
	slideNextEnemy.style.display = "none";
	player1GotoBattle();
	fadeMusic(MoonLight);
	playMusic(encounter1);
	advanceWeek.style.display = "none";
	battleFooter.style.display = "none";
	buyHealing.style.display = "none";
});

// closes the market
function closeMarket() {
	player1GotoCharacterSelect();
	market.style.display = "none";
}

// Open the market
function openMarket() {
	if (ancientDream.paused) {
		fadeMusic(encounter1);
		playMusic(MoonLight);
	}
	playSound(gotoMarketSound);
	characterCreation.style.display = "none";
	player1GotoMarket();
	resetHealButton();
	clearStore();
	market.style.display = "block";
	document.getElementById("completeChar").style.display = "none";
	goTo1a.style.display = "block";
	openInventory();
	battleScreen.style.display = "none";
	battleFooter.style.display = "none";
}
const changeMarketButton = () => {
	const advanceWeek = document.getElementById("advanceWeek");
	goTo1a.style.display = "none";
	advanceWeek.style.display = "initial";
};
const openInventory = () => {
	player1CharCard.style.display = "block";
	document.getElementById("storeItemsOnehandWeapons").style.display = "none";
	document.getElementById("storeItemsTwoHanded").style.display = "none";
	document.getElementById("storeItemsRanged").style.display = "none";
	document.getElementById("storeItemsShields").style.display = "none";
	document.getElementById("storeItemsArmor").style.display = "none";
	document.getElementById("storeItemsTraining").style.display = "none";
	document.getElementById("discardText").innerHTML = "Click on gear to discard";
	document.getElementById("inventory").style.display = "none";
	cancelBuyClose();
};

function weaponStoreOneHandButton() {
	clearStore();
	document.getElementById("inventory").style.display = "block";
	document.getElementById("discardText").innerHTML =
		"What wilt thou bringeth in battle?";
	document.getElementById("storeItemsOnehandWeapons").style.display = "flex";
	playSound(marketCategory);
}
function weaponStoreTwoHandButton() {
	clearStore();
	document.getElementById("inventory").style.display = "block";
	document.getElementById("discardText").innerHTML =
		"inflicteth mighty death from such sinister weapons";
	document.getElementById("storeItemsTwoHanded").style.display = "flex";
	playSound(marketCategory);
}
function weaponStoreRangedButton() {
	clearStore();
	document.getElementById("inventory").style.display = "block";
	document.getElementById("discardText").innerHTML =
		"deadly is the bow - arrows with great velocity";
	document.getElementById("storeItemsRanged").style.display = "flex";
	playSound(marketCategory);
}
function weaponStoreShieldButton() {
	clearStore();
	document.getElementById("inventory").style.display = "block";
	document.getElementById("discardText").innerHTML =
		"a trusty shield - a stone fortress in your time of great peril";
	document.getElementById("storeItemsShields").style.display = "flex";
	playSound(marketCategory);
}
function armorStoreButton() {
	clearStore();
	document.getElementById("inventory").style.display = "block";
	document.getElementById("discardText").innerHTML =
		"it is important to protect yourself in style";
	document.getElementById("storeItemsArmor").style.display = "flex";
	playSound(marketCategory);
}
function trainingStoreButton() {
	clearStore();
	document.getElementById("inventory").style.display = "block";
	document.getElementById("discardText").innerHTML =
		"these skills could save your life... or end another's";
	document.getElementById("storeItemsTraining").style.display = "flex";
	playSound(marketCategory);
}
function clearStore() {
	document.getElementById("storeItemsOnehandWeapons").style.display = "none";
	document.getElementById("storeItemsTwoHanded").style.display = "none";
	document.getElementById("storeItemsRanged").style.display = "none";
	document.getElementById("storeItemsShields").style.display = "none";
	document.getElementById("storeItemsArmor").style.display = "none";
	document.getElementById("storeItemsTraining").style.display = "none";
	document.getElementById("discardText").innerHTML = "";
	document.getElementById("confirmBuyWindow").style.display = "none";
	document.getElementById("confirmDiscardWindow").style.display = "none";
	document.getElementById("inventory").style.display = "none";
	player1CharCard.style.display = "none";
}

function confirmBuyOpen() {
	confirmBuyWindow.style.display = "flex";
	playSound(clickItem);
}

function cancelBuyClose() {
	confirmBuyWindow.style.display = "none";
	playSound(cancelItem);
}

function cancelDiscardClose() {
	confirmDiscardWindow.style.display = "none";
}

function confirmDiscardOpen() {
	confirmDiscardWindow.style.display = "flex";
}

function confirmDiscardClose() {
	confirmDiscardWindow.style.display = "none";
}

// DISCARD CARDS
discardButtonRightHand.addEventListener("click", () => {
	player1.weapon1Card = 0;
	player1.weapon1 = -1;
	player1.weapon1Bonus = -1;
	player1.damageBonusWeapon1 = 0;
	player1.attackBonusWeapon1 = 0;
	player1.defenseBonusShield1 = 0;
	player1.damageBonusShield1 = 0;
	confirmDiscardClose();
	refresh();
	playSound(equipSound);
});
function discardWeaponR() {
	if (player1.weapon1Card !== 0) {
		discardPreview.style.backgroundImage = `url('img/market/w${player1.weapon1Card}.jpg')`;
		clearDiscardPopUp();
		confirmDiscardOpen();
		discardButtonRightHand.style.display = "flex";
		refresh();
	}
}

discardButtonLeftHand.addEventListener("click", () => {
	player1.weapon2Card = 0;
	player1.weapon2 = -1;
	player1.weapon2Bonus = -1;
	player1.damageBonusWeapon2 = 0;
	player1.attackBonusWeapon2 = 0;
	player1.defenseBonusShield2 = 0;
	player1.damageBonusShield2 = 0;
	confirmDiscardClose();
	refresh();
	playSound(equipSound);
});
function discardWeaponL() {
	if (player1.weapon2Card !== 0) {
		discardPreview.style.backgroundImage = `url('img/market/w${player1.weapon2Card}.jpg')`;
		clearDiscardPopUp();
		confirmDiscardOpen();
		discardButtonLeftHand.style.display = "flex";
		refresh();
	}
}

discardButtonArmor.addEventListener("click", () => {
	player1.armorCard = 0;
	player1.armor = 2;
	player1.healthBonusArmor = 0;
	confirmDiscardClose();
	addHealthBonus();
	refresh();
	playSound(equipSound);
});
function discardArmor() {
	if (player1.armorCard !== 0) {
		discardPreview.style.backgroundImage = `url('img/market/a${player1.armorCard}.jpg')`;
		clearDiscardPopUp();
		confirmDiscardOpen();
		discardButtonArmor.style.display = "flex";
		refresh();
	}
}

discardButtonHealth.addEventListener("click", () => {
	player1.healthCard = 0;
	player1.healthBonusSkill = 0;
	confirmDiscardClose();
	addHealthBonus();
	refresh();
	playSound(equipSound);
});
function discardHealth() {
	if (player1.healthCard !== 0) {
		discardPreview.style.backgroundImage = `url('img/market/healthBonus0${player1.healthCard}.jpg')`;
		clearDiscardPopUp();
		confirmDiscardOpen();
		discardButtonHealth.style.display = "flex";
		refresh();
	}
}

discardButtonDamage.addEventListener("click", () => {
	player1.damageCard = 0;
	player1.damageBonusSkill = 0;
	confirmDiscardClose();
	refresh();
	playSound(equipSound);
});
function discardDamage() {
	if (player1.damageCard !== 0) {
		discardPreview.style.backgroundImage = `url('img/market/damageBonus${player1.damageCard}.jpg')`;
		clearDiscardPopUp();
		confirmDiscardOpen();
		discardButtonDamage.style.display = "flex";
		refresh();
	}
}

discardButtonAttack.addEventListener("click", () => {
	player1.attackCard = 0;
	player1.attackBonusSkill = 0;
	confirmDiscardClose();
	refresh();
	playSound(equipSound);
});
function discardAttack() {
	if (player1.attackCard !== 0) {
		discardPreview.style.backgroundImage = `url('img/market/attackBonus${player1.attackCard}.jpg')`;
		clearDiscardPopUp();
		confirmDiscardOpen();
		discardButtonAttack.style.display = "flex";
		refresh();
	}
}

discardButtonDefense.addEventListener("click", () => {
	player1.defenseCard = 0;
	player1.defenseBonusSkill = 0;
	confirmDiscardClose();
	refresh();
	playSound(equipSound);
});
function discardDefense() {
	if (player1.defenseCard !== 0) {
		discardPreview.style.backgroundImage = `url('img/market/defenseBonus${player1.defenseCard}.jpg')`;
		clearDiscardPopUp();
		confirmDiscardOpen();
		discardButtonDefense.style.display = "flex";
		refresh();
	}
}

function okBuyClear() {
	okBuyRightButton.style.display = "none";
	okBuyLeftButton.style.display = "none";
	okBuyTwoHanded.style.display = "none";
	okBuyHealth.style.display = "none";
	okBuyDamage.style.display = "none";
	okBuyAttack.style.display = "none";
	okBuyDefense.style.display = "none";
	okBuyArmor.style.display = "none";
}

function cannotAfford() {
	okBuyClear();
}

function alreadyOwn() {
	okBuyClear();
}

function dualWield() {
	okBuyClear();
	okBuyRightButton.style.display = "flex";
	okBuyLeftButton.style.display = "flex";
}

function TwoHanded() {
	okBuyClear();
	okBuyTwoHanded.style.display = "flex";
}

function healthTraining() {
	okBuyClear();
	okBuyHealth.style.display = "flex";
}

function damageTraining() {
	okBuyClear();
	okBuyDamage.style.display = "flex";
}

function attackTraining() {
	okBuyClear();
	okBuyAttack.style.display = "flex";
}

function defenseTraining() {
	okBuyClear();
	okBuyDefense.style.display = "flex";
}

function armor() {
	okBuyClear();
	okBuyArmor.style.display = "flex";
}

cancelDiscardButton.addEventListener("click", () => {
	cancelDiscardClose();
});

cancelBuyButton.addEventListener("click", () => {
	cancelBuyClose();
});

okBuyRightButton.addEventListener("click", () => {
	checkoutRightHand();
	confirmBuyWindow.style.display = "none";
	openInventory();
});

okBuyLeftButton.addEventListener("click", () => {
	checkoutLeftHand();
	confirmBuyWindow.style.display = "none";
	openInventory();
});

okBuyTwoHanded.addEventListener("click", () => {
	checkoutTwoHanded();
	confirmBuyWindow.style.display = "none";
	openInventory();
});

okBuyArmor.addEventListener("click", () => {
	checkoutArmor();
	confirmBuyWindow.style.display = "none";
	openInventory();
});

okBuyHealth.addEventListener("click", () => {
	checkoutHealth();
	confirmBuyWindow.style.display = "none";
	openInventory();
});

okBuyDamage.addEventListener("click", () => {
	checkoutDamage();
	confirmBuyWindow.style.display = "none";
	openInventory();
});

okBuyAttack.addEventListener("click", () => {
	checkoutAttack();
	confirmBuyWindow.style.display = "none";
	openInventory();
});

okBuyDefense.addEventListener("click", () => {
	checkoutDefense();
	confirmBuyWindow.style.display = "none";
	openInventory();
});

function offHandClear() {
	if (
		(player1.weapon1Card >= 21 && player1.weapon1Card <= 40) ||
		(player1.weapon2Card >= 21 && player1.weapon2Card <= 40)
	) {
		player1.weapon1Card = 0;
		player1.weapon1 = -1;
		player1.weapon1Bonus = -1;
		player1.damageBonusWeapon1 = 0;
		player1.attackBonusWeapon1 = 0;
		player1.defenseBonusShield1 = 0;
		player1.damageBonusShield1 = 0;
		player1.weapon2Card = 0;
		player1.weapon2 = -1;
		player1.weapon2Bonus = -1;
		player1.damageBonusWeapon2 = 0;
		player1.attackBonusWeapon2 = 0;
		player1.defenseBonusShield2 = 0;
		player1.damageBonusShield2 = 0;
		refresh();
	}
}

// RIGHT HAND
const shoppingCartRightHand = {
	gold: 0,
	weapon1Card: 0,
	weapon1: 0,
	weapon1Bonus: -1,
	damageBonusWeapon1: 0,
	attackBonusWeapon1: 0,
	defenseBonusShield1: 0,
	damageBonusShield1: 0,
};
function checkoutRightHand() {
	offHandClear();
	player1.gold -= shoppingCartRightHand.gold;
	player1.weapon1Card = shoppingCartRightHand.weapon1Card;
	player1.weapon1 = shoppingCartRightHand.weapon1;
	player1.weapon1Bonus = shoppingCartRightHand.weapon1Bonus;
	player1.damageBonusWeapon1 = shoppingCartRightHand.damageBonusWeapon1;
	player1.attackBonusWeapon1 = shoppingCartRightHand.attackBonusWeapon1;
	player1.defenseBonusShield1 = shoppingCartRightHand.defenseBonusShield1;
	player1.damageBonusShield1 = shoppingCartRightHand.damageBonusShield1;
	playSound(equipSound);
	refresh();
}

// LEFT HAND
const shoppingCartLeftHand = {
	gold: 0,
	weapon2Card: 0,
	weapon2: 0,
	weapon2Bonus: -1,
	damageBonusWeapon2: 0,
	attackBonusWeapon2: 0,
	defenseBonusShield2: 0,
	damageBonusShield2: 0,
};
function checkoutLeftHand() {
	offHandClear();
	player1.gold -= shoppingCartLeftHand.gold;
	player1.weapon2Card = shoppingCartLeftHand.weapon2Card;
	player1.weapon2 = shoppingCartLeftHand.weapon2;
	player1.weapon2Bonus = shoppingCartLeftHand.weapon2Bonus;
	player1.damageBonusWeapon2 = shoppingCartLeftHand.damageBonusWeapon2;
	player1.attackBonusWeapon2 = shoppingCartLeftHand.attackBonusWeapon2;
	player1.defenseBonusShield2 = shoppingCartLeftHand.defenseBonusShield2;
	player1.damageBonusShield2 = shoppingCartLeftHand.damageBonusShield2;
	playSound(equipSound);
	refresh();
}

// TWO HAND
const shoppingTwoHanded = {
	gold: 0,
	weapon1Card: 0,
	weapon1: 0,
	weapon1Bonus: -1,
	damageBonusWeapon1: 0,
	attackBonusWeapon1: 0,
	defenseBonusShield1: 0,
	damageBonusShield1: 0,
	weapon2Card: 0,
	weapon2: -1,
	weapon2Bonus: -1,
	damageBonusWeapon2: 0,
	attackBonusWeapon2: 0,
	defenseBonusShield2: 0,
	damageBonusShield2: 0,
};
function checkoutTwoHanded() {
	player1.gold -= shoppingTwoHanded.gold;
	player1.weapon1Card = shoppingTwoHanded.weapon1Card;
	player1.weapon1 = shoppingTwoHanded.weapon1;
	player1.weapon1Bonus = shoppingTwoHanded.weapon1Bonus;
	player1.damageBonusWeapon1 = shoppingTwoHanded.damageBonusWeapon1;
	player1.attackBonusWeapon1 = shoppingTwoHanded.attackBonusWeapon1;
	player1.defenseBonusShield1 = shoppingTwoHanded.defenseBonusShield1;
	player1.damageBonusShield1 = shoppingTwoHanded.damageBonusShield1;
	player1.weapon2Card = shoppingTwoHanded.weapon2Card;
	player1.weapon2 = shoppingTwoHanded.weapon2;
	player1.weapon2Bonus = shoppingTwoHanded.weapon2Bonus;
	player1.damageBonusWeapon2 = shoppingTwoHanded.damageBonusWeapon2;
	player1.attackBonusWeapon2 = shoppingTwoHanded.attackBonusWeapon2;
	player1.defenseBonusShield2 = shoppingTwoHanded.defenseBonusShield2;
	player1.damageBonusShield2 = shoppingTwoHanded.damageBonusShield2;
	playSound(equipSound);
	refresh();
}

// Armor
const shoppingArmor = {
	gold: 0,
	armorCard: 0,
	armor: 0,
	healthBonusArmor: 0,
	topupHP: 0,
};

function checkoutArmor() {
	player1.gold -= shoppingArmor.gold;
	player1.armorCard = shoppingArmor.armorCard;
	player1.armor = shoppingArmor.armor;
	player1.healthBonusArmor = shoppingArmor.healthBonusArmor;
	player1.currentHealth += shoppingArmor.topupHP;
	refresh();
	addHealthBonus();
	playSound(equipSound);
}

// Training
const shoppingHealth = {
	gold: 0,
	healthCard: 0,
	healthBonusSkill: 0,
	topupHP: 0,
};

function checkoutHealth() {
	player1.gold -= shoppingHealth.gold;
	player1.healthCard = shoppingHealth.healthCard;
	player1.healthBonusSkill = shoppingHealth.healthBonusSkill;
	player1.currentHealth += shoppingHealth.topupHP;
	refresh();
	addHealthBonus();
	playSound(equipSound);
}

const shoppingDamage = {
	gold: 0,
	damageCard: 0,
	damageBonusSkill: 0,
};
function checkoutDamage() {
	player1.gold -= shoppingDamage.gold;
	player1.damageCard = shoppingDamage.damageCard;
	player1.damageBonusSkill = shoppingDamage.damageBonusSkill;
	playSound(equipSound);
	refresh();
}

const shoppingAttack = {
	gold: 0,
	attackCard: 0,
	attackBonusSkill: 0,
};
function checkoutAttack() {
	player1.gold -= shoppingAttack.gold;
	player1.attackCard = shoppingAttack.attackCard;
	player1.attackBonusSkill = shoppingAttack.attackBonusSkill;
	playSound(equipSound);
	refresh();
}

const shoppingDefense = {
	gold: 0,
	defenseCard: 0,
	defenseBonusSkill: 0,
};
function checkoutDefense() {
	player1.gold -= shoppingDefense.gold;
	player1.defenseCard = shoppingDefense.defenseCard;
	player1.defenseBonusSkill = shoppingDefense.defenseBonusSkill;
	playSound(equipSound);
	refresh();
}

// Weapon Image Buttons in MArket
// onehand
const buyW1 = document.querySelectorAll("img")[0];
const buyW2 = document.querySelectorAll("img")[1];
const buyW3 = document.querySelectorAll("img")[2];
const buyW4 = document.querySelectorAll("img")[3];
const buyW5 = document.querySelectorAll("img")[4];
const buyW6 = document.querySelectorAll("img")[5];
const buyW7 = document.querySelectorAll("img")[6];
const buyW8 = document.querySelectorAll("img")[7];
const buyW9 = document.querySelectorAll("img")[8];
const buyW10 = document.querySelectorAll("img")[9];
// twohand
const buyW11 = document.querySelectorAll("img")[10];
const buyW12 = document.querySelectorAll("img")[11];
const buyW13 = document.querySelectorAll("img")[12];
const buyW14 = document.querySelectorAll("img")[13];
const buyW15 = document.querySelectorAll("img")[14];
const buyW16 = document.querySelectorAll("img")[15];
const buyW17 = document.querySelectorAll("img")[16];
const buyW18 = document.querySelectorAll("img")[17];
const buyW19 = document.querySelectorAll("img")[18];
const buyW20 = document.querySelectorAll("img")[19];
// Ranged
const buyW21 = document.querySelectorAll("img")[20];
const buyW22 = document.querySelectorAll("img")[21];
const buyW23 = document.querySelectorAll("img")[22];
const buyW24 = document.querySelectorAll("img")[23];
const buyW25 = document.querySelectorAll("img")[24];
const buyW26 = document.querySelectorAll("img")[25];
const buyW27 = document.querySelectorAll("img")[26];
const buyW28 = document.querySelectorAll("img")[27];
const buyW29 = document.querySelectorAll("img")[28];
const buyW30 = document.querySelectorAll("img")[29];
// Shield
const buyW31 = document.querySelectorAll("img")[30];
const buyW32 = document.querySelectorAll("img")[31];
const buyW33 = document.querySelectorAll("img")[32];
const buyW34 = document.querySelectorAll("img")[33];
const buyW35 = document.querySelectorAll("img")[34];
const buyW36 = document.querySelectorAll("img")[35];
const buyW37 = document.querySelectorAll("img")[36];
const buyW38 = document.querySelectorAll("img")[37];
const buyW39 = document.querySelectorAll("img")[38];
const buyW40 = document.querySelectorAll("img")[39];
// Armor
const buyA1 = document.querySelectorAll("img")[40];
const buyA2 = document.querySelectorAll("img")[41];
const buyA3 = document.querySelectorAll("img")[42];
const buyA4 = document.querySelectorAll("img")[43];
const buyA5 = document.querySelectorAll("img")[44];
const buyA6 = document.querySelectorAll("img")[45];
const buyA7 = document.querySelectorAll("img")[46];
const buyA8 = document.querySelectorAll("img")[47];
const buyA9 = document.querySelectorAll("img")[48];
const buyA10 = document.querySelectorAll("img")[49];
const buyA11 = document.querySelectorAll("img")[50];
const buyA12 = document.querySelectorAll("img")[51];
const buyA13 = document.querySelectorAll("img")[52];
const buyA14 = document.querySelectorAll("img")[53];
// Training
const buyT1 = document.querySelectorAll("img")[54];
const buyT2 = document.querySelectorAll("img")[56];
const buyT3 = document.querySelectorAll("img")[58];
const buyT4 = document.querySelectorAll("img")[55];
const buyT5 = document.querySelectorAll("img")[57];
const buyT6 = document.querySelectorAll("img")[59];

const buyT7 = document.querySelectorAll("img")[60];
const buyT8 = document.querySelectorAll("img")[62];
const buyT9 = document.querySelectorAll("img")[64];
const buyT10 = document.querySelectorAll("img")[61];
const buyT11 = document.querySelectorAll("img")[63];
const buyT12 = document.querySelectorAll("img")[65];

const updateBuyPreviewDualWield = () =>
	(buyPreview.style.backgroundImage = `url('img/market/w${shoppingCartRightHand.weapon1Card}.jpg')`);
const updateBuyPreviewTwoHanded = () =>
	(buyPreview.style.backgroundImage = `url('img/market/w${shoppingTwoHanded.weapon1Card}.jpg')`);
const updateBuyPreviewArmor = () =>
	(buyPreview.style.backgroundImage = `url('img/market/a${shoppingArmor.armorCard}.jpg')`);
const updateBuyPreviewHealth = () =>
	(buyPreview.style.backgroundImage = `url('img/market/healthBonus0${shoppingHealth.healthCard}.jpg')`);
const updateBuyPreviewDamage = () =>
	(buyPreview.style.backgroundImage = `url('img/market/damageBonus${shoppingDamage.damageCard}.jpg')`);
const updateBuyPreviewAttack = () =>
	(buyPreview.style.backgroundImage = `url('img/market/attackBonus${shoppingAttack.attackCard}.jpg')`);
const updateBuyPreviewDefense = () =>
	(buyPreview.style.backgroundImage = `url('img/market/defenseBonus${shoppingDefense.defenseCard}.jpg')`);

//Click on STORE ITEMS
buyW1.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 1;
	shoppingCartLeftHand.weapon2Card = 1;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 1 &&
		player1.weapon2Card !== 1 &&
		player1.gold >= 0
	) {
		wantToBuy.innerHTML = "A trusty and reliable Dagger for ";
		wantToBuyGoldCost.innerHTML = "0 gold?";
		shoppingCartRightHand.gold = 0;
		shoppingCartRightHand.weapon1 = 4;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 0;
		shoppingCartLeftHand.weapon2 = 4;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 1 || player1.weapon2Card === 1) {
		wantToBuy.innerHTML = "You already own this Dagger.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 1) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this dagger.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW2.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 2;
	shoppingCartLeftHand.weapon2Card = 2;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 2 &&
		player1.weapon2Card !== 2 &&
		player1.gold >= 2
	) {
		wantToBuy.innerHTML = "Do you want to buy the Gladius for ";
		wantToBuyGoldCost.innerHTML = "2 gold?";
		shoppingCartRightHand.gold = 2;
		shoppingCartRightHand.weapon1 = 6;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 2;
		shoppingCartLeftHand.weapon2 = 6;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 2 || player1.weapon2Card === 2) {
		wantToBuy.innerHTML = "You already own this Gladius.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Gladius.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW3.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 3;
	shoppingCartLeftHand.weapon2Card = 3;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 3 &&
		player1.weapon2Card !== 3 &&
		player1.gold >= 4
	) {
		wantToBuy.innerHTML = "Do you want to buy the Long Sword for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingCartRightHand.gold = 4;
		shoppingCartRightHand.weapon1 = 8;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 4;
		shoppingCartLeftHand.weapon2 = 8;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 3 || player1.weapon2Card === 3) {
		wantToBuy.innerHTML = "You already own this Long Sword.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 4) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Long Sword.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW4.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 4;
	shoppingCartLeftHand.weapon2Card = 4;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 4 &&
		player1.weapon2Card !== 4 &&
		player1.gold >= 7
	) {
		wantToBuy.innerHTML = "Do you want to buy the Deadly Axe for ";
		wantToBuyGoldCost.innerHTML = "7 gold?";
		shoppingCartRightHand.gold = 7;
		shoppingCartRightHand.weapon1 = 10;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 7;
		shoppingCartLeftHand.weapon2 = 10;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 4 || player1.weapon2Card === 4) {
		wantToBuy.innerHTML = "You already own this Deadly Axe.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 7) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Deadly Axe.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW5.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 5;
	shoppingCartLeftHand.weapon2Card = 5;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 5 &&
		player1.weapon2Card !== 5 &&
		player1.gold >= 10
	) {
		wantToBuy.innerHTML = "Do you want to buy the Morning Star for ";
		wantToBuyGoldCost.innerHTML = "10 gold?";
		shoppingCartRightHand.gold = 10;
		shoppingCartRightHand.weapon1 = 12;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 10;
		shoppingCartLeftHand.weapon2 = 12;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 5 || player1.weapon2Card === 5) {
		wantToBuy.innerHTML = "You already own this Morning Star.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 10) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Morning Star.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW6.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 6;
	shoppingCartLeftHand.weapon2Card = 6;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 6 &&
		player1.weapon2Card !== 6 &&
		player1.gold >= 2
	) {
		wantToBuy.innerHTML = "Do you want to buy the Smith's Hammer for ";
		wantToBuyGoldCost.innerHTML = "2 gold?";
		shoppingCartRightHand.gold = 2;
		shoppingCartRightHand.weapon1 = 4;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 1;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 2;
		shoppingCartLeftHand.weapon2 = 4;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 1;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 6 || player1.weapon2Card === 6) {
		wantToBuy.innerHTML = "You already own this Smith's Hammer.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Smith's Hammer.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW7.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 7;
	shoppingCartLeftHand.weapon2Card = 7;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 7 &&
		player1.weapon2Card !== 7 &&
		player1.gold >= 3
	) {
		wantToBuy.innerHTML = "Do you want to buy the Expensive Mace for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingCartRightHand.gold = 3;
		shoppingCartRightHand.weapon1 = 6;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 3;
		shoppingCartLeftHand.weapon2 = 6;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 7 || player1.weapon2Card === 7) {
		wantToBuy.innerHTML = "You already own this Expensive Mace.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Expensive Mace.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW8.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 8;
	shoppingCartLeftHand.weapon2Card = 8;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 8 &&
		player1.weapon2Card !== 8 &&
		player1.gold >= 6
	) {
		wantToBuy.innerHTML = "Do you want to buy the Cat O' Nine Tails for ";
		wantToBuyGoldCost.innerHTML = "6 gold?";
		shoppingCartRightHand.gold = 6;
		shoppingCartRightHand.weapon1 = 4;
		shoppingCartRightHand.weapon1Bonus = 4;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 6;
		shoppingCartLeftHand.weapon2 = 4;
		shoppingCartLeftHand.weapon2Bonus = 4;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 8 || player1.weapon2Card === 8) {
		wantToBuy.innerHTML = "You already own this Cat O' Nine Tails.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 6) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Cat O' Nine Tails.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW9.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 9;
	shoppingCartLeftHand.weapon2Card = 9;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 9 &&
		player1.weapon2Card !== 9 &&
		player1.gold >= 8
	) {
		wantToBuy.innerHTML = "Do you want to buy the Golden Axe for ";
		wantToBuyGoldCost.innerHTML = "8 gold?";
		shoppingCartRightHand.gold = 8;
		shoppingCartRightHand.weapon1 = 8;
		shoppingCartRightHand.weapon1Bonus = 0;
		shoppingCartRightHand.damageBonusWeapon1 = 1;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 8;
		shoppingCartLeftHand.weapon2 = 8;
		shoppingCartLeftHand.weapon2Bonus = 0;
		shoppingCartLeftHand.damageBonusWeapon2 = 1;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 9 || player1.weapon2Card === 9) {
		wantToBuy.innerHTML = "You already own this Golden Axe.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 8) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Golden Axe.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW10.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 10;
	shoppingCartLeftHand.weapon2Card = 10;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 10 &&
		player1.weapon2Card !== 10 &&
		player1.gold >= 12
	) {
		wantToBuy.innerHTML = "Do you want to buy the Fast Cutlass for ";
		wantToBuyGoldCost.innerHTML = "12 gold?";
		shoppingCartRightHand.gold = 12;
		shoppingCartRightHand.weapon1 = 10;
		shoppingCartRightHand.weapon1Bonus = 0;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 1;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 12;
		shoppingCartLeftHand.weapon2 = 10;
		shoppingCartLeftHand.weapon2Bonus = 0;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 1;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 10 || player1.weapon2Card === 10) {
		wantToBuy.innerHTML = "You already own this Fast Cutlass.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Fast Cutlass.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

// SHIELDS
buyW31.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 11;
	shoppingCartLeftHand.weapon2Card = 11;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 11 &&
		player1.weapon2Card !== 11 &&
		player1.gold >= 0 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Wood Shield for ";
		wantToBuyGoldCost.innerHTML = "0 gold?";
		shoppingCartRightHand.gold = 0;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 1;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 0;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 1;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 11 || player1.weapon2Card === 11) {
		wantToBuy.innerHTML = "You already own this Wood Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 0) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Wood Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW32.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 12;
	shoppingCartLeftHand.weapon2Card = 12;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 12 &&
		player1.weapon2Card !== 12 &&
		player1.gold >= 1 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Viking Shield for ";
		wantToBuyGoldCost.innerHTML = "1 gold?";
		shoppingCartRightHand.gold = 1;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 2;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 1;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 2;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 12 || player1.weapon2Card === 12) {
		wantToBuy.innerHTML = "You already own this Viking Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 1) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Viking Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW33.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 13;
	shoppingCartLeftHand.weapon2Card = 13;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 13 &&
		player1.weapon2Card !== 13 &&
		player1.gold >= 3 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Bronze Shield for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingCartRightHand.gold = 3;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 3;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 3;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 3;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 13 || player1.weapon2Card === 13) {
		wantToBuy.innerHTML = "You already own this Bronze Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Bronze Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW34.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 14;
	shoppingCartLeftHand.weapon2Card = 14;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 14 &&
		player1.weapon2Card !== 14 &&
		player1.gold >= 7 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Steel Shield for ";
		wantToBuyGoldCost.innerHTML = "7 gold?";
		shoppingCartRightHand.gold = 7;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 4;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 7;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 4;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 14 || player1.weapon2Card === 14) {
		wantToBuy.innerHTML = "You already own this Steel Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 7) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Steel Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW35.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 15;
	shoppingCartLeftHand.weapon2Card = 15;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 15 &&
		player1.weapon2Card !== 15 &&
		player1.gold >= 12 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Tower Shield for ";
		wantToBuyGoldCost.innerHTML = "12 gold?";
		shoppingCartRightHand.gold = 12;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 5;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 12;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 5;
		shoppingCartLeftHand.damageBonusShield2 = 0;
		dualWield();
	} else if (player1.weapon1Card === 15 || player1.weapon2Card === 15) {
		wantToBuy.innerHTML = "You already own this Tower Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Tower Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW36.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 16;
	shoppingCartLeftHand.weapon2Card = 16;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 16 &&
		player1.weapon2Card !== 16 &&
		player1.gold >= 2 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Sharpened Shield for ";
		wantToBuyGoldCost.innerHTML = "2 gold?";
		shoppingCartRightHand.gold = 2;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 1;
		shoppingCartRightHand.damageBonusShield1 = 1;
		shoppingCartLeftHand.gold = 2;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 1;
		shoppingCartLeftHand.damageBonusShield2 = 1;
		dualWield();
	} else if (player1.weapon1Card === 16 || player1.weapon2Card === 16) {
		wantToBuy.innerHTML = "You already own this Sharpened Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Sharpened Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW37.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 17;
	shoppingCartLeftHand.weapon2Card = 17;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 17 &&
		player1.weapon2Card !== 17 &&
		player1.gold >= 4 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Spike Shield for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingCartRightHand.gold = 4;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 2;
		shoppingCartRightHand.damageBonusShield1 = 1;
		shoppingCartLeftHand.gold = 4;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 2;
		shoppingCartLeftHand.damageBonusShield2 = 1;
		dualWield();
	} else if (player1.weapon1Card === 17 || player1.weapon2Card === 17) {
		wantToBuy.innerHTML = "You already own this Spike Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 4) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Spike Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW38.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 18;
	shoppingCartLeftHand.weapon2Card = 18;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 18 &&
		player1.weapon2Card !== 18 &&
		player1.gold >= 6 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Fighting Shield for ";
		wantToBuyGoldCost.innerHTML = "6 gold?";
		shoppingCartRightHand.gold = 6;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 3;
		shoppingCartRightHand.damageBonusShield1 = 1;
		shoppingCartLeftHand.gold = 6;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 3;
		shoppingCartLeftHand.damageBonusShield2 = 1;
		dualWield();
	} else if (player1.weapon1Card === 18 || player1.weapon2Card === 18) {
		wantToBuy.innerHTML = "You already own this Fighting Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 6) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Fighting Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW39.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 19;
	shoppingCartLeftHand.weapon2Card = 19;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 19 &&
		player1.weapon2Card !== 19 &&
		player1.gold >= 10 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Cruel Shield for ";
		wantToBuyGoldCost.innerHTML = "10 gold?";
		shoppingCartRightHand.gold = 10;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 3;
		shoppingCartRightHand.damageBonusShield1 = 2;
		shoppingCartLeftHand.gold = 10;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 3;
		shoppingCartLeftHand.damageBonusShield2 = 2;
		dualWield();
	} else if (player1.weapon1Card === 19 || player1.weapon2Card === 19) {
		wantToBuy.innerHTML = "You already own this Cruel Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 10) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this  Cruel Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

buyW40.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingCartRightHand.weapon1Card = 20;
	shoppingCartLeftHand.weapon2Card = 20;
	updateBuyPreviewDualWield();
	if (
		player1.weapon1Card !== 20 &&
		player1.weapon2Card !== 20 &&
		player1.gold >= 14 &&
		(player1.weapon1Card > 20 || player1.weapon1Card < 11) &&
		(player1.weapon2Card > 20 || player1.weapon2Card < 11)
	) {
		wantToBuy.innerHTML = "Do you want to buy the Brutal Shield for ";
		wantToBuyGoldCost.innerHTML = "14 gold?";
		shoppingCartRightHand.gold = 14;
		shoppingCartRightHand.weapon1 = -1;
		shoppingCartRightHand.weapon1Bonus = -1;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 4;
		shoppingCartRightHand.damageBonusShield1 = 2;
		shoppingCartLeftHand.gold = 14;
		shoppingCartLeftHand.weapon2 = -1;
		shoppingCartLeftHand.weapon2Bonus = -1;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 4;
		shoppingCartLeftHand.damageBonusShield2 = 2;
		dualWield();
	} else if (player1.weapon1Card === 20 || player1.weapon2Card === 20) {
		wantToBuy.innerHTML = "You already own this Brutal Shield.";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 14) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Brutal Shield.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	} else if (
		player1.weapon1Card >= 11 ||
		player1.weapon1Card <= 20 ||
		player1.weapon2Card >= 11 ||
		player1.weapon2Card <= 20
	) {
		console.log("already have a shield");
		wantToBuy.innerHTML =
			"You cannot have two shields. You may discard one by clicking on it.";
		wantToBuyGoldCost.innerHTML = "";
		cannotAfford();
	}
	refresh();
});

// TWO HANDED w21-w40
buyW11.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 21;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 21 &&
		player1.weapon2Card !== 21 &&
		player1.gold >= 1
	) {
		wantToBuy.innerHTML = "Do you want to buy the Giant Club for ";
		wantToBuyGoldCost.innerHTML = "1 gold?";
		shoppingTwoHanded.gold = 1;
		shoppingTwoHanded.weapon1 = 4;
		shoppingTwoHanded.weapon1Bonus = 4;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 1;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 21 || player1.weapon2Card === 21) {
		wantToBuy.innerHTML = "You already own this Giant Club.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 1) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Giant Club.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW12.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 22;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 22 &&
		player1.weapon2Card !== 22 &&
		player1.gold >= 3
	) {
		wantToBuy.innerHTML = "Do you want to buy the Wood Hammer for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingTwoHanded.gold = 3;
		shoppingTwoHanded.weapon1 = 6;
		shoppingTwoHanded.weapon1Bonus = 6;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 3;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 22 || player1.weapon2Card === 22) {
		wantToBuy.innerHTML = "You already own this Wood Hammer";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Wood Hammer.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW13.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 23;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 23 &&
		player1.weapon2Card !== 23 &&
		player1.gold >= 8
	) {
		wantToBuy.innerHTML = "Do you want to buy the Great Sword for ";
		wantToBuyGoldCost.innerHTML = "8 gold?";
		shoppingTwoHanded.gold = 8;
		shoppingTwoHanded.weapon1 = 8;
		shoppingTwoHanded.weapon1Bonus = 8;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 8;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 23 || player1.weapon2Card === 23) {
		wantToBuy.innerHTML = "You already own this Great Sword";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 8) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Great Sword.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW14.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 24;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 24 &&
		player1.weapon2Card !== 24 &&
		player1.gold >= 10
	) {
		wantToBuy.innerHTML = "Do you want to buy the Battle Axe for ";
		wantToBuyGoldCost.innerHTML = "10 gold?";
		shoppingTwoHanded.gold = 10;
		shoppingTwoHanded.weapon1 = 10;
		shoppingTwoHanded.weapon1Bonus = 10;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 10;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 24 || player1.weapon2Card === 24) {
		wantToBuy.innerHTML = "You already own this Battle Axe";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 10) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Battle Axe.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW15.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 25;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 25 &&
		player1.weapon2Card !== 25 &&
		player1.gold >= 15
	) {
		wantToBuy.innerHTML = "Do you want to buy the Zweihander for ";
		wantToBuyGoldCost.innerHTML = "15 gold?";
		shoppingTwoHanded.gold = 15;
		shoppingTwoHanded.weapon1 = 12;
		shoppingTwoHanded.weapon1Bonus = 12;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 15;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 25 || player1.weapon2Card === 25) {
		wantToBuy.innerHTML = "You already own this Zweihander";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 15) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Zweihander.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW16.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 26;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 26 &&
		player1.weapon2Card !== 26 &&
		player1.gold >= 1
	) {
		wantToBuy.innerHTML = "Do you want to buy the Bamboo Spear for ";
		wantToBuyGoldCost.innerHTML = "1 gold?";
		shoppingTwoHanded.gold = 1;
		shoppingTwoHanded.weapon1 = 4;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 3;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 1;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 26 || player1.weapon2Card === 26) {
		wantToBuy.innerHTML = "You already own this Bamboo Spear";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 1) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Bamboo Spear.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW17.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 27;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 27 &&
		player1.weapon2Card !== 27 &&
		player1.gold >= 3
	) {
		wantToBuy.innerHTML = "Do you want to buy the War Spear for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingTwoHanded.gold = 3;
		shoppingTwoHanded.weapon1 = 6;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 3;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 3;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 27 || player1.weapon2Card === 27) {
		wantToBuy.innerHTML = "You already own this War Spear";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this War Spear.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW18.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 28;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 28 &&
		player1.weapon2Card !== 28 &&
		player1.gold >= 10
	) {
		wantToBuy.innerHTML = "Oh! A fork type eh? Military Fork for ";
		wantToBuyGoldCost.innerHTML = "10 gold?";
		shoppingTwoHanded.gold = 10;
		shoppingTwoHanded.weapon1 = 10;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 3;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 10;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 28 || player1.weapon2Card === 28) {
		wantToBuy.innerHTML = "You already own this Military Fork";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 10) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Military Fork.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW19.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 29;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 29 &&
		player1.weapon2Card !== 29 &&
		player1.gold >= 12
	) {
		wantToBuy.innerHTML = "Sweet Victory and glory, Pike for ";
		wantToBuyGoldCost.innerHTML = "12 gold?";
		shoppingTwoHanded.gold = 12;
		shoppingTwoHanded.weapon1 = 12;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 3;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 12;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 29 || player1.weapon2Card === 29) {
		wantToBuy.innerHTML = "You already own this Pike";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Pike.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW20.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 30;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 30 &&
		player1.weapon2Card !== 30 &&
		player1.gold >= 18
	) {
		wantToBuy.innerHTML = "Grusome wounds inflicted, Halberd for ";
		wantToBuyGoldCost.innerHTML = "18 gold?";
		shoppingTwoHanded.gold = 18;
		shoppingTwoHanded.weapon1 = 20;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 0;
		shoppingTwoHanded.defenseBonusShield1 = 4;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 18;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 30 || player1.weapon2Card === 30) {
		wantToBuy.innerHTML = "You already own this Halberd";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 18) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Halberd.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW21.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 31;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 31 &&
		player1.weapon2Card !== 31 &&
		player1.gold >= 1
	) {
		wantToBuy.innerHTML = "Do you want to buy the Wood Crossbow for ";
		wantToBuyGoldCost.innerHTML = "1 gold?";
		shoppingTwoHanded.gold = 1;
		shoppingTwoHanded.weapon1 = 4;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 3;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 1;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 31 || player1.weapon2Card === 31) {
		wantToBuy.innerHTML = "You already own this Wood Crossbow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 1) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Wood Crossbow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW22.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 32;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 32 &&
		player1.weapon2Card !== 32 &&
		player1.gold >= 2
	) {
		wantToBuy.innerHTML = "Do you want to buy the Light Crossbow for ";
		wantToBuyGoldCost.innerHTML = "2 gold?";
		shoppingTwoHanded.gold = 2;
		shoppingTwoHanded.weapon1 = 6;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 3;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 2;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 32 || player1.weapon2Card === 32) {
		wantToBuy.innerHTML = "You already own this Light Crossbow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Light Crossbow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW23.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 33;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 33 &&
		player1.weapon2Card !== 33 &&
		player1.gold >= 4
	) {
		wantToBuy.innerHTML = "Do you want to buy the Iron Crossbow for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingTwoHanded.gold = 4;
		shoppingTwoHanded.weapon1 = 8;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 3;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 4;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 33 || player1.weapon2Card === 33) {
		wantToBuy.innerHTML = "You already own this Iron Crossbow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 4) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Iron Crossbow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW24.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 34;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 34 &&
		player1.weapon2Card !== 34 &&
		player1.gold >= 7
	) {
		wantToBuy.innerHTML = "Do you want to buy the Heavy Crossbow for ";
		wantToBuyGoldCost.innerHTML = "7 gold?";
		shoppingTwoHanded.gold = 7;
		shoppingTwoHanded.weapon1 = 10;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 3;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 7;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 34 || player1.weapon2Card === 34) {
		wantToBuy.innerHTML = "You already own this Heavy Crossbow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 7) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Heavy Crossbow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW25.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 35;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 35 &&
		player1.weapon2Card !== 35 &&
		player1.gold >= 10
	) {
		wantToBuy.innerHTML = "Do you want to buy the Master Crossbow for ";
		wantToBuyGoldCost.innerHTML = "10 gold?";
		shoppingTwoHanded.gold = 10;
		shoppingTwoHanded.weapon1 = 12;
		shoppingTwoHanded.weapon1Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 3;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 10;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 35 || player1.weapon2Card === 35) {
		wantToBuy.innerHTML = "You already own this Master Crossbow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 10) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Master Crossbow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW26.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 36;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 36 &&
		player1.weapon2Card !== 36 &&
		player1.gold >= 2
	) {
		wantToBuy.innerHTML = "Do you want to buy the Bent Bow for ";
		wantToBuyGoldCost.innerHTML = "2 gold?";
		shoppingTwoHanded.gold = 2;
		shoppingTwoHanded.weapon1 = 4;
		shoppingTwoHanded.weapon1Bonus = 4;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 1;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 2;
		shoppingTwoHanded.weapon2 = -1;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 36 || player1.weapon2Card === 36) {
		wantToBuy.innerHTML = "You already own this Bent Bow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Bent Bow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW27.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 37;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 37 &&
		player1.weapon2Card !== 37 &&
		player1.gold >= 5
	) {
		wantToBuy.innerHTML = "Do you want to buy the Short Bow for ";
		wantToBuyGoldCost.innerHTML = "5 gold?";
		shoppingTwoHanded.gold = 5;
		shoppingTwoHanded.weapon1 = 4;
		shoppingTwoHanded.weapon1Bonus = 4;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 1;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 5;
		shoppingTwoHanded.weapon2 = 4;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 37 || player1.weapon2Card === 37) {
		wantToBuy.innerHTML = "You already own this Short Bow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 5) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Short Bow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW28.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 38;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 38 &&
		player1.weapon2Card !== 38 &&
		player1.gold >= 10
	) {
		wantToBuy.innerHTML = "Do you want to buy the Horse Bow for ";
		wantToBuyGoldCost.innerHTML = "10 gold?";
		shoppingTwoHanded.gold = 10;
		shoppingTwoHanded.weapon1 = 4;
		shoppingTwoHanded.weapon1Bonus = 4;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 2;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 10;
		shoppingTwoHanded.weapon2 = 4;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 38 || player1.weapon2Card === 38) {
		wantToBuy.innerHTML = "You already own this Horse Bow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 10) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Horse Bow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW29.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 39;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 39 &&
		player1.weapon2Card !== 39 &&
		player1.gold >= 12
	) {
		wantToBuy.innerHTML = "Do you want to buy the Long Bow for ";
		wantToBuyGoldCost.innerHTML = "12 gold?";
		shoppingTwoHanded.gold = 12;
		shoppingTwoHanded.weapon1 = 4;
		shoppingTwoHanded.weapon1Bonus = 4;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 3;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 12;
		shoppingTwoHanded.weapon2 = 4;
		shoppingTwoHanded.weapon2Bonus = -1;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 39 || player1.weapon2Card === 39) {
		wantToBuy.innerHTML = "You already own this Long Bow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Long Bow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyW30.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingTwoHanded.weapon1Card = 40;
	updateBuyPreviewTwoHanded();
	if (
		player1.weapon1Card !== 40 &&
		player1.weapon2Card !== 40 &&
		player1.gold >= 15
	) {
		wantToBuy.innerHTML = "Do you want to buy the Flawless Bow for ";
		wantToBuyGoldCost.innerHTML = "15 gold?";
		shoppingTwoHanded.gold = 15;
		shoppingTwoHanded.weapon1 = 4;
		shoppingTwoHanded.weapon1Bonus = 4;
		shoppingTwoHanded.damageBonusWeapon1 = 0;
		shoppingTwoHanded.attackBonusWeapon1 = 3;
		shoppingTwoHanded.defenseBonusShield1 = 0;
		shoppingTwoHanded.damageBonusShield1 = 0;
		shoppingTwoHanded.gold = 15;
		shoppingTwoHanded.weapon2 = 4;
		shoppingTwoHanded.weapon2Bonus = 4;
		shoppingTwoHanded.damageBonusWeapon2 = 0;
		shoppingTwoHanded.attackBonusWeapon2 = 0;
		shoppingTwoHanded.defenseBonusShield2 = 0;
		shoppingTwoHanded.damageBonusShield2 = 0;
		TwoHanded();
	} else if (player1.weapon1Card === 40 || player1.weapon2Card === 40) {
		wantToBuy.innerHTML = "You already own this Flawless Bow";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 15) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford this Flawless Bow.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

// ARMOR
buyA1.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 1;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 1 && player1.gold >= 0) {
		wantToBuy.innerHTML = "Do you want to buy the Cloth Armor for ";
		wantToBuyGoldCost.innerHTML = "0 gold?";
		shoppingArmor.gold = 0;
		shoppingArmor.armor = 6;
		shoppingArmor.healthBonusArmor = 0;
		shoppingArmor.topupHP = 0;
		armor();
	} else if (player1.armorCard === 1) {
		wantToBuy.innerHTML = "You already own Cloth Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 0) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Cloth Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA2.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 2;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 2 && player1.gold >= 1) {
		wantToBuy.innerHTML = "Do you want to buy the Leather Armor for ";
		wantToBuyGoldCost.innerHTML = "1 gold?";
		shoppingArmor.gold = 1;
		shoppingArmor.armor = 7;
		shoppingArmor.healthBonusArmor = 0;
		shoppingArmor.topupHP = 0;
		armor();
	} else if (player1.armorCard === 2) {
		wantToBuy.innerHTML = "You already own Leather Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 1) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Leather Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA3.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 3;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 3 && player1.gold >= 2) {
		wantToBuy.innerHTML = "Do you want to buy the Studded Armor for ";
		wantToBuyGoldCost.innerHTML = "2 gold?";
		shoppingArmor.gold = 2;
		shoppingArmor.armor = 8;
		shoppingArmor.healthBonusArmor = 0;
		shoppingArmor.topupHP = 0;
		armor();
	} else if (player1.armorCard === 3) {
		wantToBuy.innerHTML = "You already own Studded Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Studded Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA4.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 4;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 4 && player1.gold >= 3) {
		wantToBuy.innerHTML = "Do you want to buy the Bronze Armor for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingArmor.gold = 3;
		shoppingArmor.armor = 9;
		shoppingArmor.healthBonusArmor = 0;
		shoppingArmor.topupHP = 0;
		armor();
	} else if (player1.armorCard === 4) {
		wantToBuy.innerHTML = "You already own Bronze Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Bronze Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA5.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 5;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 5 && player1.gold >= 5) {
		wantToBuy.innerHTML = "Do you want to buy the Scale Armor for ";
		wantToBuyGoldCost.innerHTML = "5 gold?";
		shoppingArmor.gold = 5;
		shoppingArmor.armor = 10;
		shoppingArmor.healthBonusArmor = 0;
		shoppingArmor.topupHP = 0;
		armor();
	} else if (player1.armorCard === 5) {
		wantToBuy.innerHTML = "You already own Scale Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 5) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Scale Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA6.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 6;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 6 && player1.gold >= 8) {
		wantToBuy.innerHTML = "Do you want to buy the Half Plate for ";
		wantToBuyGoldCost.innerHTML = "8 gold?";
		shoppingArmor.gold = 8;
		shoppingArmor.armor = 11;
		shoppingArmor.healthBonusArmor = 0;
		shoppingArmor.topupHP = 0;
		armor();
	} else if (player1.armorCard === 6) {
		wantToBuy.innerHTML = "You already own Half Plate";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 8) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Half Plate.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA7.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 7;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 7 && player1.gold >= 12) {
		wantToBuy.innerHTML = "Do you want to buy the Full Plate for ";
		wantToBuyGoldCost.innerHTML = "12 gold?";
		shoppingArmor.gold = 12;
		shoppingArmor.armor = 12;
		shoppingArmor.healthBonusArmor = 0;
		shoppingArmor.topupHP = 0;
		armor();
	} else if (player1.armorCard === 7) {
		wantToBuy.innerHTML = "You already own Full Plate";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Full Plate.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA8.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 8;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 8 && player1.gold >= 1) {
		wantToBuy.innerHTML = "Do you want to buy the Comfy Cloth Armor for ";
		wantToBuyGoldCost.innerHTML = "1 gold?";
		shoppingArmor.gold = 1;
		shoppingArmor.armor = 6;
		shoppingArmor.healthBonusArmor = 2;
		shoppingArmor.topupHP = 2;
		armor();
	} else if (player1.armorCard === 8) {
		wantToBuy.innerHTML = "You already own Comfy Cloth Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 1) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Comfy Cloth Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA9.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 9;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 9 && player1.gold >= 2) {
		wantToBuy.innerHTML = "Do you want to buy the Hard Leather Armor for ";
		wantToBuyGoldCost.innerHTML = "2 gold?";
		shoppingArmor.gold = 2;
		shoppingArmor.armor = 7;
		shoppingArmor.healthBonusArmor = 2;
		shoppingArmor.topupHP = 2;
		armor();
	} else if (player1.armorCard === 9) {
		wantToBuy.innerHTML = "You already own Hard Leather Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Hard Leather Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA10.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 10;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 10 && player1.gold >= 3) {
		wantToBuy.innerHTML = "Do you want to buy the Fine Studded Vest for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingArmor.gold = 3;
		shoppingArmor.armor = 8;
		shoppingArmor.healthBonusArmor = 2;
		shoppingArmor.topupHP = 2;
		armor();
	} else if (player1.armorCard === 10) {
		wantToBuy.innerHTML = "You already own Fine Studded Vest";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Fine Studded Vest.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA11.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 11;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 11 && player1.gold >= 4) {
		wantToBuy.innerHTML = "Do you want to buy the Tempered Bronze Armor for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingArmor.gold = 4;
		shoppingArmor.armor = 9;
		shoppingArmor.healthBonusArmor = 2;
		shoppingArmor.topupHP = 2;
		armor();
	} else if (player1.armorCard === 11) {
		wantToBuy.innerHTML = "You already own Tempered Bronze Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 4) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Tempered Bronze Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA12.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 12;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 12 && player1.gold >= 6) {
		wantToBuy.innerHTML = "Do you want to buy the Shiny Scale Armor for ";
		wantToBuyGoldCost.innerHTML = "6 gold?";
		shoppingArmor.gold = 6;
		shoppingArmor.armor = 10;
		shoppingArmor.healthBonusArmor = 2;
		shoppingArmor.topupHP = 2;
		armor();
	} else if (player1.armorCard === 12) {
		wantToBuy.innerHTML = "You already own Shiny Scale Armor";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 6) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Shiny Scale Armor.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA13.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 13;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 13 && player1.gold >= 10) {
		wantToBuy.innerHTML = "Do you want to buy the Lucky Half Plate for ";
		wantToBuyGoldCost.innerHTML = "10 gold?";
		shoppingArmor.gold = 10;
		shoppingArmor.armor = 11;
		shoppingArmor.healthBonusArmor = 2;
		shoppingArmor.topupHP = 2;
		armor();
	} else if (player1.armorCard === 13) {
		wantToBuy.innerHTML = "You already own Lucky Half Plate";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 10) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Lucky Half Plate.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyA14.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingArmor.armorCard = 14;
	updateBuyPreviewArmor();
	if (player1.armorCard !== 14 && player1.gold >= 15) {
		wantToBuy.innerHTML = "Do you want to buy the Flexible Full Plate for ";
		wantToBuyGoldCost.innerHTML = "15 gold?";
		shoppingArmor.gold = 15;
		shoppingArmor.armor = 12;
		shoppingArmor.healthBonusArmor = 2;
		shoppingArmor.topupHP = 2;
		armor();
	} else if (player1.armorCard === 14) {
		wantToBuy.innerHTML = "You already own Flexible Full Plate";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 15) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Flexible Full Plate.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT1.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingHealth.healthCard = 1;
	updateBuyPreviewHealth();
	if (player1.healthCard !== 1 && player1.gold >= 3) {
		wantToBuy.innerHTML = "Do you want to buy Basic Health Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingHealth.gold = 3;
		shoppingHealth.healthBonusSkill = 4;
		shoppingHealth.topupHP = 4;
		healthTraining();
	} else if (player1.healthCard === 1) {
		wantToBuy.innerHTML = "You already have Basic Health Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Basic Health Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT2.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingHealth.healthCard = 2;
	updateBuyPreviewHealth();
	if (player1.healthCard !== 2 && player1.gold >= 8) {
		wantToBuy.innerHTML = "Do you want to buy Advanced Health Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingHealth.gold = 8;
		shoppingHealth.healthBonusSkill = 8;
		shoppingHealth.topupHP = 8;
		healthTraining();
	} else if (player1.healthCard === 2) {
		wantToBuy.innerHTML = "You already have Advanced Health Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 8) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Advanced Health Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT3.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingHealth.healthCard = 3;
	updateBuyPreviewHealth();
	if (player1.healthCard !== 3 && player1.gold >= 12) {
		wantToBuy.innerHTML = "Do you want to buy Master Health Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingHealth.gold = 12;
		shoppingHealth.healthBonusSkill = 12;
		shoppingHealth.topupHP = 12;
		healthTraining();
	} else if (player1.healthCard === 3) {
		wantToBuy.innerHTML = "You already have Master Health Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Master Health Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT4.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingDamage.damageCard = 1;
	updateBuyPreviewDamage();
	if (player1.damageCard !== 1 && player1.gold >= 3) {
		wantToBuy.innerHTML = "Do you want to buy Basic Damage Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingDamage.gold = 3;
		shoppingDamage.damageBonusSkill = 1;
		damageTraining();
	} else if (player1.damageCard === 1) {
		wantToBuy.innerHTML = "You already have Basic Damage Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Basic Damage Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT5.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingDamage.damageCard = 2;
	updateBuyPreviewDamage();
	if (player1.damageCard !== 2 && player1.gold >= 8) {
		wantToBuy.innerHTML = "Do you want to buy Advanced Damage Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingDamage.gold = 8;
		shoppingDamage.damageBonusSkill = 2;
		damageTraining();
	} else if (player1.damageCard === 2) {
		wantToBuy.innerHTML = "You already have Advanced Damage Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 8) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Advanced Damage Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT6.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingDamage.damageCard = 3;
	updateBuyPreviewDamage();
	if (player1.damageCard !== 3 && player1.gold >= 12) {
		wantToBuy.innerHTML = "Do you want to buy Master Damage Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingDamage.gold = 12;
		shoppingDamage.damageBonusSkill = 3;
		damageTraining();
	} else if (player1.damageCard === 3) {
		wantToBuy.innerHTML = "You already have Master Damage Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Master Damage Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT7.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingAttack.attackCard = 1;
	updateBuyPreviewAttack();
	if (player1.attackCard !== 1 && player1.gold >= 3) {
		wantToBuy.innerHTML = "Do you want to buy Basic Attack Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingAttack.gold = 3;
		shoppingAttack.attackBonusSkill = 1;
		attackTraining();
	} else if (player1.attackCard === 1) {
		wantToBuy.innerHTML = "You already have Basic Attack Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Basic Attack Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT8.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingAttack.attackCard = 2;
	updateBuyPreviewAttack();
	if (player1.attackCard !== 2 && player1.gold >= 8) {
		wantToBuy.innerHTML = "Do you want to buy Advanced Attack Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingAttack.gold = 8;
		shoppingAttack.attackBonusSkill = 2;
		attackTraining();
	} else if (player1.attackCard === 2) {
		wantToBuy.innerHTML = "You already have Advanced Attack Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 8) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Advanced Attack Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT9.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingAttack.attackCard = 3;
	updateBuyPreviewAttack();
	if (player1.attackCard !== 3 && player1.gold >= 12) {
		wantToBuy.innerHTML = "Do you want to buy Master Attack Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingAttack.gold = 12;
		shoppingAttack.attackBonusSkill = 3;
		attackTraining();
	} else if (player1.attackCard === 3) {
		wantToBuy.innerHTML = "You already have Master Attack Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Master Attack Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT10.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingDefense.defenseCard = 1;
	updateBuyPreviewDefense();
	if (player1.defenseCard !== 1 && player1.gold >= 3) {
		wantToBuy.innerHTML = "Do you want to buy Basic Defense Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingDefense.gold = 3;
		shoppingDefense.defenseBonusSkill = 1;
		defenseTraining();
	} else if (player1.defenseCard === 1) {
		wantToBuy.innerHTML = "You already have Basic Defense Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Basic Defense Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT11.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingDefense.defenseCard = 2;
	updateBuyPreviewDefense();
	if (player1.defenseCard !== 2 && player1.gold >= 8) {
		wantToBuy.innerHTML = "Do you want to buy Advanced Defense Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingDefense.gold = 8;
		shoppingDefense.defenseBonusSkill = 2;
		defenseTraining();
	} else if (player1.defenseCard === 2) {
		wantToBuy.innerHTML = "You already have Advanced Defense Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 8) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Advanced Defense Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

buyT12.addEventListener("click", () => {
	confirmBuyOpen();
	shoppingDefense.defenseCard = 3;
	updateBuyPreviewDefense();
	if (player1.defenseCard !== 3 && player1.gold >= 12) {
		wantToBuy.innerHTML = "Do you want to buy Master Defense Training for ";
		wantToBuyGoldCost.innerHTML = "3 gold?";
		shoppingDefense.gold = 12;
		shoppingDefense.defenseBonusSkill = 3;
		defenseTraining();
	} else if (player1.defenseCard === 3) {
		wantToBuy.innerHTML = "You already have Master Defense Training";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 12) {
		console.log("not enough gold");
		wantToBuy.innerHTML = "You cannot afford Master Defense Training.";
		wantToBuyGoldCost.innerHTML = `  You only have ${player1.gold} gold?`;
		cannotAfford();
	}
	refresh();
});

function refresh() {
	// calculate Final Stats
	player1.defense =
		player1.defenseBonusWeapon +
		player1.defenseBonusShield1 +
		player1.defenseBonusShield2 +
		player1.armor +
		player1.defenseBonusSkill;
	player1.damage =
		player1.damageBonusWeapon1 +
		player1.damageBonusWeapon2 +
		player1.damageBonusShield1 +
		player1.damageBonusShield2 +
		player1.damageBonusSkill;
	player1.attack =
		player1.attackBonusSkill +
		player1.attackBonusWeapon1 +
		player1.attackBonusWeapon2;

	// CARD UPDATES
	player1CharCard.style.backgroundImage = `url('img/charCard${player1.currentCharCard}.jpg')`;
	player1Weapon1Card.style.backgroundImage = `url('img/market/w${player1.weapon1Card}.jpg')`;
	player1ArmorCard.style.backgroundImage = `url('img/market/a${player1.armorCard}.jpg')`;
	player1Weapon2Card.style.backgroundImage = `url('img/market/w${player1.weapon2Card}.jpg')`;
	player1HealthCard.style.backgroundImage = `url('img/market/healthBonus0${player1.healthCard}.jpg')`;
	player1DamageCard.style.backgroundImage = `url('img/market/damageBonus${player1.damageCard}.jpg')`;
	player1AttackCard.style.backgroundImage = `url('img/market/attackBonus${player1.attackCard}.jpg')`;
	player1DefenseCard.style.backgroundImage = `url('img/market/defenseBonus${player1.defenseCard}.jpg')`;
	player1DefenseCounter.innerHTML = player1.defense;
	enemy1HealthCounter.innerHTML = enemyArray[currentEnemyCard].currentHealth;
	// change sell button to show t=what will be replaced
	document.getElementById("okBuyRightButton").innerHTML =
		`<div>buy and replace <div/><br> <img src="img/market/w${player1.weapon1Card}.jpg" alt="" style="width: 80px">`;
	document.getElementById("okBuyLeftButton").innerHTML =
		`<div>buy and replace <div/><br> <img src="img/market/w${player1.weapon2Card}.jpg" alt="" style="width: 80px">`;
	document.getElementById("okBuyTwoHanded").innerHTML =
		`<div>buy and replace <div/><br> <img src="img/market/w${player1.weapon1Card}.jpg" alt="" style="width: 80px"><img src="img/market/w${player1.weapon2Card}.jpg" alt="" style="width: 80px">`;
	document.getElementById("okBuyArmor").innerHTML =
		`<div>buy and replace <div/><br> <img src="img/market/a${player1.armorCard}.jpg" alt="" style="width: 80px">`;

	document.getElementById("okBuyHealth").innerHTML =
		`<div>buy and replace <div/><br> <img src="img/market/healthBonus0${player1.healthCard}.jpg" alt="" style="width: 80px">`;
	document.getElementById("okBuyDamage").innerHTML =
		`<div>buy and replace <div/><br> <img src="img/market/damageBonus${player1.damageCard}.jpg" alt="" style="width: 80px">`;
	document.getElementById("okBuyAttack").innerHTML =
		`<div>buy and replace <div/><br> <img src="img/market/attackBonus${player1.attackCard}.jpg" alt="" style="width: 80px">`;
	document.getElementById("okBuyDefense").innerHTML =
		`<div>buy and replace <div/><br> <img src="img/market/defenseBonus${player1.defenseCard}.jpg" alt="" style="width: 80px">`;

	// Damage popup images

	logWeapon1PopUp.style.backgroundImage = `url('img/market/w${player1.weapon1Card}.jpg')`;
	logWeapon2PopUp.style.backgroundImage = `url('img/market/w${player1.weapon2Card}.jpg')`;
	popUpOuch.style.display = "none";
	popUpHitEnemy.style.display = "none";
	deathCountPopup.style.display = "none";
	// TABLE
	player1Name.innerHTML = player1.name;
	tableKillScore.innerHTML = killCount;
	tableDeathScore.innerHTML = deathCount;
	tableHighScore.innerHTML = highScore;
	tableGamesPlayed.innerHTML = gamesPlayed;
	tableDamageBonusSkill.innerHTML = player1.damage;
	tableAttackBonusSkill.innerHTML = player1.attack;
	tablePlayer1Weapon1.innerHTML = player1.weapon1;
	tablePlayer1Weapon2.innerHTML = player1.weapon2;
	tablePlayer1Weapon1Bonus.innerHTML = player1.weapon1Bonus;
	tablePlayer1Weapon2Bonus.innerHTML = player1.weapon2Bonus;
	player1GoldTable.innerHTML = player1.gold;
	goldTop.innerHTML = `${player1.gold} gold`;
	battleTop.innerHTML = battleNumber;

	healCost.innerHTML = healCostGold;
	updateGold();
	nextMarketText();
}

refresh();

// BOOTUP and Character create
addHealthBonus();
player1CharCard.style.backgroundImage = `url('img/charCard${player1.currentCharCard}.jpg')`;
updateGold();
player1GotoCharacterSelect();
clearStore();

const newEnemyApproaches = (enemyCode) => {
	enemy1CharCard.style.display = "block";
	enemy1CharCard.style.backgroundImage = `url('img/enemyCard${currentEnemyCard}.jpg')`;
};

// START
function start() {
	playMusic(encounter1);
	console.log("start");
	newEnemyApproaches(currentEnemyCard);
	slideStart.style.display = "none";
	slidePlayer1Turn.style.display = "block";
}

function highScoreUpdate() {
	if (killCount > highScore) {
		highScore = killCount;
		tableHighScore.innerHTML = highScore;
	}
}

// enemyturn popup
function enemyTurn() {
	console.log("enemyturn");
}

function tryAgain() {
	console.log("tryagain");
	nextEnemy();
	highScoreUpdate();
	killCount = 0;

	addHealthBonus();
	player1.currentHealth = player1.maxHealth;
	player1CurrentHp.innerHTML = player1.currentHealth;
	slidePlayer1Dead.style.display = "none";
	slideLogSlideE.style.display = "none";
	slideNextEnemy.style.display = "none";
	slidePlayer1Turn.style.display = "none";
	slideStart.style.display = "block";
	tableDeathScore.innerHTML = deathCount;
	tableKillScore.innerHTML = killCount;
	gamesPlayed = gamesPlayed + 1;
	refresh();
	location.reload();
}

function logSlide() {
	console.log('logSlide close / open "enemyTurn"');
	slideLogSlide.style.display = "none";
	popUpHitEnemy.style.display = "none";
	slideEnemy1Turn.style.display = "block";
	playSound(roar);

	enemy1Attack();
}

function logSlideE() {
	console.log('logSlideE close / open "player1Turn"');
	slideLogSlideE.style.display = "none";
	slidePlayer1Turn.style.display = "block";
	popUpOuch.style.display = "none";
}

// balance

// Search REMAINS button
function nextEnemy() {
	popUpEnemy1Dead.style.display = "none";
	slideKillLog.style.display = "none";
	enemy1CharCard.style.display = "none";
	slideNextEnemy.style.display = "block";

	const winGold =
		Math.round(currentEnemyCard / 10) +
		Math.floor(Math.random() * goldRewardDice + 1);
	foundGold.innerHTML = winGold;
	player1.gold += winGold;

	refresh();

	enemyArray[currentEnemyCard].currentHealth =
		enemyArray[currentEnemyCard].health;
	enemy1HealthCounter.innerHTML = enemyArray[currentEnemyCard].currentHealth;
	logSlideRollResult.innerHTML = "...";
	logSlideResultLine2.innerHTML = "You look around..";
	logSlideResultLine3.innerHTML = "and see an angry peasant";
	tableDeathScore.innerHTML = deathCount;
	tableKillScore.innerHTML = killCount;
}

function enemy1Dead() {
	currentEnemyCard += 1;
	healCostGold = Math.round(currentEnemyCard / 10) + 2;
	playSound(deadEnemy);

	if (currentEnemyCard >= 36) {
		popUpEnemy1Dead.style.display = "block";
		alert(
			"YOU WIN, this is as far as i am in develpoment so far. Thanks for playin.  You may continue to play until you die",
		);
		currentEnemyCard = 0;
	}
	confirmDiscardClose;

	currentWeek += 1;
	killCount = killCount + 1;
	enemyArray[currentEnemyCard].currentHealth = 0;
	tableKillScore.innerHTML = killCount;
	nextEnemyKillCount.innerHTML = killCount;
	enemy1HealthCounter.innerHTML = enemyArray[currentEnemyCard].currentHealth;
	battleNumber = battleNumber + 1;
	popUpEnemy1Dead.style.display = "block";

	console.log("enemydead()logged");
}

function fightNext() {
	fadeMusic(MoonLight);
	weekCardUp();
	if (encounter1.paused) {
		playMusic(encounter1);
	}

	newEnemyApproaches(currentEnemyCard);
	slidePlayer1Turn.style.display = "block";
	slideNextEnemy.style.display = "none";
	battleFooter.style.display = "none";
	closeWeek.style.display = "block";
}

function enemy1Attack() {
	enemy1CharCard.id = "enemy1Attack";
}

function enemy1AttackDone() {
	document.getElementById("enemy1Attack").id = "enemy1Idle";
	// cannot make Var for document.getElementById("enemy1Attack") because is doesnt exist in the html at time of variable declaraton.
	// make a  slide instead of a class change for attacking enemy to fix
}

function player1Ouch() {
	popUpOuch.style.display = "block";
	playSound(takedamage);
}

function Enemy1Ouch() {
	popUpHitEnemy.style.display = "block";
}

function player1Dead() {
	playSound(dead);
	deathCount = deathCount + 1;
	battleNumber = 1;
	player1CurrentHp.innerHTML = player1.currentHealth;
	logSlideResultLine3.innerHTML = `You have been killed ${deathCount} times`;
	deathCountPopup.innerHTML = deathCount;
	finalScorePopup.innerHTML = killCount;
	tableDeathScore.innerHTML = deathCount;
	slideLogSlideE.style.display = "none";
	slidePlayer1Dead.style.display = "block";
	console.log("player dead");
}

function changeEnemy() {
	currentEnemyCard += 1;
	if (currentEnemyCard >= 39) {
		currentEnemyCard = 1;
	}
	console.log(`change Enemy  ${currentEnemyCard}`);
	enemy1CharCard.style.backgroundImage = `url('../Last-Man-Standing-Mini-GameLast-Man-Standing-Mini-Game/img/enemyCard${currentEnemyCard}.jpg')`;
}

// PLAYER ATTACK
function player1AttackRoll() {
	slidePlayer1Turn.style.display = "none"; //you stand ready
	attackRoll = Math.floor(Math.random() * 20 + 1);
	// attackRoll = 20;
	refresh();
	console.log(`player1AttackRoll ${attackRoll}`);
	logSlideRollResult.innerHTML = `Attack total is ${attackRoll + player1.attack}  (${attackRoll} + ${player1.attack} skill)`;
	// HIT enemy
	if (
		attackRoll > enemyArray[currentEnemyCard].defense - player1.attack &&
		attackRoll !== 20
	) {
		slidePlayer1Hit.style.display = "block";
		player1DamageAttackRoll.innerHTML = `Attack total is ${attackRoll + player1.attack}  (${attackRoll} + ${player1.attack} skill)`;
		playSound(hit);
		// CRIT
	} else if (attackRoll === 20) {
		slidePlayer1Critical.style.display = "block";
		playSound(crit);
		//MISS
	} else if (
		attackRoll <=
		enemyArray[currentEnemyCard].defense - player1.attack
	) {
		slideLogSlide.style.display = "block";
		logSlideResultLine2.innerHTML = "Miss";
		logSlideResultLine3.innerHTML = "pathetic...";
		playSound(miss);
	}
}

function player1DamageRoll() {
	player1weapon1Damage = Math.floor(Math.random() * player1.weapon1 + 1);
	player1weapon2Damage = Math.floor(Math.random() * player1.weapon2 + 1);
	player1weapon1DamageBonus = Math.floor(
		Math.random() * player1.weapon1Bonus + 1,
	);
	player1weapon2DamageBonus = Math.floor(
		Math.random() * player1.weapon2Bonus + 1,
	);
}

function player1Damage() {
	slidePlayer1Hit.style.display = "none";
	slideLogSlide.style.display = "block";
	Enemy1Ouch();
	player1DamageRoll();
	attackDamage =
		player1weapon1Damage +
		player1weapon2Damage +
		player1weapon1DamageBonus +
		player1weapon2DamageBonus;
	enemyArray[currentEnemyCard].currentHealth =
		enemyArray[currentEnemyCard].currentHealth - attackDamage;
	enemyArray[currentEnemyCard].currentHealth =
		enemyArray[currentEnemyCard].currentHealth - player1.damage;
	logSlideRollResult.innerHTML = `Your attack deals ${attackDamage} (weapons) + ${player1.damage} (bonus)`;
	logSlideResultLine2.innerHTML =
		'<span style="color: red">a deep wound</span>';
	logSlideResultLine3.innerHTML = `You hit ${attackDamage + player1.damage} down to ${enemyArray[currentEnemyCard].currentHealth}`;
	enemy1HealthCounter.innerHTML = enemyArray[currentEnemyCard].currentHealth;
	playSound(damage);
	// Killed Enemy
	if (enemyArray[currentEnemyCard].currentHealth <= 0) {
		slideLogSlide.style.display = "none";
		slideKillLog.style.display = "block";
		damageRollResultK.innerHTML = `A quick attack inflicts ${attackDamage} (weapons) + ${player1.damage} (bonus)`;
		damageResultLine2K.innerHTML = "oh the Blood!!";
		damageResultLine3K.innerHTML = `Sweet Victory!  ${attackDamage + player1.damage} damage kills the enemy`;
		enemy1Dead();
		console.log("killed enemy");
		playSound(deadEnemy);
	}
}

function player1Critical() {
	slidePlayer1Critical.style.display = "none";
	slideLogSlide.style.display = "block";
	Enemy1Ouch();
	player1DamageRoll();
	attackDamage =
		2 *
		(player1weapon1Damage +
			player1weapon2Damage +
			player1weapon1DamageBonus +
			player1weapon2DamageBonus);
	enemyArray[currentEnemyCard].currentHealth =
		enemyArray[currentEnemyCard].currentHealth - attackDamage;
	enemyArray[currentEnemyCard].currentHealth =
		enemyArray[currentEnemyCard].currentHealth - player1.damage;
	logSlideRollResult.innerHTML = `Your attack deals ${attackDamage / 2} (weapons)`;
	logSlideResultLine2.innerHTML = `Critical hit <span style="color: red">DOUBLES </span>damage to ${attackDamage}, (+ ${player1.damage} bonus)`;
	logSlideResultLine3.innerHTML = `The enemy is crippled by ${attackDamage + player1.damage} down to ${enemyArray[currentEnemyCard].currentHealth} health`;
	enemy1HealthCounter.innerHTML = enemyArray[currentEnemyCard].currentHealth;
	playSound(damage);
	// killed him Critical
	if (enemyArray[currentEnemyCard].currentHealth <= 0) {
		slidePlayer1Critical.style.display = "none";
		slideLogSlide.style.display = "none";
		slideKillLog.style.display = "block";
		damageRollResultK.innerHTML = "Your attack is impressive!";
		damageResultLine2K.innerHTML = `GLORY! Critical hit <span style="color: red">DOUBLES</span> damage to ${attackDamage}, (+ ${player1.damage} bonus)`;
		damageResultLine3K.innerHTML = `Your blow inflicts ${attackDamage + player1.damage} and <span style="color: red">kills</span> the enemy`;
		enemy1Dead();
		console.log("killed enemy with Crit");
	}
}

//enemy ATTACK

function enemy1DamageRoll() {
	enemy1weapon1Damage = Math.floor(
		Math.random() * enemyArray[currentEnemyCard].weapon1 + 1,
	);
	enemy1weapon2Damage = Math.floor(
		Math.random() * enemyArray[currentEnemyCard].weapon2 + 1,
	);
	enemy1weapon1DamageBonus = Math.floor(
		Math.random() * enemyArray[currentEnemyCard].weapon1Bonus + 1,
	);
	enemy1weapon2DamageBonus = Math.floor(
		Math.random() * enemyArray[currentEnemyCard].weapon2Bonus + 1,
	);
}

function enemyAttack() {
	enemy1AttackDone(); //enemy card goes back to home position
	slideEnemy1Turn.style.display = "none";
	slideLogSlideE.style.display = "block";
	attackRollE = Math.floor(Math.random() * 20 + 1);
	// attackRollE = 20;
	logSlideRollResultE.innerHTML = `Enemy attack roll is ${attackRollE} + ${enemyArray[currentEnemyCard].attack} (skill)`;
	console.log("attack bonus E", enemyArray[currentEnemyCard].attack);

	// hit player***********

	if (
		attackRollE > player1.defense - enemyArray[currentEnemyCard].attack &&
		attackRollE !== 20
	) {
		enemy1DamageRoll();
		attackDamageE =
			enemy1weapon1Damage +
			enemy1weapon2Damage +
			enemy1weapon1DamageBonus +
			enemy1weapon2DamageBonus;
		player1.currentHealth = player1.currentHealth - attackDamageE;
		player1.currentHealth =
			player1.currentHealth - enemyArray[currentEnemyCard].damage;
		player1CurrentHp.innerHTML = player1.currentHealth;
		console.log(
			"w1 w2 w3 w4 ",
			enemy1weapon1Damage,
			enemy1weapon2Damage,
			enemy1weapon1DamageBonus,
			enemy1weapon2DamageBonus,
		);
		console.log("damage bonus E", enemyArray[currentEnemyCard].damage);
		logSlideResultLine2E.innerHTML = '<span style="color: red">OUCH!!</span>';
		logSlideResultLine3E.innerHTML = `You  got hit ${attackDamageE + enemyArray[currentEnemyCard].damage} down to ${player1.currentHealth}`;
		slideLogSlideE.style.backgroundColor = "rgba(255, 153, 153, .85)";
		console.log(`hit player with attackroll ${attackRollE}`);
		console.log(
			`enemy deals ${attackDamageE + enemyArray[currentEnemyCard].damage} Damage`,
		);
		player1Ouch();
		// CRIT
	} else if (attackRollE === 20) {
		enemy1DamageRoll();
		attackDamageE =
			2 *
			(enemy1weapon1Damage +
				enemy1weapon2Damage +
				enemy1weapon1DamageBonus +
				enemy1weapon2DamageBonus);
		player1.currentHealth = player1.currentHealth - attackDamageE;
		player1.currentHealth =
			player1.currentHealth - enemyArray[currentEnemyCard].damage;
		player1CurrentHp.innerHTML = player1.currentHealth;
		logSlideResultLine2E.innerHTML =
			'<span style="color: #f58634">OH NO!! CRITICAL HIT</span>';
		logSlideResultLine3E.innerHTML = `hit (${attackDamageE / 2} x 2)=${attackDamageE} + ${enemyArray[currentEnemyCard].damage}, down to ${player1.currentHealth}`;
		slideLogSlideE.style.backgroundColor = "rgba(182, 0, 0, 0.59)";
		console.log("Enemy deals critical hit");
		console.log(`${attackDamageE} x 2 player Damage`);
		player1Ouch();

		//enemy miss
	} else if (
		attackRollE + enemyArray[currentEnemyCard].attack <=
		player1.defense
	) {
		logSlideResultLine2E.innerHTML = "Enemy misses..";
		logSlideResultLine3E.innerHTML = "lucky for you";
		slideLogSlideE.style.backgroundColor = "rgba(255, 153, 153, 00)";
		playSound(miss);
	}

	// killed player dead
	if (player1.currentHealth <= 0 && attackRollE !== 20) {
		player1Dead();
	} else if (player1.currentHealth <= 0 && attackRollE === 20) {
		alert(
			`Oh snap! You got Rocked with a critical hit of (${attackDamageE / 2} x 2)=${attackDamageE} + ${enemyArray[currentEnemyCard].damage} and died instantly.. poor luck`,
		);
		player1Dead();
	}
}
