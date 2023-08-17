import { useState } from 'react';
import '../../styles/devices.css';
import { BeatLoader } from 'react-spinners';
import { IDevices } from '../../utils/dto/dtos';
import { List } from '../../components/list';
import Toolbar from '../../components/toolbar/toolbar';

interface ChildComponentProps {
  data: IDevices[] | undefined;
  isLoading: boolean;
}

function Devices(props: ChildComponentProps) {
  const devicesData = props.data;
  const isLoading = props.isLoading;
  const allLineData = devicesData?.map((device) => device.line);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isGridView, setIsGridView] = useState(false); // State to track grid view

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFiltersApplied = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  const toggleGridView = () => {
    setIsGridView((gridOrList) => !gridOrList);
  };

  return (
    <div className="devices">
      <Toolbar
        data={allLineData}
        onApplyFilters={handleFiltersApplied}
        onSearch={handleSearch}
        onToggleGridView={toggleGridView}
        isGridView={isGridView}
      />
      {devicesData ? (
        <List
          data={devicesData}
          selectedFilters={selectedFilters}
          searchQuery={searchQuery}
          isGridView={isGridView}
        />
      ) : (
        <p>{isLoading ? <BeatLoader /> : null}</p>
      )}
    </div>
  );
}

export default Devices;
