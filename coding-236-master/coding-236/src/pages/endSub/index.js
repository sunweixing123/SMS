import React, {Component} from 'react';
import { Button, Modal } from 'antd';
import ClassStatic from '../../components/classStatic'

class EndSub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            subStatic: '未完成',//结题状态
        } 
        this.onhandleSubmit = this.onhandleSubmit.bind(this);
        this.onhandleCancel = this.onhandleCancel.bind(this);
    }

    onhandleSubmit() {
        this.setState({
            visible: true,
        });
    }

    onhandleCancel() {
        this.setState({
            visible: false,
        })
    }

    render() {
        const { visible, subStatic } = this.state;
        return (
            <div>
                <ClassStatic />
                <div>结题状态：
                    <span style={{color: 'red'}}>{subStatic}</span>
                </div>
                <Button onClick={this.onhandleSubmit}>查看当前状态</Button>
                <Button onClick={this.onhandleSubmit}>点击结题</Button>
                <Modal
                  visible = {visible}
                  title = '结题'
                  onOk={this.onhandleCancel}
                  onCancel={this.onhandleCancel}
                >
                是否结题？
                </Modal>
            </div>
        );
    }
}

export default EndSub;