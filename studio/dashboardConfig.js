export default {
  widgets: [
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
                  buildHookId: '628c32392ffbfa0a99474d5c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-72c22qyr',
                  apiId: 'c4021c95-5179-4861-a6fd-5592fbdc40d5'
                },
                {
                  buildHookId: '628c323a81735b0abbb4abbf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qkw67wgk',
                  apiId: 'c2217118-94fe-470c-afdb-f76bd732271f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oa998/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qkw67wgk.netlify.app', category: 'apps'}
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
