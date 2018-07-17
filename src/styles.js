import { StyleSheet } from 'react-native';

const border = {
  borderColor: 'red',
  borderWidth: 1,
};

export default StyleSheet.create({
  container: {
    // ...border,
    flex: 1,
    paddingTop: 23,
  },
  header: {
    // ...border,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: 'bold'
  },
  content: {
    // ...border,
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  footer: {
    // ...border,
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