import React from "react";
import Form from "../form/Form";
import Divider from "../divider/Divider";
import ApiLinks from "../apiLinks/ApiLinks";

import styles from "./FormContainer.module.css";

const FormContainer = () => {
	return (
		<div className={styles.form__container}>
			<Form />
			<Divider />
			<ApiLinks name="Facebook" title="Login with Facebook" />
			<ApiLinks name="Twitter" title="Login with Twitter" />
			<ApiLinks name="Google" title="Login with Google" />
		</div>
	);
};

export default FormContainer;
