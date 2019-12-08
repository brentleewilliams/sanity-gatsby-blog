export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ded7e62e6dcbaad5a47bef0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fp7c6wmy',
                  apiId: 'e82cbe43-5867-4bfd-90e7-335356f7308e'
                },
                {
                  buildHookId: '5ded7e63605af39bc589fe9b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u3gdh8ye',
                  apiId: '096dc392-f747-4a11-8812-02e0df923d74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brentleewilliams/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u3gdh8ye.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
