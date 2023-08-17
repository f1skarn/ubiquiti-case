import '../../../styles/list-item.css';
import { useNavigate } from 'react-router-dom';
import { IDevices } from '../../../utils/dto/dtos';
import { getIcon } from '../../../utils/icon-utils';

interface ChildComponentProps {
  data: IDevices;
}

function ListItem(props: ChildComponentProps) {
  const { product, line, id, icon } = props.data;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/devices/device/${id}`, { state: { deviceId: id } });
  };

  return (
    <tr className="list-item first-item" onClick={handleClick}>
      <td className="first-column">
        <img
          className="icon"
          src={icon?.id ? getIcon(icon.id, icon?.resolutions?.[0]) : undefined}
          alt={`Icon for ${product.name}`}
        />
      </td>
      <td className="column">{line.name}</td>
      <td className="column">{product.name}</td>
    </tr>
  );
}

export default ListItem;
