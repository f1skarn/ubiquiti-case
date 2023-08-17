import { useState } from 'react';
import '../../styles/toolbar.css';
import FilterPopup from '../list/filter/filter';
import { ILine } from '../../utils/dto/dtos';
import GridView from '../../assets/Union.png';
import ListView from '../../assets/ListView.png';

interface ToolBarProps {
  data: ILine[] | undefined;
  onApplyFilters: (filters: string[]) => void;
  onSearch: (query: string) => void;
  onToggleGridView: () => void;
  isGridView: boolean;
}

const Toolbar: React.FC<ToolBarProps> = ({
  data,
  onApplyFilters,
  onSearch,
  onToggleGridView,
  isGridView,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenFilterPopup = () => {
    setIsFilterPopupOpen(true);
  };

  const handleCloseFilterPopup = () => {
    setIsFilterPopupOpen(false);
  };

  const handleFiltersApplied = (filters: string[]) => {
    setSelectedFilters(filters);
    onApplyFilters(filters);
    handleCloseFilterPopup();
  };
  const handleClearSearch = () => {
    setSearchQuery('');
    handleSearch({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const productLines = Array.from(new Set(data?.map((line) => line.name)));

  return (
    <div className="toolbar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="clear-button" onClick={handleClearSearch}>
          ×
        </button>
      </div>
      <div className="button-group">
        <button onClick={onToggleGridView}>
          {isGridView ? (
            <img src={ListView} alt="List View" />
          ) : (
            <img src={GridView} alt="Grid View" />
          )}
        </button>
        <button onClick={handleOpenFilterPopup}>Filter</button>
        {isFilterPopupOpen && (
          <FilterPopup
            productLines={productLines}
            selectedFilters={selectedFilters}
            onApplyFilters={handleFiltersApplied}
          />
        )}
      </div>
    </div>
  );
};

export default Toolbar;
