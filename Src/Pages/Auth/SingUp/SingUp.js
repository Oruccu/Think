import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'
import Title from '../../../Components/Title'
import { Formik } from 'formik'
import { auth } from '../../../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import styles from './SingUp.Style'
import * as Yup from 'yup'
const SingUp = ({ navigation }) => {

  const singUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(15, 'Too Long')
      .required('Required'),
  })

  function CreateUser(values) {
    createUserWithEmailAndPassword(auth, values.email, values.password).then((user) => {
      navigation.navigate('SingIn')
    }).catch((err) => {
      console.log(err)
    })
  }

  function Submit() {
    return navigation.navigate('SingIn')
  }

  return (
    <ImageBackground style={styles.image} source={require('../../../Assets/image.jpeg')} >
      <View style={styles.container}>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={CreateUser}
          validationSchema={singUpSchema}>
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <>
              <Title
                title={'SING UP'}
                theme={'SingUp'} />
              <Input
                placeholder={'Name'}
                onChange={handleChange('name')}
                value={values.name}
                theme={'Secondary'}
                icon={'user'} />
              {
                touched.name && errors.name &&
                <Text style={styles.error}>{errors.name}</Text>
              }
              <Input
                placeholder={'E-Mail'}
                onChange={handleChange('email')}
                value={values.email}
                theme={'Secondary'} 
                icon={'mail'}/>
              {
                touched.email && errors.name && 
                <Text style={styles.error}>{errors.email}</Text>
              }
              <Input
                placeholder={'Password'}
                onChange={handleChange('password')}
                value={values.password}
                theme={'Secondary'}
                isSecure
                icon={'key'} />
              {
                touched.password && errors.password &&
                <Text style={styles.error}>{errors.password}</Text>
              }

              <Button
                theme={'Secondary'}
                ButtonName={'SING UP'}
                onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Button
          theme={'Secondary'}
          ButtonName={'SING IN'}
          onPress={Submit} />
      </View>


    </ImageBackground>
  )
}

export default SingUp

