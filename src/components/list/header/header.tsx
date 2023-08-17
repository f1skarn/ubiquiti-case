import '../../../styles/header.css';

interface ChildComponentProps {
  deviceCount: number | undefined;
  isGridView: boolean;
}

function Header(props: ChildComponentProps) {
  const { deviceCount, isGridView } = props;

  const titles = {
    DEVICES: `devices`,
    PRODUCT_LINE: `PRODUCT LINE`,
    NAME: `NAME`,
  };
  return (
    <tr className="header">
      <th className="first-column">
        <h6>{deviceCount + ' ' + titles.DEVICES}</h6>
      </th>
      {!isGridView ? (
        <>
          <th className="column">
            <h5>{titles.PRODUCT_LINE}</h5>
          </th>
          <th className="column">
            <h5>{titles.NAME}</h5>
          </th>
        </>
      ) : null}
    </tr>
  );
}

export default Header;
