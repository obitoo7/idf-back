/**
 * diet controller
 */

import { factories } from '@strapi/strapi'
const { createCoreController } = require('@strapi/strapi').factories;


export default factories.createCoreController('api::diet.diet', ({strapi})=>({
    async findOne(ctx) {
        const { id } = ctx.params;
    
        const entity = await strapi.db.query('api::diet.diet').findOne({
            where: {slug : id}
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    
        return this.transformResponse(sanitizedEntity);
      }
}));
