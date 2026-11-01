export default [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'Home',
        meta: { name: 'Home', title: '홈' },
    },

    // {
    //     path: '/instagram',
    //     component: () => import('../views/instagram/InstagramHome.vue'),
    //     name: 'Instagram',
    //     meta: { name: 'Instagram', title: 'Instagram' },
    // },
    // {
    //     path: '/instagram/:idx',
    //     component: () => import('../views/instagram/InstagramDetail.vue'),
    //     name: 'InstagramDetail',
    //     meta: { name: 'InstagramDetail', title: 'Instagram Detail' },
    // },
    //
    // {
    //     path: '/kakao',
    //     component: () => import('../views/kakaotalk/KakaoTalkHome.vue'),
    //     name: 'KakaoTalk',
    //     meta: { name: 'KakaoTalk', title: 'KakaoTalk' },
    // },
    // {
    //     path: '/kakao/:idx',
    //     component: () => import('../views/kakaotalk/KakaoTalkDetail.vue'),
    //     name: 'KakaoTalkDetail',
    //     meta: { name: 'KakaoTalkDetail', title: 'KakaoTalk Detail' },
    // },
    //
    // {
    //     path: '/memo',
    //     component: () => import('../views/memo/MemoHome.vue'),
    //     name: 'Memo',
    //     meta: { name: 'Memo', title: 'Memo' },
    // },
    // {
    //     path: '/memo/:idx',
    //     component: () => import('../views/memo/MemoDetail.vue'),
    //     name: 'MemoDetail',
    //     meta: { name: 'MemoDetail', title: 'Memo Detail' },
    // },
    //
    // {
    //     path: '/netflix',
    //     component: () => import('../views/netflix/NetflixHome.vue'),
    //     name: 'Netflix',
    //     meta: { name: 'Netflix', title: 'Netflix' },
    // },
    // {
    //     path: '/netflix/like',
    //     component: () => import('../views/netflix/NetflixLike.vue'),
    //     name: 'NetflixLike',
    //     meta: { name: 'NetflixLike', title: 'Netflix Like' },
    // },
    //
    // {
    //     path: '/youtubemusic',
    //     component: () => import('../views/youtubemusic/YoutubeMusicHome.vue'),
    //     name: 'YoutubeMusic',
    //     meta: { name: 'YoutubeMusic', title: 'YoutubeMusic' },
    // },
    // {
    //     path: '/youtubemusic/play',
    //     component: () => import('../views/youtubemusic/YoutubeMusicPlay.vue'),
    //     name: 'YoutubeMusicPlay',
    //     meta: { name: 'YoutubeMusicPlay', title: 'YoutubeMusic Play' },
    // },
    // {
    //     path: '/youtubemusic/:idx',
    //     component: () => import('../views/youtubemusic/YoutubeMusicDetail.vue'),
    //     name: 'YoutubeMusicDetail',
    //     meta: { name: 'YoutubeMusicDetail', title: 'YoutubeMusic Detail' },
    // },

    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];
