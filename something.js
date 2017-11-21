function generateCharacter() {
  var random = Math.random() * charname.length;
  var cpuChoice = 53;

  var charname = [
    "Allister Thorne", 
    "Arya", 
    "Robert Baratheon", 
    "Branden Stark", 
    "Brienne", "Bronn", 
    "Catelyn Stark",
    "Cersei", 
    "Daario Naharis", 
    "Daenarys", 
    "Davos",
    "Gendry", 
    "Gregor Clegane - Mountain", 
    "Hodor", 
    "Jamie Lannister", 
    "Jaqen H'ghar", 
    "Joffrey", 
    "Jon",
    "Jorah", 
    "Drogo",
    "LittleFinger",
    "Mance Rader", 
    "Margarie", 
    "Doran Martell", 
    "Melissandra", 
    "Missandei",
    "Jeor Mormont", 
    "Ned Stark", 
    "Oberyn Martel", 
    "Olenna", 
    "Osha", 
    "Podrick", 
    "Pycell", 
    "Qyburn", 
    "Ramsay", 
    "Robb Stark", 
    "Roose Bolton", 
    "Ros", 
    "Samwell", 
    "Sandor Clegane - The Hound",
    "Sansa", 
    "Shae", 
    "Stannis",
    "The High Sparrow", 
    "Theon", 
    "Tommen Barathon", 
    "Tormund",
    "Tyrion", 
    "Tywin", 
    "Viserys", 
    "Vrays", 
    "Mirri Maz the Duur Witch", 
    "Ygritt"
    ];
  //var picsrc = ["LG.jpg","NG.jpg","CG.jpg","LN.jpg","TN.jpg","CN.jpg","LE.jpg","NE.jpg","CE.jpg"];
  
  //var alignment = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];

  //var stats = ["Honorable and Humane", "Practical and Humane", "Independent and Humane", "Honorable and Realistic", "Practical and Realistic", "Independent and Realistic", "Honorable and Determined", "Practical and Determined", "Independent and Deterined"];

  
  //var house = ["House Stark", "House Stark", "House Tarly", "House Stark", "House Stark", "No House", "House Lannister", "House Baelish", "House Baratheon"];
  
  
  if (random > 0 && random <= 11) {
    cpuChoice = "0";}
    else if(random >=12 && random <= 22) {cpuChoice = "1";}
    else if(random >=23 && random < 33) {cpuChoice = "2";}
    else if(random >=34 && random < 44) {cpuChoice = "3";}
    else if(random >=45 && random < 55) {cpuChoice = "4";}
    else if(random >=56 && random < 66) {cpuChoice = "5";}
    else if(random >=67 && random < 77) {cpuChoice = "6";}
    else if(random >=78 && random < 88) {cpuChoice = "7";}
    else {cpuChoice = "8";}
  
  
  document.getElementById("character").innerHTML = ""+charname[cpuChoice];
  console.log("cpuChoice");
  
  
  //document.getElementById("charpic").innerHTML = "<img src='"+picsrc[cpuChoice]+"'>";
  
  
  //document.getElementById("alignment").innerHTML = alignment[cpuChoice];


//document.getElementById("stats").innerHTML = ""+stats[cpuChoice];

// document.getElementById("house").innerHTML = ""+house[cpuChoice];
  
}

