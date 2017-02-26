/**
 * Created by mac WuYiPing on 17/1/19.
 */
const routers = [{
  path: '/',
  component: require('../views/top_menu.vue'),
  children:[
    {
      path: '/',
      component:require('../views/singleAudio.vue')
    },

    {
      path: '/multi',
      component:require('../views/multi_audio.vue')

    },

    {
      path: '/manageApp',
      component:require('../views/multi_audio.vue')
    },

    {
      path: '/ManageConfig',
      component :require('../views/singleAudio.vue')
    },
    {
      path: '/publishApp',
      component:require('../views/singleAudio.vue')
    },

    {
      path: '/threat-perception',
      name: 'threat-perception',
      component :require('../views/singleAudio.vue')
    }
    ]
}

]


export default routers;
