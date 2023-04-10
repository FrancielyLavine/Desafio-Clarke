
import './index.css';
import Equatorial from '../../assets/equatorial.svg'

function Empresas() {

  return (
    <div className='box-empresas'>
      <div className='box-individual'>
        <div className="alinhamento-imagem">
          <img src={Equatorial} className='logo'/>
        </div>
        <div className="alinhamento-info">
          <h1>Equatorial</h1>
          <h4>Alagoas</h4>
          <h4>R$ 0,62 por KWh</h4>
          <h4>26900 limite mínimo</h4>
          <h4>50 mil clientes</h4>
          <h4>Avaliação 4.2</h4>
        </div>
      </div>
      
    </div>
  );
}

export default Empresas;
