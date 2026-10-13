export const languages = ['pt', 'en'] as const
export type Lang = (typeof languages)[number]
export const defaultLang: Lang = 'pt'
export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' }

// Um texto pode ser uma string só (igual nos dois idiomas) ou um par { pt, en }
export type Localized = Record<Lang, string>
export type Text = string | Localized
export type Localizable<T> = {
	[K in keyof T]: T[K] extends string | undefined ? T[K] | Localized : T[K]
}

export function tr(text: Text | undefined, lang: Lang): string {
	if (text === undefined) return ''
	return typeof text === 'string' ? text : text[lang]
}

// Converte todos os campos { pt, en } de um item para o idioma pedido
export function localize<T extends object>(item: Localizable<T>, lang: Lang): T {
	return Object.fromEntries(
		Object.entries(item).map(([key, value]) => [
			key,
			value && typeof value === 'object' && !Array.isArray(value) && lang in value
				? (value as Localized)[lang]
				: value,
		])
	) as T
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export const routes = {
	home: { pt: '/', en: '/en/' },
	projects: { pt: '/projetos', en: '/en/projects' },
	publications: { pt: '/publicacoes', en: '/en/publications' },
	cv: { pt: '/cv', en: '/en/cv' },
} as const
export type Route = keyof typeof routes

const normalize = (path: string) => path.replace(/\/$/, '') || '/'

function stripBase(pathname: string): string {
	return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname
}

export function getLang(url: URL): Lang {
	const path = stripBase(url.pathname)
	return path === '/en' || path.startsWith('/en/') ? 'en' : 'pt'
}

export function getPath(lang: Lang, route: Route): string {
	return base + routes[route][lang]
}

// Caminho da página atual em cada idioma; undefined se a página não tiver tradução
export function getAlternates(url: URL): Record<Lang, string> | undefined {
	const lang = getLang(url)
	const path = normalize(stripBase(url.pathname))
	const route = (Object.keys(routes) as Route[]).find((key) => normalize(routes[key][lang]) === path)
	return route && { pt: getPath('pt', route), en: getPath('en', route) }
}

export const ui = {
	pt: {
		navHome: 'Início',
		navProjects: 'Projetos',
		navPublications: 'Publicações',
		navCv: 'Currículo',
		greeting: 'Olá! Meu nome é',
		areas: 'Áreas de atuação',
		featuredProjects: 'Projetos em destaque',
		allProjects: 'Ver todos os projetos →',
		recentPublications: 'Publicações',
		allPublications: 'Ver todas as publicações →',
		code: 'Código',
		demo: 'Demo',
		authors: 'Autores:',
		readPublication: 'Ler publicação',
		education: 'Formação',
		experience: 'Experiência',
		skills: 'Habilidades',
		builtWith: 'Feito com',
		by: 'de',
		photoOf: 'Foto de',
		closeMenu: 'Fechar menu',
		themeToggle: 'Alternar entre tema claro e escuro',
		darkMode: 'Modo escuro',
		language: 'Idioma',
	},
	en: {
		navHome: 'Home',
		navProjects: 'Projects',
		navPublications: 'Publications',
		navCv: 'CV',
		greeting: "Hi! I'm",
		areas: 'Areas of work',
		featuredProjects: 'Featured projects',
		allProjects: 'See all projects →',
		recentPublications: 'Publications',
		allPublications: 'See all publications →',
		code: 'Code',
		demo: 'Demo',
		authors: 'Authors:',
		readPublication: 'Read publication',
		education: 'Education',
		experience: 'Experience',
		skills: 'Skills',
		builtWith: 'Built with',
		by: 'by',
		photoOf: 'Photo of',
		closeMenu: 'Close menu',
		themeToggle: 'Switch between light and dark themes',
		darkMode: 'Dark mode',
		language: 'Language',
	},
} satisfies Record<Lang, Record<string, string>>
