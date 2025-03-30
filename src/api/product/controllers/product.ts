/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::product.product').findOne({
      where: { slug: id },
      populate: true,
    });

    if (!entity) {
      return ctx.notFound('Product not found');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
