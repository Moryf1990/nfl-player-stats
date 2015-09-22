(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function Quarterback(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.completions = 0;
	this.yards = 0;
	this.touchdowns = 0;
	this.interceptions = 0;
	this.sacks = 0;
	this.longestCompletion = 0;

	this.completionPercentage = function () {
		return Math.round(this.completions / this.attempts * 100) + '%';
	};

	this.yardsPerAttempt = function () {
		return this.yards / this.attempts;
	};

	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.completions++;
			this.yards += yards;
		}
		if (yards > this.longestCompletion) {
			this.longestCompletion = yards;
		}

		if (type === 'interception') {
			this.interceptions++;
			this.attempts++;
		}
		if (type === 'completion') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
		}
		if (type === 'sack') {
			this.sacks++;
			this.yards += yards;
		}
	};
}

var tomBrady = new Quarterback('Tom Brady', 'New England Patriots');
var tonyRomo = new Quarterback('Tony Romo', 'Dallas Cowboys');

function Rushing(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.yards = 0;
	this.over20 = 0;
	this.touchdowns = 0;
	this.firstDowns = 0;
	this.fumbles = 0;
	this.longestRush = 0;

	this.yardsPerAttempt = function () {
		return this.yards / this.attempts;
	};

	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'fumble') {
			this.fumbles++;
			this.attempts++;
			this.yards += yards;
		}

		if (yards > 20) {
			this.over20++;
		}

		if (yards > this.longestRush) {
			this.longestRush = yards;
		}

		if (type === 'attempt') {
			this.attempts++;
			this.yards += yards;
		}

		if (type === 'first down') {
			this.attempts++;
			this.yards += yards;
			this.firstDowns++;
		}

		if (type === 'touchdown') {
			this.attempts++;
			this.yards += yards;
			this.touchdowns++;
		}

		if (type === 'yards') {
			this.attempts++;
			this.yards += yards;
		}
	};
}

var arianFoster = new Rushing('Arian Foster', 'Houston Texans');
var adrianPeterson = new Rushing('Adrian Peterson', 'Minnesota Vikings');

function Kicking(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.made = 0;
	this.yards = 0;
	this.longetFieldGoal = 50;

	this.addMade = function () {
		return this.made++;
	};

	this.addMissed = function () {
		return this.missed++;
	};

	this.addYards = function () {
		return this.yards += yards;
	};
}

var mattBryant = new Kicking('Matt Bryant', 'Atlanta Falcons');
var masonCrosby = new Kicking('Mason Crosby', 'Green Bay Packers');

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map