import { createUserWithEmailAndPassword} from 'firebase/auth';
import auth from '../../firebase/firebase.config.js';
import { useNavigate } from 'react-router-dom';
import { BiShowAlt } from 'react-icons/bi';
import React,{ useState } from 'react';
import Swal from "sweetalert2";

const Register = () => {
    // function navigate korbe from the hook theke pawar jonne
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState(''); // error message show korar jonne
    // const [success, setSuccess] = useState(''); // success message show korar jonne

   

    // const signupWithGoogle = () => {
    //     const googleProvider = new GoogleAuthProvider();
    
    //     signInWithPopup(auth, googleProvider)
    //     .then((result) => {
    //         const user = result.user;
    //         // Check if this is a new user
    //         if (result.additionalUserInfo.isNewUser) {
    //             // Add user to users table in database
    //             const { displayName, email, photoURL } = user;
    //             const newUser = {
    //                 name: displayName,
    //                 email: email,
    //                 photo: photoURL
    //             };
    //         localStorage.setItem('user', JSON.stringify(user)); 
    //         Swal.fire({ 
    //             icon: 'success',
    //             title: 'Success',
    //             text: 'Signed up successfully!',
    //         });
    //         navigate('/');
    //     })
    //     .catch((error) => {
    //         setRegisterError(error.message);
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: error.message,
    //         });
    //     });
    // }
    

    // Register korar jonne
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error and success message
        setRegisterError('');
        // setSuccess('');

        // add validation
        if (password.length < 6) {
            // toast.error('Password must be at least 6 characters long!');
            setRegisterError('Password must be at least 6 characters long!');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long!',
              })
            return;
        }

        // password validation
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            // toast.error('Password must contain 2 upper case');
            setRegisterError('Password must contain 2 upper case');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain 2 upper case!',
              })
            return;
        }

        // special character validation
        if (!/(?=.*[!@#$&*;])/.test(password)) {
            // toast.error('Password must contain 1 special character');
            setRegisterError('Password must contain 1 special character');
            Swal.fire({ 
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain 1 special character!',
              })
            return;
        }

        // create korar jonne user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user);
            localStorage.setItem('user', JSON.stringify(user)); // Store user in local storage
            // setSuccess('User registered successfully!');
            // toast.success('User registered successfully!');
            Swal.fire({ 
                icon: 'success',
                title: 'Success',
                text: 'User registered successfully!',
            })

            
            // Navigate korbe root directory after successful registration houar por
            navigate('/');
        })
        .catch((error) => {
            // Handle errors jodi khay 
            // console.error("Error registering the user:", error.message);
            setRegisterError(error.message);
            // toast.error(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
              })
        });
    }


  return (
    <div>
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600" alt="Your Company"/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" 
                onSubmit={handleRegister}
            >
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                    <span onClick={() => setShowPassword(!showPassword)}
                     href="#" className="text-xl text-black hover:text-indigo-500"><BiShowAlt/></span>
                </div>
                </div>
                <div className="mt-2">
                <input 
                 id="password" 
                 name="password" 
                 type={ showPassword ? "text" : "password" }
                 autoComplete="current-password" 
                 required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-sara"></input>
                </div>
                
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-black hover:bg-gray-700">Register</button>
            </div>
            </form>
           
            {/* <div>
                <button
                 type="submit" className="mt-5 flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-gray-700 hover:border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up Google</button>
            </div> */}
            {
                registerError && <p className=" text-center text-sm text-red-600">{registerError}</p>
              
            }
            <p className="mt-10 text-center text-sm text-gray-500">
            Already member?
            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login here.</a>
            </p>
        </div>
        </div>
    </div>
  )
}

export default Register
