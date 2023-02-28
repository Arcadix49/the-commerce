import bcrypt from 'bcrypt';
import User from '../models/userModel.js'


export const register = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
        })
        const jwt = user.createJWT()
        user.save()
        .then((user) => res.status(201).json({user, jwt}))
        .catch(error => res.status(400).json({error}))
    })
    .catch(error => res.status(500).json({ error }));
}

export const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }

          const token = user.createJWT();

          res.json({ token });
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
};