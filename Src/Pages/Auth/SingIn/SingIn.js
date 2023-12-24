import { ImageBackground, Text, View } from 'react-native'
import React from 'react'
import Input from '../../../Components/Input/Input'
import styles from './SingIn.Style'
import Title from '../../../Components/Title'
import Button from '../../../Components/Button/Button'
import { Formik } from 'formik'
import { auth } from '../../../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import * as Yup from 'yup'

const SingIn = ({ navigation }) => {

    const singInSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Too Short')
            .max(15, 'Min Short')
            .required('Required')
    })

    const initialValues = {
        email: '',
        password: ''
    }

    function Submit(values) {
        console.log(values)
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((user) => {
            navigation.navigate('HomeScreen')
        }).catch((err) => {
            console.log(err);
            console.log('hata oluştu')
        })
    }
    function createUser() {
        navigation.navigate('SingUp')
    }

    return (
        <ImageBackground style={styles.image} source={require('../../../Assets/image.jpeg')}>

            <View style={styles.container}>
                <View style={styles.text}>
                    <Title
                        title={'SİNG IN'}
                        theme={'SingIn'} />
                </View>
                <Formik
                    initialValues={initialValues}
                    onSubmit={Submit} validationSchema={singInSchema} >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <>

                            <Input
                                placeholder={'E-Mail'}
                                onChange={handleChange('email')}
                                value={values.email}
                                theme={'Primary'} 
                                icon={'mail'}/>
                            {
                                touched.email && errors.email &&
                                <Text style={styles.error}>{errors.email}</Text>
                            }
                            <Input
                                placeholder={'Password'}
                                onChange={handleChange('password')}
                                value={values.password}
                                isSecure
                                theme={'Primary'} 
                                icon={'key'}/>
                            {
                                touched.password && errors.password && 
                                <Text style={styles.error}>{errors.password}</Text>
                            }
                            <Button
                                theme={'Primary'}
                                ButtonName={'SING IN'}
                                onPress={handleSubmit} />
                        </>
                    )}

                </Formik>
                <Button theme={'Primary'} ButtonName={'SING UP'} onPress={createUser} />
            </View>
        </ImageBackground>

    )
}

export default SingIn

