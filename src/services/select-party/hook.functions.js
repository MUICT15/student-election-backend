const jwt = require('jsonwebtoken');
const {
  NotAuthenticated
} = require('@feathersjs/errors');
module.exports.checkBeforeSelectParty = () => {
  return async (hook) => {
    if (hook.params.headers.authorization) {
      const token = hook.params.headers.authorization.replace('Bearer ', '');
      const decoded = jwt.decode(token);
      if (decoded.userId != undefined) {
        await hook.app.service('users').get(decoded.userId)
          .then(async ({
            elected
          }) => {
            if (elected == false) {
              await hook.app.service('users').patch(decoded.userId, {
                elected: true
              }).then(() => {
                return hook;
              }).catch((err) => {
                throw new Error(err);
              });
              return hook;
            } else {
              throw new Error('this user selected');
            }
          });
      } else {
        throw new NotAuthenticated();
      }
    } else {
      throw new NotAuthenticated();
    }
  };
};
module.exports.removeSomeCredential = () =>{
  return async(hook) =>{
    for(let i = 0 ; i < hook.result.data.length ; i++){
      hook.result.data[i].userSelected = null;
      hook.result.data[i].score = null;
    }
  };
};