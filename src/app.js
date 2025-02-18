/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { pronoun, adj, noun } from "./arraysData";

window.onload = function() {
  const generateCombis = () => {
    for (const pronounValue of pronoun) {
      for (const adjValue of adj) {
        for (const nounValue of noun) {
          console.log(pronounValue + adjValue + nounValue + ".com");
        }
      }
    }
    return undefined;
  };

  function asyncCall() {
    console.log("The possible domain name combinations from this lists are...");
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("slow");
        generateCombis();
      }, 2000);
    });
  }

  console.log("Hello, this is the Domain Name Generator exercise.");
  console.log("Using: ");
  console.log(pronoun);
  console.log(adj);
  console.log(noun);

  //this function await 2 seg and then call the generateCombis().
  asyncCall();
};
