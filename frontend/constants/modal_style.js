module.exports = {
  overlay : {
    position          : 'absolute',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    height            : '700px',
    overflow          : 'hidden'
  },
  content : {
    position                   : 'fixed',
    width                      : '330px',
    top                        : '10%',
    left                       : '40%',
    right                      : '40%',
    bottom                     : '10%',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '15px',
    opacity                    : '0',
    transition                 : 'opacity 1s',
    height                     : '540px'
  }
};
