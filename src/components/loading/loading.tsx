import './loading.css';

function Loading(): JSX.Element {
  return (
    <div className="loader-container">
      <div className="loader-circle"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default Loading;
