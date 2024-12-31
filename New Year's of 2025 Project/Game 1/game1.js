// For step 3 :
// Formula : Math.floor(Math.random() * (variable name in step 1).length);

const gifts = document.querySelectorAll(".gift");
let alreadyChosen = false; // Flag to track if any gift has been chosen

gifts.forEach(gift => {
  gift.addEventListener("click", () => {
    if (alreadyChosen) { // if I already chose :
      alert("You have already chosen a gift"); // This resu;t
    } else { // Else (if I didn't choose yet) :
      const quotes = [ // Step 1 : Create quotes using an ARRAY to LIST them
        "God loves you, and keeps you safe from the wicked people!",
        "God answers your prayer (positive prayers)!",
        "God helps you to have eternal life in Heaven with Him!",
        "God helps you to achieve your dreams (positive dreams)!",
        "God understands your problems!",
        "God always takes care of you!",
        "God is probably watching all your good works, and He's so proud of you!",
        "God's love is infinite, this is why He always forgives us!",
        "God created you in His own image, this is why He loves you so much!"
      ];

      function getRandomQuote() { // Step 2 : Create a function
        const randomIndex = Math.floor(Math.random() * quotes.length); // Step 3 : Create this code (see the 1st line)
        return quotes[randomIndex]; // Step 4 : return (variable name in step 1)[(variable name in step 3)];
      }

      alert(getRandomQuote()); // Step 5 : alert, log (in the console) or display (put) the quote on the page
                               // alert(calling the function);

      alreadyChosen = true; // Final step : mark that a gift has been chosen (we changed the value in the variable name)
    }
  });
});
