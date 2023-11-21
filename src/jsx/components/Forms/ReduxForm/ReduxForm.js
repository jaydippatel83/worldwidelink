import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import showResults from './ShowResults';
import MaterialUiForm from './MaterialUiForm';

const ReduxForm = props => {
	return (
		<>			
			<div className="row justify-content-center">
				<div className="col-xl-6 col-xxl-8 col-lg-9">
					<MuiThemeProvider muiTheme={getMuiTheme()}>
						<div className="card">
							<div className="card-header">
								<h4 className="card-title">Form</h4>
							</div>
							<div className="card-body">
								<MaterialUiForm onSubmit={showResults} />
							</div>
						</div>
					</MuiThemeProvider>	
				</div>
				<div className="col-xl-4 col-xxl-4 col-lg-3" >
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Result</h4>
						</div>
						<div className="card-body">
							<pre className="" id="ReduxFormJSON">
							</pre>
						</div>
					</div>
				</div> 
			</div>					
		</>
	)
}
export default ReduxForm;	
