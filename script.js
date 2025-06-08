const quotes = [
  "the little progress you have made today still matters.",
  "don't feel guilty for doing what's best for you.",
  "doing it scared is just as brave.",
  "failure is not the opposite of success, it's part of success.",
  "change is scary but so is staying the same.",
  "your direction is more important than your speed.",
  "do it for the person you hope to become and the life you're trying to build.",
  "don't stress over things you can't control.",
  "give yourself a little more credit for how far you've come and how capable you are.",
  "a little progress each day adds up to big results.",
  "your best is enough!",
  "you are going to be okay, even if you have to start over again."
];

function generateQuote() {
  const quoteText = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteText.classList.remove("fade"); // reset animation
  void quoteText.offsetWidth; // trick to re-trigger animation
  quoteText.textContent = quotes[randomIndex];
  quoteText.classList.add("fade");
}
let intervalId = null;
function copyQuote() {
  const quoteText = document.getElementById("quote").textContent;
  navigator.clipboard.writeText(quoteText)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(err => alert("Failed to copy quote."));
}
