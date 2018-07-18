import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: "#dcdbdc",
    flex: 1,
    paddingTop: 23,
    justifyContent: 'center',
  },
  containerResult: {
    backgroundColor: "#dcdbdc",
    paddingTop: 23,
    justifyContent: 'center',
  },
  status: {
    marginTop: 20,
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
  questionListItem: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  contentResult: {
    padding: 20,
  },
  questionStatus: {
    flex: 1,
    fontSize: 24,
  },
  questionResult: {
    flex: 9,
  },
  contentAnswers: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  question: {
    borderWidth: 1,
    padding: 20,
  },
  option: {
    paddingRight: 40,
    paddingLeft: 40,
  },
  footer: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 30,
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