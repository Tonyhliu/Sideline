const React = require('react');
const PropTypes = React.PropTypes;

const UploadButton= React.createClass({

  upload: function(e) {
    // e.preventDefault();
    // cloudinary.openUploadWidget(
    //   window.cloudinary_options,
    //   function(error, images){
        // if (error === null) {
        //   // upload success
        //
        // } else {
        //
        // }
    // });
  },

  render: function() {
    return (
      <button onClick={this._upload}>Upload Image</button>
    );
  }

});

module.exports = UploadButton;
