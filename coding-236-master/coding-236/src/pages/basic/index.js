import React from 'react'
import { Card, Button, Form, Select, Modal, Input, Tree, Transfer } from 'antd'
import ETable from './../../components/ETable'
import Utils from './../../utils/utils'
import axios from './../../axios'
import menuConfig from './../../config/menuConfig'
const Option = Select.Option;
const FormItem = Form.Item;
const TreeNode = Tree.TreeNode;
export default class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'teacher',
        }
        this.basic = this.basic.bind(this);
    }

    componentWillMount(){
        axios.requestList(this,'/role/list',{});
    }
    // 打开创建角色弹框
    handleRole=()=>{
        this.setState({
            isRoleVisible:true
        })
    }
    // 角色提交
    handleRoleSubmit=()=>{
        let data = this.roleForm.props.form.getFieldsValue();
        axios.ajax({
            url:'role/create',
            data:{
                params:data
            }
        }).then((res)=>{
            if(res.code ==0){
                this.setState({
                    isRoleVisible:false
                })
                this.roleForm.props.form.resetFields();
                axios.requestList(this, '/role/list', {});
            }
        })
    }

    // 权限设置
    handlePermission = ()=>{
        let item = this.state.selectedItem;
        if (!item){
            Modal.info({
                text:'请选择一个角色'
            })
            return;
        }
        this.setState({
            isPermVisible:true,
            detailInfo:item,
            menuInfo: item.menus
        })
    }

    handlePermEditSubmit = ()=>{
        let data = this.permForm.props.form.getFieldsValue();
        data.role_id = this.state.selectedItem.id;
        data.menus = this.state.menuInfo;
        axios.ajax({
            url:'/permission/edit',
            data:{
                params:{
                    ...data
                }
            }
        }).then((res)=>{
            if(res){
                this.setState({
                    isPermVisible:false
                })
                axios.requestList(this, '/role/list', {});
            }
        })
    }

    // 用户授权
    hanldeUserAuth = ()=>{
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                text: '请选择一个角色'
            })
            return;
        }
        this.setState({
            isUserVisible: true,
            detailInfo: item
        })
        this.getRoleUserList(item.id);
    }

    getRoleUserList = (id)=>{
        axios.ajax({
            url:'/role/user_list',
            data:{
                params:{
                    id
                }
            }
        }).then((res)=>{
            if(res){
                this.getAuthUserList(res.result);
            }
        })
    }

    // 筛选目标用户
    getAuthUserList = (dataSource)=>{
        const mockData = [];
        const targetKeys = [];
        if (dataSource && dataSource.length>0){
            for(let i=0;i< dataSource.length;i++){
                const data = {
                    key: dataSource[i].user_id,
                    title: dataSource[i].user_name,
                    status: dataSource[i].status
                }
                if(data.status == 1){
                    targetKeys.push(data.key);
                }
                mockData.push(data);
            }
            this.setState({
                mockData, targetKeys
            })
        }
    }
    // 用户授权提交
    handleUserSubmit = ()=>{
        let data = {}
        data.user_ids = this.state.targetKeys;
        data.role_id = this.state.selectedItem.id;
        axios.ajax({
            url:'/role/user_role_edit',
            data:{
                params:{
                    ...data
                }
            }
        }).then((res)=>{
            if(res){
                this.setState({
                    isUserVisible:false
                })
                axios.requestList(this, '/role/list', {});
            }
        })
    }

    basic() {
        const {role} = this.state;
        if (role === 'student') {
            return (
              <div>
               <div>基本信息：</div>
                <h1>`角色：${'学生'}`</h1>
                <h1>`姓名：${'孙伟星'}`</h1>
                <h1>`学校：${'东北农业大学'}`</h1>
                <h1>`专业：${'软件工程'}`</h1>
                <h1>`性别：${'男'}`</h1>
                <h1>`指导教师：${'孙伟星'}`</h1>
                <h1>`项目名称：${'东北农业大学'}`</h1>
                <h1>`成绩：${'软件工程'}`</h1>
                <h1>`审核状态：${'男'}`</h1>
              </div>
            )
        } else {
            return (
                <div>
                 <div>基本信息：</div>
                  <h1>`角色：${'教师'}`</h1>
                  <h1>`姓名：${'孙伟星'}`</h1>
                  <h1>`学校：${'东北农业大学'}`</h1>
                  <h1>`专业：${'软件工程'}`</h1>
                  <h1>`性别：${'男'}`</h1>
                  <h1>`指导学生：${'孙伟星'}`</h1>
                  <h1>`项目名称：${'东北农业大学'}`</h1>
                  <h1>`成绩：${'软件工程'}`</h1>
                  <h1>`审核状态：${'男'}`</h1>
                </div>
              )
        }

    }
    render() {
        return (
            this.basic()
        );
    }
}

class RoleAuthForm extends React.Component {

    onCheck = (checkedKeys) => {
        this.props.patchMenuInfo(checkedKeys)
    }
    filterOption = (inputValue, option) => {
        return option.title.indexOf(inputValue) > -1;
    }
    handleChange = (targetKeys)=>{
        this.props.patchUserInfo(targetKeys);
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }
        const detail_info = this.props.detailInfo;
        const menuInfo = this.props.menuInfo;
        return (
            <Form layout="horizontal">
                <FormItem label="角色名称" {...formItemLayout}>
                    <Input disabled placeholder={detail_info.role_name} />
                </FormItem>
                <FormItem label="选择用户" {...formItemLayout}>
                    <Transfer
                        listStyle={{width:200,height:400}}
                        dataSource={this.props.mockData}
                        titles={['待选用户', '已选用户']}
                        showSearch
                        searchPlaceholder='输入用户名'
                        filterOption={this.filterOption}
                        targetKeys={this.props.targetKeys}
                        onChange={this.handleChange}
                        render={item => item.title}
                    />
                </FormItem>
            </Form>
        );
    }
}
RoleAuthForm = Form.create({})(RoleAuthForm);