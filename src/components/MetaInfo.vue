<template>
  <div></div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  name: 'MetaInfo',
  setup() {
    useHead({
      title: 'Paul Reekers - Teacher, Media Developer & Agile Coach | paulreekers.nl',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'author', content: 'Paul Reekers' },
        { name: 'description', content: 'Explore the world of Paul Reekers, a dedicated teacher and expert in design and web development. As a certified Agile coach, Scrum Master, and Product Owner, he brings a unique blend of skills to the digital realm. Learn more about his work and insights at paulreekers.nl.' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Paul Reekers - Teacher, Web Developer, Agile Expert & Certified Scrum Professional' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.paulreekers.nl/' },
        { property: 'og:description', content: 'Paul Reekers, a multifaceted professional specializing in teaching, design, web development, and Agile coaching. Certified as both a Scrum Master and Product Owner, he brings a wealth of expertise to the field. Discover more at paulreekers.nl' },
        { property: 'og:image', content: 'https://www.paulreekers.nl' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.paulreekers.nl' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/src/assets/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/src/assets/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/src/assets/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/src/assets/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: 'data:image/svg+xml,%3c?xml%20version=\'1.0\'%20standalone=\'no\'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20\'-//W3C//DTD%20SVG%2020010904//EN\'%20\'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\'%3e%3csvg%20version=\'1.0\'%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'703.000000pt\'%20height=\'703.000000pt\'%20viewBox=\'0%200%20703.000000%20703.000000\'%20preserveAspectRatio=\'xMidYMid%20meet\'%3e%3cmetadata%3e%20Created%20by%20potrace%201.14,%20written%20by%20Peter%20Selinger%202001-2017%20%3c/metadata%3e%3cg%20transform=\'translate(0.000000,703.000000)%20scale(0.100000,-0.100000)\'%20fill=\'%23000000\'%20stroke=\'none\'%3e%3cpath%20d=\'M819%207028%20c-7%20-17%20-3%20-231%204%20-235%205%20-3%2028%20-7%2051%20-8%20129%20-6%20208%20-31%20269%20-84%2070%20-62%2065%20207%2065%20-3185%200%20-2052%20-3%20-3077%20-10%20-3099%20-11%20-37%20-50%20-84%20-88%20-108%20-52%20-33%20-163%20-59%20-265%20-63%20l-30%20-1%200%20-120%200%20-120%20970%200%20970%200%200%20120%200%20120%20-40%203%20c-150%2010%20-248%2061%20-281%20147%20-14%2039%20-16%20162%20-17%201254%20-2%201070%200%201211%2013%201211%208%201%20436%202%20950%204%20514%202%20955%206%20980%2010%2025%203%2083%2010%20130%2016%20107%2014%20132%2018%20200%2032%2030%206%2062%2012%2070%2013%2038%205%20165%2041%20270%2077%20282%2097%20544%20256%20717%20437%20222%20232%20371%20579%20428%201001%203%2025%208%2056%2010%2070%2019%20133%2027%20589%2011%20740%20-20%20200%20-29%20258%20-62%20409%20-59%20263%20-176%20520%20-319%20697%20-184%20230%20-502%20429%20-855%20538%20-152%2046%20-358%2089%20-493%20102%20-34%203%20-73%208%20-87%2012%20-24%206%20-3559%2016%20-3561%2010z%20m3526%20-1244%20c190%20-33%20359%20-109%20454%20-205%2031%20-30%2061%20-62%2068%20-71%2027%20-37%2080%20-156%2084%20-193%201%20-5%205%20-20%2010%20-31%204%20-12%2010%20-39%2014%20-61%203%20-21%208%20-50%2011%20-63%2016%20-73%2010%20-385%20-10%20-485%20-3%20-16%20-8%20-43%20-11%20-58%20-8%20-44%20-52%20-153%20-81%20-203%20-39%20-67%20-110%20-135%20-190%20-182%20-67%20-40%20-201%20-95%20-261%20-107%20-15%20-3%20-37%20-8%20-48%20-10%20-11%20-2%20-33%20-7%20-50%20-11%20-54%20-12%20-1915%20-13%20-1916%200%20-1%2015%20-1%201656%200%201679%201%2016%2048%2017%20924%2016%20748%200%20937%20-3%201002%20-15z\'/%3e%3c/g%3e%3c/svg%3e', color: '#FFF' },
        { rel: 'shortcut icon', href: '/src/assets/favicon/favicon.ico' }
      ],
    });
  }
}
</script>
