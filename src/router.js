import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Pricing from './pages/Pricing.vue'
import Blog from './pages/Blog.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'
import BlogPost from './pages/BlogPost.vue'
import Support from './pages/Support.vue'
import Apps from './pages/Apps.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'

import AboutPage from './partials/footer/AboutPage.vue'
import BlogPage from './partials/footer/BlogPage.vue'
import ServicesPage from './partials/footer/ServicesPage.vue'
import ProjectsPage from './partials/footer/ProjectsPage.vue'
import TermsPage from './partials/footer/TermsPage.vue'
import PrivacyPage from './partials/footer/PrivacyPage.vue'
import CookiesPage from './partials/footer/CookiesPage.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
  {
  path: '/',
  component: Home,
  meta: {
    title: 'ProfiSajt.digital – Profesionalna web rešenja',
    metaTags: [
      // Basic
      {
        name: 'description',
        content: 'Početna stranica ProfiSajt.digital – moderna web rešenja, online prodavnice, marketplace i AI asistenti za vaš biznis.'
      },

      // OG
      {
        property: 'og:title',
        content: 'ProfiSajt.digital – Profesionalna web rešenja'
      },
      {
        property: 'og:description',
        content: 'Izrada sajtova, online prodavnica i AI rešenja uz moderni dizajn i sigurnu infrastrukturu.'
      },
      {
        property: 'og:url',
        content: 'https://profisajt.digital/'
      },
      {
        property: 'og:image',
        content: 'https://profisajt.digital/images/og/og-laptop-1200x630.jpg'
      },

      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'ProfiSajt.digital – Profesionalna web rešenja'
      },
      {
        name: 'twitter:description',
        content: 'Izrada sajtova, online prodavnica i AI rešenja uz moderni dizajn i sigurnu infrastrukturu.'
      },
      {
        name: 'twitter:image',
        content: 'https://profisajt.digital/images/og/og-laptop-1200x630.jpg'
      }
    ]
  }
},
  { path: '/pricing', 
    component: Pricing, 
    meta: {
    title: "Cene i Paketi — ProfiSajt.digital",
    metaTags: [
      {
        name: "description",
        content: "Pogledajte transparentne pakete za izradu sajtova, web prodavnica i digitalnih rešenja."
      },
      {
        name: "og:title",
        content: "Cene — ProfiSajt.digital"
      },
      {
        name: "og:description",
        content: "Upoznajte naše pakete i izaberite rešenje za vaš biznis."
      }
    ]
  }
 },
  { path: '/projects', 
    component: Projects, 
    meta: {
      title: "Projekti — ProfiSajt.digital",
      metaTags: [
        {
          name: "description",
          content: "Pogledajte primere uspešnih projekata i digitalnih rešenja koja smo realizovali."
        },
        {
          name: "og:title",
          content: "Projekti — ProfiSajt.digital"
        },
        {
          name: "og:description",
          content: "Portfolio naših web sajtova, prodavnica, aplikacija i AI rešenja."
        }
      ]
    }
   },
  {
  path: '/blog',
  component: Blog,
  meta: {
    title: "Blog — Development, Marketing i AI | ProfiSajt.digital",
    metaTags: [
      {
        name: "description",
        content: "Članci o web developmentu, digitalnom marketingu i praktičnoj primeni veštačke inteligencije."
      },
      {
        name: "og:title",
        content: "Blog — ProfiSajt.digital"
      },
      {
        name: "og:description",
        content: "Najnoviji tekstovi o sajtovima, e-commerceu, marketingu i AI alatima."
      },
      {
        name: "og:image",
        content: "https://profisajt.digital/images/og/og-blog-1200x630.jpg"
      },
      {
        name: "og:type",
        content: "article"
      }
    ]
  }
},

  { path: '/blog-post', 
    component: BlogPost,
    meta: {
      title: "Blog Post — ProfiSajt.digital",
      metaTags: [
        {
          name: "description",
          content: "Detaljan pregled blog članka. Uskoro dinamički postovi!"
        },
        {
          name: "og:title",
          content: "Blog Post — ProfiSajt.digital"
        },
        {
          name: "og:description",
          content: "Članak iz oblasti developmenta, marketinga ili AI."
        }
      ]
    }
   },
  { path: '/contact', 
    component: Contact,
    meta: {
      title: "Kontakt — ProfiSajt.digital",
      metaTags: [
        {
          name: "description",
          content: "Kontaktirajte nas za izradu sajta, online prodavnice ili digitalnog rešenja."
        },
        {
          name: "og:title",
          content: "Kontakt — ProfiSajt.digital"
        },
        {
          name: "og:description",
          content: "Stojimo vam na raspolaganju za sva pitanja i ponude."
        }
      ]
    }
   },
  { path: '/support', 
    component: Support,
    meta: {
      title: "Podrška — ProfiSajt.digital",
      metaTags: [
        {
          name: "description",
          content: "Tehnička podrška i pomoć za sve korisnike naših usluga i rešenja."
        },
        {
          name: "og:title",
          content: "Podrška — ProfiSajt.digital"
        },
        {
          name: "og:description",
          content: "Naš tim je tu da reši sve izazove i pitanja."
        }
      ]
    }
   },
  { path: '/apps', 
    component: Apps,
    meta: {
      title: "Aplikacije i Ekstenzije — ProfiSajt.digital",
      metaTags: [
        {
          name: "description",
          content: "Pregled gotovih aplikacija, dodataka i digitalnih rešenja koja nudimo."
        },
        {
          name: "og:title",
          content: "Aplikacije — ProfiSajt.digital"
        },
        {
          name: "og:description",
          content: "Razne aplikacije i alati za optimizaciju vašeg poslovanja."
        }
      ]
    }
   },
  { path: '/signin', 
    component: SignIn,
    meta: {
      title: "Prijava — ProfiSajt.digital"
    }
   },
  {
    path: '/signup',
    component: SignUp,
    meta: { layout: 'auth' }
  },
  {
  path: '/reset-password',
  name: 'reset-password',
  component: ResetPassword,
  meta: { layout: 'auth' },
},
{
  path: '/welcome',
  name: 'welcome',
  component: () => import('../pages/WelcomePage.vue'),
  meta: { requiresAuth: true },
},
  { path: '/about', 
    component: AboutPage,
    meta: {
      title: 'O nama | ProfiSajt.digital',
      metaTags: [
        {
          name: 'description',
          content: 'Saznajte više o ProfiSajt.digital, našem timu i načinu na koji gradimo moderna web rešenja i digitalne strategije.'
        },
        {
          name: 'og:title',
          content: 'O nama | ProfiSajt.digital'
        },
        {
          name: 'og:description',
          content: 'ProfiSajt.digital kombinuje razvoj web sajtova, online prodavnica, marketplace rešenja i digitalni marketing.'
        }
      ]
    }
  },
  { path: '/services', 
    component: ServicesPage,
    meta: {
      title: 'Usluge | ProfiSajt.digital',
      metaTags: [
        {
          name: 'description',
          content: 'Pregled usluga: izrada sajtova, online prodavnice, marketplace rešenja, AI asistenti i digitalni marketing.'
        },
        {
          name: 'og:title',
          content: 'Usluge | ProfiSajt.digital'
        },
        {
          name: 'og:description',
          content: 'Pogledajte kako ProfiSajt.digital može pomoći vašem biznisu kompletnim digitalnim rešenjima.'
        }
      ]
    }
  },
  { path: '/projects-page', 
    component: ProjectsPage,
    meta: {
      title: 'Projekti | ProfiSajt.digital',
      metaTags: [
        {
          name: 'description',
          content: 'Primeri projekata i rešenja koja smo razvili za klijente – sajtovi, prodavnice i specijalizovane platforme.'
        },
        {
          name: 'og:title',
          content: 'Projekti | ProfiSajt.digital'
        },
        {
          name: 'og:description',
          content: 'Upoznajte realne projekte kojima ProfiSajt.digital pomaže klijentima da rastu na internetu.'
        }
      ]
    }
  },
  { path: '/terms',
  component: TermsPage,
  meta: {
    title: 'Uslovi korišćenja | ProfiSajt.digital',
    metaTags: [
      {
        name: 'description',
        content: 'Uslovi korišćenja ProfiSajt.digital platforme – pravila, odgovornosti i način korišćenja naših usluga i sadržaja na sajtu.'
      },
      {
        name: 'robots',
        content: 'index,follow'
      },
      {
        name: 'og:title',
        content: 'Uslovi korišćenja | ProfiSajt.digital'
      },
      {
        name: 'og:description',
        content: 'Detaljno objašnjenje uslova korišćenja ProfiSajt.digital platforme, prava i obaveza korisnika.'
      }
    ]
  }
},

  {
    path: '/privacy',
    component: PrivacyPage,
    meta: {
      title: 'Politika privatnosti – ProfiSajt.digital',
      metaTags: [
        {
          name: 'description',
          content: 'Saznajte kako ProfiSajt.digital prikuplja, koristi i štiti vaše lične podatke.'
        },
        {
          name: 'og:title',
          content: 'Politika privatnosti – ProfiSajt.digital'
        }
      ]
    }
  },

  {path: '/cookies',
    component: CookiesPage,
    meta: {
      title: 'Politika kolačića | ProfiSajt.digital',
      metaTags: [
        {
          name: 'description',
          content: 'Informacije o tome kako ProfiSajt.digital koristi kolačiće radi funkcionalnosti, analitike i personalizacije.'
        },
        {
          name: 'robots',
          content: 'index,follow'
        }
      ]
    }
  },

  {path: '/blog-page',
    component: BlogPage,
    meta: {
      title: 'Blog – ProfiSajt.digital',
      metaTags: [
        {
          name: 'description',
          content: 'Blog sa temama iz web developmenta, digitalnog marketinga i AI alata. Saveti, tutorijali i analize.'
        },
        {
          name: 'og:title',
          content: 'Blog – ProfiSajt.digital'
        }
      ]
    }
  },
  
]
})

router.afterEach((to) => {
  // Title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  const metaTags = to.meta?.metaTags || []

  metaTags.forEach((tagDef) => {
    const selector = tagDef.property
      ? `meta[property="${tagDef.property}"]`
      : `meta[name="${tagDef.name}"]`

    let tag = document.querySelector(selector)

    if (!tag) {
      tag = document.createElement('meta')
      if (tagDef.property) {
        tag.setAttribute('property', tagDef.property)
      } else if (tagDef.name) {
        tag.setAttribute('name', tagDef.name)
      }
      document.head.appendChild(tag)
    }

    tag.setAttribute('content', tagDef.content)
  })
})


export default router
