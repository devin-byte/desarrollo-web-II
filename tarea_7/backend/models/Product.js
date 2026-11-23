const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Product = sequelize.define('Product', {
    partNumber: {
        type: DataTypes.TEXT
    },
    productType: {
        type: DataTypes.TEXT
    },
    category_code: {
        type: DataTypes.TEXT
    },
    brand_code: {
        type: DataTypes.TEXT
    },
    family_code: {
        type: DataTypes.TEXT
    },
    line_code: {
        type: DataTypes.TEXT
    },
    'productSegment.code': {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.TEXT
    },
    value: {
        type: DataTypes.DOUBLE
    },
    valueCurrency: {
        type: DataTypes.TEXT
    },
    defaultQuantityUnits: {
        type: DataTypes.TEXT
    },
    name: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    plannerCode: {
        type: DataTypes.TEXT
    },
    sourceLink: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'product',
    timestamps: false
});

module.exports = Product;