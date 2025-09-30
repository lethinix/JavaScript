class WeatherWoman {
  constructor() {
    this.questions = [
      "what's the weather like today?",
      "what's the weather like tomorrow?",
      "what was the weather like yesterday?",
      "how's the weather this week?",
      "how's the weather this month?",
      "how is climate change changing the weather",
      "what is fall weather like?",
      "what is summer weather like?",
      "what is winter weather like?",
      "what is spring weather like?",
      "what is the weather like in new york?",
      "what is the weather like in california?",
      "is the weather good today?",
      "is it nice outside today?",
      "do i need an umbrella today?",
      "is it warm outside today?",
      "is it cold outside today?",
      "is it raining today?",
      "is it raining tomorrow?",
      "is it sunny today?",
      "is it sunny tomorrow?",
      "do i need a sweater today?",
      "do i need a jacket today?"
    ];

    this.answers = [
      "idk its pretty nice outside today i think",
      "fall weather's creeping up so it will be a little more fall tomorrow",
      "a little bit less fall weather than today?",
      "its going to cool down a bit this week?",
      "by the end of the month, october will be upon us. it will likely be colder?",
      "climate change is affecting the weather by making it warmer, at least in nyc",
      "fall weather is really nice. youll probably like it. cooler temperature, but not too cold yet.",
      "summer weather in new york is hot and muggy. make sure you have a water bottle hun",
      "winter weather in new york is pretty cold, so you'll need a thick jacket, and maybe a hat",
      "spring in new york is alright. it warms up a bit and starts getting sunny. flowers start to bloom a bit.",
      "right now the weather in new york is transitional. between 65 and 75 degrees, with rain and sun.",
      "it's likely warmer in california than it is in new york right now.",
      "depends on what good weather means to you.",
      "depends on what nice weather means to you.",
      "no.",
      "no.",
      "no.",
      "yes.",
      "maybe",
      "let me check",
      "no.",
      "yes.",
      "yes."
    ];
  }

  // checkAnswers(q) {
  //   //if the question is there exaclty
  //   q = q.toLowerCase().trim();
  //   for (let i = 0; i < this.questions.length; i++) {
  //     if (this.questions[i].toLowerCase() === q) {
  //       return this.answers[i];
  //     }
  //   }
///checking for a similar question


//     return "sorry, I don't know the answer to that.";
//   }
// }


checkAnswers(q) {
  q = q.toLowerCase().trim();
  let words = q.split(/\s+/); // split input into words

  let bestMatchIndex = -1;
  let bestMatchScore = 0;

  // Loop over stored questions
  for (let i = 0; i < this.questions.length; i++) {
    let questionWords = this.questions[i].toLowerCase().split(/\s+/);

    // Count how many words overlap
    let score = 0;
    for (let w of words) {
      if (questionWords.includes(w)) {
        score++;
      }
    }

    // Keep track of the best-scoring question
    if (score > bestMatchScore) {
      bestMatchScore = score;
      bestMatchIndex = i;
    }
  }

  // return best match
  if (bestMatchIndex !== -1 && bestMatchScore > 0) {
    return this.answers[bestMatchIndex];
  }

  // if no matches then this 
  return "sorry, what?";
}
}


// making accessible through browser console
window.Louise = new WeatherWoman();
// console.log("WeatherWoman loaded! Type Louise.checkAnswers('your question') in the console.");

//this is how to ask the questionin the browser
// Louise.checkAnswers("what's the weather like today?")

