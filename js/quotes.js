const quotes = [
	{
		quote:
			"Life is not a problem to be solved, but a reality to be experienced.",
		author: "Soren Kierkegaard",
	},
	{
		quote:
			"The greatest day in your life and mine is when we take total responsibility for our attitudes. That's the day we truly grow up.",
		author: "John C. Maxwell",
	},
	{
		quote:
			"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
		author: "Wayne Dyer",
	},
	{
		quote:
			"Believe that life is worth living and your belief will help create the fact.",
		author: "William James",
	},
	{
		quote:
			"Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.",
		author: "Leo Buscaglia",
	},
	{
		quote:
			"Life isn't about finding yourself. Life is about creating yourself.",
		author: "George Bernard Shaw",
	},
	{
		quote: "There is more to life than increasing its speed.",
		author: "Mahatma Gandhi",
	},
	{
		quote: "Life is really simple, but we insist on making it complicated.",
		author: "Confucius",
	},
	{
		quote:
			"Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
		author: "Dalai Lama",
	},
	{
		quote:
			"Life is a series of natural and spontaneous changes. Don't resist them--that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
		author: "Lao Tzu",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
