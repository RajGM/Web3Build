import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { firestore } from '@lib/firebase';

import { useContext } from 'react';
import { UserContext } from '@lib/context';

export function Social() {

    const { user, username } = useContext(UserContext);
    const [eventData, seteventData] = useState(false);
    
    useEffect(() => {
        if(!username) return;
        firestore.collection('usernames').doc(username).get().then((doc) => {
            seteventData(doc.data());
        });
    }, [username]);
 
    return (
        <Formik
            initialValues={{
                discord: '',
                telegram: '',
                twitter: '',
                instagram: '',
            }}

            onSubmit={async (values) => {

                toast.promise(firestore.collection('usernames').doc(username).update({
                    discord: values.discord,
                    telegram: values.telegram,
                    twitter: values.twitter,
                    instagram: values.instagram,
                }), {
                    loading: 'Adding socials...',
                    success: <b>Added socials!</b>,
                    error: <b>Failed to add socials</b>,
                });

            }}

        >
            {({ isSubmitting, values }) => (
                <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '20px', textAlign: 'center', width: '300px', padding: '10px', border: '1px solid black', backgroundColor: 'white', borderRadius: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'row', background: 'white', border: '1px solid black', borderRadius: '3px' }}>
                        <div>
                            Discord:
                        </div>
                        <Field name="discord" placeholder={eventData ? eventData.discord : 'username'} style={{ fontSize: '20px', padding: '0px' }} validate={(value) => {
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', background: 'white', border: '1px solid black', borderRadius: '3px' }} >
                        <div>
                            Telegram:
                        </div>
                        <Field name="telegram" placeholder={eventData? eventData.telegram?eventData.telegram:'id' : 'id'} style={{ fontSize: '20px', padding: '0px' }} validate={(value) => {
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', background: 'white', border: '1px solid black', borderRadius: '3px' }} >
                        <div>
                            Twitter.com/
                        </div>
                        <Field name="twitter" placeholder={eventData? eventData.twitter?eventData.twitter:'handle' : 'handle'} style={{ fontSize: '20px', padding: '0px' }} validate={(value) => {
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', background: 'white', border: '1px solid black', borderRadius: '3px' }} >
                        <div>
                            Instagram.com/
                        </div>
                        <Field name="instagram" placeholder={eventData ? eventData.instagram?eventData.instagram:'handle' : 'handle'} style={{ fontSize: '20px', padding: '0px' }} validate={(value) => {
                        }} />
                    </div>

                    <div style={{ margin: 'auto auto', alignSelf: 'center' }}>
                        <button type="submit" disabled={isSubmitting} style={{ width: '100px', height: '20px' }}>
                            Save
                        </button>
                    </div>

                    <Toaster />
                </Form>
            )}
        </Formik>
    )

}
