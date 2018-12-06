function red() {
	document.body.innerHTML =
		'<img src="apple.jpeg"><p>You found the golden apple!</p><button onclick="window.location.reload();">Start again!</button>';

	alert(
		'You are bold, boisterous, and full of energy. Your need for adventure and spontaneous nature make you a passionate and ambitious individual who also might harbor a slight competitive streak.'
	);
}

function orange() {
	loader();
	setTimeout(orangeAlert, 1500);
}

function loader() {
	document.body.innerHTML =
		'<img src="Loading_icon.gif">Waiting for result...<br><br>' +
		'<a href="index.html">Start again</a>';
}

function orangeAlert() {
	alert(
		'Orange as a favorite color represents a great need for socialization and a desire for human companionship. It represents a need for respect and acceptance within a group setting, but also a need for personal physical or social challenges within your life.'
	);
}
function yellow() {
	alert(
		'Yellow as a favorite color represents happiness and a love of learning. You probably have a deep need for logical order in your everyday life, and love to express your individuality by creating new ideas and sharing your collected knowledge with others.'
	);
}

function green() {
	alert(
		'If green is your favorite color choice, you probably have a deep need to feel safe and secure, and a deep longing to love and be loved. You seek acknowledgement and acceptance for the everyday things you do, for you are typically down to earth and aware what other people think of you. A good reputation is very important to you, and lovers of green are often loyal, affectionate, and honest.'
	);
}

function blue() {
	alert(
		'Blue is the most popular among the favorite colors, and represents a deep need for personal inner peace and truth. Lovers of blue like to live their lives according to their beliefs and ideals, and choose to live in harmony and peace. Blue also represents your sensitive and reliable side, and a consistent effort to think of others.'
	);
}
