import express from 'express';
import roomsControllers from './rooms.controllers.js';
import { verifyToken } from '../../middlewares/verifyToken.js';
import { uploadImageMulti } from '../../middlewares/multerMultifile.js';
import { validateForm } from '../../middlewares/validateForm.js';
import {createRoomSchema } from '../../schemas/createRoomSchema.js'
import { handleMulterError } from '../../helpers/handleMulterError.js';
import { verifyAdminFull } from '../../middlewares/verifyAdminFull.js';

const router = express.Router();

router.post('/createRoom', verifyToken,verifyAdminFull, handleMulterError(uploadImageMulti("rooms")), validateForm(createRoomSchema), roomsControllers.createRoom);
router.get('/room/:id', roomsControllers.getRoomWithImagesById);
router.put('/editRoom/:id', verifyToken, verifyAdminFull , validateForm(createRoomSchema), roomsControllers.editRoom);
router.get('/imagesByRoomId/:id', verifyToken, roomsControllers.imagesByRoomId);
router.delete ('/deleteImg', verifyToken, verifyAdminFull , roomsControllers.deleteImg);
router.post('/addImages', verifyToken,verifyAdminFull, handleMulterError(uploadImageMulti("rooms")), roomsControllers.addImages);
router.get('/rooms', roomsControllers.getRoomsData);

export default router;
