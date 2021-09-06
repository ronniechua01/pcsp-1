import React, { useState } from 'react';

//Material UI Dependencies
import { TextField, Container, Checkbox, FormControlLabel, Grid, RadioGroup, Radio, FormGroup, FormControl } from '@material-ui/core';
//Date and Time Picker from Material UI Dependencies
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';

//Design from styles.js
import useStyles from './styles';
import { Form, Button, FormLabel } from 'react-bootstrap';

//Backend Stuff
import { useDispatch } from 'react-redux';
import { createPost } from '../../Actions/posts';
// import FileBase from 'react-file-base64';

const ReportPage = () => {

	//useState 
	const [postData, setPostData] = useState({
		//REPORTING PERSON DETAILS (textBox)
		name: '',
		organization: '',
		address: '',
		primaryContact: '',
		email: '',
		secondaryContact: '',
		alternativeEmail: '',

		//WHAT OCCURED SECTION
		lossOfService: false,
		accessAndComplianceViolations: false,
		systemAndSoftwareMalfunction: false,
		systemOverload: false,
		physicalSecurityBreach: false,
		uncontrolledSystemChanges: false,
		intrusionAttempt: false,
		others1Check: false,
		others1Text: "",

		//HOW OCCURED
		fraudHacking: false,
		physicalDamage: false,
		userError: false,
		hardwareFailure: false,
		softwareFailure: false,
		others2Check: false,
		others2Text: "",

		//WHY OCCURED
		deliberateIntentional: false,
		others3Check: false,
		others3Text: "",
		actualAttack: false,
		accidental: false,

		briefSummary: "",

		//Component Affected Section
		peopleOrg: false,
		hardware: false,
		software: false,
		resourcesServices: false,
		information: false,
		others4Check: false,
		others4Text: "",

		//Adverse Business Impacts
		financialLoss: false,
		personalInformation: false,
		lossOfReputation: false,
		legalAndRegulatory: false,
		disruptionToBusiness: false,
		commercialAndEcons: false,
		others5Check: false,
		others5Text: "",

		//Vulnerabilities Identified
		informationVulnerability: false,
		people: false,
		physical: false,
		sofwareVulnerability: false,
		reputationAndImage: false,
		processesProcedures: false,
		servicesVulnerability: false,
		others6Check: false,
		others6Text: "",

		//INFO SEC EVENT DETAILS (DateTime)
		dateOccured: new Date(),
		timeOccured: new Date(),
		dateDiscovered: new Date(),
		timeDiscovered: new Date(),

		radButtonYes: false,
		radButtonNo: false,


		dateEnded: new Date(),
		timeEnded: new Date(),

		image: '',
	})

	const classes = useStyles();
	const dispatch = useDispatch();

	const handleSumbit = (e) => {

		dispatch(createPost(postData));
		console.log(e)
	}

	//Checkbox Handler
	const [disabled, setDisabled] = useState(true);

	// //Testing
	// function handleCheckBox(checkBox) {
	// 	setDisabled(!disabled);
	// }

	//Testing
	function handleCheckBox(checkBox, textField) {
		if(checkBox.checked) {
			textField.disabled = false;
		} else {
			textField.disabled = true;
		}
	}

	const handleChange = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
		setDisabled(!disabled); //disalbe or enable text field
	}


	// function EnableDisableTextBox(checkBox) {
    //     var textField = document.getElementsByName("others1Text");
    //     if (checkBox.checked(true)){
	// 		textField.disabled();
	// 		textField.focus();
	// 	} else {
	// 		textField.disabled = true;
	// 	}
    // }


	// const handleFileInput = (event) => {
	// 	onFileSelect(event.target.files[0])
	// } 
	// DITO ILALAGAY YUNG IDADAGDAG NA FORMS (change value to {postData.name})
	return (

		<form className={`${classes.root} ${classes.form}`} onSubmit={handleSumbit} >

			{/* Title Card */}
			<div class="card-body" className={classes.titleCardBackground}>
				<Container className={classes.titleCard}>
					<h5>Reporting Person Details</h5>
				</Container>
			</div><br />

			{/* Reporting Person Details Input Fields */}
			<Container>

				<Grid container spacing={2}>

					<Grid item xs={12}>
						<div>
							<TextField
								size="small"
								name="name"
								variant="outlined"
								label="Name"
								placeholder="Pangalan"
								fullWidth
								required
								value={postData.name}
								onChange={(e) => setPostData({ ...postData, name: e.target.value })}
							/>
						</div>
					</Grid>

					<Grid item xs={12}>
						<div>
							<TextField
								size="small"
								name="organization"
								variant="outlined"
								label="Organization"
								value={postData.organization}
								fullWidth
								onChange={(e) => setPostData({ ...postData, organization: e.target.value })}
							/>
						</div>
					</Grid>

					<Grid item xs={12}>
						<div>
							<TextField
								size="small"
								name="address"
								variant="outlined"
								label="Address"
								value={postData.address}
								fullWidth
								onChange={(e) => setPostData({ ...postData, address: e.target.value })}
							/>
						</div>
					</Grid>

					<Grid item xs={6}>
						<div>
							<TextField
								size="small"
								name="primaryContact"
								variant="outlined"
								label="Primary Contact No."
								value={postData.primaryContact}
								fullWidth
								onChange={(e) => setPostData({ ...postData, primaryContact: e.target.value })}
							/>
						</div>
					</Grid>

					<Grid item xs={6}>
						<div>
							<TextField
								size="small"
								name="email"
								variant="outlined"
								label="Email Address"
								value={postData.email}
								fullWidth
								onChange={(e) => setPostData({ ...postData, email: e.target.value })}
							/>
						</div>
					</Grid>

					<Grid item xs={6}>
						<div>
							<TextField
								size="small"
								name="secondaryContact"
								variant="outlined"
								label="Secondary Contact No."
								value={postData.secondaryContact}
								fullWidth
								onChange={(e) => setPostData({ ...postData, secondaryContact: e.target.value })}
							/>
						</div>
					</Grid>

					<Grid item xs={6}>
						<div>
							<TextField
								size="small"
								name="alternativeEmail"
								variant="outlined"
								label="Alternative Email Address"
								value={postData.alternativeEmail}
								fullWidth
								onChange={(e) => setPostData({ ...postData, alternativeEmail: e.target.value })}
							/>
						</div>
					</Grid>

				</Grid>

			</Container>

			<div class="card-body" className={classes.titleCardBackground}>
				<Container className={classes.titleCard}>
					<h5>Information Security Event Description</h5>
				</Container>
			</div><br />

			<Container classname={classes.reportForm}>
				{/* CHECKBOX SECTION */}
				{/* Title Card */}

				<h5 className={classes.reportForm}>Description of the Event</h5><br />
				<h6 className={classes.reportForm}>What Occured?</h6>

				<Grid container className={classes.reportForm}>

					<Grid item xs={6} >
						<FormControlLabel
							name="lossOfService"
							value={postData.lossOfService}
							onChange={(e) => setPostData({ ...postData, lossOfService: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Loss of Service"
							labelPlacement="end"
						/>
					</Grid>

					<Grid item xs={6}>
						<FormControlLabel
							name="systemAndSoftwareMalfunction"
							value={postData.systemMalfunction}
							onChange={(e) => setPostData({ ...postData, systemMalfunction: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="System/Software Malfunction"
							labelPlacement="end"
						/>
					</Grid>

					<Grid item xs={6}>
						<FormControlLabel
							name="accessAndComplianceViolation"
							value={postData.accessViolation}
							onChange={(e) => setPostData({ ...postData, accessViolation: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Access and Compliance Violations"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="systemOverload"
							value={postData.systemOverload}
							onChange={(e) => setPostData({ ...postData, systemOverload: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="System Overload"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="physicalSecurityBreach"
							value={postData.physicalSecurityBreach}
							onChange={(e) => setPostData({ ...postData, physicalSecurityBreach: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Physical/Security Breach"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="uncontrolledSystemChanges"
							value={postData.uncontrolledSystemChanges}
							onChange={(e) => setPostData({ ...postData, uncontrolledSystemChanges: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Uncontrolled System Changes"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="intrusionAttempt"
							value={postData.intrusionAttempt}
							onChange={(e) => setPostData({ ...postData, intrusionAttempt: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Intrusion Attempt"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<div>
						
							<FormControlLabel for="checkBox"
	
								name="others1Check"
								value={postData.others1Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"

							/>
							<TextField
								id="others1Text"
								name="others1Text"
								value={postData.others1Text}
								onChange={(e) => setPostData({ ...postData, others1Text: e.target.value })}
								disabled={disabled}
							/>

						</div>
					</Grid>
				</Grid>

				<br /><h6 className={classes.reportForm}>How it Occured?</h6>


				{/* How Occured */}
				<Grid container className={classes.reportForm}>
					<Grid item xs={6}>
						<FormControlLabel
							name="fraudHacking"
							value={postData.fraudHacking}
							onChange={(e) => setPostData({ ...postData, fraud: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Fraud / Hacking"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="physicalDamage"
							value={postData.physicalDamage}
							onChange={(e) => setPostData({ ...postData, sabotagePhysicalDamage: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Physical Damage"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="userError"
							value={postData.userError}
							onChange={(e) => setPostData({ ...postData, userError: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="User Error"
							labelPlacement="end"
						/>
					</Grid>

					<Grid item xs={6}>
						<FormControlLabel
							name="hardwareFailure"
							value={postData.hardwareFailure}
							onChange={(e) => setPostData({ ...postData, hardwareFailure: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Hardware Failure"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="softwareFailure"
							value={postData.softwareFailure}
							onChange={(e) => setPostData({ ...postData, softwareFailure: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Software Failure"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others2Check"
								value={postData.others2Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"
							/>
							<TextField
								name="others2Text"
								value={postData.others2Text}
								onChange={(e) => setPostData({ ...postData, others2Text: e.target.value })}
								disabled={disabled}
							/>
						</div>

					</Grid>
				</Grid>



				{/* Why Occured Section */}
				<br /><h6 className={classes.reportForm}>Why it Occured?</h6>
				<Grid container className={classes.reportForm}>
					<Grid item xs={6}>
						<FormControlLabel
							name="deliberateIntentional"
							value={postData.deliberateIntentional}
							onChange={(e) => setPostData({ ...postData, deliberateIntentional: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Deliberate or Intentional"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="actualAttack"
							value={postData.actualAttack}
							onChange={(e) => setPostData({ ...postData, actualAttack: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Actual Attack"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="accidental"
							value={postData.accidental}
							onChange={(e) => setPostData({ ...postData, accidental: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Accidental"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others3Check"
								value={postData.others3Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"
							/>
							<TextField
								name="others3Text"
								value={postData.others3Text}
								onChange={(e) => setPostData({ ...postData, others3Text: e.target.value })}
								disabled={disabled}
							/>
						</div>
					</Grid>
				</Grid>

				<br /><h6 className={classes.reportForm}>Components Affected Sections</h6>
				{/* Components Affected */}
				<Grid container spacing={0.01} className={classes.reportForm}>
					<Grid item xs={6}>
						<FormControlLabel
							name="peopleOrg"
							value={postData.peopleOrg}
							onChange={(e) => setPostData({ ...postData, peopleOrg: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="People/Organization"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="information"
							value={postData.information}
							onChange={(e) => setPostData({ ...postData, information: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Information"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="hardware"
							value={postData.hardware}
							onChange={(e) => setPostData({ ...postData, hardware: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Hardware"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="software"
							value={postData.software}
							onChange={(e) => setPostData({ ...postData, software: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Software"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="resourcesServices"
							value={postData.resourcesServices}
							onChange={(e) => setPostData({ ...postData, resources: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Resources and Services"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others4Check"
								value={postData.others4Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Other"
								labelPlacement="end"
							/>
							<TextField
								name="others4Text"
								value={postData.others4Text}
								onChange={(e) => setPostData({ ...postData, others4Text: e.target.value })}
								disabled={disabled}
							/>
						</div>
					</Grid>
				</Grid>

				{/* Adverse Business Impacts */}
				<br/><h6 className={classes.reportForm}>Adverse Business Impacts</h6>
				{/* Components Affected */}
				<Grid container className={classes.reportForm}>
					<Grid item xs={6}>
						<FormControlLabel
							name="financialLoss"
							value={postData.financialLoss}
							onChange={(e) => setPostData({ ...postData, financialLoss: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Financial Loss"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="personalInformation"
							value={postData.personalInformation}
							onChange={(e) => setPostData({ ...postData, personalInformation: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Personal Information"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="disruptionToBusiness"
							value={postData.disruptionToBusiness}
							onChange={(e) => setPostData({ ...postData, disruptionToBusiness: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Disruption to Business Operations"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="lossOfReputation"
							value={postData.lossOfReputation}
							onChange={(e) => setPostData({ ...postData, lossOfReputation: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Loss of Reputation"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="legalAndRegulatory"
							value={postData.legalAndRegulatory}
							onChange={(e) => setPostData({ ...postData, legalAndRegulatory: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Legal and Regulatory Obligations"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others5Check"
								value={postData.others5Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"
							/>
							<TextField
								name="others5Text"
								value={postData.others5Text}
								onChange={(e) => setPostData({ ...postData, others5Text: e.target.value })}
								disabled={disabled}
								multiline
							/>
						</div>
					</Grid>
				</Grid>

				<br /><h6 className={classes.reportForm}>Vulnerabilities Identified</h6>
				{/* Vulnerabilities Identified */}
				<Grid container spacing={0.01} className={classes.reportForm}>
					<Grid item xs={6}>
						<FormControlLabel
							name="informationVulnerability"
							value={postData.informationVulnerability}
							onChange={(e) => setPostData({ ...postData, informationVulnerability: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Information"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="reputationAndImage"
							value={postData.reputationAndImage}
							onChange={(e) => setPostData({ ...postData, reputationAndImage: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Reputation and Image"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="people"
							value={postData.people}
							onChange={(e) => setPostData({ ...postData, people: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="People"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="processesProcedures"
							value={postData.processesProcedures}
							onChange={(e) => setPostData({ ...postData, processesProcedures: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Processes, procedures, policies, guidelines"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="physical"
							value={postData.physical}
							onChange={(e) => setPostData({ ...postData, physical: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Physical (e.g. Hardware)"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="servicesVulnerability"
							value={postData.servicesVulnerability}
							onChange={(e) => setPostData({ ...postData, servicesVulnerability: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Services"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControlLabel
							name="software"
							value={postData.software}
							onChange={(e) => setPostData({ ...postData, software: e.target.checked })}
							control={<Checkbox color="primary" />}
							label="Software (e.g. computer program)"
							labelPlacement="end"
						/>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others6Check"
								value={postData.others5Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"
							/>
							<TextField
								name="others6Text"
								value={postData.others6Text}
								onChange={(e) => setPostData({ ...postData, others6Text: e.target.value })}
								disabled={disabled}
							/>
						</div>
					</Grid>
				</Grid>
			</Container>

			{/* Information Security Event Details */}
			<div class="card-body" className={classes.titleCardBackground}>
				<Container className={classes.titleCard}>
					<h5>Information Security Event Details</h5>
				</Container>
			</div>

			<Container classname={classes.reportForm}>

				{/* Date and Time Pickers */}
				<Grid container spacing={0.01}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid item xs={6}>
							<br /><h6>Date the Event Occured</h6>
							<DatePicker
								margin="normal"
								name="dateOccured"
								label="Enter Date"
								format="MM/dd/yyyy"
								value={postData.dateOccured}
								//onChange={(e) => setPostData({ ...postData, dateOccured: e.target.date})}
								//onChange={date => setPostData(date)}
								onChange={date => setPostData({ ...postData, dateOccured: date })}

							/>
						</Grid>

						<Grid item xs={6}>
							<br /><h6>Time the Event Occured</h6>
							<TimePicker
								margin="normal"
								name="timeOccured"
								label="Enter Time"
								value={postData.timeOccured}
								//onChange={(e) => setPostData({ ...postData, timeOccured: e.target.time})}
								onChange={time => setPostData({ ...postData, timeOccured: time })}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
				</Grid>

				<Grid container spacing={0.01}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid item xs={6}>
							<br /><h6>Date the Event Discovered</h6>
							<DatePicker
								margin="normal"
								name="dateDiscovered"
								label="Enter Date"
								format="MM/dd/yyyy"
								value={postData.dateDiscovered}
								//onChange={(e) => setPostData({ ...postData, dateDiscovered: e.target.date})}
								onChange={date => setPostData({ ...postData, dateDiscovered: date })}
							/>
						</Grid>

						<Grid item xs={6}>
							<br /><h6>Time the Event Discovered</h6>
							<TimePicker
								margin="normal"
								name="timeDiscovered"
								label="Enter Time"
								value={postData.timeDiscovered}
								//onChange={(e) => setPostData({ ...postData, timeDiscovered: e.target.time})}
								onChange={time => setPostData({ ...postData, timeDiscovered: time })}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid container spacing={0.01}>
					<Grid item xs={6}>
						<div>
							<br /><h6>Is the event over?</h6>

							<div>
								<RadioGroup row>
									<FormControlLabel
										name="radButtonYes"
										control={<Radio color="primary" />}
										value="yes"
										onChange={(e) => setPostData({ ...postData, radButtonYes: e.target.checked })}
										// checked = {value === "yes"} 
										label="Yes"
									/>
									<FormControlLabel
										name="radButtonNo"
										control={<Radio color="primary" />}
										label="No"
										value="no"
										onChange={(e) => setPostData({ ...postData, radButtonNo: e.target.checked })}
									// checked = {value === "no"} 
									/>
								</RadioGroup>

							</div>

						</div>


					</Grid>

				</Grid>

				<Grid container spacing={0.01} >
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid item xs={6}>
							<br /><h6>Date the Event Ended</h6>
							<DatePicker
								margin="normal"
								name="dateEnded"
								label="Enter Date"
								format="MM/dd/yyyy"
								value={postData.dateEnded}
								//onChange={(e) => setPostData({ ...postData, dateEnded: e.target.date})}
								onChange={date => setPostData({ ...postData, dateEnded: date })}
							/>
						</Grid>

						<Grid item xs={6}>
							<br /><h6>Time the Event Ended</h6>
							<TimePicker
								margin="normal"
								name="timeEnded"
								label="Enter Time"
								value={postData.timeEnded}
								//onChange={(e) => setPostData({ ...postData, timeEnded: e.target.time})}
								onChange={time => setPostData({ ...postData, timeEnded: time })}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
				</Grid><br />

				<h6>Brief Summary Report</h6>

				{/* Summary Report */}
				<Grid container spacing={1}>
					<Grid item xs={10}>
						<TextField
							minRow="3"
							name="briefSummary"
							label="Write here"
							value={postData.briefSummary}
							onChange={(e) => setPostData({ ...postData, briefSummary: e.target.value })}
							variant="filled"
							fullWidth
							multiline
							size="large"
						/>

					</Grid>

				</Grid>

				{/* NOT YET DONE IT LACKS SUBMISSION AND LIMITATION */}
				{/* <Grid>
					<Form.Group
						controlId="formFile"
						className="mb-3"
					>
						<Form.Label>Default file input example</Form.Label>
						<Form.Control type="file"
							onChange={(e) => setPostData({ ...postData, image: e.target.value })}
							value={postData.image}
						/>
					</Form.Group>

				</Grid> */}

				{/* Another Version but not still working */}
				<form onChange={handleSumbit}>
					<input ref={postData} type="file" name={postData.image}/>
				</form>





				{/* Sumbmit Button */}
				<div>
					<button className={classes.submitButton}>Submit</button>
				</div>
			</Container>
		</form>
	);
}

export default ReportPage;
