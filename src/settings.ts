import type { Text } from '@/i18n'

// Textos que mudam com o idioma usam { pt: '...', en: '...' }.
// Uma string simples vale para os dois idiomas.

interface Profile {
	fullName: string
	title: Text
	institute: Text
	bio: Text
	author_name: string
	areas: { title: Text; description: Text }[]
}

export const profile: Profile = {
	fullName: 'Samla A. Tavares',
	title: { pt: 'Engenheira de Software Senior', en: 'Senior Software Engineer' },
	institute: 'Accenture', // Empresa ou instituição; deixe vazio para não exibir
	bio: {
		pt: 'Atualmente trabalho na evolução de um sistema Java e faço mestrado com ênfase em Inteligência Artificial.',
		en: 'I\'m currently working on the evolving of a Java system while pursuing a master’s degree focused on Artificial Intelligence.',
	},
	author_name: 'Samla A. Tavares', // Nome destacado na lista de autores das publicações
	areas: [
		{
			title: 'Back-end',
			description: {
				pt: 'APIs, bancos de dados e sistemas distribuídos.',
				en: 'APIs, databases and distributed systems.',
			},
		},
		{
			title: 'Front-end',
			description: { pt: 'Vue.js, JSF, HTML, CSS.', en: 'Vue.js, JSF, HTML, CSS.' },
		},
		{
			title: { pt: 'Pesquisa', en: 'Research' },
			description: {
				pt: 'Detecção de Deepfakes.',
				en: 'Deepfake Detection.',
			},
		},
	],
}

// Deixe vazio para esconder o ícone
export const social = {
	email: 'samla_azevedo@outlook.com',
	linkedin: 'https://www.linkedin.com/in/samla-tavares',
	x: '',
	bluesky: '',
	github: 'https://github.com/samlatavares',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	menu_left: false,
	transitions: true,
	lightTheme: 'lilas', // Qualquer tema do daisyUI listado em src/styles/global.css
	darkTheme: 'sunset',
	// Endereço e caminho base vêm de astro.config.mjs (variáveis SITE_URL e BASE_PATH)
	base: import.meta.env.BASE_URL.replace(/\/$/, ''),
}

export const seo = {
	default_image: 'https://avatars.githubusercontent.com/u/12777952?v=4', // Caminho de uma imagem em public/ para pré-visualização em redes sociais
}
