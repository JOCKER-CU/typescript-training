import { Coach } from "../../interfaces/Coach";
import { FootballCoach } from "./FootballCoach";
import { GolfCoach } from "./GolfCoach";


let golfcoach = new GolfCoach();
let footballcoach = new FootballCoach();

let coache : Coach[] = [];

coache.push(golfcoach);
coache.push(footballcoach);

for(let c of coache){
    console.log(c.getDailyWorkout());
}