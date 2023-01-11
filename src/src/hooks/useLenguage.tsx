import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

export const useLenguage = () => {
	const [t, i18n] = useTranslation('global')
	const handleLenguage = (e: ChangeEvent<HTMLSelectElement>) => {
		console.log(e)
		i18n.changeLanguage(e.target.value)
	}

	return {
		t,
		handleLenguage,
	}
}
