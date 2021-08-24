const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => { 
  rl.question('What is an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (song) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (meal) => {
        rl.question('What is your favourite thing to eat for that meal?', (dish) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => { 
              console.log(`WOW WOW WOW! How amazing are you ${name} ?! ${song} ?! OUR FAVORTIE AS WELL!  ${activity}, a nice way to enjoy yourself! ${dish} for ${meal} sounds delicious. All of us think ${sport}  is amazing and by the way ${superpower} being your superpower is the best we have heard today! THANK YOU for taking your time to complete this survey :)`);
              rl.close();
            }); 
          }); 
        }); 
      }); 
    }); 
  }); 
});  
 