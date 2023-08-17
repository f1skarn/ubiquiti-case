import React from 'react';
import '../../../styles/grid-item.css';
import { IDevices } from '../../../utils/dto/dtos';
import { getIcon } from '../../../utils/icon-utils';
import { useNavigate } from 'react-router-dom';

interface GridItemProps {
  data: IDevices;
}

const GridItem: React.FC<GridItemProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/devices/device/${data.id}`, { state: { deviceId: data.id } });
  };

  return (
    <div className="grid-item" onClick={handleClick}>
      <div className="img-container">
        <img
          className="icon"
          src={
            data.icon?.id
              ? getIcon(data.icon.id, data.icon?.resolutions?.[3])
              : undefined
          }
          alt={`Icon for ${data.product.name}`}
        />
      </div>
      <div className="text-container">
        <h3>{data.product.name}</h3>
        <h6>{data.line.name}</h6>
      </div>
    </div>
  );
};

export default GridItem;
