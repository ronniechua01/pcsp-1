import mongoose from 'mongoose'
//import '../models/server/frontEnd/client/src/ReportPage/ReportPage.js';
import { useState } from 'react';

/**const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

 const emailSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
  }),
    
const alternateSchema = new Schema({
  email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
})*/

const pcspSchema = mongoose.Schema ({

    name: String,
    organization: String,
    address: String,
    primaryContact: Number,
    secondaryContact: Number,
    email: String,
    alternativeEmail: String,
   //email: emailSchema,
    //alternativeEmail: alternateSchema,
      lossOfService: Boolean,
      lossOfEquipment: Boolean,
      lossOfFacility: Boolean,
      systemMalfunction: Boolean,
      systemOverload: Boolean,
      intrusionAttempt: Boolean,
      humanError: Boolean,
      badApplicationDesign: Boolean,
      complianceViolations: Boolean,
      accessViolation: Boolean,
      physicalSecurityBreach: Boolean,
      uncontrolledSystemChanges: Boolean,
      others1Check: Boolean,
      others1Text: String,
      
    theft: Boolean,
    fraud: Boolean,
    sabotagePhysicalDamage: Boolean,
    maliciousCode: Boolean,
    hackingLogicalInfiltration: Boolean,
    misuseOfResources: Boolean,
    hardwareFailure: Boolean,
    softwareFailure: Boolean,
    hardwareMaintenanceError: Boolean,
    communicationFailure: Boolean,
    fire: Boolean,
    flood: Boolean,
    designError: Boolean,
    userError: Boolean,
    operationsError: Boolean,
    softwareMaintenanceError: Boolean,
    thirdPartyServices: Boolean,
    others2Check: Boolean,
    others2Text: String,  
 
  deliberateIntentional: Boolean,
  actualAttack: Boolean,
  accidental: Boolean,
  others3Check: Boolean,
  others3Text: String,

  briefSummary: String,
    peopleOrg: Boolean,
    hardware: Boolean,
    software: Boolean,
    resources: Boolean,
    information: Boolean,
    services: Boolean,
    legal: Boolean,
    others4Check: Boolean,
    others4Text: String,    
 
    financialLoss: Boolean,
    personalInformation: Boolean,
    lossOfGoodwill: Boolean,
    lossOfReputation: Boolean,
    legalAndRegulatory: Boolean,
    managementAndBusiness: Boolean,
    disruptionToBusiness: Boolean,
    commercialAndEcons: Boolean,
    others5Check: Boolean,
    others5Text: String,   

  informationVulnerability: Boolean,
  people: Boolean,
  physical: Boolean,
  softwareVulnerability: Boolean,
  reputationAndImage: Boolean,
  processesProcedures: Boolean,
  servicesVulnerability: Boolean,
  others6Check: Boolean,
  others6Text: String,    

dateOccured: String,
dateDiscovered: String,
timeOccured: String,
timeDiscovered: String,

radButtonYes: Boolean,
radButtonNo: Boolean,
dateEnded: String,
timeEnded: String, 
});

const PostMessage = mongoose.model('PostMessage', pcspSchema);

export default PostMessage;