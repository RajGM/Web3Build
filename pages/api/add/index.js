import { firestore } from '@lib/firebase';
import { generateFirebaseID } from '@lib/firebase';

import { db, auth } from '../firebaseAdmin/index'

import { addCalendarEvent } from '../calendar.js';
import { findMemberId, sendMessage } from '../serverSideAdmin/index';

export default async function handler(req, res) {

  await auth.verifyIdToken(req.headers.authorization)
    .then(async (decodedToken) => {
      const userSocial = await getSocial(req.body.postedBy);

      const values = req.body;
      const category = req.headers.category;

      if (userSocial.discordID) {

        const calID = await addCalendarEvent(values.eventN, values.link, values.appS, values.appE, category);
        const discordMessageID = await sendMessage(values, userSocial.discordID, category);

        const allId = await Promise.all([calID, discordMessageID]);

        values.calID = allId[0];
        values.discordMessageID = allId[1];

        let id = await generateFirebaseID(category);
        const ref = firestore.collection(category).doc(id);
        await ref.set(values);

        res.status(200).send({ success: 'Hack ADDED' });

      } else if (userSocial.discord) {
        const foundDiscordID = await findMemberId(userSocial.discord);

        if (foundDiscordID) {
          const calID = await addCalendarEvent(values.eventN, values.link, values.appS, values.appE, category);
          const discordMessageID = await sendMessage(values, foundDiscordID, category);

          const allId = await Promise.all([calID, discordMessageID]);

          values.calID = allId[0];
          values.discordMessageID = allId[1];

          let id = await generateFirebaseID(category);
          const ref = firestore.collection(category).doc(id);
          await ref.set(values);

          await firestore.collection('usernames').doc(values.postedBy).update({
            discordID: foundDiscordID,
          })

          res.status(200).send({ success: 'Hack ADDED' });
        }

      } else {

        const calID = await addCalendarEvent(values.eventN, values.link, values.appS, values.appE, category);
        const discordMessageID = await sendMessage(values, foundDiscordID, category);

        const allId = await Promise.all([calID, discordMessageID]);

        values.calID = allId[0];
        values.discordMessageID = allId[1];

        let id = await generateFirebaseID(category);
        const ref = firestore.collection(category).doc(id);
        await ref.set(values);

        res.status(200).send({ success: 'Hack ADDED' });

      }
    })
    .catch((error) => {
      res.status(200).send({ success: 'Hack ADDED' });
    });

}

async function getSocial(username) {
  let document = undefined;
  await firestore.collection('usernames').doc(username).get().then((doc) => {
    if (doc.exists) {
      document = doc.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      document = undefined;
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
    return undefined;
  });

  return document;
}
