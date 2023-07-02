import { firestore } from '@lib/firebase';
import { generateFirebaseID } from '@lib/firebase';

import { db, auth } from '../firebaseAdmin/index'

import { addCalendarEvent, editCalendarEvent } from '../calendar.js';

export default async function handler(req, res) {

    await auth.verifyIdToken(req.headers.authorization)
        .then(async (decodedToken) => {
            const values = req.body;
            const category = req.headers.category;
            if (req.body.calID.length == 0) {
                const calID = await addCalendarEvent(values.eventN, values.link, values.appS, values.appE, category);
                values.calID = calID;
                const ref = firestore.collection(category).doc(req.headers.firestoreid);
                await ref.update(values);
                res.status(200).send({ message: 'Hack Updated' })
            } else {
                await editToCalAndDB(req.headers.firestoreid, req.headers.category, req.body);
                res.status(200).send({ message: 'Hack Updated' })
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(401).send({ error: "UnAuthorized" });
        });

}

async function editToCalAndDB(firestoreid, category, values) {

    //Edit Firebase Data  First
    const ref = firestore.collection(category).doc(firestoreid);
    const updateFirestore = ref.update(values);

    //Then make changes to calendar
    const updateCalendar = await editCalendarEvent(values.calID, values.eventN, values.link, values.appS, values.appE, category);

    await Promise.all([updateFirestore, updateCalendar]);

}
