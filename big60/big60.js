/*
 * Geburtstag rätsel.
 *
 * Bitte Javascript nicht lesen – alle antworten sind hier geschrieben!
 */
let correct = [
    {   guess: "kreieren",
        div: "#correct1"
    },
    {   guess: "wandern",
        div: "#correct2"
    },
    {   guess: "stricken",
        div: "#correct3"
    },
];
            
let incorrect = [
    {   guess: /christine/i,
        response: "schön, aber nicht die Antwort."
    },
    {   guess: /ursula|birthday|geburtstag/i,
        response: "falsch. Aber frohe Geburtstag!"
    },  
    {   guess: /gotti/i,
        response: "falsch. Aber wir lieben dich!"
    },
    {   guess: /passwor|god|123/i,
        response: "falsch. Das wird zu einfach sein."
    },
    {   guess: /[0-9]/i,
        response: "die neue 40!"
    },
    {   guess: /hilf|help|weissx/i,
        response: "falsch. Keine Gnade!"
    },
];

// Check if word1 can not be constructed from the letters of word2
// returns the missing letter, or null if word1 is an anagram of word2
function notanagram(word1, word2) {
    // count letter frequencies
    // shorter word is count1
    function count(acc,val) {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }
    let counts1 = Array.from(word1.length < word2.length ? word1 : word2).reduce(count,{});
    let counts2 = Array.from(word1.length < word2.length ? word2 : word1).reduce(count,{});
    
    
    console.log("counts1:"+JSON.stringify(counts1));
    console.log("counts2:"+JSON.stringify(counts2));
    for(letter in counts1) {
        if((!(letter in counts2)) || counts1[letter] > counts2[letter]) {
            if(!(letter in counts2)){
                console.log("'"+letter+"' not in counts2");
            } else {
                console.log(counts1[letter] +" > "+ counts2[letter])
            }
            return letter;
        }
    }
    return null;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function update(guesses) {
    // If guesses is undefined, pull from URL
    if(guesses === undefined) {
        // Update URL
        let loc = URI(window.location);
        let query = loc.search(true);

        if(Array.isArray(query.guess)) {
            guesses = query.guess;
        } else if(typeof(query.guess) === "string") {
            guesses = [query.guess];
        } else {
            guesses = [];
        }
    }
    guesses = guesses.map((x) => x.toLowerCase());

    let showwrong = false;
    
    // Show response
    guesses.forEach( guess => {
        let right = correct.filter(x => x.guess == guess);
    
        if(right.length > 0) {
            //console.log("Right: "+right[0].div);
            $(right[0].div).show();
        } else {
            let wrong = incorrect.filter( x => x.guess.test(guess))
            let response;
            if(wrong.length > 0) {
                // custom response patterns
                response = wrong[0].response;
            } else {
                let correctletters = correct.reduce((acc, val) => acc.concat(val.guess),"");
                let missing = notanagram(guess, correctletters);
                if(missing) {
                    response = "gar falsch. Es hat zu viel '"+missing+"'!";
                } else if(guess.substr(guess.length-1) != "n") {
                    response = "kein Verb. Versuch es noch einmal!"
                } else {
                    response = "falsch."
                }
            } 
            //console.log("Wrong:" + response);
            $("#wrongtext").html("<b>"+capitalize(guess)+"</b> ist "+response);
            showwrong = true;
        }

        if(showwrong) {
            $("#wrong").show();
        } else {
            $("#wrong").hide();
        }
    });
}
function checkGuess(evt) {
    if(evt) {
        evt.preventDefault();
    }
    
    let guess = $("#guess").val();
    guess = guess.toLowerCase();
    console.log("checkGuess: "+guess);
    
    
    // Update URL
    let loc = URI(window.location);
    let query = loc.search(true);
    let guesses;
    if(Array.isArray(query.guess)) {
        guesses = query.guess;
    } else if(typeof(query.guess) === "string") {
        guesses = [query.guess];
    } else {
        guesses = [];
    }
    guesses = guesses.map((x)=>x.toLowerCase());
    let correctguesses = correct.map((x) => x.guess);
    guesses = guesses.filter((guess) => correctguesses.includes(guess));
    guesses.push(guess);
    query.guess = Array.from(new Set(guesses));
    loc.search(query);
    console.log(loc.href());
    window.location = loc.href();
    return false;
}