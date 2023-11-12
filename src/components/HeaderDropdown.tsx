const HeaderDropdown = ({isDropdownOpen}: any) => {
  const handleItemClick = (item: any) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <div className="header-dropdown">
      {isDropdownOpen && (
        <div className="header-dropdown__menu">
          <div
            className="header-dropdown__item"
            onClick={() => handleItemClick("Страна")}>
            Страна
          </div>
          <div
            className="header-dropdown__item"
            onClick={() => handleItemClick("Город")}>
            Город
          </div>
          <div
            className="header-dropdow__item"
            onClick={() => handleItemClick("Класс авто")}>
            Класс авто
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
