import { profile } from '../settings'
import type { Publication } from '../types/cv'

export function highlightAuthor(authors: string): string{
	const author = authors.split(', ')
	if (author.includes(profile.author_name)){
		return authors.replace(profile.author_name, `<span class='font-medium underline'>${profile.author_name}</span>`)
	}
	return authors
}

export function sortPublications(publications: Publication[]): Publication[] {
	return [...publications].sort((a, b) => b.time.localeCompare(a.time))
}
