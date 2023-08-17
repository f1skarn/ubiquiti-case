import React, { useState, useEffect } from 'react';
import '../../../styles/filterpopup.css';

interface FilterPopupProps {
  productLines: string[];
  selectedFilters: string[];
  onApplyFilters: (selectedFilters: string[]) => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  productLines,
  selectedFilters: parentSelectedFilters,
  onApplyFilters,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    setSelectedFilters(parentSelectedFilters);
  }, [parentSelectedFilters]);

  const handleCheckboxChange = (line: string) => {
    if (selectedFilters.includes(line)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== line));
    } else {
      setSelectedFilters([...selectedFilters, line]);
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters);
  };

  return (
    <div className="filter-popup">
      <div className="filter-header">
        <h5>Filter</h5>
        <button className="close-button" onClick={handleApplyFilters}>
          ×
        </button>
      </div>
      <div className="border"></div>
      <div className="filter-options">
        <h5>Product line</h5>
        {productLines.map((line) => (
          <div key={line} className="filter-option">
            <input
              type="checkbox"
              defaultChecked={parentSelectedFilters.includes(line)}
              onChange={() => handleCheckboxChange(line)}
            />
            <label>{line}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPopup;
