/**
 * category controller
 */

import { factories } from '@strapi/strapi'
const { createCoreController } = require('@strapi/strapi').factories;

export default factories.createCoreController('api::category.category', ({strapi})=>({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::category.category').findOne({
            where: {category: id},
            populate: ['posts']
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    
        return this.transformResponse(sanitizedEntity)
    }
}));
