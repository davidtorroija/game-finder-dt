import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				const userLogged =
					JSON.parse(sessionStorage.getItem("user")) || false;
				if (userLogged && userLogged.authenticated) {
					return <Component {...props} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: "/",
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
			}}
		/>
	);
};
