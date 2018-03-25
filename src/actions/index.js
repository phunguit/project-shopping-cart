import * as Actions from '../constants/Actions'

export const AcAddToCart = (item) => {
	return {
		type: Actions.ADD_TO_CART,
		item
	}
}

export const AcUpdateCart = (item) => {
	return {
		type: Actions.UPDATE_CART,
		item
	}
}

export const AcDelete = (id) => {
	return {
		type: Actions.DELETE_ITEM,
		id
	}
}

export const AcUpdateQuantity = (item) => {
	return {
		type: Actions.UPDATE_QUANTITY,
		item
	}
}