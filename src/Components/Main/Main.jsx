      
import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Main = () => {
   const {
      onSent,
      recentPrompt,
      showResult,
      loading,
      resultData,
      setInput,
      input,
   } = useContext(Context);

   return (
      <div className="main">
         <div className="nav">
            <p>Vance GPT</p>
            <img src={assets.user_icon} alt="User Icon" />
         </div>
         <div className="main-container">
            {!showResult ? (
               <>
                  <div className="greet">
                     <p><span>Hello Friend</span></p>
                     <p>Need Help?</p>
                  </div>
                  <div className="cards">
                     <div className="card">
                        <p>Suggest best gym nearby</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                     </div>
                     <div className="card">
                        <p>Briefly summarize about Hinduism</p>
                        <img src={assets.bulb_icon} alt="Bulb Icon" />
                     </div>
                     <div className="card">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit.</p>
                        <img src={assets.message_icon} alt="Message Icon" />
                     </div>
                     <div className="card">
                        <p>Improving code readability</p>
                        <img src={assets.code_icon} alt="Code Icon" />
                     </div>
                  </div>
               </>
            ) : (
               <div className="result">
                  <div className="result-title">
                     <img src={assets.user_icon} alt="User Icon" />
                     <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data">
                     <img src={assets.gemini_icon} alt="App Icon" />
                     {loading?(
                        <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                        </div>
                        )
                        :
                        (<p dangerouslySetInnerHTML={{__html:resultData }} ></p>)
                     }
                  </div>
               </div>
            )}
         </div>

         <div className="main-bottom">
            <div className="search-box">
               <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  placeholder="Enter prompt here"
               />
               <div>
                  <img src={assets.gallery_icon} alt="Gallery Icon" />
                  <img src={assets.mic_icon} alt="Mic Icon" />
                  {input?<img onClick={() => onSent()} src={assets.send_icon} alt="Send Icon" />:null}
               </div>
            </div>
            <p className="bottom-info">
               We try to give you correct information as possible.
            </p>
         </div>
      </div>
   );
};

export default Main;
      
