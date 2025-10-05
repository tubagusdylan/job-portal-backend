const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const config = require("../../config/global_config");

const clientId = config.get("/googleAuth/clientId");
const secretKey = config.get("/googleAuth/secretKey");
const urlApp = config.get("/host");
const feUrl = config.get("/frontendUrl");

passport.use(
  new GoogleStrategy(
    {
      clientID: clientId,
      clientSecret: secretKey,
      callbackURL: `${urlApp}/api/v1/users/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
      };
      return done(null, user);
    }
  )
);

const authGoogle = (req, res, next) => {
  const { role_id } = req.query;
  passport.authenticate("google", { scope: ["email", "profile"], state: JSON.stringify({ role_id }) })(req, res, next);
};

const authGoogleCallback = (req, res, next) => {
  passport.authenticate("google", { session: false, failureRedirect: `${feUrl}/error` }, (err, user, info) => {
    if (err || !user) {
      return res.redirect(`${feUrl}/error`);
    }
    const state = req.query.state ? JSON.parse(req.query.state) : {};
    const { role_id } = state;
    req.user = { ...user, role_id };
    next();
  })(req, res, next);
};

module.exports = { authGoogle, authGoogleCallback };
