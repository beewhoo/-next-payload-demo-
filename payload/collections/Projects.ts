import { CollectionConfig } from 'payload/types';

export const Projects: CollectionConfig = {
    slug: 'projects',
    fields: [
        {
            name: 'orgId',
            type: 'number'
        },
        {
            name: 'composition',
            type: 'json'
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users'
        },
    ]
}

