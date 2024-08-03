import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import {} from '../services/firebaseConfig'
import { useNavigate, Link } from 'react-router-dom';


function Register() {

  
  const [mensagem,setmensagem] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  
  function RegisterUser() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,  email, password).then((UserCredential) => {
      // Signed in
      const user = UserCredential.user;
      alert('Usuario cadastrado!')
      navigate("/login",{replace:true})
    }).catch((error) => {
      alert('Ocorreu um Erro tente novamente!')
    })
     
  
  }

  function changeEmail(event) {
    setEmail(event.target.value);
  }
  function changePassword(event) {
    setPassword(event.target.value);

  }
 


  return (
    <div className="flex min-h-screen">
      {/* Coluna da Imagem */}
      <div className="hidden md:flex md:w-1/2 bg-orange-600 items-center justify-center">
        <img
          src="https://i.postimg.cc/ZYfhmjfN/team-meeting-office.jpg" // Substitua com a URL da sua imagem
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Coluna do Formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="p-16 max-w-lg w-full">
            <div className="logo p-">
            <img
          src="https://i.postimg.cc/RFhxJHhh/CODEX-DOCTRINA.png" // Substitua com a URL da sua imagem
          alt="LOGO"
         
        />
            </div>
          <h2 className="text-2xl font-bold text-center text-orange-600">Registrar</h2>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                onChange={changeEmail}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">Senha</label>
                <input
                  id="password"
                  onChange={changePassword}
                  name="password"
                  type="password"

                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Senha"
                />
              </div>
            </div>
            <p className='text-red-400'>{setmensagem}</p>
            <button
              type="button"
              onClick={RegisterUser}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Registrar-se
            </button>
            <Link to={'/login'}><h1 className='text-orange-500 py-3'>Já Registrado? Faça Login clicando aqui!</h1></Link>
       
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
