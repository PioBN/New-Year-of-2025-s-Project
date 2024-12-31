const inputField = document.getElementById("choose-input");
inputField.addEventListener("input", () => {
  // Get the current value of the input
  const value = inputField.value;
  // Check if it's a valid uppercase letter (A-Z)
  if (!/^[A-Z]$/.test(value)) {
    // If not, clear the input field
    inputField.value = "";
  }
});

inputField.addEventListener("keypress", (event) => {
  // Prevent typing of lowercase letters
  if (event.key >= "a" && event.key <= "z") {
    event.preventDefault();
  }
});

const clickButton = document.querySelector("#click");
let alreadyChosen = false;

clickButton.addEventListener("click", () => {
  if (alreadyChosen) {
    alert("You have already got your verse");
    return; // Prevent the rest of the code from executing if a verse has already been shown
  }

  const verses = [
    "I and the Father are one - John 10:30",
    `I am the way, the truth and the life. Nobody comes to the Father except by me - John 14:6`,
    `I am the Alpha and the Omega, the Beginning and the End, the First and the Last - Revelation 22:13`,
    `Trust in the LORD completely. Don't think that you understand things well enough for yourself - Proverbs 3:5`,
    `Whatever you are doing, remember that the LORD is with you. Then He'll show you the right way to go - Proverbs 3:6`,
    `But people who wait for the LORD to help them will receive new strength. They'll rise up high, as if they have the wings of eagles. They'll run and they'll not become tired. They'll walk and they'll not become weak - Isaiah 40:31`,
    `The LORD takes care of me, like a shepherd with his sheep. I have everything that I need - Psalms 23:1`,
    "Jesus Christ is the same yesterday, today and forever - Hebrews 13:8",
    "God is love - 1 John 4:8",
    "Jesus cried so hard - John 11:35",
    "If God is for us, who can be against us? - Romans 8:32",
    "I can do all things through Christ who gives me strength - Philippians 4:13",
    "The one who is in you is more powerful than the one who's in the world - 1 John 4:4",
    "He will save His people from their sins - Matthew 1:21",
    "I am the light of the world - John 8:12",
    "I am the resurrection and the life - John 11:25",
    "For God so loved the world - John 3:16",
    "The Son of God came to seek and save the lost - Luke 19:10",
    "All authority in Heaven and on earth has been given to Me - Matthew 28:18",
    "The Son of Man came to serve - Mark 10:45",
    "I am the good shepherd - John 10:11",
    "You are the Christ, the Son of the living God - Matthew 16:16",
    "I came into the world to testify to the truth - John 18:37",
    "He is the image of the invisible God - Colossians 1:15",
    "Behold the Lamb of God who takes away the sin of the world - John 1:29",
    `Don't worry about anything. Instead, pray to God about everything. Ask Him to help you with the things that you need. And thank Him for His help - Philippians 4:6`
  ];

  function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
  }

  alert(getRandomVerse());
  
  alreadyChosen = true; // Set this after the verse is shown
});
