import type { Localizable } from '@/i18n'
import type { Experience, Education, Skill, Publication } from '@/types/cv'

// Textos que mudam com o idioma usam { pt: '...', en: '...' }.
// Itens em andamento terminam o período com "atual" / "present".

export const experiences: Localizable<Experience>[] = [
	{
		company: 'Accenture',
		time: { pt: '2026 - atual', en: '2026 - present' },
		title: { pt: 'Engenheira de Software Senior', en: 'Senior Software Engineer' },
		location: { pt: 'Vitória, Brasil', en: 'Vitória, Brazil' },
		description: {
			pt: 'Atuação na evolução de um sistema Java, com responsabilidade por decisões de arquitetura e pelo planejamento de tarefas. Continuidade das atividades de desenvolvimento, mentoria de novos desenvolvedores, estimativas e documentação técnica.',
			en: 'Working on the evolution of a Java system, with responsibility for architecture decisions and task planning. Continuing the development, mentoring of new developers, estimation and technical documentation activities.',
		},		
	},
	{
		company: 'Accenture',
		time: '2020 - 2026',
		title: { pt: 'Engenheira de Software', en: 'Software Engineer' },
		location: { pt: 'Vitória, Brasil', en: 'Vitória, Brazil' },
		description: {
			pt: 'Desenvolvimento de evolutivas e correções em sistemas web e desktop, com testes unitários e criação e evolução de procedures e scripts de banco. Mentoria de novos desenvolvedores, estimativa de tarefas e documentação de processos e de conhecimentos técnicos. Tecnologias principais: Java, Maven, C#/.NET, .NET Core, Vue.js, JavaScript, HTML, CSS, Git e Oracle. Principais contribuições: criação de uma base de conhecimento para reter o conhecimento da equipe e facilitar o onboarding de novos colegas; migração de um sistema de Java 6 para Java 8; implantação de uma nova área de negócio em um sistema de logística e otimização de equipamentos móveis; normalização de banco de dados; e evolutiva para priorização de cargas em um deque de navio, de acordo com o tipo de produto transportado.',
			en: 'Developed enhancements and bug fixes for web and desktop systems, including unit tests and the creation and maintenance of database procedures and scripts. Mentored new developers, estimated tasks and documented processes and technical knowledge. Main technologies: Java, Maven, C#/.NET, .NET Core, Vue.js, JavaScript, HTML, CSS, Git and Oracle. Key contributions: created a knowledge base to retain team knowledge and ease the onboarding of new colleagues; migrated a system from Java 6 to Java 8; rolled out a new business area in a logistics and mobile equipment optimization system; normalized the database; and built a cargo prioritization feature for a ship deck, based on the type of product being transported.',
		},
	},
	{
		company: 'Dacasa Financeira',
		time: '2018 - 2020',
		title: { pt: 'Desenvolvedora Junior', en: 'Junior Developer' },
		location: { pt: 'Vitória, Brasil', en: 'Vitória, Brazil' },
		description: {
			pt: 'Desenvolvimento de APIs e de evolutivas em sistemas Web e Desktop, desenvolvimento e evolução de procedures, criação de scripts de banco e atendimento aos usuários internos da financeira. Participação nas cerimônias do Scrum.',
			en: 'Developed APIs and system enhancements for Web and Desktop platforms, including the creation and optimization of database procedures and scripts.',
		},
	},
	{
		company: 'Inflor Consultoria e Sistemas',
		time: '2018 - 2018',
		title: { pt: 'Desenvolvedora Junior', en: 'Junior Developer' },
		location: { pt: 'Vitória, Brasil', en: 'Vitória, Brazil' },
		description: {
			pt: 'Prestação de suporte aos clientes que utilizavam o Sistema de Gestão Florestal desenvolvido pela empresa, realizando análise de chamados, atendimento a clientes e implementação de pequenos ajustes no sistema. Análise e documentação de erros relacionados ao Sistema de Gestão Florestal desenvolvido pela empresa. Desenvolvimento de melhorias, manutenção de procedures, criação de scripts de dados e de querys para relatórios.',
			en: 'Documented and analyzed software bugs to improve system stability and long-term maintenance. Developed database procedures, data scripts, and complex queries for business reporting.',
		},
	},
	{
		company: 'Inflor Consultoria e Sistemas',
		time: '2016 - 2018',
		title: { pt: 'Desenvolvedora Trainee', en: 'Trainee Developer' },
		location: { pt: 'Vitória, Brasil', en: 'Vitória, Brazil' },
		description: {
			pt: 'Atuação inicial na equipe SAP, desenvolvendo correções e pequenas melhorias no sistema, além de prestar suporte aos clientes. Após esse período, prestei suporte aos clientes que utilizavam o Sistema de Gestão Florestal desenvolvido pela empresa, realizando análise de chamados, atendimento a clientes e implementação de pequenos ajustes no sistema.',
			en: 'Started in the SAP team, developing bug fixes and minor system enhancements while providing technical support to clients. Transitioned to the Forest Management System team, performing deep-dive ticket analysis, client troubleshooting, and system adjustments.',
		},
	},
	{
		company: 'Prosperi',
		time: '2014 - 2015',
		title: { pt: 'Desenvolvedora Estagiária', en: 'Intern Developer' },
		location: { pt: 'Vitória, Brasil', en: 'Vitória, Brazil' },
		description: {
			pt: 'Estágio na fábrica de software, desenvolvendo sistemas SharePoint utilizando a linguagem C# e banco de dados SQL Server.',
			en: 'Internship at the software factory, developing SharePoint systems using C# and SQL Server databases.',
		},
	},
]

export const education: Localizable<Education>[] = [
	{
		school: 'Instituto Federal do Espírito Santo',
		time: '2025 - atual',
		degree: { pt: 'Mestrado Profissional em Computação Aplicada', en: 'Professional Master\'s Degree in Applied Computing' },
		location: { pt: 'Serra, Brasil', en: 'Serra, Brazil' },
		description: '',
	},
	{
		school: 'Universidade Estácio de Sá',
		time: '2018 - 2020',
		degree: { pt: 'Especialização em Engenharia de Software', en: 'Specialization in Software Engineering' },
		location: { pt: 'Vitória, Brasil', en: 'Vitória, Brazil' },
		description: '',
	},
	{
		school: 'Faculdades Integradas Espírito-Santenses',
		time: '2012 - 2016',
		degree: { pt: 'Bacharelado em Ciência da Computação', en: 'BSc in Computer Science' },
		location: { pt: 'Vitória, Brasil', en: 'Vitória, Brazil' },
		description: '',
	},
]

export const skills: Localizable<Skill>[] = [
	{
		title: { pt: 'Linguagens de Programação', en: 'Programming Languages' },
		description: 'Java, Python, C#/.Net, Javascript',
	},
	{
		title: { pt: 'Ferramentas', en: 'Tools' },
		description: 'Oracle Database, Microsoft SQL Server, Git',
	},
	{
		title: { pt: 'Idiomas', en: 'Languages' },
		description: {
			pt: 'Português (Nativo), Inglês (Avançado), Espanhol (Iniciante)',
			en: 'Portuguese (Native), English (Advanced), Spanish (Beginner)',
		},
	},
]

export const publications: Localizable<Publication>[] = [
	{
		title: 'Evaluation of High-Frequency Information for Deepfake Detection Using a CNN–ViT Architecture in a Cross-Dataset Scenario',
		authors: 'Erikson E. Ferreira, Samla A. Tavares, Kelly A. S. Gazolli, Karin S. Komati',
		journal: 'SIBGRAPI',
		time: '2026',
		link: '',
		abstract: {
			pt: 'Com o avanço das técnicas de aprendizado profundo (deep learning), a produção de mídias deepfake tornou-se cada vez mais sofisticada, dificultando a sua detecção. Um dos principais desafios é a baixa capacidade de generalização dos modelos, que frequentemente apresentam queda de desempenho em cenários diferentes daqueles utilizados no treinamento. Este trabalho investiga o uso de filtros de alta frequência, especificamente Spatial Rich Models (SRM) e Sobel, integrados à arquitetura CrossViT para aprimorar a detecção de deepfakes Os modelos foram treinados em um subconjunto do conjunto de dados Deepfake Detection Challenge (DFDC) e avaliados tanto em cenários de mesmo conjunto de dados (DFDC) quanto em cenários de conjuntos de dados distintos (cross-dataset: Celeb-DF v2 e FaceForensics++). Os resultados indicam que os filtros de alta frequência melhoram consistentemente o desempenho dos métodos; o filtro SRM aplicado ao ramo L (L-Branch) obteve as melhores métricas no cenário DFDC (AUC de 0,847) e no cenário Celeb-DF v2 (AUC de 0,755), enquanto o fornecimento de imagens filtradas por SRM a ambos os ramos da CrossViT alcançou o melhor resultado no conjunto FaceForensics++ (AUC média de 0,755).',
			en: 'With the advancement of deep learning techniques, the production of deepfake media has become increasingly sophisticated, raising the difficulty of detection. One of the main challenges is the low generalization capacity of models, which frequently show performance drops in scenarios different from those used in training. This work investigates the use of high-frequency filters Spatial Rich Models (SRM) and Sobel integrated into the CrossViT architecture to enhance deepfake detection. The models were trained on a subset of the Deepfake Detection Challenge (DFDC) dataset and evaluated under both in-dataset (DFDC) and cross-dataset (Celeb-DF v2 and FaceForensics++) scenarios. The results indicate that high-frequency filters consistently improve the performance of the methods, with the SRM applied to the L-Branch reaching the best metrics in the in-database DFDC scenario (AUC of 0.847) and in the cross-database Celeb-DF v2 scenario (AUC of 0.755), while providing SRM-filtered images to both CrossViT branches achieved the best result on FaceForensics++ (average AUC of 0.755).',
		},
	}/*,
	{
		title: 'Título da Publicação Dois',
		authors: 'Coautor A, Seu Nome',
		journal: 'Nome da Revista ou Conferência',
		time: '2023',
		link: 'https://doi.org/',
		abstract: {
			pt: 'Resumo curto do trabalho: o problema, a abordagem e o resultado principal.',
			en: 'Short summary of the work: the problem, the approach and the main result.',
		},
	},*/
]
