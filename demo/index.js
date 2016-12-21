
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormGroup from 'bee-form-group';
import FormControl from 'bee-form-control';
import InputGroup from '../src';


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
				        <FormControl type="text" />
				        <InputGroup.Button shape="border">
				 			<Button>test</Button>
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
}var DemoArray = [{"example":<Demo1 />,"title":" InputGroup 两边是可选Add","code":"/**\n * @title InputGroup 两边是可选Addon\n * @description \n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-input-group\">\n\t        \t<FormGroup>\n\t        \t\t<InputGroup>\n\t\t\t\t \t\t<InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t        <InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup>\n\t\t\t\t \t\t<InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t        <InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t    </InputGroup>\n\t        \t</FormGroup>\t\t\n\t        </div>\n\t\t)\n\t}\n}","desc":" "},{"example":<Demo2 />,"title":" InputGroup 两边是可选But","code":"/**\n * @title InputGroup 两边是可选Button\n * @description \n */\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<div className=\"demo-input-group\">\n\t        \t<FormGroup>\n\t\t\t\t    <InputGroup>\n\t\t\t\t \t\t<InputGroup.Button>\n\t\t\t\t \t\t\t<Button>test</Button>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t        <InputGroup.Button shape=\"border\">\n\t\t\t\t \t\t\t<Button>test</Button>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t    </InputGroup>\n\n\t\t\t\t    <InputGroup>\n\t\t\t\t    \t<InputGroup.Button>\n\t\t\t\t \t\t\t<Button>test</Button>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t        <InputGroup.Button>\n\t\t\t\t \t\t\t<Button>test</Button>\n\t\t\t\t \t\t</InputGroup.Button>\n\t\t\t\t    </InputGroup>\n\t        \t</FormGroup>\t\t\n\t        </div>\n\t\t)\n\t}\n}","desc":" "}]


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
