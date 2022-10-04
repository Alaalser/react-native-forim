import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Platform,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';
import { Formik } from 'formik';
import { validationSchema } from './validation';

const MyReactNativeForm = (props) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values) => alert(JSON.stringify(values))}
    validationSchema={validationSchema}
  >
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      resetForm,
      values,
      errors,
    }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            {errors.password && (
              <Text style={styles.errors}>{errors.password}</Text>
            )}
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              handleSubmit();
              resetForm();
            }}
          >
            <Text style={styles.textSubmit}>Submit</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    )}
  </Formik>
);

export default MyReactNativeForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#1A6080',
  },

  inputContainer: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    margin: 10,
    height: 'auto',
    padding: 20,
    width: '70%',
  },
  input: {
    height: 40,
    margin: 10,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#1A6080',
  },
  label: {
    marginLeft: 10,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontSize: 18,
    color: '#1A6080',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    margin: 10,
    height: 50,
    width: '70%',
  },
  errors: {
    fontSize: 15,
    color: 'red',
    marginLeft: 10,
    paddingBottom: 10,
  },
  textSubmit: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#1A6080',
  },
});
