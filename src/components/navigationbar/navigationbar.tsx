import { useNavigate } from 'react-router-dom';
import '../../styles/navigationbar.css';
import BackArrow from '../../assets/Vector.png';

interface NavigationBarProps {
  productName: string | undefined;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ productName }) => {
  const navigate = useNavigate();

  return (
    <div className="navigationbar-container">
      <div className="navigationbar">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={BackArrow} alt="back" />
        </button>
        <div className="product-name">{productName}</div>
      </div>
    </div>
  );
};

export default NavigationBar;
