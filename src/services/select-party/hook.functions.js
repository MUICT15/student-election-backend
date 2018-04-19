const jwt = require('jsonwebtoken');
const {NotAuthenticated} = require('@feathersjs/errors');
module.exports = () => {
  return async (hook) => {
    if (hook.params.provider || hook.params.authenticated) {
      const token = hook.params.headers.authorization.replace('Bearer ','');
      const decoded = jwt.decode(token);
      if(decoded._id != undefined){
        hook.app.service('users').get(decoded._id)
          .then((data)=>{
            console.log(data);
          });
      }else{
        throw new NotAuthenticated();
      }
    }else{
      throw new Error('this user selected');
    }
  };
};
