const React = require('react');
const PropTypes = React.PropTypes;

const UploadButton= React.createClass({
  getInitialState: function() {
    return({ images: [] });
  },

  postImage: function(url) {
    // api action & api util
    const img = {url: url};
    $.ajax({
      url: "/api/images",
      method: "POST",
      data: {image: img},
      success: function(image) {
        const images = this.state.images;
        images.push(image);
        this.setState({ images: images });
      }.bind(this)
    });
  },

  upload: function(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error === null) {
          this.props.postImage(images[0].url);
        }
        // else {
        //
        // }
    });
  },

  render: function() {
    return (
      <button onClick={this._upload}>Upload Image</button>
    );
  }

});

module.exports = UploadButton;
