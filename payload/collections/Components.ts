import { CollectionConfig } from 'payload/types';

export const Components: CollectionConfig = {
    slug: 'components',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
        admin: () => true
    },
    fields: [
        {
            name: 'orgId',
            type: 'number'
        },
        {
            name: 'display',
            type: 'text'
        },
        {
            name: 'key',
            type: 'text'
        },
        {
            name: 'thumbnail',
            type: 'text'
        },
        {
            name: 'timing',
            type: 'json'
        },
        {
            name: 'parameters',
            type: 'json'
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users'
        }
    ],
};
