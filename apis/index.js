import {
	http
} from '@/utils/request.js'

import {
	GAODE_KEY,
	DOUBAN_API_KEY
} from '@/utils/constants.js'


const _requestGet = (url, params) => (
	http.get(url, {
		params: {
			...params,
			apikey: DOUBAN_API_KEY
		}
	})
)

export const inTheaters = (params) => (
	_requestGet('/v2/movie/in_theaters', params)
)

export const comingSoon = (params) => (
	_requestGet('/v2/movie/coming_soon', params)
)

export const newMovies = (params) => (
	_requestGet('/v2/movie/new_movies', params)
)

export const top250 = (params) => (
	_requestGet('/v2/movie/top250', params)
)

export const weekly = (params) => (
	_requestGet('/v2/movie/weekly', params)
)

export const usBox = (params) => (
	_requestGet('/v2/movie/us_box', params)
)

export const subject = (id, params) => (
	_requestGet(`/v2/movie/subject/${id}`, params)
)

export const subjectPhoto = (id, params) => (
	_requestGet(`v2/movie/subject/${id}/photo`, params)
)

export const subjectReviews = (id, params) => (
	_requestGet(`/v2/movie/subject/${id}/reviews`, params)
)

export const subjectComments = (id, params) => (
	_requestGet(`/v2/movie/subject/${id}/comments`, params)
)

export const celebrity = (id, params) => (
	_requestGet(`v2/movie/celebrity/${id}`, params)
)

export const celebrityPhoto = (id, params) => (
	_requestGet(`/v2/movie/celebrity/${id}/photos`, params)
)

export const subjectWorks = (id, params) => (
	_requestGet(`/v2/movie/celebrity/${id}/works`, params)
)
