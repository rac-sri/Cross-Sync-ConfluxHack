import React, { Fragment, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './components/Dashboard/Home';
import { CssBaseline } from '@material-ui/core';
import './utils/conflux/contract.ts';

async function init() {
	//@ts-ignore
	await window.conflux.enable();
	const accounts = await window.conflux.send({ method: 'cfx_accounts' });
	console.log(accounts);
}

function App() {
	useEffect(() => {
		init();
	}, []);
	return (
		<Fragment>
			<Router>
				<CssBaseline>
					<Switch>
						<Redirect exact path="/" to="/register" />
						<Route
							exact
							path="/:page"
							render={(props) => <Home {...props} />}
						/>
					</Switch>
				</CssBaseline>
			</Router>
		</Fragment>
	);
}

export default App;
