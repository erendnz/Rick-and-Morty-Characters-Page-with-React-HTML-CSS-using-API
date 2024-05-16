import React from "react";
import "./index.scss";
const CharacterItem = ({ data }) => {
  const { name, status, species, origin, location, image, episode, url } = data;

  const getStatusIconColor = () => {
    switch (status) {
      case 'Alive':
        return 'rgb(85, 204, 68)';
      case 'Dead':
        return 'rgb(214, 61, 46)';
      case 'unknown':
      default:
        return 'rgb(158, 158, 158)';
    }
  };

  return (
    <section className="container">
      <div className="characterContainer">
        <article className="characterCard">
          <div className="characterCardImage">
            <img src={image} alt={name} />
          </div>
          <div className="characterCardContent">
            <div className="characterCardContentSection">
              <a href={url} rel="noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
                <h2>{name}</h2>
              </a>
              <span className="status">
                <span className="status-icon" style={{ background: getStatusIconColor() }}></span>
                {status} - {species}
              </span>
            </div>
            <div className="characterCardContentSection">
              <span className="text-gray">Last known location:</span>
              <a href={location.url} rel="noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
                {location.name}
              </a>
            </div>
            <div className="characterCardContentSection">
              <span className="text-gray">First seen in:</span>
              <a href={episode[0]} rel="noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
                {episode[0]} {/* veya episode numarasını veya adını buradan çıkarabilirsiniz */}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CharacterItem;


