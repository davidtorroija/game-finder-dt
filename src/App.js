import LoginContainer from "./components/loginPage/loginContainer/LoginContainer";
import Main from "./components/main/Main";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/routing/privateRoute/PrivateRoute";

const App = () => {
	return (
		<>
			<Switch>
				<PrivateRoute
					path="/main"
					component={() => <Main hidden={false} />}
				/>
				<Route exact path="/" component={LoginContainer} />
				<Route
					path="*"
					component={() => <h1>Error 404, page not found</h1>}
				/>
			</Switch>
		</>
	);
};

export default App;
