import React from 'react'
import { Card,Button,Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjs from 'draftjs-to-html';
import { reduce } from 'zrender/lib/core/util';
import ClassStatic from '../../components/classStatic'
export default class IntRevText extends React.Component {

    // state = {
    //     showRichText:false,
    //     // editorState:'这是我的项目申报'
    //     editorState: '', //富文本的内容，传给后端
    // }
    constructor(props) {
        super(props);
        this.state = {
          showRichText:false,
          // editorState:'这是我的中期审核'
          editorState: '', //富文本的内容，传给后端
          revState: '未审核',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClearContent = ()=>{
        this.setState({
            editorState:''
        });
    }

    handleGetText = () => {
        this.setState({
            showRichText:true
        });
    }

    onEditorChange = (contentState)=>{
        this.setState({
            contentState
        });

    }

    onEditorStateChange = (editorState)=>{
        this.setState({
            editorState,
        });
    }

    handleSubmit() {
        console.log('提交成功');
    }


    render() {
        const { editorState, revState } = this.state;
        return (
            <div>
                <ClassStatic />
                <Card>
                    <Button type="primary" onClick={this.handleClearContent} style={{marginRight:10}}>清空内容</Button>
                    <Button type="primary" onClick={this.handleGetText}>获取HTML文本</Button>
                </Card>
                <Card title="请填写中期考核的详细信息">
                    <Editor
                        editorState={editorState}
                        onContentStateChange={this.onEditorChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={()=>{
                        this.setState({
                            showRichText:false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.contentState)}
                </Modal>
                <Button onClick={this.handleSubmit}>提交</Button>
                <div>审核情况：
                    <span style={{color: 'red'}}>{revState}</span>
                </div>
            </div>
        );
    }
}