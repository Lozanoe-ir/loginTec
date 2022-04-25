import { LockClosedIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useState } from 'react';
import { useFail,useFailDispatch } from '../../components/context/failContext';
import Modal from '../../components/modal/modal';
import ModalSucces from '../../components/modal/modalSucces';


export default function Example() {
  const [form,setForm] = useState({
    email:'',
    password:'',
    pasword2:''

  });

  const context=useFail();
  const dispatch= useFailDispatch();

  const handleChange=(e:any)=>{
    const {name,value}=e.target;
    setForm(prevState=>({
      ...prevState,
      [name]:value
    }));
  }

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    console.log(e);
    const res= await axios.post('/api/register',{
      user:form.email,
      hash:form.password
    })
    if(res.data.status == 'true'){
      dispatch({
        type:'openSucces',
        openSucces:true
      })
    }else{
      dispatch({
        type:'open',
        open:true
      })
    }
  }


  return (
    <>
    <Modal/>
      <ModalSucces/>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-40 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Tecnologico_Mario_Molina_Zapopan.png/800px-Tecnologico_Mario_Molina_Zapopan.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrese Aqui</h2>
           
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e)=>handleSubmit(e)} action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Repeat Password
                </label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Repeat Password"
                  onChange={handleChange}
                />
              </div>
            </div>

            

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}