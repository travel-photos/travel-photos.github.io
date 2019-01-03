import React from 'react';
import { Link } from 'dva/router'
import LOGO from '../assets/lobo.png';
import styles from './Header.less';

class Header extends React.Component{
  render(){
    const { subtitle } = this.props;
    return (
      <header className={styles.header}>
        <div style={{ marginBottom: 30 }}>
          <Link to="/">
            <img  style={{height: 40 }} src={LOGO} alt="logo" />
          </Link>
        </div>
        <Link 
          to="/" 
          style={{ 
            fontSize: 18 , 
            fontFamily: 'serif', 
            display: 'block', 
            marginBottom: 10, 
            letterSpacing: 5,
            color: 'white',
            textDecoration: 'none'
          }}
        >
          萝卜摄影工作室
        </Link>
        <span style={{
          letterSpacing: 8.6,
          fontFamily: 'cursive',
          fontSize: 15,
          opacity: 0.6
        }}>LOBO Photography</span>

        {
          subtitle && (
            <div
              style={{ 
                  fontSize: 18 , fontFamily: 'serif', display: 'block', marginBottom: 10, letterSpacing: 5 ,
                  marginTop: 20
              }}
            >
              { subtitle }
            </div>
          )
        }
      </header>
    )
  }
}

export default Header;