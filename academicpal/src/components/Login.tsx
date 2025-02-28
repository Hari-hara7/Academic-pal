import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { FaGoogle, FaGithub, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import image from "../assets/hand-drawn-nerd-cartoon-illustration.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setIsVerified(!!value);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
      window.location.href = "https://academicpal.vercel.app/";
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGithubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("GitHub User:", result.user);
      window.location.href = "https://academicpal.vercel.app/";
    } catch (error) {
      setError(error.message);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@nmamit\.in$/;
    return emailRegex.test(email);
  };

  const handleForgotPassword = async () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid NMAMIT email.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (error) {
      setError("Failed to send password reset email.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter NMAMIT email");
      return;
    }
    if (!isVerified) {
      setError("Please verify the CAPTCHA.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "https://academicpal.vercel.app/";
    } catch (error) {
      if (error.message.includes("wrong-password") || error.message.includes("user-not-found")) {
        setError("Incorrect credentials. Please sign up if you don't have an account.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white p-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
    
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 justify-center">
        <img src={image} alt="Login Illustration" className="w-3/4 h-auto" />
      </div>
    
      {/* Right Side - Login Form */}
      <div className="md:w-1/2 flex flex-col items-center">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Welcome to{" "}
            <span className="text-yellow-400">
              <Typewriter
                words={["📖 Academic Pal", "🎓 Your Learning Companion", "💡 A Smarter Future"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-400">
            Sign in to explore personalized resources and tools for your academic journey.
          </p>
        </div>
    
        <form onSubmit={handleLogin} className="w-full sm:w-1/3 md:w-1/4 lg:w-2/4 flex flex-col gap-4">
          <div className="flex items-center bg-gray-800 p-3 rounded-md mb-4">
            <FaEnvelope className="text-white mr-3" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 text-white border-none outline-none text-sm sm:text-base md:text-lg"
              required
            />
          </div>
    
          <div className="flex items-center bg-gray-800 p-3 rounded-md mb-4">
            <FaLock className="text-white mr-3" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 text-white border-none outline-none text-sm sm:text-base md:text-lg"
              required
            />
          </div>
    
          <div className="flex justify-center mb-4">
            <ReCAPTCHA sitekey="6LdRa-UqAAAAAOH_h9AVd-lGUFeKt9dgjgXcf5TZ" onChange={handleCaptchaChange} />
          </div>
    
          {error && <p className="text-red-500 text-center text-sm sm:text-base md:text-lg mb-4">{error}</p>}
          {message && <p className="text-green-500 text-center text-sm sm:text-base md:text-lg mb-4">{message}</p>}
    
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold mt-4 w-full sm:w-auto hover:from-purple-400 hover:to-red-400 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>
    
        {/* Sign-in options */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white py-3 px-20 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:from-red-400 hover:to-yellow-400 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <FaGoogle className="text-lg sm:text-xl md:text-2xl" />
            <span className="text-sm sm:text-base md:text-lg font-semibold">Sign in with Google</span>
          </button>
        </div>
    
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleGithubSignIn}
            className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-black text-white py-3 px-20 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:from-gray-700 hover:to-gray-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <FaGithub className="text-lg sm:text-xl md:text-2xl" />
            <span className="text-sm sm:text-base md:text-lg font-semibold">Sign in with GitHub</span>
          </button>
        </div>
    
        <div className="mt-4 w-full flex justify-center">
          <button onClick={handleForgotPassword} className="text-blue-500 underline text-sm sm:text-base md:text-lg">
            Forgot Password?
          </button>
        </div>
    
        <div className="mt-4 text-center">
          <p className="text-white text-sm sm:text-base md:text-lg">
            Don't have an account?{" "}
            <Link to="/signup" className="text-yellow-500 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      </div>
    );
  };
  
  export default Login;//test
  