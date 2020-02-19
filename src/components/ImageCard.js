import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div>
        <img src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
