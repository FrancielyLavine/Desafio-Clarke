import './index.css';
import api from '../../service/api'
import Lupa from '../../assets/lupinha.svg'
import { useEffect } from 'react';

function Main() {
  
  async function listarDistribuidoras(){
  try {
    const response = await api.get('/');
    console.log(response)
  }catch(error){
    console.log(error)
  }
}
   useEffect(() => {
    listarDistribuidoras()
  }, []);
  // }
  return (
    <div className='container'>
      
      <form>
        <input
          placeholder ="Consulmo mensal em KWh"
        />
        <buttom><img src={Lupa} className='lupa'/></buttom>
      </form>
      </div>
  );
}

export default Main;
