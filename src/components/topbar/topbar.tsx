import '../../styles/topbar.css';
import Logo from '../../assets/Logo.png';

function TopBar() {
  return (
    <div className="topbar">
      <img src={Logo} alt="List View" />
      <h3>Devices</h3>
      <h4>Rickard Wallin</h4>
    </div>
  );
}

export default TopBar;
