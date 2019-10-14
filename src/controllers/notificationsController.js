import * as notificationsService from "../services/notificationsService";

const retrieveForNotifications = async (req, res, next) => {
  // console.log(req.body);
  const recipients = await notificationsService.
    retrieveForNotifications(req.body.teacher, req.body.notification)
  res.status(200).send({ recipients });
};

export default {
  retrieveForNotifications
}
