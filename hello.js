function NameSong() {
    var name = document.getElementById("myname").value;
    var miniName = name.toString().substring(1);
    var toCheck = name[0].toLowerCase();
    var secondCheck = name[1].toLowerCase();
    console.log(toCheck);
    console.log(name[0]);
    //if name starts with a vowel, or second letter is a vowel, or other cases.
    if (toCheck == "a" || toCheck == "e" || toCheck == "i" || toCheck == "o" || toCheck == "u") {
        document.getElementById("nameSong").innerHTML = name + " " + name + " bo-b" + name.toLowerCase() + " bannana fanna fo-f" + name.toLowerCase() + " fi fi fo f" + name.toLowerCase() + "... " + name + "!";
    } else if (secondCheck == "a" || secondCheck == "e" || secondCheck == "i" || secondCheck == "o" || secondCheck == "u") {
        document.getElementById("nameSong").innerHTML = name + " " + name + " bo-b" + miniName + " bannana fanna fo-f" + miniName + " fi fi fo f" + miniName + "... " + name +"!";
    } else {
        miniName = name.toString().substring(2);
        document.getElementById("nameSong").innerHTML = name + " " + name + " bo-b" + miniName + " bannana fanna fo-f" + miniName + " fi fi fo f" + miniName + "... " + name + "!";
    }
}

function changeMyMind() {
    document.getElementById("change1").innerHTML = "corrupt, bigoted, and not at all ";
    document.getElementById("change2").innerHTML = ", if he completely makes a 180 degree turn as a person and changes every aspect of himself";
    document.getElementById("change3").innerHTML = "reject white supremacy, misogyny, and homophobia, and to work towards making ourselves great for the first time, rather than trying to ";
    document.getElementById("iDisagree").style.display = 'none';
}


document.getElementById("mybutton").onclick = NameSong;
document.getElementById("iDisagree").onclick = changeMyMind;