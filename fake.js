function generateCharacter() {
  var randomize = Math.random() * 100;
  var cpuChoice = 99;

  var charname = ["Ned Stark","Sansa Stark","Samwell Tarly","Jon Snow","Hodor","Bronn","Cersei Lannister","Little Finger","Joffrey Baratheon"];
  
  //var picsrc = ["LG.jpg","NG.jpg","CG.jpg","LN.jpg","TN.jpg","CN.jpg","LE.jpg","NE.jpg","CE.jpg"];
  
  //var alignment = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];

  //var stats = ["Honorable and Humane", "Practical and Humane", "Independent and Humane", "Honorable and Realistic", "Practical and Realistic", "Independent and Realistic", "Honorable and Determined", "Practical and Determined", "Independent and Deterined"];

  
  //var house = ["House Stark", "House Stark", "House Tarly", "House Stark", "House Stark", "No House", "House Lannister", "House Baelish", "House Baratheon"];
  
  
  if (randomize > 0 && randomize <= 11) {
    cpuChoice = "0";}
    else if(randomize >=12 && randomize <= 22) {cpuChoice = "1";}
    else if(randomize >=23 && randomize < 33) {cpuChoice = "2";}
    else if(randomize >=34 && randomize < 44) {cpuChoice = "3";}
    else if(randomize >=45 && randomize < 55) {cpuChoice = "4";}
    else if(randomize >=56 && randomize < 66) {cpuChoice = "5";}
    else if(randomize >=67 && randomize < 77) {cpuChoice = "6";}
    else if(randomize >=78 && randomize < 88) {cpuChoice = "7";}
    else {cpuChoice = "8";}
  
  
  document.getElementById("character").innerHTML = ""+charname[cpuChoice];
  
  console.log(randomize); 
  
  
  
  
  //document.getElementById("charpic").innerHTML = "<img src='"+picsrc[cpuChoice]+"'>";
  
  
  //document.getElementById("alignment").innerHTML = alignment[cpuChoice];


//document.getElementById("stats").innerHTML = ""+stats[cpuChoice];

// document.getElementById("house").innerHTML = ""+house[cpuChoice];
  
}

