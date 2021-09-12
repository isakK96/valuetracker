export default function Sidebar(props) {
  return (
    <div className="container">
      <div className="starred">
        <h2>Starred</h2>
        <ul>
          {props.starredList.map((item, key) => (
            <li key={key}>
              <a href="#" onClick={props.handleHistoryClick}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="recent">
        <h2>Recent</h2>
        <ul>
          {props.searchHistory.map((item, key) => (
            <li key={key}>
              <a href="#" onClick={props.handleHistoryClick}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
