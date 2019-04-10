import React, {Component} from 'react';
import './index.less';

class ClassStatic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '学生创新管理系统',
            type: '软件工程',
            date: '',
        }
    }

    render() {
        const {name, type, date} = this.state;
        return (
            <div className="classStatic">
              <h3>课题基本信息</h3>
              <div>课程名称：<span>{name}</span></div>
              {/* <span>可选专业:<span>{type}</span></span>      
              <span>可选专业:<span>{type}</span></span>    
              <span>可选专业:<span>{type}</span></span>
              <span>可选专业:<span>{type}</span></span>
              <span>可选专业:<span>{type}</span></span>
              <span>可选专业:<span>{type}</span></span> */}
              <table>
                  <tr>
                      <td><span>可选专业:<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;</span>  </td>
                      <td><span>可选专业:<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;</span>  </td>
                      <td><span>可选专业:<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;</span>  </td>
                  </tr>
                  <tr>
                      <td><span>可选专业:<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;</span>  </td>
                      <td><span>可选专业:<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;</span>  </td>
                      <td><span>可选专业:<span>{type}</span></span>  </td>
                  </tr>
                  <tr>
                      <td><span>可选专业:<span>{type}</span></span>  </td>
                      <td><span>可选专业:<span>{type}</span></span>  </td>
                      <td><span>可选专业:<span>{type}</span></span>  </td>
                  </tr>
              </table>
            </div>
        )
    }
}

export default ClassStatic;