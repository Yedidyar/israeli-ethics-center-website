module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '34c1cea1aca05937eef3da77dee48dbc'),
  },
});
