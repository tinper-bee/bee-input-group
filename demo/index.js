
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" InputGroup 两边是可选Addon","code":"/**\r\n * @title InputGroup 两边是可选Addon\r\n * @description \r\n */\r\nimport React, { Component } from 'react';\r\n\nimport { InputGroup, FormControl } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-input-group\">\r\n\t\t\t\t<InputGroup >\r\n\t\t\t\t\t<InputGroup.Addon >.00</InputGroup.Addon>\r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t\t<InputGroup.Addon>.00</InputGroup.Addon>\r\n\t\t\t\t</InputGroup>\r\n\t\t\t\t<InputGroup>\r\n\t\t\t\t\t<InputGroup.Addon>.00</InputGroup.Addon>\r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t</InputGroup>\r\n\t\t\t\t<InputGroup>\r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t\t<InputGroup.Addon>.00</InputGroup.Addon>\r\n\t\t\t\t</InputGroup>\t\t\r\n\t        </div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" ","scss_code":".demo-input-group .u-input-group {\r\n\tmargin-bottom: 5px;\r\n\twidth:500px;\r\n}"},{"example":<Demo2 />,"title":" InputGroup 两边是可选Button","code":"/**\r\n * @title InputGroup 两边是可选Button\r\n * @description \r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\n\n\nimport { InputGroup, Menu, Button, Dropdown, FormControl } from 'tinper-bee';\r\n\r\nlet MenuItem = Menu.Item;\r\nlet Divider = Menu.Divider;\r\nlet SubMenu = Menu.SubMenu;\r\nlet MenuItemGroup = Menu.MenuItemGroup;\r\n\r\n\r\nfunction onSelect({ key }) {\r\n\tconsole.log(`${key} selected`);\r\n\r\n}\r\n\r\nfunction onVisibleChange(visible) {\r\n\tconsole.log(visible);\r\n}\r\n\r\nconst menu1 = (\r\n\t<Menu\r\n\t\tmultiple\r\n\t\tonSelect={onSelect}>\r\n\t\t<MenuItem key=\"1\">借款合同</MenuItem>\r\n\t\t<MenuItem key=\"2\">抵/质押合同</MenuItem>\r\n\t\t<MenuItem key=\"3\">担保合同</MenuItem>\r\n\t\t<MenuItem key=\"4\">联保合同</MenuItem>\r\n\t\t<Divider />\r\n\t\t<MenuItem key=\"5\">合同审批</MenuItem>\r\n\t\t<MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\r\n\t</Menu>\r\n);\r\nclass Demo2 extends Component {\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-input-group\">\r\n\t\t\t\t<InputGroup>\r\n\t\t\t\t\t<InputGroup.Button>\r\n\t\t\t\t\t\t<Button>test</Button>\r\n\t\t\t\t\t</InputGroup.Button>\r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t</InputGroup>\r\n\r\n\t\t\t\t<InputGroup>\r\n\t\t\t\t\t<InputGroup.Button shape=\"border\">\r\n\t\t\t\t\t\t<Dropdown\r\n\t\t\t\t\t\t\ttrigger={['click']}\r\n\t\t\t\t\t\t\toverlay={menu1}\r\n\t\t\t\t\t\t\tanimation=\"slide-up\"\r\n\t\t\t\t\t\t\tonVisibleChange={onVisibleChange}\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<Button shape=\"border\">带有分割线的下拉 <span className=\"uf uf-arrow-down\"> </span></Button>\r\n\t\t\t\t\t\t</Dropdown>\r\n\t\t\t\t\t</InputGroup.Button>\r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t\t<InputGroup.Button>\r\n\t\t\t\t\t\t<Button><span className=\"uf uf-search\"> </span></Button>\r\n\t\t\t\t\t</InputGroup.Button>\r\n\t\t\t\t</InputGroup>\r\n\t\t\t\t<InputGroup simple>\r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t\t<InputGroup.Button shape=\"border\">\r\n\t\t\t\t\t\t<span className=\"uf uf-search\"> </span>\r\n\t\t\t\t\t</InputGroup.Button>\r\n\t\t\t\t</InputGroup>\r\n\t\t\t\t<InputGroup>\r\n\t\t\t\t\t<InputGroup.Button>\r\n\t\t\t\t\t\t<Button>test</Button>\r\n\t\t\t\t\t</InputGroup.Button>\r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t\t<InputGroup.Button>\r\n\t\t\t\t\t\t<Button>test</Button>\r\n\t\t\t\t\t</InputGroup.Button>\r\n\t\t\t\t</InputGroup>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" ","scss_code":".demo-input-group .u-input-group {\r\n\tmargin-bottom: 5px;\r\n\twidth:500px;\r\n}"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
