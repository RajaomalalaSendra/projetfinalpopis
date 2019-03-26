const Team = () => {
	var ourStyle = {
		marginLeft: "150px",
	}
	return(
		<div>
			<h1>The team of ours</h1>
			<div className="team">
				<figure style={ourStyle}><img src="./1.png" /><figcaption>Hugo Croft-Levesque<p>Back-end</p></figcaption></figure>
				<figure style={ourStyle}><img src="./2.png" /><figcaption>Hence Tralla<p>Back-end</p></figcaption></figure>
				<figure style={ourStyle}><img src="./3.png" /><figcaption>Trial Trial Merci<p>Back-end</p></figcaption></figure>
				<figure  style={ourStyle}><img src="./4.png" /><figcaption>Yo Yo Rails<p>Front-end</p></figcaption></figure>
				<figure style={ourStyle}><img src="./5.png" /><figcaption>Man Man Yes<p>Front-end</p></figcaption></figure>
			</div>
		</div>
	)
}