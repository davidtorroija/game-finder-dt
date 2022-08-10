import { useState, useEffect } from "react";
import Headline from "../../common/headline/Headline";
import Icon from "../../common/icon/Icon";
import Input from "../input/Input";
import SubmitButton from "../submitButton/SubmitButton";
import Error from "../error/Error";
import Checkbox from "../checkbox/Checkbox";
import { useHistory } from "react-router-dom";
import Link from "../link/Link";
import styles from "./Form.module.css";
import emailRegex from "../../common/emailRegex/emailRegex";

const Form = () => {
	const [showPassword, setShowPassword] = useState(true);
	const [passwordIcon, setPasswordIcon] = useState("showPass");
	const [passwordType, setPasswordType] = useState("password");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [emailIconError, setEmailIconError] = useState(false);
	const [passwordIconError, setPasswordIconError] = useState(false);
	const [emailErrorText, setEmailErrorText] = useState("");
	const [passwordErrorText, setPasswordErrorText] = useState("");
	const [submit, setSubmit] = useState(false);
	const history = useHistory();

	useEffect(() => {
		if (showPassword) {
			setPasswordIcon("showPass");
			setPasswordType("password");
		} else {
			setPasswordIcon("hidePass");
			setPasswordType("text");
		}
	}, [showPassword]);

	const changePasswordIcon = () => {
		setShowPassword(!showPassword);
	};

	useEffect(() => {
		if (submit) {
			if (email.length) {
				checkValidEmail(email);
			}
			if (password.length) {
				checkValidPassword(password);
			}
		}
	}, [email, password, submit]);

	const onSubmit = (e) => {
		setSubmit(true);
		setEmailError(false);
		setPasswordError(false);
		e.preventDefault();

		if (validation()) {
			loginFunc({ email, password });
		}
	};

	const validation = () => {
		const mailIsVlid = checkValidEmail(email);
		const passIsValid = checkValidPassword(password);
		return mailIsVlid && passIsValid;
	};

	const loginFunc = async (userObj) => {
		try {
			const res = await fetch(
				`${process.env.REACT_APP_LOGIN_BASE_URL}:${process.env.REACT_APP_LOGIN_BASE_URL_PORT}/login`,
				{
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(userObj),
				}
			);
			const data = await res.json();

			if (res.ok) {
				const { accessToken } = data;
				window.sessionStorage.setItem(
					"user",
					JSON.stringify({
						email,
						authenticated: true,
						accessToken,
					})
				);
				history.push("/main");
			} else {
				setEmailError(true);
				setEmailIconError(true);
				setPasswordError(true);
				setPasswordIconError(true);
				setPasswordErrorText("Email or Password is not correct");
			}
		} catch (error) {
			console.log(error);
		}
	};

	function checkValidEmail(email) {
		if (!emailRegex(email)) {
			setEmailErrorText("Enter a valid email");
			setEmailIconError(true);
			setEmailError(true);
			return false;
		}
		setEmailErrorText("");
		setEmailIconError(false);
		setEmailError(false);
		return true;
	}

	function checkValidPassword(password) {
		if (
			password.length < 3 ||
			password.length > 64 ||
			password.indexOf(" ") > 0
		) {
			setPasswordErrorText("Enter a valid password");
			setPasswordIconError(true);
			setPasswordError(true);
			return false;
		}
		setPasswordErrorText("");
		setPasswordIconError(false);
		setPasswordError(false);
		return true;
	}

	let emailFieldStyles = "";
	let passwordFieldStyles = "";
	if (emailError) {
		emailFieldStyles = styles["formfield__container--error"];
	}
	if (passwordError) {
		passwordFieldStyles = styles["formfield__container--error"];
	}

	return (
		<form onSubmit={onSubmit}>
			<Headline title="GAME" bold="FINDER" location="form" />
			<div
				className={`${styles.formfield__container} 
                ${emailFieldStyles}`}
			>
				<Icon name="user" error={emailIconError} />
				<Input
					type="text"
					placeholder="Username or email"
					onChange={(e) => setEmail(e.target.value)}
					error={emailError}
				/>
				{emailError && <Error text={emailErrorText} />}
			</div>
			<div
				className={`${styles.formfield__container} 
                ${passwordFieldStyles}`}
			>
				<Icon name="password" error={passwordIconError} />
				<Input
					type={passwordType}
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					error={passwordError}
				/>
				<Icon name={passwordIcon} clickEvent={changePasswordIcon} />
				{passwordError && <Error text={passwordErrorText} />}
			</div>
			<div className={styles.submit__container}>
				<Checkbox />
				<SubmitButton type="submit" id="submit-button" value="LOGIN" />
			</div>
			<div className={styles.form__anchors}>
				<Link title="Register now" href="" location="login" />
				<Link title="Forgot password?" href="" location="login" />
			</div>
		</form>
	);
};

export default Form;
