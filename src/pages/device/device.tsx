import '../../styles/device.css';
import { useParams } from 'react-router-dom';
import { IDevices } from '../../utils/dto/dtos';
import { getIcon } from '../../utils/icon-utils';
import NavigationBar from '../../components/navigationbar/navigationbar';
import { BeatLoader } from 'react-spinners';

interface ChildComponentProps {
  data: IDevices[] | undefined;
  isLoading: boolean;
}

function Device(props: ChildComponentProps) {
  const { deviceId } = useParams<{ deviceId: string }>();
  const device = props.data?.find((item) => item?.id === deviceId);

  return (
    <div>
      <NavigationBar productName={device?.product.name} />
      <div className="device">
        <div className="image">
          {props.isLoading ? (
            <BeatLoader />
          ) : (
            <img
              className="icon"
              src={
                device?.icon?.id
                  ? getIcon(device?.icon?.id, device?.icon?.resolutions?.[4])
                  : undefined
              }
              alt={`Icon for ${device?.product.name}`}
            />
          )}
        </div>
        <div className="data">
          <div className="data-row">
            <h5 className="label">Product line:</h5>
            <h5 className="value">{device?.line.name}</h5>
          </div>
          <div className="data-row">
            <h5 className="label">ID:</h5>
            <h5 className="value">{device?.line.id}</h5>
          </div>
          <div className="data-row">
            <h5 className="label">Name:</h5>
            <h5 className="value">{device?.product.name}</h5>
          </div>
          <div className="data-row">
            <h5 className="label">Short name:</h5>
            <h5 className="value">{device?.shortnames[0]}</h5>
          </div>
          <div className="data-row">
            <h5 className="label">Max. power:</h5>
            <h5 className="value">
              {device?.unifi?.network?.radios?.na?.maxPower}
            </h5>
          </div>
          <div className="data-row">
            <h5 className="label">Speed:</h5>
            <h5 className="value">
              {device?.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond}
            </h5>
          </div>
          <div className="data-row">
            <h5 className="label">Number of ports::</h5>
            <h5 className="value">{device?.unifi?.network?.numberOfPorts}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Device;
