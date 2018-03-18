import * as Actions from '../constants/Actions'

export const AcAddToCart = (item) => {
	return {
		type: Actions.ADD_TO_CART,
		item
	}
}