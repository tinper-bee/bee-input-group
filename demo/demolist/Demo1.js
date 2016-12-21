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
}