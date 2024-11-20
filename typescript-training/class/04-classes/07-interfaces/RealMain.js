"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FootballCoach_1 = require("./FootballCoach");
const GolfCoach_1 = require("./GolfCoach");
let golfcoach = new GolfCoach_1.GolfCoach();
let footballcoach = new FootballCoach_1.FootballCoach();
let coache = [];
coache.push(golfcoach);
coache.push(footballcoach);
for (let c of coache) {
    console.log(c.getDailyWorkout());
}
