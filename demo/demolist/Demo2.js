/**
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
}