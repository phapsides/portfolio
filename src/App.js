import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Nav from './Nav/Nav';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import './App.scss';

function App() {
	return (
		<Router>
			<div className="App">

				<Nav />
			
				<Switch>
					<Route exact path="/" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/not-found" component={NotFound} />
				</Switch>
				
				<Footer />

			</div>
		</Router>
	);
}

export default App;
