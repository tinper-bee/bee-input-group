import InputGroup from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'bee-form-control';
import FormGroup from 'bee-form-group';
import Button from 'bee-button';


function demo1() {
    return (
        <div className="demo-input-group">
        	<InputGroup>
        		<FormControl />
        	</InputGroup>
        </div>
    );
}

function demo2() {
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
    );
}

function demo3() {
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
			        <InputGroup.Button>
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
    );
}



ReactDOM.render(demo1(), document.getElementById('ReactInputGroupDemo1'));
ReactDOM.render(demo2(), document.getElementById('ReactInputGroupDemo2'));
ReactDOM.render(demo3(), document.getElementById('ReactInputGroupDemo3'));
