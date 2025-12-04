import express from 'express'
import eventsControllers from './events.controllers.js'
import { verifyToken } from '../../middlewares/verifyToken.js'
import { uploadImageAny } from '../../middlewares/multerAny.js'
import { createEventSchema } from '../../schemas/eventSchema.js'
import { validateFormsEvent } from '../../middlewares/validateFormsEvent.js'
import { uploadImageSingle } from '../../middlewares/multerSingle.js'
import { uploadImageMulti } from '../../middlewares/multerMultifile.js'
import { handleMulterError } from '../../helpers/handleMulterError.js'
import { editDataEventSchema } from '../../schemas/editDataEventSchema.js'
import { editSectionEventSchema } from '../../schemas/editSectionEventSchema.js'
import { editEventKeyPointSchema } from '../../schemas/editEventKeyPointSchema.js'
import { verifyAdminFull } from '../../middlewares/verifyAdminFull.js'
const router = express.Router()

router.get('/events', eventsControllers.getEventData)
router.get('/calendar/month/:year/:month', eventsControllers.getEventsByMonth)
router.get('/calendar/day/:date', eventsControllers.getEventsByDay)
router.post('/createEvent', verifyToken, uploadImageAny('events'),verifyAdminFull, validateFormsEvent(createEventSchema), eventsControllers.createEvent)
router.get('/event/:id', eventsControllers.getEventById)
router.get('/editEvent/:id', verifyToken, eventsControllers.getEventById);
router.put('/editData/:id', verifyToken, uploadImageSingle("events"),verifyAdminFull, validateFormsEvent(editDataEventSchema), eventsControllers.editDataEvent);
router.put('/editSection', verifyToken,verifyAdminFull, validateFormsEvent(editSectionEventSchema), eventsControllers.editDataSection);
router.put('/delkeypoint' , verifyToken ,verifyAdminFull, eventsControllers.delKeypoint);
router.put('/addkeypoint/:id' , verifyToken,verifyAdminFull, validateFormsEvent(editEventKeyPointSchema), eventsControllers.addKeypoint);
router.delete('/delSectionImage', verifyToken,verifyAdminFull, eventsControllers.deleteSectionImage);
router.put('/addSectionImages', verifyToken,verifyAdminFull, uploadImageMulti("events"), eventsControllers.addSectionImages);
router.delete('/deleteSection/:id', verifyToken,verifyAdminFull, eventsControllers.deleteSection);

export default router;
