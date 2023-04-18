import { CollectionConfig } from 'payload/types';
import { Access } from 'payload/config';


const canReadProjects: Access = ({ req: { user, query } }) => {

    if (!user) return false;
    if (user.role === 'admin') return true;


    if (query.org === 'true') {
        return {
            orgId: {
                equals: user.orgId
            }
        }

    } else {
        return {
            and: [
                {
                    orgId: {
                        equals: user.orgId
                    }
                },
                {
                    user: {
                        equals: user.id
                    }
                }
            ]
        }
    }
};

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
    ],
    access: {
        read: canReadProjects
    }
}

