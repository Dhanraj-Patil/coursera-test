(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var count = 0; count < names.length; count++) {
        var name = names[count];
        if ((name.charAt(0) === 'j') || (name.charAt(0) === 'J')) {
            byeSpeaker.speak(names[count]);
        } else {
            helloSpeaker.speak(names[count]);
        }
    }
})();