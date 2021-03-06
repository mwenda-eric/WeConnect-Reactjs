import React from 'react';
import { PropTypes } from 'prop-types';
import InputField from '../inputs/InputField';
import Button from '../inputs/Button';

const ResetPassForm = ({
	handleChange, handleSubmit, email, error, loading,
}) => {
	return (
		<div className="container wrapper">
			<div className="main-center">
				<div className="card">
					<div className="card-body">
						<form className="form" onSubmit={handleSubmit}>
							<InputField
								type="email"
								name="email"
								label="Email used to register"
								onChange={handleChange}
								placeholder="Your registered email"
								value={email}
								required="required"
								error={error.email}
							/>
							<Button
								type="submit"
								className="btn btn-lg btn-success btn-block btn-signin"
								loading={loading}
								text={loading ? 'Requesting... ' : 'Request New Password '}
								disabled={loading ? 'disabled' : null}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
ResetPassForm.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	email: PropTypes.string,
};
ResetPassForm.defaultProps = {
	email: '',
};
export default ResetPassForm;
