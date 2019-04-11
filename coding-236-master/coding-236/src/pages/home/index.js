import React from 'react'
import './index.less'
// import {DocumentTitle} from 'react-document-title'
export default class Home extends React.Component{

    componentDidMount() {
        document.title='学生创新项目管理系统';
    }

    render(){
        return (
            <div className="home-wrap">
                欢迎使用学生创新项目管理系统
            </div>
        );
    }
}