import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './app/Store'
import i18next from 'i18next'
import Global_es from './translation/es/translations.json'
import Global_en from './translation/en/translations.json'
import { I18nextProvider } from 'react-i18next'

i18next.init({
	lng: 'es',
	resources: {
		es: {
			global: Global_es,
		},
		en: {
			global: Global_en,
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<Provider store={store}>
				<App />
			</Provider>
		</I18nextProvider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
