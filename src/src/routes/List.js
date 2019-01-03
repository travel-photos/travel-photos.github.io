import React from 'react';
import _ from 'lodash';
import request from 'superagent';
import styles from './IndexPage.less';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../components/Image';

class List extends React.Component{
  constructor(p){
    super(p);
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    const { match } = this.props;
    const folder = _.get(match, 'params.folder');    
    // 获取数据
    request('./config.json').then(d => d.text).then(JSON.parse).then(obj => {
      this.setState({
        list: _.get(obj.folders, folder)
      });
    });
  }

  render(){
    const { match } = this.props;
    const folder = _.get(match, 'params.folder');
    const { list } = this.state;
    const render = [
      [],
      [],
      []
    ];
    // 分组
    let index = 0; 
    for(let item of list){
      render[index].push(item);
      index ++;
      index %= 3;
    }

    return (
      <div className={styles.normal}>
        <Header subtitle={folder}/>
        <div style={{ width: '90%', margin: '0 auto', overflow: 'hidden'}}>
          <div className={"col-md-6 col-lg-4 col-sm-12 col-xs-12 left"} >
            {
              render[0].map((image, index) => {
                return (
                  <Image src={image} key={index} />
                )
              })
            }          
          </div>
          <div className={"col-md-6 col-lg-4 col-sm-12 col-xs-12 left"} >
            {
              render[1].map((image, index) => {
                return (
                  <Image src={image} key={index} />
                )
              })
            }          
          </div>
          <div className={"col-md-6 col-lg-4 col-sm-12 col-xs-12 left"} >
            {
              render[2].map((image, index) => {
                return (
                  <Image src={image} key={index} />
                )
              })
            }          
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default List;