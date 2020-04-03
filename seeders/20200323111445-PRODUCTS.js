'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Crash Bandicoot N. Sane Trilogy',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 29,
          inStock: true,
          image:
            'https://s2.gaming-cdn.com/images/products/2476/271x377/crash-bandicoot-n-sane-trilogy-cover.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Minecraft',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 20,
          inStock: true,
          image:
            'https://www.mobygames.com/images/covers/l/497174-minecraft-nintendo-switch-front-cover.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nioh 2',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 35,
          inStock: true,
          image:
            'https://static2.raru.co.za/cover/2018/10/09/6913490-m.jpg?v=1583739589',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Uncharted Trilogy',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 25,
          inStock: true,
          image:
            'https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/7/6/1/9200000045581673.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Doom Eternal',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 50,
          inStock: true,
          image:
            'https://s3.gaming-cdn.com/images/products/2669/orig/doom-eternal-cover.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Borderlands 3',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 50,
          inStock: true,
          image:
            'https://s2.gaming-cdn.com/images/products/709/orig/borderlands-3-epic-games-cover.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rocket League',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 21,
          inStock: true,
          image:
            'https://steamcdn-a.akamaihd.net/steam/apps/252950/capsule_616x353_alt_assets_10.jpg?t=1575482411',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Diablo 3 Reaper Of Souls',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 40,
          inStock: true,
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Diablo_III_RoS_Cover.jpg/220px-Diablo_III_RoS_Cover.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Subnautica',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 22,
          inStock: true,
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Subnautica_cover_art.png/220px-Subnautica_cover_art.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bloodborne',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 30,
          inStock: true,
          image:
            'https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/9/2/6/9200000033356295.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Super Smash Bros Ultimate',
          description:
            'Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est.Culpa ad nisi proident laborum dolor elit eiusmod Lorem ea mollit quis est. Aliqua Lorem incididunt est esse elit duis do elit proident. Cupidatat esse officia in reprehenderit ex et amet. Reprehenderit Lorem nulla voluptate occaecat.',
          price: 50,
          inStock: true,
          image:
            'https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {})
  }
}
