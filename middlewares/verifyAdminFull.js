export const verifyAdminFull = (req, res, next) => {
  try {
    const userType = req.user?.type;

    if (userType !== 1) {
      return res.status(403).json({
        message: "No tienes permisos para modificar datos del panel."
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Error en la autorización" });
  }
};
