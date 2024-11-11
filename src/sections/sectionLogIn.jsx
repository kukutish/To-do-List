import ElementButton from "../elements/elementButton.jsx";
import ElementFormInput from "../elements/elementFormInput.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginStorage} from "../utils/auth.js";

export default function SectionLogIn() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [formValidation, setFormValidation] = useState(false);

  const navigation = useNavigate();

  function signIn() {
    if (login === 'admin' && password === 'admin') {
      loginStorage();
      navigation('/');
    } else {
      setFormValidation(true)
    }
  }


  return (
    <div className='container mx-auto'>
      <div className='max-w-[500px] bg-blue-200 p-8 mx-auto rounded-lg'>
        <div>
          <ElementFormInput
            placeholder='Логин'
            id='login'
            type='text'
            value={login}
            setValue={setLogin}
            label='Ведите логин'
          />
          <ElementFormInput
            placeholder='•••••••••'
            id='password'
            type='password'
            value={password}
            setValue={setPassword}
            label='Введите пароль'
          />
          {
            formValidation && <div className='mb-6 text-sm text-red-500'>Неверный логин или пароль *</div>
          }
          <ElementButton clickFunction={signIn}>Войти</ElementButton>
        </div>
      </div>
    </div>
  )
}
