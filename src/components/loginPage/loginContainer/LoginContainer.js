import { Redirect } from "react-router-dom";
import React, { Suspense } from "react";
import FormContainer from "../formContainer/FormContainer";
import CarouselContainer from "../carouselContainer/CarouselContainer";
import styles from "./LoginContainer.module.css";
const Main = React.lazy(() => import("../../main/Main"));
const LoginContainer = () => {
	return !sessionStorage.getItem("user") ? (
		<>
			<div className={styles.login}>
				<FormContainer />
				<CarouselContainer />
			</div>
			<Suspense fallback="">
				<Main hidden={true} />
			</Suspense>
		</>
	) : (
		<Redirect from="/" to="/main" />
	);
};

export default LoginContainer;
