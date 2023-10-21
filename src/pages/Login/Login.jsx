// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BiShowAlt } from 'react-icons/bi';
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
// import auth from '../../firebase/firebase.config';
// import Swal from 'sweetalert2';




// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();
//     const [registerError, setRegisterError] = useState(''); // error message show korar jonne
//     // const { setUser } = useUser();

//     // google sign in
//     // const signInWithGoogle = () => {
//     //     const googleProvider = new GoogleAuthProvider();
    
//     //     signInWithPopup(auth, googleProvider)
//     //     .then((result) => {
//     //         const user = result.user;
//     //         localStorage.setItem('user', JSON.stringify(user)); 
//     //         Swal.fire({ 
//     //             icon: 'success',
//     //             title: 'Success',
//     //             text: 'Logged in successfully!',
//     //         });
//     //         navigate('/');
//     //     })
//     //     .catch((error) => {
//     //         setRegisterError(error.message);
//     //         Swal.fire({
//     //             icon: 'error',
//     //             title: 'Oops...',
//     //             text: error.message,
//     //         });
//     //     });
//     // }

//     const [user, setUser] = useState(null)
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     // sign in
//     const handleGoogleSignIn = () => {
//         // console.log('google mama is coming dude...')
//         signInWithPopup(auth, provider)
//         .then(result => {
//             const {displayName, email, photoURL} = result.user;
//             const userCredential = {
//                 name: displayName,
//                 email: email,
//                 photo: photoURL
//             };
//         })
//         .catch (error => {
//             console.log( 'tui error khaisot vai, ei karone', error.message)
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: error.message,
//               })
//         })
//     }

    

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         // console.log(email, password);
        

//         // reset error and success message
//         setRegisterError('');


//         // add validation 
//         signInWithEmailAndPassword (auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             // console.log(user);
//             localStorage.setItem('user', JSON.stringify(user)); // Store user in local storage
//             // setUser(user);
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Logged in successfully!',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//             // Navigate korbe root directory after successful registration houar por
//             navigate('/');

//         })  
//         .catch((error) => {
//             // Handle errors jodi khay 
//             // console.error("Error registering the user:", error.message);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: error.message,
//               })
//             setRegisterError(error.message);
//         });   
//     }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiShowAlt } from 'react-icons/bi';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const { displayName, email } = result.user;
            const userCredential = {
                name: displayName,
                email: email,
                // photo: photoURL
            };
            setUser(userCredential); // Set the user data in state
            Swal.fire({
                icon: 'success',
                title: 'Logged in successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/'); // Navigate to root after successful login
        })
        .catch (error => {
            console.log('Error encountered:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('');

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
                icon: 'success',
                title: 'Logged in successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
            setRegisterError(error.message);
        });
    }

  return (
    <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600" alt="HyperTouch"/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
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
                     href="#" className="text-xl text-indigo-600 hover:text-indigo-500"><BiShowAlt/></span>
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
                <button type="submit" className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-black hover:bg-gray-700">Sign in</button>
            </div>
            </form>
            <p className="mt-5 text-center text-sm text-gray-500"> Or continue with</p>
            <div>
                <button onClick={handleGoogleSignIn}
                 type="submit" className="mt-5 flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-gray-700 hover:border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in Google</button>
            </div>

            {
                registerError && <p className="mt-4 text-center text-sm text-red-600">{registerError}</p>
              
            }

            <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register here.</a>
            </p>
        </div>
        </div>
    </div>
  )
}

export default Login
