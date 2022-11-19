import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../features/auth-slice";
import { AppDispatch, RootState } from "../../store";
import "./register.css";
function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector<RootState>((state) => state.User.Loading);
  const navigate = useNavigate();
  const RegisterMessage = useSelector<RootState>(
    (state) => state.User.RegisterMessage
  );

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [passwordMatch, setpasswordMatch] = useState<boolean>(true);
  const [filled, setFilled] = useState<boolean>(false);
  const [registrationErrorMessage, setRegistrationErrorMessage] =
    useState<string>("");

  const submitRegistration = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (
      email != "" &&
      password != "" &&
      username != "" &&
      confirmedPassword != ""
    ) {
      dispatch(register({ email, password, username }));
    } else {
      setFilled(true);
    }
  };

  // Redirect if register successfully
  useEffect(() => {
    if (RegisterMessage === "registred") {
      navigate("/login");
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmedPassword("");
    } else if (RegisterMessage !== "registred") {
      const a = RegisterMessage as string;
      setRegistrationErrorMessage(a);
    }
  }, [RegisterMessage]);

  // check confirmed password
  useEffect(() => {
    if (password !== confirmedPassword) {
      setpasswordMatch(false);
    } else {
      setpasswordMatch(true);
    }
    if (confirmedPassword === "") {
      setpasswordMatch(true);
    }
  }, [confirmedPassword]);

  return (
    <div className='register'>
      <form
        onSubmit={(e) => {
          submitRegistration(e);
        }}
      >
        <label> E-mail</label>
        <input
          type='email'
          value={email}
          placeholder='Enter Your Email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label> Username</label>
        <input
          type='text'
          placeholder='Enter a Username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type='password'
          value={password}
          placeholder='Enter your password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Confirm Password</label>
        <input
          type='password'
          value={confirmedPassword}
          placeholder='Confirm your password'
          onChange={(e) => {
            setConfirmedPassword(e.target.value);
          }}
        />
        <>
          {!passwordMatch && (
            <h4 className='password_match'>Password not match</h4>
          )}
        </>
        <input type='submit' value='Register' />
      </form>
      <>
        {RegisterMessage !== "registred" && (
          <h4 className='password_match'>{registrationErrorMessage}</h4>
        )}
      </>
      <>
        {filled && (
          <h4 className='password_match'>Please complete all fields</h4>
        )}
      </>
      <p>
        Already had an account{" "}
        <Link className='link-w' to='/login'>
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
