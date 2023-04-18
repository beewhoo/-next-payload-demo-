import { CollectionConfig } from 'payload/types';

export const MediaAssets: CollectionConfig = {
    slug: 'media-assets',
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
            name: 'file',
            type: 'text'
        },
        {
            name: 'frames',
            type: 'number'
        },
        {
            name: 'duration',
            type: 'number'
        },
        {
            name: 'thumbnail',
            type: 'text'
        },
        {
            name: 'transcript',
            type: 'text'
        },
        {
            name: 'clip',
            type: 'json'
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users'
        }

    ],
};
