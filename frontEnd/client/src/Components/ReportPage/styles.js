import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  paper: {
    padding: theme.spacing(2),
  },

  form: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },

  fileInput: {
    width: '97%',
    margin: '10px 0',
  },

  titleCard: {
    width: '100%',
    color: 'white !important',
    paddingTop: 'auto',
    paddingBottom: 'auto',
    paddingLeft: '30px',
  },

  titleCardBackground: {
    backgroundColor: '#E56660 !important',
    border: '#E56660 !important',
    marginTop: '30px',
    paddingTop: '12px',
    paddingBottom: '8px',
  },

  reportForm: {
    width: '100%',
    paddingLeft: '5px',
  },

  inputField: {
    marginTop: '0px',
    marginBottom: '0px',
  },

  inputFieldLabel: {
    verticalAlign: 'middle',
  },

  submitButton: {
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: '#E56660 !important',
    border: '#E56660 !important',
    color: 'white',
    fontFamily: '"Raleway", sans-serif',
    padding: '10px',
    paddingLeft: '40px',
    paddingRight: '40px',
    borderRadius: '5px',
  }
}));