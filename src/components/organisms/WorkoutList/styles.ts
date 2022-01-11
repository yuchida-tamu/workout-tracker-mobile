import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerFix: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#BB72DE',
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  categoryIcon: {
    position: 'absolute',
    marginTop: 40,
    marginLeft: 280,
  },

  iconAndTextInput: {
    flexDirection: 'row',
    top: '10%',
    marginTop: -20,
  },
  icon: {
    width: 50,
    marginLeft: 10,
    color: '#FFFFFF',
  },
  textInput: {
    height: 30,
    width: '80%',
    fontSize: 30,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#F0F0F0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  workoutCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 128,
    width: 356,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    margin: 10,
    flexDirection: 'row',
  },
  workoutCover: {
    width: '30%',
    height: '100%',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: 'orange',
    justifyContent: 'center',
  },
  workoutContentContainer: {
    display: 'flex',
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  workoutContent: {
    width: '100%',
    height: '100%',
    padding: 5,
    flex: 1,
  },
  workoutHeartButtonBack: {
    height: '100%',
    width: '20%',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  heartButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workoutNameAndLevel: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFFFFF',
    marginBottom: 20,
  },
  workoutName: {
    fontSize: 30,
    color: '#BB72DE',
  },
  workoutLevel: {
    flexDirection: 'row',
  },
});
