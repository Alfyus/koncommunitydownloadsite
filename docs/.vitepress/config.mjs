import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/koncommunitydownloadsite/',
  head: [['link', { rel: 'icon', href: '/img/favicon.ico' }], ['meta', { name: 'robots', content: 'noindex, nofollow'}]],
  title: "Kon Community Downloads",
  description: "Indice",
  themeConfig: {
    logo: '.vitepress/public/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Cerca',
                buttonAriaLabel: 'Cerca documenti'
              },
              modal: {
                noResultsText: 'Nessun risultato trovato',
                resetButtonTitle: 'Resetta ricerca',
                footer: {
                  selectText: 'per selezionare',
                  navigateText: 'per navigare',
                  closeText: 'per chiudere'
                }
              }
            }
          }
        }
      }
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorial', link: '/tutorial' }
    ],

    sidebar: [
      {
        text: 'Principali',
        items: [
          { text: 'Home', link: '/index.md' },
          { text: 'Tutorial', link: '/tutorial.md' },
        ]
      },
      
      {
    text: 'Sezioni',
    items: [
      { text: 'Applicazioni', link: '/Sezioni/applicazioni.md' },
      { text: 'Carte / Giochi da Tavolo', link: '/Sezioni/carte.md' },
      { text: 'Documenti / Tutorial vari', link: '/Sezioni/documenti.md' },
      { text: 'Film', link: '/Sezioni/film.md' },
      { text: 'Giochi', link: '/Sezioni/giochi.md' },
      { text: 'Libri', link: '/Sezioni/libri.md' },
      { text: 'Libri Scuola / Università', link: '/Sezioni/libriscuola.md' },
      { text: 'Magazine / Giornali', link: '/Sezioni/giornali.md' },
      { text: 'Manga', link: '/Sezioni/manga.md' },
      { text: 'Materiale Università', link: '/Sezioni/materialeuni.md' },
      { text: 'Papers', link: '/Sezioni/papers.md' },
      { text: 'Programmi', link: '/Sezioni/programmi.md' },
      { text: 'Serie e Anime', link: '/Sezioni/serie.md' },
    ]
  }
    ],


    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/7SQfjKPFVA' },
      { icon: 'telegram', link: 'https://t.me/+ttw_RJEiRs1hNzBk' }
    ]
  }
})
