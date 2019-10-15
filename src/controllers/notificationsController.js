import * as notificationsService from '../services/notificationsService';
import { errorEnum } from '../constants/error';

const retrieveForNotifications = async (req, res) => {
  try {
    const recipients = await notificationsService
      .retrieveForNotifications(req.body.teacher, req.body.notification);

    res.status(200).send({ recipients });
  } catch ({ message }) {
    res.status(errorEnum[message].status).send({ message: errorEnum[message].message });
  }
};

export default {
  retrieveForNotifications,
};
