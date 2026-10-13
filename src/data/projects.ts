import type { Localizable } from '@/i18n'
import type { Project } from '@/types/cv'

// Os projetos com featured: true também aparecem na página inicial.
// Textos que mudam com o idioma usam { pt: '...', en: '...' }.

export const projects: Localizable<Project>[] = [
	{
		title: { pt: 'Página Flexbox com documentação técnica', en: 'Flexbox Page with Technical Documentation' },
		description: {
			pt: 'Página Flexbox responsiva com documentação técnica criada para a certificação de Web Design do FreeCodeCamp.',
			en: 'FlexBox Technical Page created for FreeCodeCamp\'s Responsive Web Design Certification.'
		},
		tags: ['Html', 'Css', 'Flexbox'],
		repo: 'https://github.com/samlatavares/technical-documentation',
		demo: 'https://samlatavares.github.io/technical-documentation/',
		featured: true,
	},
	{
		title: { pt: 'Projeto Detecção de Deepfakes', en: 'Deepfake Detection Project' },
		description: {
			pt: 'Projeto final apresentado à disciplina de Visão Computacional do IFES. Trata-se de um modelo treinado para classificar vídeos faciais como reais ou falsos (Deepfake). O modelo combina aprendizado contrastivo supervisionado e classificação supervisionada, utilizando um backbone único compartilhado e múltiplas cabeças de saída.',
			en: 'Final project for the Computer Vision course at IFES. It is a model trained to classify facial videos as real or fake (deepfake). The model combines supervised contrastive learning and supervised classification, using a single shared backbone and multiple output heads.',
		},
		tags: ['Python', 'Deep Learning', 'Artificial Inteligence'],
		repo: 'https://github.com/samlatavares/projeto-final-visao-computacional',
		featured: true,
	}
]
