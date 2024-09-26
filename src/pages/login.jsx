import React, { useEffect, useState } from 'react';
import './login.css';
import 'boxicons';

export default function Login() {

  const[blackBox,setBlackBox] = useState('black_l-s');
  const[witeBox,setWhiteBox] = useState('white_l-s');


  const WhiteBoxHandler= ()=>{
    if(witeBox === 'white_l-s'){
      setWhiteBox('white_s-l')
    }
    else{
      setWhiteBox('white_l-s')
    }
  }

  const BlackBoxHandler= () => {
    WhiteBoxHandler()
    if(blackBox === 'black_l-s'){
      setBlackBox('black_s-l');
    }
    else{
      setBlackBox('black_l-s');
    }
    
  }



  const [name,setName] = useState('');

  const [state,setState] = useState('login')




  useEffect(()=>{
    const StateController = () => {
      if (blackBox === 'black_l-s') {
        setTimeout(() => {
          setState('login');
        }, 1200);  // 2 seconds delay
      } else {
        setTimeout(() => {
          setState('signin');
        }, 1200);  // 2 seconds delay
      }
    };

    StateController()

  },[blackBox])
  


  return (
    <div className='main'>
        <div className='frame-main'>
            <div className={blackBox}>
              <p className={blackBox === 'black_l-s' ? "black-p1_l-s"  : "black-p1_s-l"}>{state === 'login' ? "WELCOME BACK!"  : "WELCOME!"}</p>
              <p className={blackBox === 'black_l-s' ? "black-p2_l-s"  : "black-p2_s-l"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            
            </div>
            <div className={witeBox}>
              
              <div className='input-div'>
              <p className='login_p'>{state === 'login' ? "Login"  : "Sign in"}</p>

              <div className='form_div_main'>
                <div className='form_div_sub'>
                  <div className="wave-group">
                <input
                  type="text"
                  className="input"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required  // Adds validation to make input valid
                />
                <span className="bar"></span>
                <label className="label">
                  {/* <div className='label-sub'> */}
                  <span className="label-char" style={{ '--index': 0 }}>N</span>
                  <span className="label-char" style={{ '--index': 1 }}>a</span>
                  <span className="label-char" style={{ '--index': 2 }}>m</span>
                  <span className="label-char" style={{ '--index': 3 }}>e</span>
                  {/* </div> */}
                 

                  {/* <box-icon type='solid' name='user'></box-icon> */}
                </label>
                
                  </div>

                  {state === 'login' ? null : 
                  <div className="wave-group">
                  <input
                    type="text"
                    className="input"
                    placeholder=" "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required  // Adds validation to make input valid
                  />
                  <span className="bar"></span>
                  <label className="label">
                    <span className="label-char" style={{ '--index': 0 }}>E</span>
                    <span className="label-char" style={{ '--index': 1 }}>-</span>
                    <span className="label-char" style={{ '--index': 2 }}>m</span>
                    <span className="label-char" style={{ '--index': 3 }}>a</span>
                    <span className="label-char" style={{ '--index': 4 }}>i</span>
                    <span className="label-char" style={{ '--index': 5 }}>l</span>
                  </label>
                    </div>}

                  <div className="wave-group">
                <input
                  type="text"
                  className="input"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required  // Adds validation to make input valid
                />
                <span className="bar"></span>
                <label className="label">
                  <span className="label-char" style={{ '--index': 0 }}>P</span>
                  <span className="label-char" style={{ '--index': 1 }}>a</span>
                  <span className="label-char" style={{ '--index': 2 }}>s</span>
                  <span className="label-char" style={{ '--index': 3 }}>s</span>
                  <span className="label-char" style={{ '--index': 4 }}>w</span>
                  <span className="label-char" style={{ '--index': 5 }}>o</span>
                  <span className="label-char" style={{ '--index': 6 }}>r</span>
                  <span className="label-char" style={{ '--index': 7 }}>d</span>
                </label>
                  </div>

                  

                  

                  <button className='btn_login'>{state === 'login' ? "Login"  : "Register"}</button>


                  <div className='bottom_div'>
                    <p>{state === 'login' ? "Already have an account ?"  : "Don't have an account ?"}</p>
                    <button className='btn_'
                    onClick={()=>{
                      BlackBoxHandler()
                    }}>{state === 'login' ? "Sign in"  : "Sign up"}</button>
                  </div>

              <div>
              </div>
                </div>
              
              </div>
              </div>
            </div>
        </div>

        



        
    </div>
  )
}
