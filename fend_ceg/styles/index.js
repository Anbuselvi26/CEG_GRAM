import {StyleSheet} from 'react-native';

const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 20},
  inputL: {
    color: '#000',
    paddingLeft: 30,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    flex: 1,
    fontSize: 18,
    height: 50,
    marginBottom: 30,
    
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: '#000',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  datePickerStyle: {
    width: 200,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    backgroundColor: '#5ea3a3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
  },
  btnImage: {width: 20, height: 20, marginLeft: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
  input_group: {
    position: 'relative',
  },
  in: {
    padding: 10,
    border: 'none',
    borderRadius: 4,
    color: '#fff',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#fff',
  },



  main: {
    alignSelf: 'stretch',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f4f9f4',
    paddingLeft: 30,
    paddingRight: 60,
  },

  header: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
    paddingTop: 90,
    marginBottom: 5,
  },

  input: {
    width: '48%' ,
    fontSize:18,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  
  inp: {
    fontSize:18,
    alignSelf: 'stretch',
    height: 30,
    marginBottom: 20,
    color: '#36454F',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    fontFamily: 'Times New Roman' 
  },

 newInp: {
    fontSize:18,
    alignSelf: 'stretch',
    height: 30,
    marginBottom: 0,
    color: '#36454F',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    fontFamily: 'Times New Roman' 
  },

  textArea: {
    fontFamily: 'Times New Roman' 
  },

  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#8A2BE2',
    marginTop: 30,
  },

  inpT: {
    fontSize:17,
    color: '#fff',
    paddingBottom: 5
  },

  buttonT: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#8A2BE2',
    marginBottom: 250,
  },
  
 

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  
});

export default STYLES;