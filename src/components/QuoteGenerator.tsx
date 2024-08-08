import { useState } from "react";

const QuoteGenerator = () => {
  const quotesArray = [
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      quote:
        "A comfort zone is a beautiful place, but nothing ever grows there.",
      author: "John Assaraf",
    },
    {
      quote:
        "It's only after you've stepped out of your comfort zone that you begin to change, grow, and transform.",
      author: "Roy T. Bennett",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "In the end, we only regret the chances we didn’t take.",
      author: "Lewis Carroll",
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      quote: "Your time is limited, don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe",
    },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    {
      quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman",
    },
    { quote: "What we think, we become.", author: "Buddha" },
    {
      quote: "If opportunity doesn’t knock, build a door.",
      author: "Milton Berle",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    {
      quote:
        "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      quote: "Don't wait. The time will never be just right.",
      author: "Napoleon Hill",
    },
    {
      quote: "Believe and act as if it were impossible to fail.",
      author: "Charles Kettering",
    },
    {
      quote:
        "To succeed in life, you need two things: ignorance and confidence.",
      author: "Mark Twain",
    },
    {
      quote:
        "Failure will never overtake me if my determination to succeed is strong enough.",
      author: "Og Mandino",
    },
    { quote: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
    { quote: "We become what we think about.", author: "Earl Nightingale" },
    { quote: "I can, therefore I am.", author: "Simone Weil" },
    { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
    {
      quote: "It always seems impossible until it’s done.",
      author: "Nelson Mandela",
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll",
    },
    {
      quote: "With the new day comes new strength and new thoughts.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "The power of imagination makes us infinite.",
      author: "John Muir",
    },
    {
      quote: "Action is the foundational key to all success.",
      author: "Pablo Picasso",
    },
    {
      quote:
        "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh",
    },
    { quote: "The best way out is always through.", author: "Robert Frost" },
    {
      quote: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
    },
    {
      quote:
        "Your life does not get better by chance, it gets better by change.",
      author: "Jim Rohn",
    },
    {
      quote: "Small deeds done are better than great deeds planned.",
      author: "Peter Marshall",
    },
    {
      quote: "Great things never came from comfort zones.",
      author: "Ben Francia",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "He's got that dog in him.",
      author: "Harry Armitage Bath",
      source: "Harry",
    },
    {
      quote: "It's a hundred million degrees right now!",
      author: "Adam Ondra",
      source: "unknown YouTube video",
    },
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
    setQuote(getRandomQuote());
  };

  const [quote, setQuote] = useState(getRandomQuote);

  return (
    <>
      <p className="text-sm w-42">
        '{quote.quote}' - {quote.author}
      </p>
    </>
  );
};

export default QuoteGenerator;
