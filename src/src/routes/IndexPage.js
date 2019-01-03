import React from 'react';
import { connect } from 'dva';
import request from 'superagent';
import _ from 'lodash';
import { Link } from 'dva/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './IndexPage.less';


class IndexPage extends React.Component{
  constructor(p){
    super(p);
    this.state = {
      loading: false,
      folders: {}
    }
  }

  componentDidMount(){
    request('./config.json').then(d => d.text).then(JSON.parse).then(obj => {
      this.setState({
        folders: obj.folders
      });
    });
  }

  render(){
    const { folders } = this.state;
    return (
      <div className={styles.normal}>
        <Header />
        <div style={{ overflow: 'hidden'}}>
          {
            Object.keys(folders).map(key => {
              return (
                <div 
                  className={ "col-md-6 col-lg-4 col-sm-12 col-xs-12 "  + styles.container}
                  style={{ float: 'left', padding: 0, height: 250 }}
                  key={key}
                >
                  <div className={styles.mask}>
                    <Link className={styles.button} to={"/list/" + key}> VIEW {key} </Link>
                  </div>                
                  <div style={{
                    height: '100%',
                    width: '100%',
                    background: `url(${_.get(folders[key], '[0]')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}/>
                </div>
              )
            })
          }
        </div>
        <Footer />
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
