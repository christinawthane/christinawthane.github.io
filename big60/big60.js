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
    {   guess: /ursula/i,
        response: "falsch. Aber frohe Geburtstag!"
    },  
    {   guess: /gotti/i,
        response: "falsch. Aber wir lieben dich!"
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
    
    for(letter in counts1) {
        if(!(letter in counts2) || counts1[letter] > counts2[letter]) {
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

    let showwrong = false;
    
    // Show response
    guesses.forEach( guess => {
        let right = correct.filter(x => x.guess == guess.toLowerCase());
    
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
    console.log("checkGuess: "+guess);
    
    
    // Update URL
    let loc = URI(window.location);
    let query = loc.search(true);
    let guesses;
    if(Array.isArray(query.guess)) {
        let correctguesses = correct.map((x) => x.guess);
        guesses = new Set(query.guess.filter((guess) => correctguesses.includes(guess.toLowerCase())));
    } else if(typeof(query.guess) === "string") {
        guesses = new Set([query.guess]);
    } else {
        guesses = new Set();
    }
    guesses
    guesses.add(guess);
    query.guess = Array.from(guesses);
    loc.search(query);
    console.log(loc.href());
    window.location = loc.href();
    return false;
}