import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.less';
import Img from 'react-image'

class Image extends React.Component{

  constructor(p){
    super(p);
    this.state = {
      show: false,
    }

    this.action = this.action.bind(this);
  }


  action(type){
    return () => {
      this.setState({
        show: type
      })
    }
  }

  render(){
    const { className, src } = this.props;
    return (
      <div className={className + " " + styles.container} >
        {
          this.state.show && (
            <div className={styles.bigPic} onClick={this.action(false)}>
              <Img 
                src={src} alt={src} 
                onClick={this.action(false)} 
                loader={<div style={{ color: 'white' }}>加载中...</div>}
              />
            </div>
          )
        }      
        <div className={styles.mask} onClick={this.action(true)} >
          <span className={styles.plus}> + </span>
        </div>
        <img src={src} alt={src} style={{ width: '100%', padding: '15px 0' }}/>
      </div>
    )
  }
}

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
}

export default Image;