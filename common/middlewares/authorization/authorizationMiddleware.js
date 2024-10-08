import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import { errorCodes } from '../../../server/users/helpers/constants.js';

const { FORBIDDEN } = StatusCodes;

export default class Authorization {
  static isAuthorizedResource(permissions, userRole) {
    return permissions.includes(userRole);
  }

  static Authorize = (permissions, endpoint) => {
    return (req, res, next) => {
      const user = req.user;
      const userRole = _.get(user, 'role', null);

      if (!user || !userRole)
        return res.status(FORBIDDEN).json({
          message: errorCodes.USER_NOT_AUTHORIZED.message,
          statusCode: FORBIDDEN,
          errorCode: errorCodes.USER_NOT_AUTHORIZED.code
        });

      if (!this.isAuthorizedResource(permissions, userRole))
        return res.status(FORBIDDEN).json({
          message: errorCodes.USER_NOT_AUTHORIZED.message,
          statusCode: FORBIDDEN,
          errorCode: errorCodes.USER_NOT_AUTHORIZED.code
        });
      next();
    };
  };
}
