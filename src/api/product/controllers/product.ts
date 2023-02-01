/**
 * product controller
 */

import { factories } from "@strapi/strapi";
const { createCoreController } = require("@strapi/strapi").factories;

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db.query("api::product.product").findOne({
        where: { slug: id },
        populate: ["img"],
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },

    async find(ctx) {
      const entity = await strapi.entityService.findMany(
        "api::product.product",
        {
          populate: ["img"],
        }
      );

      const sanitizedEntities = await Promise.all(
        entity.map((entity) => this.sanitizeOutput(entity, ctx))
      );

      return this.transformResponse(sanitizedEntities);
    },
  })
);
