import { useEffect, useState } from 'react';
import '../../styles/list.css';
import { IDevices } from '../../utils/dto/dtos';
import { ListItem } from './list-item';
import { Header } from './header';
import GridItem from './grid-item/grid-item';

interface ChildComponentProps {
  data: IDevices[] | undefined;
  selectedFilters: string[];
  searchQuery: string;
  isGridView: boolean;
}

function List(props: ChildComponentProps) {
  const { data, selectedFilters, searchQuery, isGridView } = props;
  const [filteredData, setFilteredData] = useState<IDevices[]>(data || []);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      const filteredDevices = data?.filter((device) =>
        Object.values(device).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredData(filteredDevices || []);
    } else {
      const filteredDevices = data?.filter(
        (device) =>
          selectedFilters.includes(device.line.name) &&
          Object.values(device).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
      setFilteredData(filteredDevices || []);
    }
  }, [data, selectedFilters, searchQuery]);

  return (
    <div className="list-container">
      {isGridView ? (
        <div>
          <div className="headerGrid">
            <Header
              deviceCount={filteredData?.length}
              isGridView={isGridView}
            />
          </div>
          <div className="grid-container">
            {filteredData?.map((device: IDevices) => (
              <GridItem data={device} key={device.id} />
            ))}
          </div>
        </div>
      ) : (
        <table className="table">
          <thead>
            <Header
              deviceCount={filteredData?.length}
              isGridView={isGridView}
            />
          </thead>
          <tbody>
            {filteredData?.map((device: IDevices) => (
              <ListItem data={device} key={device.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default List;
