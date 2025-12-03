import express from 'express';
import adminControllers from './admin.controllers.js';
import { verifyToken } from '../../middlewares/verifyToken.js';
import { validateForm } from '../../middlewares/validateForm.js';
import { registerSchema } from '../../schemas/registerSchema.js';
import { verifyAdminFull } from '../../middlewares/verifyAdminFull.js';
const router = express.Router();

router.get('/users', verifyToken, adminControllers.getUsersData);
router.put('/enableDisableUser', verifyToken,verifyAdminFull, adminControllers.enableDisableUser);
router.get('/userProfile/:id', verifyToken, adminControllers.getUserById);
router.get('/admins', verifyToken, adminControllers.getAdminsData);
router.post('/registerAdmin', verifyToken,verifyAdminFull, validateForm(registerSchema), adminControllers.registerAdmin);
router.put('/removeAdmin', verifyToken,verifyAdminFull, adminControllers.removeAdmin);
router.get('/events', verifyToken, adminControllers.getEventsData);
router.put('/deleteEvent', verifyToken,verifyAdminFull, adminControllers.deleteEvent);
router.get('/rooms', verifyToken, adminControllers.getRoomsData);
router.put('/deleteRoom', verifyToken,verifyAdminFull, adminControllers.deleteRoom);
router.get('/reservations', verifyToken, adminControllers.getReservationsData);
router.put('/reservations/status',verifyAdminFull, verifyToken, adminControllers.changeStatusReservation);
router.get('/reservations/:id', verifyToken, adminControllers.getReservationById);

export default router;
