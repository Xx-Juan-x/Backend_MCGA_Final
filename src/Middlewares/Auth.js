export const AuthMiddleware = (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (token !== '1234') throw new Error('Invalid token');
      console.log('token', token);
      next();
    } catch (error) {
      res.status(401).send({ msg: error });
    }
  };