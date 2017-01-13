
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormGroup from 'bee-form-group';
import FormControl from 'bee-form-control';
import InputGroup from '../src';
import Dropdown from 'bee-dropdown';
import Menu, { Item as MenuItem, Divider, SubMenu, MenuItemGroup } from 'bee-menu';

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 * @title InputGroup 两边是可选Addon
 * @description 
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="demo-input-group">
	        	<FormGroup>
	        		<InputGroup>
				 		<InputGroup.Addon>.00</InputGroup.Addon>
				        <FormControl type="text" />
				        <InputGroup.Addon>.00</InputGroup.Addon>
				    </InputGroup>

				    <InputGroup>
				 		<InputGroup.Addon>.00</InputGroup.Addon>
				        <FormControl type="text" />
				    </InputGroup>

				    <InputGroup>
				        <FormControl type="text" />
				        <InputGroup.Addon>.00</InputGroup.Addon>
				    </InputGroup>
	        	</FormGroup>		
	        </div>
		)
	}
}/**
 * @title InputGroup 两边是可选Button
 * @description 
 */

function onSelect({ key }) {
	console.log(`${key} selected`);

}

function onVisibleChange(visible) {
	console.log(visible);
}

const menu1 = (
 <Menu
   multiple
   onSelect={onSelect}>
   <MenuItem key="1">借款合同</MenuItem>
   <MenuItem key="2">抵/质押合同</MenuItem>
   <MenuItem key="3">担保合同</MenuItem>
   <MenuItem key="4">联保合同</MenuItem>
   <Divider />
   <MenuItem key="5">合同审批</MenuItem>
   <MenuItem key="6">抵/质押合同跟踪</MenuItem>
 </Menu>
);
class Demo2 extends Component {
	render(){
		return (
			<div className="demo-input-group">
	        	<FormGroup>
				    <InputGroup>
				 		<InputGroup.Button>
				 			<Button>test</Button>
				 		</InputGroup.Button>
				        <FormControl type="text" />
				    </InputGroup>

				    <InputGroup>
				    	<InputGroup.Button shape="border">
				 			<Dropdown
			                   trigger={['click']}
			                   overlay={menu1}
			                   animation="slide-up"
			                   onVisibleChange={onVisibleChange}
			                 >
			                   <Button shape="border">带有分割线的下拉 <span className="uf uf-arrow-down"> </span></Button>
			                 </Dropdown>
				 		</InputGroup.Button>
				        <FormControl type="text" />
				        <InputGroup.Button>
				 			<Button><span className="uf uf-search"> </span></Button>
				 		</InputGroup.Button>
				    </InputGroup>

				    <InputGroup simple>
				        <FormControl style={{width:300}} type="text" />
				        <InputGroup.Button shape="border">
				 			<span className="uf uf-search"> </span>
				 		</InputGroup.Button>
				    </InputGroup>

				    <InputGroup>
				    	<InputGroup.Button>
				 			<Button>test</Button>
				 		</InputGroup.Button>
				        <FormControl type="text" />
				        <InputGroup.Button>
				 			<Button>test</Button>
				 		</InputGroup.Button>
				    </InputGroup>
	        	</FormGroup>		
	        </div>
		)
	}
}var DemoArray = [{"example":<Demo1 />,"title":" InputGroup 两边是可选Add","code":"/**\n * @title InputGroup 两边是可选Addon\n * @description \n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-input-group\">\n\t        \t<FormGroup>\n\t        \t\t<InputGroup>\n\t\t\t\t \t\t<InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t        <InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup>\n\t\t\t\t \t\t<InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t        <InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t    </InputGroup>\n\t        \t</FormGroup>\t\t\n\t        </div>\n\t\t)\n\t}\n}","desc":" "},{"example":<Demo2 />,"title":" InputGroup 两边是可选But","code":"/**\n * @title InputGroup 两边是可选Button\n * @description \n */\n\nfunction onSelect({ key }) {\n\tconsole.log(`${key} selected`);\n\n}\n\nfunction onVisibleChange(visible) {\n\tconsole.log(visible);\n}\n\nconst menu1 = (\n <Menu\n   multiple\n   onSelect={onSelect}>\n   <MenuItem key=\"1\">借款合同</MenuItem>\n   <MenuItem key=\"2\">抵/质押合同</MenuItem>\n   <MenuItem key=\"3\">担保合同</MenuItem>\n   <MenuItem key=\"4\">联保合同</MenuItem>\n   <Divider />\n   <MenuItem key=\"5\">合同审批</MenuItem>\n   <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n </Menu>\n);\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<div className=\"demo-input-group\">\n\t        \t<FormGroup>\n\t\t\t\t    <InputGroup>\n\t\t\t\t \t\t<InputGroup.Button>\n\t\t\t\t \t\t\t<Button>test</Button>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup>\n\t\t\t\t    \t<InputGroup.Button shape=\"border\">\n\t\t\t\t \t\t\t<Dropdown\n\t\t\t                   trigger={['click']}\n\t\t\t                   overlay={menu1}\n\t\t\t                   animation=\"slide-up\"\n\t\t\t                   onVisibleChange={onVisibleChange}\n\t\t\t                 >\n\t\t\t                   <Button shape=\"border\">带有分割线的下拉 <span className=\"uf uf-arrow-down\"> </span></Button>\n\t\t\t                 </Dropdown>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t        <InputGroup.Button>\n\t\t\t\t \t\t\t<Button><span className=\"uf uf-search\"> </span></Button>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup simple>\n\t\t\t\t        <FormControl style={{width:300}} type=\"text\" />\n\t\t\t\t        <InputGroup.Button shape=\"border\">\n\t\t\t\t \t\t\t<span className=\"uf uf-search\"> </span>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup>\n\t\t\t\t    \t<InputGroup.Button>\n\t\t\t\t \t\t\t<Button>test</Button>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t        <InputGroup.Button>\n\t\t\t\t \t\t\t<Button>test</Button>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t    </InputGroup>\n\t        \t</FormGroup>\t\t\n\t        </div>\n\t\t)\n\t}\n}","desc":" "}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
