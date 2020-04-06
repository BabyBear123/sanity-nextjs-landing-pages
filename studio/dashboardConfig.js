export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8aad091d2998bcf4470d5d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-negdv4o4',
                  apiId: 'e46a8567-239b-406b-9fda-64900c38e3f3'
                },
                {
                  buildHookId: '5e8aad0900c1a0c3f74ac02c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-knvhcz77',
                  apiId: '23b56253-4b20-4225-8ca4-4ada5982d2fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomJerry91123/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-knvhcz77.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
