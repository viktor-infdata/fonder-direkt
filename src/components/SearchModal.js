import React, { Component } from 'react'
import Modal from 'react-modal';
import SearchInit from './SearchInit'

const customStyles = {
  overlay: {
    zIndex: '40',
    backgroundColor: 'none'
  }
};

/*Modal.setAppElement('#___gatsby')*/

class SearchModal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <React.Fragment>
      <a role="button" onClick={this.handleOpenModal} className="navbar-item is-search" aria-label="Sök">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </a>
      <Modal 
         isOpen={this.state.showModal}
         contentLabel="onRequestClose Example"
         onRequestClose={this.handleCloseModal}
         className="search-splash"
         style={customStyles}
         closeTimeoutMS={150}
         htmlOpenClassName="ReactModal__Html--open"
      >
        <div className="search-splash-inner">
          <a role="button" className="overlay-close" aria-label="close" onClick={this.handleCloseModal}>
            <span className="close-icon">×</span>
            <span className="tip">[ESC]</span>
          </a>
          <div className="section">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-8">
                  <SearchInit />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
    );
  }
}
  
  export default SearchModal
