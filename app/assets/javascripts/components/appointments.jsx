const Appointments = () =>{
	const stylehr = {
		margin:'10px 0 10px 0',
		width: '390px',
		height:'6px',
		backgroundColor: '#2980b9',
		border: '0',
		textAlign:'left'		
	}
	const stylehr_two = {
		margin:'10px 0 10px 0',
		width: '590px',
		height:'6px',
		backgroundColor: '#2980b9',
		border: '0',
		textAlign:'left'		
	}
	const styleh1 = {
  		fontSize: '3em',
  		fontFamily: 'Raleway, sans-serif',
  		fontWeight: '800',
  		letterSpacing:'1pt'
	}
	const stylea = {
		fontFamily: 'Raleway, sans-serif',
		color: 'black'
	}
	const stylep = {
		fontFamily: 'Raleway, sans-serif'	
	}

   return (
   	<div>
		<div className="list-group" style={{width: '15%', marginTop:'50px'}}>
		  <a href="#histoire" className="list-group-item btn-primary" style={stylea}>Popis</a>
		  <a href="#mission" className="list-group-item btn-primary" style={stylea}>Sa Mission</a>
		</div> 
	   	<div className="card container" style={{marginRight: '10px', marginTop: '-100px'}}>
	        <h1 id='histoire' style={styleh1}>Popis et son histoire</h1>
	        <hr style = {stylehr_two}/>
	        	<p style={stylep}>C'est un startup creer en 2019 par une equipe de developpeur innovante chez Sayna Madagascar.</p>
				<p style={stylep}>Popis  a un but de faciliter la partage des taches dans les entreprises dans le partage de leur tache pour que la production.</p>
				<p style={stylep}>L'ambition de Popis c'est de mobiliser dans le monde de travail afin d'optimiser la production dans une entreprise</p>
		    <h1 id='mission' style={styleh1}>Notre Mission</h1>
		    <hr style = {stylehr}/>
		    <p style={stylep}>Notre mission c'est de reunir les travailleurs et les entreprises dans une meme endroit pour une bonne collaboration et une bonne
		    realisation de tache en peu de temps autant que possible.</p>
		    <p style={stylep}>Au tout debut de sa creation c'est tout simplement composee de peu d'equipe</p>
		    <p style={stylep}>Popis a beaucoup d'avenir dans le futur.</p>
		    <p style={stylep}>Concernant la technologie qu'on a utilise:</p>
		    <p style={stylep}>Evidement on a utilise Ruby On Rails, JavaScript, HTML et CSS du cote front</p>
	    </div>
	</div>
   )
}