import React, { Component, useState } from 'react';
import { TextField, Button, Typography, Paper, Container, Checkbox, FormControl, FormControlLabel, FormLabel, FormGroup, Grid, RadioGroup, Radio } from '@material-ui/core';

//Date and Time Picker from Material UI Dependencies
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker, TimePicker } from '@material-ui/pickers';

//BAckend additional
import {useDispatch} from 'react-redux';
import useStyles from './styles';


import {createPost} from '../../Actions/posts';

//CSS File
//import './ReportPage.css';

const Form = () => {

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
			humanError: false,
			lossOfEquipment: false,
			badApplicationDesign: false,
			lossOfFacility: false,
			complianceViolations: false,
			systemMalfunction: false,
			accessViolation: false,
			systemOverload: false,
			physicalSecurityBreach: false,
			softwareMalfunction: false,
			uncontrolledSystemChanges: false,
			intrusionAttempt: false,
			others1Check: false,
			others1Text: "",

			//HOW OCCURED
			theft: false,
			communicationFailure: false,
			fraud: false,
			fire: false,
			sabotagePhysicalDamage: false,
			flood: false,
			maliciousCode: false,
			designError: false,
			hackingLogicalInfiltration: false,
			userError: false,
			misuseOfResources: false,
			operationsError: false,
			hardwareFailure: false,
			softwareMaintenanceError: false,
			softwareFailure: false,
			thirdPartyServices: false,
			hardwareMaintenanceError: false,
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
			resources: false,
			information: false,
			services: false,
			legal: false,
			others4Check: false,
			others4Text: "",

			//Adverse Business Impacts
			financialLoss: false,
			personalInformation: false,
			lossOfGoodWill: false,
			lossOfReputation: false,
			legalAndRegulatory: false,
			managementAndBusiness: false,
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

			radButtonYes:false,
			radButtonNo:false,


			dateEnded: new Date(),
			timeEnded: new Date(),
		})

		const classes = useStyles();
		const dispatch = useDispatch();
    
    const handleSumbit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }


	// DITO ILALAGAY YUNG IDADAGDAG NA FORMS (change value to {postData.name})

		return (

			<form className={`${classes.root} ${classes.form}`} onSubmit={handleSumbit}>

				{/* Title Card */}
				<div class="card-body" className="TitleCardBackground">
					<Container className="TitleCard">
						<h5>Reporting Person Details</h5>
					</Container>
				</div>

				{/* Reporting Person Details Input Fields */}
				<Container classname="ReportForm">
					<div className="InputField">
						<TextField
							name="name"
							variant="filled"
							label="Name"
							value={postData.name}
							fullWidth
							required
							onChange={(e) => setPostData({ ...postData, name: e.target.value})}
						/>
					</div>
					<div className="InputField">
						<TextField
							name="organization"
							variant="filled"
							label="Organization"
							value={postData.organization}
							fullWidth
							onChange={(e) => setPostData({ ...postData, organization: e.target.value})}
						/>
					</div>
					<div className="InputField">
						<TextField
							name="address"
							variant="filled"
							label="Address"
							value={postData.address}
							fullWidth
							onChange={(e) => setPostData({ ...postData, address: e.target.value})}
						/>
					</div>
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<div>
								<TextField
									name="primaryContact"
									variant="filled"
									label="Primary Contact No."
									value={postData.primaryContact}
									fullWidth
									onChange={(e) => setPostData({ ...postData, primaryContact: e.target.value})}
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div>
								<TextField
									name="email"
									variant="filled"
									label="Email Address"
									value={postData.email}
									fullWidth
									onChange={(e) => setPostData({ ...postData, email: e.target.value})}
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className="InputField">
								<TextField
									name="secondaryContact"
									variant="filled"
									label="Secondary Contact No."
									value={postData.secondaryContact}
									fullWidth
									onChange={(e) => setPostData({ ...postData, secondaryContact: e.target.value})}
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className="InputField">
								<TextField
									name="alternativeEmail"
									variant="filled"
									label="Alternative Email Address"
									value={postData.alternativeEmail}
									fullWidth
									onChange={(e) => setPostData({ ...postData, alternativeEmail: e.target.value})}
								/>
							</div>
						</Grid>
					</Grid>
				</Container>
				<div class="card-body" className="TitleCardBackground">
					<Container className="TitleCard">
						<h5>Information Security Event Description</h5>
					</Container>
				</div><br />
				<Container classname="ReportForm">
					{/* CHECKBOX SECTION */}
					{/* Title Card */}

					<h5>Description of the Event</h5><br />
					<h6>What Occured?</h6>

					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfService"
								value={postData.lossOfService}
								onChange={(e) => setPostData({ ...postData, lossOfService: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Loss of Service"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="humanError"
								value={postData.humanError}
								onChange={(e) => setPostData({ ...postData, humanError: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Human Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfEquipment"
								value={postData.lossOfEquipment}
								onChange={(e) => setPostData({ ...postData, lossOfEquipment: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Loss of Equipment"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="badApplicationDesign"
								value={postData.badApplicationDesign}
								onChange={(e) => setPostData({ ...postData, badApplicationDesign: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Bad Application Design"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfFacility"
								value={postData.lossOfFacility}
								onChange={(e) => setPostData({ ...postData, lossOfFacility: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Loss of Facility"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="complianceViolations"
								value={postData.complianceViolations}
								onChange={(e) => setPostData({ ...postData, complianceViolations: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Compliance Violations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="systemMalfunction"
								value={postData.systemMalfunction}
								onChange={(e) => setPostData({ ...postData, systemMalfunction: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="System Malfunction"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="accessViolation"
								value={postData.accessViolation}
								onChange={(e) => setPostData({ ...postData, accessViolation: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Access Violations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="systemOverload"
								value={postData.systemOverload}
								onChange={(e) => setPostData({ ...postData, systemOverload: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="System Overload"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="physicalSecurityBreach"
								value={postData.physicalSecurityBreach}
								onChange={(e) => setPostData({ ...postData, physicalSecurityBreach: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Physical/Security Breac"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="softwareMalfunction"
								value={postData.softwareMalfunction}
								onChange={(e) => setPostData({ ...postData, softwareMalfunction: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Software Malfunction"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="uncontrolledSystemChanges"
								value={postData.uncontrolledSystemChanges}
								onChange={(e) => setPostData({ ...postData, uncontrolledSystemChanges: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Uncontrolled System Changes"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="intrusionAttempt"
								value={postData.intrusionAttempt}
								onChange={(e) => setPostData({ ...postData, intrusionAttempt: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Intrusion Attempt"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others1Check"
									value={postData.others1Check}
									onChange={(e) => setPostData({ ...postData, other1Check: e.target.value})}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others1Text"
									value={postData.others1Text}
									onChange={(e) => setPostData({ ...postData, others1Text: e.target.value})}
								/>

							</div>
						</Grid>
					</Grid>

					<br /><h6>How it Occured?</h6>





					{/* How Occured */}
					<Grid container spacing={0.01}>
						<Grid item xs={6}>

							<FormControlLabel
								name="theft"
								value={postData.theft}
								onChange={(e) => setPostData({ ...postData, theft: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Theft"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="communicationFailure"
								value={postData.communicationFailure}
								onChange={(e) => setPostData({ ...postData, communicationFailure: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Communication Failure"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="fraud"
								value={postData.fraud}
								onChange={(e) => setPostData({ ...postData, fraud: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Fraud"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="fire"
								value={postData.fire}
								onChange={(e) => setPostData({ ...postData, fire: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Fire"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="sabotagePhysicalDamage"
								value={postData.sabotagePhysicalDamage}
								onChange={(e) => setPostData({ ...postData, sabotagePhysicalDamage: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Sabotage/Physical Damage"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="flood"
								value={postData.flood}
								onChange={(e) => setPostData({ ...postData, flood: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Flood"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="maliciousCode"
								value={postData.maliciousCode}
								onChange={(e) => setPostData({ ...postData, maliciousCode: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Malicious Code"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="designError"
								value={postData.designError}
								onChange={(e) => setPostData({ ...postData, designError: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Design Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="hackingLogicalInfiltration"
								value={postData.hackingLogicalInfiltration}
								onChange={(e) => setPostData({ ...postData, hackingLogicalInfiltration: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Hacking/Logica Infiltration"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="userError"
								value={postData.userError}
								onChange={(e) => setPostData({ ...postData, userError: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="User Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="misuseOfResources"
								value={postData.misuseOfResources}
								onChange={(e) => setPostData({ ...postData, misuseOfResources: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Misuse of Resources"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="operationsError"
								value={postData.operationsError}
								onChange={(e) => setPostData({ ...postData, operationsError: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Operations Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="hardwareFailure"
								value={postData.hardwareFailure}
								onChange={(e) => setPostData({ ...postData, hardwareFailure: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Hardware Failure"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="softwareMaintenanceError"
								value={postData.softwareMaintenanceError}
								onChange={(e) => setPostData({ ...postData, softwareMaintenanceError: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Software Maintenance Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="softwareFailure"
								value={postData.softwareFailure}
								onChange={(e) => setPostData({ ...postData, softwareFailure: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Software Failure"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="thirdPartyServices"
								value={postData.thirdPartyServices}
								onChange={(e) => setPostData({ ...postData, thirdPartyServices: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Third Party Services"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="hardwareMaintenanceError"
								value={postData.hardwareMaintenanceError}
								onChange={(e) => setPostData({ ...postData, hardwareMaintenanceError: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Hardware Maintenance Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others2Check"
									value={postData.others2Check}
									onChange={(e) => setPostData({ ...postData, others2Check: e.target.checked})}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others2Text"
									value={postData.others2Text}
									onChange={(e) => setPostData({ ...postData, others2Text: e.target.value})}
								/>
							</div>

						</Grid>
					</Grid>



					{/* Why Occured Section */}
					<br /><h6>Why it Occured?</h6>
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="deliberateIntentional"
								value={postData.deliberateIntentional}
								onChange={(e) => setPostData({ ...postData, deliberateIntentional: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Deliberate or Intentional"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="actualAttack"
								value={postData.actualAttack}
								onChange={(e) => setPostData({ ...postData, actualAttack: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Actual Attack"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="accidental"
								value={postData.accidental}
								onChange={(e) => setPostData({ ...postData, accidental: e.target.checked})}
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
									onChange={(e) => setPostData({ ...postData, others3Check: e.target.checked})}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others3Text"
									value={postData.others3Text}
									onChange={(e) => setPostData({ ...postData, others3Text: e.target.value})}
								/>
							</div>
						</Grid>
					</Grid>
					<br /><h6>Brief Summary Report</h6>

					{/* Summary Report */}
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<TextField
								name="briefSummary"
								label="Write here"
								value={postData.briefSummary}
								onChange={(e) => setPostData({ ...postData, briefSummary: e.target.value})}
								variant="filled"
								fullWidth
								multiline
							/>
						</Grid>
					</Grid>

					<br /><h6>Components Affected Sections</h6>
					{/* Components Affected */}
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="peopleOrg"
								value={postData.peopleOrg}
								onChange={(e) => setPostData({ ...postData, peopleOrg: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="People/Organization"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="information"
								value={postData.information}
								onChange={(e) => setPostData({ ...postData, information: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Information"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="hardware"
								value={postData.hardware}
								onChange={(e) => setPostData({ ...postData, hardware: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Hardware"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="services"
								value={postData.services}
								onChange={(e) => setPostData({ ...postData, services: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Services"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="software"
								value={postData.software}
								onChange={(e) => setPostData({ ...postData, software: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Software"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="legalAndRegulatory"
								value={postData.legalAndRegulatory}
								onChange={(e) => setPostData({ ...postData, legalAndRegulatory: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Legal or Regulatory Obligations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="resources"
								value={postData.resources}
								onChange={(e) => setPostData({ ...postData, resources: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Resources"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others4Check"
									value={postData.others4Check}
									onChange={(e) => setPostData({ ...postData, others4Check: e.target.checked})}
									control={<Checkbox color="primary" />}
									label="Other"
									labelPlacement="end"
								/>
								<TextField
									name="others4Text"
									value={postData.others4Text}
									onChange={(e) => setPostData({ ...postData, others4Text: e.target.value})}
								/>
							</div>
						</Grid>
					</Grid>

					{/* Adverse Business Impacts */}
					<br /><h6>Adverse Business Impacts</h6>
					{/* Components Affected */}
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="financialLoss"
								value={postData.financialLoss}
								onChange={(e) => setPostData({ ...postData, financialLoss: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Financial Loss"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="managementAndBusiness"
								value={postData.managementAndBusiness}
								onChange={(e) => setPostData({ ...postData, managementAndBusiness: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Management and Business Operations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="personalInformation"
								value={postData.personalInformation}
								onChange={(e) => setPostData({ ...postData, personalInformation: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Personal Information"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="disruptionToBusiness"
								value={postData.disruptionToBusiness}
								onChange={(e) => setPostData({ ...postData, disruptionToBusiness: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Disruption to Business Operations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfGoodWill"
								value={postData.lossOfGoodWill}
								onChange={(e) => setPostData({ ...postData, lossOfGoodWill: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Software"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="commercialAndEcons"
								value={postData.commercialAndEcons}
								onChange={(e) => setPostData({ ...postData, commercialAndEcons: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Commercial and Economic interest"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfReputation"
								value={postData.lossOfReputation}
								onChange={(e) => setPostData({ ...postData, lossOfReputation: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Loss of Reputation"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others5Check"
									value={postData.others5Check}
									onChange={(e) => setPostData({ ...postData, others5Check: e.target.checked})}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others5Text"
									value={postData.others5Text}
									onChange={(e) => setPostData({ ...postData, others5Text: e.target.value})}
									multiline
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="legalAndRegulatory"
								value={postData.legalAndRegulatory}
								onChange={(e) => setPostData({ ...postData, legalAndRegulatory: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Legal and Regulatory Obligations"
								labelPlacement="end"
							/>
						</Grid>
					</Grid>

					<br /><h6>Vulnerabilities Identified</h6>
					{/* Vulnerabilities Identified */}
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="informationVulnerability"
								value={postData.informationVulnerability}
								onChange={(e) => setPostData({ ...postData, informationVulnerability: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Information"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="reputationAndImage"
								value={postData.reputationAndImage}
								onChange={(e) => setPostData({ ...postData, reputationAndImage: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Reputation and Image"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="people"
								value={postData.people}
								onChange={(e) => setPostData({ ...postData, people: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="People"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="processesProcedures"
								value={postData.processesProcedures}
								onChange={(e) => setPostData({ ...postData, processesProcedures: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Processes, procedures, policies, guidelines"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="physical"
								value={postData.physical}
								onChange={(e) => setPostData({ ...postData, physical: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Physical (e.g. Hardware)"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="servicesVulnerability"
								value={postData.servicesVulnerability}
								onChange={(e) => setPostData({ ...postData, servicesVulnerability: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Services"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="software"
								value={postData.software}
								onChange={(e) => setPostData({ ...postData, software: e.target.checked})}
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
									onChange={(e) => setPostData({ ...postData, others5Check: e.target.checked})}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others6Text"
									value={postData.others6Text}
									onChange={(e) => setPostData({ ...postData, others6Text: e.target.value})}
								/>
							</div>
						</Grid>
					</Grid>
				</Container>

				{/* Information Security Event Details */}
				<div class="card-body" className="TitleCardBackground">
					<Container className="TitleCard">
						<h5>Information Security Event Details</h5>
					</Container>
				</div><br />

				<Container classname="ReportForm">

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
									onChange={(e) => setPostData({ ...postData, dateOccured: e.target.date})}
				
								/>
								</Grid>
								
								<Grid item xs={6}>
								<br /><h6>Time the Event Occured</h6>
								<TimePicker	
									margin="normal"
									name="timeOccured"
									label="Enter Time"
									value={postData.timeOccured}
									onChange={(e) => setPostData({ ...postData, timeOccured: e.target.time})}
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
									onChange={(e) => setPostData({ ...postData, dateDiscovered: e.target.date})}
								/>
								</Grid>
								
								<Grid item xs={6}>
								<br /><h6>Time the Event Discovered</h6>
								<TimePicker	
									margin="normal"
									name="timeDiscovered"
									label="Enter Time"
									value={postData.timeDiscovered}
									onChange={(e) => setPostData({ ...postData, timeDiscovered: e.target.time})}
								/>
								</Grid>
							</MuiPickersUtilsProvider>
					</Grid>
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<div>
								<br/><h6>Is the event over?</h6>

								<div>
									<RadioGroup row>
										<FormControlLabel 
											name = "radButtonYes"
											control={<Radio color="primary" />}
											value="yes"
											onChange={(e) => setPostData({ ...postData, radButtonYes: e.target.checked})}
											// checked = {value === "yes"} 
											label="Yes" 
										/>
										<FormControlLabel 
											name = "radButtonNo"
											control={<Radio color="primary" />}
											label="No"
											value="no"
											onChange={(e) => setPostData({ ...postData, radButtonNo: e.target.checked})}
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
									onChange={(e) => setPostData({ ...postData, dateEnded: e.target.date})}
								/>
								</Grid>
								
								<Grid item xs={6}>
								<br /><h6>Time the Event Ended</h6>
								<TimePicker	
									margin="normal"
									name="timeEnded"
									label="Enter Time"
									value={postData.timeEnded}
									onChange={(e) => setPostData({ ...postData, timeEnded: e.target.time})}
								/>
								</Grid>
							</MuiPickersUtilsProvider>
					</Grid>

					{/* Sumbmit Button */}
					<div>
						<button className="SubmitButton">Submit</button>
					</div>
				</Container>
			</form>
		);
	}

export default Form;
