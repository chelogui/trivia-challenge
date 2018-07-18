import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: "#dcdbdc",
    flex: 1,
    paddingTop: 23,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  content: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  contentAnswers: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  option: {
    paddingRight: 40,
    paddingLeft: 40,
  },
  footer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  containerButton: {
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#fff',
    color: 'red',
    fontSize: 30
  },
});