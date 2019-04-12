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
              <h2>课题基本信息</h2>
              <div className="title">课程名称：<span>{name}</span></div>
              {/* <span>可选专业:<span>{type}</span></span>      
              <span>可选专业:<span>{type}</span></span>    
              <span>可选专业:<span>{type}</span></span>
              <span>可选专业:<span>{type}</span></span>
              <span>可选专业:<span>{type}</span></span>
              <span>可选专业:<span>{type}</span></span> */}
              <table>
                  <tbody>
                    <tr>
                        <td><span>可选专业:&nbsp;<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;&nbsp;</span>  </td>
                        <td><span>课题申报时间:&nbsp;<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;&nbsp;</span>  </td>
                        <td><span>题目类型:&nbsp;<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;&nbsp;</span>  </td>
                        <td><span>题目来源:&nbsp;<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;&nbsp;</span>  </td>
                    </tr>
                  </tbody>
                  
                  <tbody>
                    <tr>
                        <td><span>选择模式:&nbsp;<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;&nbsp;</span>  </td>
                        <td><span>课题所属专业:&nbsp;<span>{type}</span></span> <span className="tab">&nbsp; &nbsp;&nbsp;</span>  </td>
                        <td><span>指导教师:&nbsp;<span>{type}</span></span>  </td>
                        <td><span>教师职称:&nbsp;<span>{type}</span></span>  </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                        <td><span>导师邮箱:<span>{type}</span></span>  </td>
                        <td><span>学生姓名:<span>{type}</span></span>  </td>
                        <td><span>学生院系专业:<span>{type}</span></span>  </td>
                    </tr>
                  </tbody>
                  
              </table>
            </div>
        )
    }
}

export default ClassStatic;