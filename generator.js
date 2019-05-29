const quoteList = [
	{
		text: "A man is not idle because he is absorbed in thought. There is visible labor and there is invisible labor.",
		author: "Victor Hugo",
		book: "Les Miserables"
	},
	{
		text: "He was fond of books, for they are cool and sure friends.",
		author: "Victor Hugo",
		book: "Les Miserables"
	},
	{
		text: "There are perhaps no days of our childhood we lived so fully as those we spent with a favorite book.",
		author: "Marcel Proust",
		book: "On Reading"
	},
	{
		text: "Truth does not change according to our ability to stomach it.",
		author: "Flannery O\'Connor",
		book: ""
	},
	{
		text: "People forget years and remember moments.",
		author: "Ann Beattie",
		book: "Where You'll Find Me and Other Stories"
	},
	{
		text: "Language is more fashion than science, and matters of usage, spelling, and pronunciation tend to wander around like hemlines.",
		author: "Bill Bryson",
		book: "The Mother Tongue"
	},
	{
		text: "Try to be one of those on whom nothing is lost.",
		author: "4Henry James",
		book: "The Art of Fiction"
	},
	{
		text: "Can anything be sadder than work left unfinished? Yes, work never begun.",
		author: "Christina Rossetti",
		book: ""
	},
	{
		text: "We are all in the gutter, but some of us are looking at the stars.",
		author: "Oscar Wilde",
		book: "Lady Windermere\'s Fan"
	},
	{
		text: "The ideal scientist thinks like a poet and only later works like a bookkeeper.",
		author: "E.O. Wilson",
		book: "Letters to a Young Scientist"
	},
	{
		text: "Great literature is simply language charged with meaning to the utmost possible degree.",
		author: "Ezra Pound",
		book: "ABC of Reading"
	},
	{
		text: "To move freely you must be deeply rooted.",
		author: "Bella Lewitsky",
		book: "ABC of Reading"
	},
	{
		text: "I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.",
		author: "Jane Austen",
		book: ""
	},
	{
		text: "There are few people whom I really love, and still fewer of whom I think well. The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of either merit or sense.",
		author: "Jane Austen",
		book: "Pride and Prejudice"
	},
	{
		text: "Think only of the past as its remembrance gives you pleasure.",
		author: "Jane Austen",
		book: "Pride and Prejudice"
	},
	{
		text: "One half of the world cannot understand the pleasures of the other.",
		author: "Jane Austen",
		book: "Emma"
	},
	{
		text: "One cannot think well, love well, sleep well, if one has not dined well.",
		author: "Virginia Woolf",
		book: "A Room of One\'s Own"
	},
	{
		text: "For masterpieces are not single and solitary births; they are the outcome of many years of thinking in common, of thinking by the body of the people, so that the experience of the mass is behind the single voice.",
		author: "Virginia Woolf",
		book: "A Room of One\'s Own"
	},
	{
		text: "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
		author: "Virginia Woolf",
		book: "A Room of One\'s Own"
	},
	{
		text: "What does the name of an author on the jacket matter? Let us move forward in thought to three thousand years from now. Who knows which books from our period will be saved, and who knows which authors\' names will be remembered? Some books will remain famous but will be considered anonymous works, as for us the epic of Gilgamesh; other author\'s names will still be well known, but none of their works will survive, as was the case with Socrates; or perhaps all the surviving books will be attributed to a single, mysterious author, like Homer.",
		author: "Italo Calvino",
		book: "If on a Winter\'s Night a Traveler"
	},
	{
		text: "The greatest single distinguishing feature of the omnipotence of God is that our imagination gets lost thinking about it.",
		author: "Blaise Pascal",
		book: ""
	},
	{
		text: "...that beauty that Malcolm pledged us to protect, black beauty, was never celebrated in movies, in television, or in the textbooks I\'d seen as a child. Everyone of any import, from Jesus to George Washington, was white. This was why your grandparents banned Tarzan and the Lone Ranger and toys with white faces from the house. They were rebelling against the history books that spoke of black people only as sentimental \'firsts\' \u2014 first black five-star general, first black congressman, first black mayor \u2014 always presented in the bemused manner of a category of Trivial Pursuit. Serious history was the West, and the West was white.",
		author: "Ta-Nehisi Coates",
		book: "Between the World and Me"
	},
	{
		text: "Science says the first word on everything, and the last word on nothing.",
		author: "Victor Hugo",
		book: ""
	},
	{
		text: "Maybe every other American movie shouldn\'t be based on a comic book. Other countries will think Americans live in an infantile fantasy land where reality is whatever we say it is and every problem can be solved with violence.",
		author: "Bill Maher",
		book: ""
	},
	{
		text: "All things can be spiritual, and our most \'spiritual\' acts can become secular if they aren\'t infused with the Holy Spirit.",
		author: "Sarah Bessey",
		book: "Out of Sorts"
	},
	{
		text: "I pitied the French for their naivete in believing they had to visit a country in order to exploit it. Hollywood was much more efficient, imagining the countries it wanted to exploit.",
		author: "Viet Thanh Nguyen",
		book: "The Sympathizer"
	},
	{
		text: "God will bring in his kingdom by the same means, the same strange process, that he seems to use in the natural world. Seeds will be sown; many will apparently be lost, but others will be powerfully fruitful.",
		author: "N.T. Wright",
		book: "Lent for Everyone"
	},
	{
		text: "It is not outside human civilization; it is a new and formidable iteration of that civilization. It\'s also a brilliant commentary on it. To be still more specific: the Internet responds, often with great sensitivity, to critical methodologies. Sense can be made of it. Logic can be divined in it. Politics can be derived from it. Pleasure can be taken in it. Beauty can be found in it. Pain too \u2014 and loss. Agony and ecstasy is what I mean: the Internet may not be reality, but it\'s very real art.",
		author: "Virginia Heffernan",
		book: "Magic and Loss"
	},
	{
		text: "I had absolutely no experience with physical fighting but decided instantly that it was time to change that.",
		author: "Lene Kaaberb",
		book: "Doctor Death"
	},
	{
		text: "I was sick of buying smiles from bellhops at a dollar a smile. I\'d had it. I was sick of Virginia, too, and of what the money had done to the both of us, changing a tough, elegant adventuress with plenty of guts and imagination into a candy-tonguing country club Cleopatra who nested in bed the whole day long and thought her feet were too damned good to walk on.",
		author: "Elliott Chaze",
		book: "Black Wings Has My Angel"
	},
	{
		text: "When people are deeply affected by the Word, they tell it to other people. God has willed that we should seek and find God\'s living Word in the testimony of other Christians, in the mouths of human beings. Therefore, Christians need other Christians who speak God\'s Word to them.",
		author: "Dietrich Bonhoeffer",
		book: "Life Together"
	},
	{
		text: "The more thankfully we daily receive what is given to us, the more assuredly and consistently will community increase and grow from day to day as God pleases.",
		author: "Dietrich Bonhoeffer",
		book: "Life Together"
	},
	{
		text: "It\'s a weird phrase in English, in love, like it\'s a sea you drown in or a town you live in. You don\'t get to be in anything else \u2014 in friendship or in anger or in hope. All you can be in is love.",
		author: "John Green",
		book: "Turtles All the Way Down"
	},
	{
		text: "I was thinking that maybe the old lady and the scientist were both right. Like, the world is billions of years old, and life is a product of nucleotide mutation and everything. But the world is also the stories we tell about it.",
		author: "John Green",
		book: "Turtles All the Way Down"
	},
	{
		text: "I went to the theater with the author of a successful play. He insisted on explaining everything. He told me what to watch, the details of direction, the errors of the property man, the foibles of the star. He anticipated all my surprises and ruined the evening. Never again! And mark you, the greatest author of all made no such mistake.",
		author: "Ravi Zacharias",
		book: "Can Man Live Without God"
	},
	{
		text: "First, that human beings, all over the earth, have this curious idea that they ought to behave in a certain way, and cannot really get rid of it. Secondly, that they do not in fact behave in that way. They know the Law of Nature; they break it. These two facts are the foundation of all clear thinking about ourselves and the universe we live in.",
		author: "C. S. Lewis",
		book: "Mere Christianity"
	},
	{
		text: "You find out more about God from the Moral Law than from the universe in general just as you find out more about a man by listening to his conversation than by looking at a house he has built.",
		author: "C. S. Lewis",
		book: "Mere Christianity"
	},
	{
		text: "And that is precisely what Christianity is about. This world is a great sculptor\'s shop. We are the statues and there is a rumour going round the shop that some of us are some day going to come to life.",
		author: "C. S. Lewis",
		book: "Mere Christianity"
	},
	{
		text: "I know it is a bad thing to break a promise, but I think now that it is a worse thing to let a promise break you.",
		author: "Jennifer Donnelly",
		book: "A Northern Light"
	},
	{
		text: "Jesus\'s resurrection is the beginning of God\'s new project not to snatch people away from earth to heaven but to colonize earth with the life of heaven. That, after all, is what the Lord\'s Prayer is about.",
		author: "N.T. Wright",
		book: "Surprised by Hope"
	},
	{
		text: "He wanted to twine himself in the tiny curlicues of her handwriting.",
		author: "Celeste Ng",
		book: "Little Fires Everywhere"
	},
	{
		text: "Any number of things may work for you \u2014 an altar, for instance, or votive candles, sage smudges, small-animal sacrifices, especially now that the Supreme Court has legalized them. (I cut out the headline the day this news came out and taped it above the kitty\'s water dish.)",
		author: "Anne Lamott",
		book: "Bird by Bird: Some Instructions on Writing and Life"
	},
	{
		text: "She had this feeling that in America names didn\'t mean anything, not like they did in Korea. In Korea, the family name came first and told the entire history of your ancestry. In America, the family name is called the last name. Dae Hyun said it showed that Americans think the individual is more important than the family.",
		author: "Nicola Yoon",
		book: "The Sun is Also a Star"
	},
	{
		text: "America\'s not really a melting pot. It\'s more like one of those divided metal plates with separate sections for starch, meat, and veggies.",
		author: "Nicola Yoon",
		book: "The Sun is Also a Star"
	},
	{
		text: "Once upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.",
		author: "Nicole Krauss",
		book: "The History of Love: A Novel"
	},
	{
		text: "The moment I knew that my sister was alive, I said to her, \'You\'re dead.",
		author: "Lisa Lutz",
		book: "The Spellman Files"
	},
	{
		text: "Facts are such horrid things!",
		author: "Jane Austen",
		book: "Lady Susan"
	},
	{
		text: "During the interview, the reporter asked whether I was absolutely sure one could not get AIDS from a toilet seat. I answered with a line that a PHA had given me: \'The only way I know of that you can get AIDS from a toilet seat is if you sit down on it before someone else gets up.\'",
		author: "Mary Guinan",
		book: "Adventures of a Female Medical Detective"
	},
	{
		text: "Interlibrary loans are a wonder of the world and a glory of civilization.",
		author: "Jo Walton",
		book: "Among Others"
	},
	{
		text: "She felt terribly sorry for people who suffered from constipation, and she knew that there were many who did. There were probably enough of them to form a political party\u2014with a chance of government perhaps\u2014but what would such a party do if it was in power? Nothing, she imagined. It would try to pass legislation, but would fail.",
		author: "Alexander McCall Smith",
		book: "The No. 1 Ladies\' Detective Agency"
	},
	{
		text: "She wanted to hold foreign syllables like mints on her tongue until they dissolved into fluency.",
		author: "Anthony Marra",
		book: "A Constellation of Vital Phenomena"
	},
	{
		text: "The girl slowly nodded and leaned into Sonja, listening to the gurgle of her organs, these marvelous things we ignore, forget, and take for granted.",
		author: "Anthony Marra",
		book: "A Constellation of Vital Phenomena"
	},
	{
		text: "But from fifteen to seventeen she was in training for a heroine; she read all such works as heroines must read to supply their memories with those quotations which are so serviceable and so soothing in the vicissitudes of their eventful lives.",
		author: "Jane Austen",
		book: "Northanger Abbey"
	},
	{
		text: "I\'m a journalist. A free-speech warrior. I serve in the Army of the First Amendment. I didn\'t take this job for the bad money and the regressive health care coverage. I\'m here for the truth, the sunshine, the casting open of closed doors!",
		author: "Rainbow Rowell",
		book: "Attachments"
	},
	{
		text: "You fall asleep for short periods and then for longer periods and then forever.",
		author: "Emily St. John Mandel",
		book: "Station Eleven"
	},
	{
		text: "I\'m getting you In-N-Out whether you like it or not.",
		author: "Jasmine Guillory",
		book: "The Wedding Date"
	},
	{
		text: "The lead—like the title—should be a flashlight that shines down into the story. A lead is a promise. It promises that the piece of writing is going to be like this. If it is not going to be so, don’t use the lead.",
		author: "John McPhee",
		book: "Draft No. 4: On the Writing Process"
	},
	{
		text: "I can’t think of anything lonelier than spending the rest of my life with someone I can’t talk to, or worse, someone I can’t be silent with.",
		author: "Mary Ann Shaffer and Annie Barrows",
		book: "The Guernsey Literary and Potato Peel Pie Society"
	},
	{
		text: "How is a magician to exist without books? Let someone explain that to me. It is like asking a politician to achieve high office without the benefit of bribes or patronage.",
		author: "Susanna Clarke",
		book: "Jonathan Strange and Mr Norrell"
	},
	{
		text: "Faithfulness requires the courage to risk everything on Jesus, the willingness to keep growing, and the readiness to risk failure throughout our lives.",
		author: "Brennan Manning",
		book: "The Ragamuffin Gospel"
	},
	{
		text: "Tourists—you can always spot the tourists, they’re the ones who think CALIFORNIA = WARM and spend their San Francisco holidays freezing in shorts and T-shirts—scattered in every direction.",
		author: "Cory Doctorow",
		book: "Little Brother"
	}
];

class Quote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			randomIndex: Math.floor(Math.random() * quoteList.length) };

			this.newQuote = this.newQuote.bind(this);
		}

		newQuote() {
			this.setState({
				randomIndex: Math.floor(Math.random() * quoteList.length) });

	}

	render() {

		const generatedQuote = quoteList[this.state.randomIndex].text;
		const generatedAuthor = quoteList[this.state.randomIndex].author;
		const generatedBook = quoteList[this.state.randomIndex].book;

		return (
			React.createElement("div", { id: "quote-box" },
			React.createElement("div", { id: "buttons" },
			React.createElement("button", { id: "new-quote", onClick: this.newQuote }, "New quote"),
			React.createElement("br", null),
			React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/intent/tweet?&text=\"" + generatedQuote + "\" -" + generatedAuthor, target: "_blank" }, React.createElement("button", { id: "tweet-button" }, "Tweet quote"))),

			React.createElement("div", { id: "text" },
			React.createElement("p", null, "\"", generatedQuote, "\"")),

			React.createElement("div", { id: "author" },
			React.createElement("p", null, generatedBook ? generatedAuthor + ', ' + generatedBook : generatedAuthor))));

	}
}

class Generator extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			React.createElement("div", { id: "wrapper" },
			React.createElement("h1", null, "Erica's Favorite Quotes"),
			React.createElement(Quote, null)));

	}
}

// ========================================

ReactDOM.render(
	React.createElement(Generator, null), document.getElementById('app'));
