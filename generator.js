var quotes = [
	'"A man is not idle because he is absorbed in thought. There is visible labor and there is invisible labor."<br><br>\u2014Victor Hugo, Les Miserables',
	'"He was fond of books, for they are cool and sure friends."<br><br>\u2014Victor Hugo, Les Miserables',
	'"There are perhaps no days of our childhood we lived so fully as those we spent with a favorite book."<br><br>\u2014Marcel Proust',
	'"Truth does not change according to our ability to stomach it."<br><br>\u2014Flannery O\'Connor',
	'"People forget years and remember moments."<br><br>\u2014Ann Beattie',
	'"Language is more fashion than science, and matters of usage, spelling, and pronunciation tend to wander around like hemlines."<br><br>\u2014Bill Bryson',
	'"Try to be one of those on whom nothing is lost."<br><br>\u2014Henry James, The Art of Fiction',
	'"Knowing trees, I understand the meaning of patience. Knowing grass, I can appreciate persistence."<br><br>\u2014Hal Borland',
	'"Can anything be sadder than work left unfinished? Yes, work never begun."<br><br>\u2014Christina Rossetti',
	'"We are all in the gutter, but some of us are looking at the stars."<br><br>\u2014Oscar Wilde, Lady Windermere\'s Fan',
	'"The ideal scientist thinks like a poet and only later works like a bookkeeper."<br><br>\u2014E.O. Wilson, Letters to a Young Scientist',
	'"The human world, it\'s a mess."<br><br>\u2014Sebastian, The Little Mermaid',
	'"Great literature is simply language charged with meaning to the utmost possible degree."<br><br>\u2014Ezra Pound, ABC of Reading',
	'"To move freely you must be deeply rooted."<br><br>\u2014Bella Lewitsky',
	'"I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal."<br><br>\u2014Jane Austen',
	'"There are few people whom I really love, and still fewer of whom I think well. The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of either merit or sense."<br><br>\u2014Jane Austen, Pride and Prejudice',
	'"Think only of the past as its remembrance gives you pleasure."<br><br>\u2014Jane Austen, Pride and Prejudice',
	'"One half of the world cannot understand the pleasures of the other."<br><br>\u2014Jane Austen, Emma',
	'"One cannot think well, love well, sleep well, if one has not dined well."<br><br>\u2014Virginia Woolf, A Room of One\'s Own',
	'"Yet it is in our idleness, in our dreams, that the submerged truth sometimes comes to the top."<br><br>\u2014Virginia Woolf, A Room of One\'s Own',
	'"For masterpieces are not single and solitary births; they are the outcome of many years of thinking in common, of thinking by the body of the people, so that the experience of the mass is behind the single voice."<br><br>\u2014Virginia Woolf, A Room of One\'s Own',
	'"Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind."<br><br>\u2014Virginia Woolf, A Room of One\'s Own',
	'"In the case of good books, the point is not how many of them you can get through, but rather how many can get through to you."<br><br>\u2014Mortimer J. Adler',
	'"What does the name of an author on the jacket matter? Let us move forward in thought to three thousand years from now. Who knows which books from our period will be saved, and who knows which authors\' names will be remembered? Some books will remain famous but will be considered anonymous works, as for us the epic of Gilgamesh; other author\'s names will still be well known, but none of their works will survive, as was the case with Socrates; or perhaps all the surviving books will be attributed to a single, mysterious author, like Homer."<br><br>\u2014Italo Calvino, If on a Winter\'s Night a Traveler',
	'"The greatest single distinguishing feature of the omnipotence of God is that our imagination gets lost thinking about it."<br><br>\u2014Blaise Pascal',
	'"...that beauty that Malcolm pledged us to protect, black beauty, was never celebrated in movies, in television, or in the textbooks I\'d seen as a child. Everyone of any import, from Jesus to George Washington, was white. This was why your grandparents banned Tarzan and the Lone Ranger and toys with white faces from the house. They were rebelling against the history books that spoke of black people only as sentimental \'firsts\' \u2014 first black five-star general, first black congressman, first black mayor \u2014 always presented in the bemused manner of a category of Trivial Pursuit. Serious history was the West, and the West was white."<br><br>\u2014Ta-Nehisi Coates, Between the World and Me',
	'"Science says the first word on everything, and the last word on nothing."<br><br>\u2014Victor Hugo',
	'"Maybe every other American movie shouldn\'t be based on a comic book. Other countries will think Americans live in an infantile fantasy land where reality is whatever we say it is and every problem can be solved with violence."<br><br>\u2014Bill Maher',
	'"All things can be spiritual, and our most \'spiritual\' acts can become secular if they aren\'t infused with the Holy Spirit."<br><br>\u2014Sarah Bessey, Out of Sorts',
	'"I pitied the French for their naivete in believing they had to visit a country in order to exploit it. Hollywood was much more efficient, imagining the countries it wanted to exploit."<br><br>\u2014Viet Thanh Nguyen, The Sympathizer',
	'"God will bring in his kingdom by the same means, the same strange process, that he seems to use in the natural world. Seeds will be sown; many will apparently be lost, but others will be powerfully fruitful."<br><br>\u2014N.T. Wright, Lent for Everyone',
	'"It is not outside human civilization; it is a new and formidable iteration of that civilization. It\'s also a brilliant commentary on it. To be still more specific: the Internet responds, often with great sensitivity, to critical methodologies. Sense can be made of it. Logic can be divined in it. Politics can be derived from it. Pleasure can be taken in it. Beauty can be found in it. Pain too \u2014 and loss. Agony and ecstasy is what I mean: the Internet may not be reality, but it\'s very real art."<br><br>\u2014Virginia Heffernan, Magic and Loss',
	'"I had absolutely no experience with physical fighting but decided instantly that it was time to change that."<br><br>\u2014Lene Kaaberb\xF8l, Doctor Death',
	'"I was sick of buying smiles from bellhops at a dollar a smile. I\'d had it. I was sick of Virginia, too, and of what the money had done to the both of us, changing a tough, elegant adventuress with plenty of guts and imagination into a candy-tonguing country club Cleopatra who nested in bed the whole day long and thought her feet were too damned good to walk on."<br><br>\u2014Elliott Chaze, Black Wings Has My Angel',
	'"When people are deeply affected by the Word, they tell it to other people. God has willed that we should seek and find God\'s living Word in the testimony of other Christians, in the mouths of human beings. Therefore, Christians need other Christians who speak God\'s Word to them."<br><br>\u2014Dietrich Bonhoeffer, Life Together',
	'"The more thankfully we daily receive what is given to us, the more assuredly and consistently will community increase and grow from day to day as God pleases."<br><br>\u2014Dietrich Bonhoeffer, Life Together',
	'"It\'s a weird phrase in English, in love, like it\'s a sea you drown in or a town you live in. You don\'t get to be in anything else \u2014 in friendship or in anger or in hope. All you can be in is love."<br><br>\u2014John Green, Turtles All the Way Down',
	'"I was thinking that maybe the old lady and the scientist were both right. Like, the world is billions of years old, and life is a product of nucleotide mutation and everything. But the world is also the stories we tell about it."<br><br>\u2014John Green, Turtles All the Way Down',
	'"I went to the theater with the author of a successful play. He insisted on explaining everything. He told me what to watch, the details of direction, the errors of the property man, the foibles of the star. He anticipated all my surprises and ruined the evening. Never again! And mark you, the greatest author of all made no such mistake."<br><br>\u2014Ravi Zacharias, Can Man Live Without God',
	'"Life becomes unlivable and our emotions unexplainable, if personhood is not given value beyond the material."<br><br>\u2014Ravi Zacharias, Can Man Live Without God',
	'"In the cross of Jesus Christ, the demands of the law were satisfied, and the generosity of love was expressed."<br><br>\u2014Ravi Zacharias, Can Man Live Without God',
	'"First, that human beings, all over the earth, have this curious idea that they ought to behave in a certain way, and cannot really get rid of it. Secondly, that they do not in fact behave in that way. They know the Law of Nature; they break it. These two facts are the foundation of all clear thinking about ourselves and the universe we live in."<br><br>\u2014C. S. Lewis, Mere Christianity',
	'"You find out more about God from the Moral Law than from the universe in general just as you find out more about a man by listening to his conversation than by looking at a house he has built."<br><br>\u2014C. S. Lewis, Mere Christianity',
	'"And that is precisely what Christianity is about. This world is a great sculptor\'s shop. We are the statues and there is a rumour going round the shop that some of us are some day going to come to life."<br><br>\u2014C. S. Lewis, Mere Christianity',
	'"I know it is a bad thing to break a promise, but I think now that it is a worse thing to let a promise break you."<br><br>\u2014Jennifer Donnelly, A Northern Light',
	'"Penny reached for her phone but was too slow on the uptake. She could never grab it in time for good snaps."<br><br>\u2014Mary H. K. Choi, Emergency Contact',
	'"Jesus\'s resurrection is the beginning of God\'s new project not to snatch people away from earth to heaven but to colonize earth with the life of heaven. That, after all, is what the Lord\'s Prayer is about."<br><br>\u2014N.T. Wright, Surprised by Hope',
	'"He wanted to twine himself in the tiny curlicues of her handwriting."<br><br>\u2014Celeste Ng, Little Fires Everywhere',
	'"Any number of things may work for you \u2014 an altar, for instance, or votive candles, sage smudges, small-animal sacrifices, especially now that the Supreme Court has legalized them. (I cut out the headline the day this news came out and taped it above the kitty\'s water dish.)"<br><br>\u2014Anne Lamott, Bird by Bird: Some Instructions on Writing and Life',
	'"She had this feeling that in America names didn\'t mean anything, not like they did in Korea. In Korea, the family name came first and told the entire history of your ancestry. In America, the family name is called the last name. Dae Hyun said it showed that Americans think the individual is more important than the family."<br><br>\u2014Nicola Yoon, The Sun is Also a Star',
	'"America\'s not really a melting pot. It\'s more like one of those divided metal plates with separate sections for starch, meat, and veggies."<br><br>\u2014Nicola Yoon, The Sun is Also a Star',
	'"Once upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering."<br><br>\u2014Nicole Krauss, The History of Love: A Novel',
	'"The moment I knew that my sister was alive, I said to her, \'You\'re dead.\'"<br><br>\u2014Lisa Lutz, The Spellman Files',
	'"Facts are such horrid things!"<br><br>\u2014Jane Austen, Lady Susan',
	'"During the interview, the reporter asked whether I was absolutely sure one could not get AIDS from a toilet seat. I answered with a line that a PHA had given me: \'The only way I know of that you can get AIDS from a toilet seat is if you sit down on it before someone else gets up.\'"<br><br>\u2014Mary Guinan, Adventures of a Female Medical Detective',
	'"Interlibrary loans are a wonder of the world and a glory of civilization."<br><br>\u2014Jo Walton, Among Others',
	'"She felt terribly sorry for people who suffered from constipation, and she knew that there were many who did. There were probably enough of them to form a political party\u2014with a chance of government perhaps\u2014but what would such a party do if it was in power? Nothing, she imagined. It would try to pass legislation, but would fail."<br><br>\u2014Alexander McCall Smith, The No. 1 Ladies\' Detective Agency',
	'"She wanted to hold foreign syllables like mints on her tongue until they dissolved into fluency."<br><br>\u2014Anthony Marra, A Constellation of Vital Phenomena',
	'"The girl slowly nodded and leaned into Sonja, listening to the gurgle of her organs, these marvelous things we ignore, forget, and take for granted."<br><br>\u2014Anthony Marra, A Constellation of Vital Phenomena',
	'"But from fifteen to seventeen she was in training for a heroine; she read all such works as heroines must read to supply their memories with those quotations which are so serviceable and so soothing in the vicissitudes of their eventful lives."<br><br>\u2014Jane Austen, Northanger Abbey',
	'"I\'m a journalist. A free-speech warrior. I serve in the Army of the First Amendment. I didn\'t take this job for the bad money and the regressive health care coverage. I\'m here for the truth, the sunshine, the casting open of closed doors!"<br><br>\u2014Rainbow Rowell, Attachments',
	'"You fall asleep for short periods and then for longer periods and then forever."<br><br>\u2014Emily St. John Mandel, Station Eleven'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
 	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}