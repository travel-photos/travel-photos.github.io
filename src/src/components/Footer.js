import React from 'react';
import request from 'superagent';

class Footer extends React.Component{
  constructor(p){
    super(p);
    this.state = {
      contact:{
        
      }
    }
  }

  componentDidMount(){
    request('./config.json').then(d => d.text).then(JSON.parse).then(obj => {
      this.setState({
        contact: obj.contact
      });
    });
  }

  render(){
    const { contact } = this.state;
    console.log(contact);
    return (
      <div style={{ bottom: 0, textAlign: 'left', color: 'white', width: '90%', margin: '50px auto', fontWeight: 'lighter' }}>
        <div style={{ padding: '30px 0', float: 'left'}}>
          <p style={{
            fontSize: 12,
            fontFamily: 'serif'
          }}>联系方式</p>
          {
            contact && ['phone', 'email', 'wechat'].map(key => {
              const title = {
                phone : '电话',
                email: '邮箱',
                wechat: '微信公众号'
              }
              return [(
                <span style={{ fontSize: 12, display: 'block', marginBottom: 15, textIndent: 5 }}>{title[key]} : {contact[key]}</span>
              ),
            ]
            })
          }
        </div>
        <div style={{ float: 'left', marginLeft: 50, padding: '30px 0' }}>
          <p style={{
            fontSize: 12,
            fontFamily: 'serif'
          }}>公众号二维码</p>
            <img style={{ width: 150 }} src={contact['QRCode']} alt="公众号二维码" />
        </div>
        <div style={{ float: 'left', marginLeft: 50, padding: '30px 0' }}>
          <p style={{
            fontSize: 12,
            fontFamily: 'serif'
          }}>个人二维码</p>
            <img style={{ width: 150 }} src={contact['LoboQRCode']} alt="个人二维码" />
        </div>        
      </div>
    )
  }
}

export default Footer;